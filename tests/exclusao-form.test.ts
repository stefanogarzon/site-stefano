// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { exists, read } from './dist';
import { ligarExclusao, type ExclusaoDeps } from '../src/scripts/exclusao-form';

const URL_EXCLUSAO = 'https://downloads.sarzel.com/api/v2/cadastro/exclusao';

const paginas = [
  {
    lang: 'pt',
    arquivo: 'downloads/science-tutor/privacidade/index.html',
    msg: {
      email: /e-mail/i,
      emailInvalido: /E-mail inválido/,
      turnstile: /robô/,
      ok: /link/,
      conexao: /conexão/i,
      generica: /Não foi possível/,
    },
  },
  {
    lang: 'en',
    arquivo: 'en/downloads/science-tutor/privacy/index.html',
    msg: {
      email: /email/i,
      emailInvalido: /Invalid email/,
      turnstile: /robot/,
      ok: /link/,
      conexao: /connection/i,
      generica: /Could not/,
    },
  },
] as const;

const corpo = (html: string) => html.match(/<body[^>]*>([\s\S]*)<\/body>/)![1];

const scriptsDaPagina = (html: string) => {
  let js = '';
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    const src = m[1].match(/\ssrc="(\/[^"]+)"/);
    js += src ? (exists(src[1].slice(1)) ? read(src[1].slice(1)) : '') : m[2];
  }
  return js;
};

const $ = <T extends Element>(sel: string) => document.querySelector<T>(sel)!;
const email = () => $<HTMLInputElement>('#exc-email');
const botao = () => $<HTMLButtonElement>('#exclusao button[type="submit"]');
const status = () => $<HTMLElement>('#exclusao-status');
const visivel = (el: Element | null) => !!el && el.closest('[hidden]') === null;
const enviar = () => $<HTMLFormElement>('#exclusao').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

function criarDeps(token: string | undefined = 'tok-teste', semApi = false) {
  const turnstile = { getResponse: vi.fn(() => token), reset: vi.fn() };
  const fetch = vi.fn(async (_url: unknown, _init?: RequestInit) => new Response(JSON.stringify({ ok: true }), { status: 202 }));
  const deps: ExclusaoDeps = { fetch: fetch as unknown as typeof globalThis.fetch, turnstile: () => (semApi ? undefined : turnstile) };
  return { deps, fetch, turnstile };
}

function esperarFalhaTratada(turnstile: { reset: ReturnType<typeof vi.fn> }, digitado: string) {
  expect(turnstile.reset).toHaveBeenCalledTimes(1);
  expect(botao().disabled).toBe(false);
  expect(email().value).toBe(digitado);
  expect(visivel($('#exclusao'))).toBe(true);
  expect(visivel($('#exclusao-ok'))).toBe(false);
}

describe.each(paginas)('formulário de exclusão ($lang): validação', (p) => {
  const html = read(p.arquivo);

  beforeEach(() => {
    vi.useRealTimers();
    document.body.innerHTML = corpo(html);
  });

  it('a página carrega o script do formulário', () => {
    expect(scriptsDaPagina(html)).toContain(URL_EXCLUSAO);
  });

  it('habilita o fieldset que o HTML entrega desabilitado', () => {
    const fieldset = $<HTMLFieldSetElement>('#exclusao > fieldset');
    expect(fieldset.disabled).toBe(true);
    expect(ligarExclusao(document, criarDeps().deps)).not.toBeNull();
    expect(fieldset.disabled).toBe(false);
  });

  it.each([
    ['vazio', '   ', 'email'],
    ['com 101 caracteres', `${'a'.repeat(90)}@exemplo.com`, 'email'],
    ['sem domínio com ponto', 'ana@exemplo', 'emailInvalido'],
    ['sem arroba', 'ana.exemplo.com', 'emailInvalido'],
    ['com espaço', 'ana souza@exemplo.com', 'emailInvalido'],
  ] as const)('e-mail %s: mensagem no campo e nenhum fetch', (_nome, valor, chave) => {
    const { deps, fetch } = criarDeps();
    ligarExclusao(document, deps);
    email().value = valor;
    enviar();
    const erro = $<HTMLElement>('#erro-exc-email');
    expect(erro.hidden).toBe(false);
    expect(erro.textContent).toMatch(p.msg[chave]);
    expect(email().getAttribute('aria-invalid')).toBe('true');
    expect(document.activeElement).toBe(email());
    expect(fetch).not.toHaveBeenCalled();
  });

  it.each([
    ['sem resposta', '', false],
    ['ainda não carregado', 'tok', true],
  ] as const)('Turnstile %s: mensagem no widget e nenhum fetch', (_nome, token, semApi) => {
    const { deps, fetch } = criarDeps(token, semApi);
    ligarExclusao(document, deps);
    email().value = 'ana@exemplo.com';
    enviar();
    expect($<HTMLElement>('#erro-exc-turnstile').hidden).toBe(false);
    expect($<HTMLElement>('#erro-exc-turnstile').textContent).toMatch(p.msg.turnstile);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('corrigido o e-mail, a mensagem some no envio seguinte', async () => {
    const { deps } = criarDeps();
    ligarExclusao(document, deps);
    email().value = 'errado';
    enviar();
    expect($<HTMLElement>('#erro-exc-email').hidden).toBe(false);
    email().value = 'ana@exemplo.com';
    enviar();
    expect($<HTMLElement>('#erro-exc-email').hidden).toBe(true);
    expect(email().hasAttribute('aria-invalid')).toBe(false);
  });

  it('o envio padrão do navegador é impedido', () => {
    ligarExclusao(document, criarDeps('').deps);
    const ev = new Event('submit', { bubbles: true, cancelable: true });
    $<HTMLFormElement>('#exclusao').dispatchEvent(ev);
    expect(ev.defaultPrevented).toBe(true);
  });
});

describe('página sem o formulário de exclusão', () => {
  it('ligarExclusao devolve null sem lançar', () => {
    document.body.innerHTML = '<main><p class="aviso" id="exclusao-indisponivel">Indisponível.</p></main>';
    expect(ligarExclusao(document, criarDeps().deps)).toBeNull();
  });
});

describe.each(paginas)('formulário de exclusão ($lang): envio', (p) => {
  const html = read(p.arquivo);

  beforeEach(() => {
    vi.useRealTimers();
    document.body.innerHTML = corpo(html);
  });

  it('POST JSON na rota de exclusão com exatamente {email, turnstile}', async () => {
    const { deps, fetch } = criarDeps();
    ligarExclusao(document, deps);
    email().value = '  Ana@Exemplo.com ';
    enviar();
    await vi.waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    const [url, init] = fetch.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe(URL_EXCLUSAO);
    expect(init.method).toBe('POST');
    expect(new Headers(init.headers).get('Content-Type')).toBe('application/json');
    expect(JSON.parse(init.body as string)).toEqual({ email: 'ana@exemplo.com', turnstile: 'tok-teste' });
  });

  it('botão desabilitado durante o envio; segundo submit não chama o fetch', async () => {
    const { deps, fetch } = criarDeps();
    fetch.mockImplementation(() => new Promise<Response>(() => {}));
    ligarExclusao(document, deps);
    email().value = 'ana@exemplo.com';
    enviar();
    await vi.waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(botao().disabled).toBe(true);
    enviar();
    await new Promise((r) => setTimeout(r, 0));
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('202: troca o formulário pelo aviso do link no e-mail, válido por 24 h', async () => {
    const { deps } = criarDeps();
    ligarExclusao(document, deps);
    email().value = 'ana@exemplo.com';
    enviar();
    await vi.waitFor(() => expect(visivel($('#exclusao-ok'))).toBe(true));
    expect(visivel($('#exclusao'))).toBe(false);
    const texto = $('#exclusao-ok').textContent!;
    expect(texto).toMatch(p.msg.ok);
    expect(texto).toMatch(/24/);
  });

  it.each([
    [400, 'E-mail inválido. Confira o endereço digitado.'],
    [403, 'Não foi possível confirmar que você não é um robô. Recarregue a página e tente de novo.'],
    [429, 'Muitos pedidos de exclusão. Tente de novo mais tarde.'],
    [503, 'Serviço indisponível. Tente de novo mais tarde.'],
  ])('%i com {message}: mostra a message do servidor como veio', async (codigo, message) => {
    const { deps, fetch, turnstile } = criarDeps();
    fetch.mockResolvedValue(new Response(JSON.stringify({ error: 'x', message }), { status: codigo }));
    ligarExclusao(document, deps);
    email().value = 'ana@exemplo.com';
    enviar();
    await vi.waitFor(() => expect(status().textContent).toBe(message));
    esperarFalhaTratada(turnstile, 'ana@exemplo.com');
  });

  it('corpo sem JSON válido: mensagem genérica', async () => {
    const { deps, fetch, turnstile } = criarDeps();
    fetch.mockResolvedValue(new Response('<html>Bad gateway</html>', { status: 502 }));
    ligarExclusao(document, deps);
    email().value = 'ana@exemplo.com';
    enviar();
    await vi.waitFor(() => expect(status().textContent).toMatch(p.msg.generica));
    esperarFalhaTratada(turnstile, 'ana@exemplo.com');
  });

  it('erro de rede: falha de conexão com o e-mail intacto', async () => {
    const { deps, fetch, turnstile } = criarDeps();
    fetch.mockRejectedValue(new TypeError('Failed to fetch'));
    ligarExclusao(document, deps);
    email().value = 'ana@exemplo.com';
    enviar();
    await vi.waitFor(() => expect(status().textContent).toMatch(p.msg.conexao));
    esperarFalhaTratada(turnstile, 'ana@exemplo.com');
  });

  it('sem resposta em 15 s: aborta e mostra a falha de conexão', async () => {
    vi.useFakeTimers();
    const { deps, fetch, turnstile } = criarDeps();
    let sinal: AbortSignal | undefined;
    fetch.mockImplementation(
      (_url: unknown, init?: RequestInit) =>
        new Promise<Response>((_ok, falha) => {
          sinal = init?.signal ?? undefined;
          sinal?.addEventListener('abort', () => falha(new DOMException('Aborted', 'AbortError')));
        }),
    );
    ligarExclusao(document, deps);
    email().value = 'ana@exemplo.com';
    enviar();
    await vi.advanceTimersByTimeAsync(14_999);
    expect(sinal?.aborted).toBe(false);
    expect(status().textContent).not.toMatch(p.msg.conexao);
    await vi.advanceTimersByTimeAsync(1);
    expect(sinal?.aborted).toBe(true);
    expect(status().textContent).toMatch(p.msg.conexao);
    esperarFalhaTratada(turnstile, 'ana@exemplo.com');
    vi.useRealTimers();
  });
});
