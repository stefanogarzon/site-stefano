// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { exists, read } from './dist';
import { ligarCadastro, type CadastroDeps } from '../src/scripts/cadastro-form';

const paginas = [
  {
    lang: 'pt',
    arquivo: 'downloads/science-tutor/index.html',
    msg: {
      nome: /nome/i,
      sobrenome: /sobrenome/i,
      email: /e-mail/i,
      plataforma: /Mac ou Windows/,
      aceite_privacidade: /aviso de privacidade/,
      turnstile: /robô/,
    },
  },
  {
    lang: 'en',
    arquivo: 'en/downloads/science-tutor/index.html',
    msg: {
      nome: /first name/i,
      sobrenome: /last name/i,
      email: /email/i,
      plataforma: /Mac or Windows/,
      aceite_privacidade: /privacy notice/,
      turnstile: /robot/,
    },
  },
] as const;

type Campo = keyof (typeof paginas)[number]['msg'];

const corpo = (html: string) => html.match(/<body[^>]*>([\s\S]*)<\/body>/)![1];

/** Código JS que a página carrega: módulos inline e arquivos do dist/ apontados por src. */
const scriptsDaPagina = (html: string) => {
  let js = '';
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    const src = m[1].match(/\ssrc="(\/[^"]+)"/);
    js += src ? (exists(src[1].slice(1)) ? read(src[1].slice(1)) : '') : m[2];
  }
  return js;
};

const $ = <T extends Element>(sel: string) => document.querySelector<T>(sel)!;

function preencherValido() {
  $<HTMLInputElement>('#cad-nome').value = 'Ana';
  $<HTMLInputElement>('#cad-sobrenome').value = 'Souza';
  $<HTMLInputElement>('#cad-email').value = 'ana@exemplo.com.br';
  $<HTMLInputElement>('input[name="plataforma"][value="macos"]').checked = true;
  $<HTMLInputElement>('input[name="aceite_privacidade"]').checked = true;
}

const enviar = () => $<HTMLFormElement>('#cadastro').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

function criarDeps(token: string | undefined = 'tok-teste', semApi = false) {
  const turnstile = { getResponse: vi.fn(() => token), reset: vi.fn() };
  const fetch = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 201 }));
  const deps: CadastroDeps = { fetch, turnstile: () => (semApi ? undefined : turnstile) };
  return { deps, fetch, turnstile };
}

const casosInvalidos: { nome: string; campo: Campo; estraga: () => void }[] = [
  { nome: 'nome vazio', campo: 'nome', estraga: () => ($<HTMLInputElement>('#cad-nome').value = '   ') },
  { nome: 'nome com 101 caracteres', campo: 'nome', estraga: () => ($<HTMLInputElement>('#cad-nome').value = 'a'.repeat(101)) },
  { nome: 'sobrenome vazio', campo: 'sobrenome', estraga: () => ($<HTMLInputElement>('#cad-sobrenome').value = '') },
  { nome: 'e-mail vazio', campo: 'email', estraga: () => ($<HTMLInputElement>('#cad-email').value = '') },
  { nome: 'e-mail sem domínio com ponto', campo: 'email', estraga: () => ($<HTMLInputElement>('#cad-email').value = 'ana@exemplo') },
  { nome: 'e-mail com espaço', campo: 'email', estraga: () => ($<HTMLInputElement>('#cad-email').value = 'ana souza@exemplo.com') },
  { nome: 'e-mail sem arroba', campo: 'email', estraga: () => ($<HTMLInputElement>('#cad-email').value = 'ana.exemplo.com') },
  {
    nome: 'plataforma não escolhida',
    campo: 'plataforma',
    estraga: () => ($<HTMLInputElement>('input[name="plataforma"][value="macos"]').checked = false),
  },
  {
    nome: 'aceite desmarcado',
    campo: 'aceite_privacidade',
    estraga: () => ($<HTMLInputElement>('input[name="aceite_privacidade"]').checked = false),
  },
];

describe.each(paginas)('formulário de cadastro ($lang): validação no navegador', (p) => {
  const html = read(p.arquivo);

  beforeEach(() => {
    document.body.innerHTML = corpo(html);
  });

  it('a página carrega o script do formulário', () => {
    expect(scriptsDaPagina(html)).toContain('Confirme que você não é um robô');
  });

  it('habilita o fieldset que o HTML entrega desabilitado', () => {
    const fieldset = $<HTMLFieldSetElement>('#cadastro > fieldset');
    expect(fieldset.disabled).toBe(true);
    expect(ligarCadastro(document, criarDeps().deps)).not.toBeNull();
    expect(fieldset.disabled).toBe(false);
  });

  it.each(casosInvalidos)('$nome: mensagem no campo e nenhum fetch', ({ campo, estraga }) => {
    const { deps, fetch } = criarDeps();
    ligarCadastro(document, deps);
    preencherValido();
    estraga();
    enviar();
    const erro = $<HTMLElement>(`#erro-${campo}`);
    expect(erro.hidden).toBe(false);
    expect(erro.textContent).toMatch(p.msg[campo]);
    expect(fetch).not.toHaveBeenCalled();
    const outros = [...document.querySelectorAll<HTMLElement>('#cadastro .erro')].filter((e) => e !== erro);
    for (const o of outros) expect(o.hidden, o.id).toBe(true);
  });

  it('Turnstile sem resposta: mensagem no widget e nenhum fetch', () => {
    const { deps, fetch, turnstile } = criarDeps('');
    ligarCadastro(document, deps);
    preencherValido();
    enviar();
    expect(turnstile.getResponse).toHaveBeenCalled();
    expect($<HTMLElement>('#erro-turnstile').hidden).toBe(false);
    expect($<HTMLElement>('#erro-turnstile').textContent).toMatch(p.msg.turnstile);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('Turnstile ainda não carregado: mensagem no widget e nenhum fetch', () => {
    const { deps, fetch } = criarDeps('tok', true);
    ligarCadastro(document, deps);
    preencherValido();
    enviar();
    expect($<HTMLElement>('#erro-turnstile').textContent).toMatch(p.msg.turnstile);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('vários campos inválidos: todas as mensagens, aria-invalid e foco no primeiro', () => {
    const { deps, fetch } = criarDeps('');
    ligarCadastro(document, deps);
    enviar();
    for (const campo of Object.keys(p.msg) as Campo[]) {
      expect($<HTMLElement>(`#erro-${campo}`).textContent, campo).toMatch(p.msg[campo]);
    }
    expect($('#cad-nome').getAttribute('aria-invalid')).toBe('true');
    expect($('#cad-email').getAttribute('aria-invalid')).toBe('true');
    expect(document.activeElement).toBe($('#cad-nome'));
    expect(fetch).not.toHaveBeenCalled();
  });

  it('corrigido o campo, a mensagem some no envio seguinte', () => {
    const { deps } = criarDeps();
    ligarCadastro(document, deps);
    preencherValido();
    $<HTMLInputElement>('#cad-email').value = 'errado';
    enviar();
    expect($<HTMLElement>('#erro-email').hidden).toBe(false);
    $<HTMLInputElement>('#cad-email').value = 'ana@exemplo.com';
    enviar();
    expect($<HTMLElement>('#erro-email').hidden).toBe(true);
    expect($('#cad-email').hasAttribute('aria-invalid')).toBe(false);
  });

  it('o envio padrão do navegador é impedido', () => {
    const { deps } = criarDeps('');
    ligarCadastro(document, deps);
    const ev = new Event('submit', { bubbles: true, cancelable: true });
    $<HTMLFormElement>('#cadastro').dispatchEvent(ev);
    expect(ev.defaultPrevented).toBe(true);
  });
});

describe('página sem o formulário (build sem PUBLIC_TURNSTILE_SITEKEY)', () => {
  it('ligarCadastro devolve null sem lançar', () => {
    document.body.innerHTML = '<main><p class="aviso" id="cadastro-indisponivel">Cadastro indisponível no momento.</p></main>';
    expect(ligarCadastro(document, criarDeps().deps)).toBeNull();
  });
});

const URL_CADASTRO = 'https://downloads.sarzel.com/api/v2/cadastro';
const PASSO = {
  macos: '/downloads/science-tutor/passo-a-passo/mac/',
  windows: '/downloads/science-tutor/passo-a-passo/windows/',
} as const;

/** Elemento visível: nem ele nem um ancestral tem `hidden`. */
const visivel = (el: Element | null) => !!el && el.closest('[hidden]') === null;

describe.each(paginas)('formulário de cadastro ($lang): envio válido', (p) => {
  const html = read(p.arquivo);

  beforeEach(() => {
    document.body.innerHTML = corpo(html);
  });

  it('a confirmação estática traz os links dos dois passo a passo', () => {
    for (const href of Object.values(PASSO)) expect(html).toContain(`href="${href}"`);
  });

  it('POST JSON na rota do contrato com exatamente as seis chaves', async () => {
    const { deps, fetch } = criarDeps();
    ligarCadastro(document, deps);
    preencherValido();
    $<HTMLInputElement>('#cad-nome').value = '  Ana ';
    $<HTMLInputElement>('input[name="plataforma"][value="windows"]').checked = true;
    enviar();
    await vi.waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    const [url, init] = fetch.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe(URL_CADASTRO);
    expect(init.method).toBe('POST');
    expect(new Headers(init.headers).get('Content-Type')).toBe('application/json');
    const body = JSON.parse(init.body as string);
    expect(Object.keys(body).sort()).toEqual(
      ['aceite_privacidade', 'email', 'nome', 'plataforma', 'sobrenome', 'turnstile'],
    );
    expect(body).toEqual({
      nome: 'Ana',
      sobrenome: 'Souza',
      email: 'ana@exemplo.com.br',
      plataforma: 'windows',
      aceite_privacidade: true,
      turnstile: 'tok-teste',
    });
  });

  it('botão desabilitado durante o envio; segundo submit não chama o fetch', async () => {
    const { deps, fetch } = criarDeps();
    fetch.mockImplementation(() => new Promise<Response>(() => {}));
    ligarCadastro(document, deps);
    preencherValido();
    enviar();
    await vi.waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect($<HTMLButtonElement>('#cadastro button[type="submit"]').disabled).toBe(true);
    enviar();
    await new Promise((r) => setTimeout(r, 0));
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it.each(['macos', 'windows'] as const)('201 com %s: confirmação com o link do passo a passo', async (plataforma) => {
    const { deps } = criarDeps();
    ligarCadastro(document, deps);
    preencherValido();
    $<HTMLInputElement>(`input[name="plataforma"][value="${plataforma}"]`).checked = true;
    enviar();
    await vi.waitFor(() => expect(visivel($('#cadastro-ok'))).toBe(true));
    expect(visivel($('#cadastro'))).toBe(false);
    const links = [...document.querySelectorAll<HTMLAnchorElement>('#cadastro-ok a')].filter(visivel);
    expect(links.map((a) => a.getAttribute('href'))).toEqual([PASSO[plataforma]]);
    expect($('#cadastro-ok').textContent).toMatch(p.lang === 'pt' ? /e-mail/ : /email/);
  });
});

const msgFalha = {
  pt: { conexao: /conexão/i, generica: /Não foi possível concluir o cadastro/ },
  en: { conexao: /connection/i, generica: /Could not complete the sign-up/ },
} as const;

const status = () => $<HTMLElement>('#cadastro-status');

/** O que o aluno digitou, para conferir que a falha não apaga nada. */
const digitado = () => ({
  nome: $<HTMLInputElement>('#cad-nome').value,
  sobrenome: $<HTMLInputElement>('#cad-sobrenome').value,
  email: $<HTMLInputElement>('#cad-email').value,
  mac: $<HTMLInputElement>('input[name="plataforma"][value="macos"]').checked,
  aceite: $<HTMLInputElement>('input[name="aceite_privacidade"]').checked,
});

function esperarFalhaTratada(turnstile: { reset: ReturnType<typeof vi.fn> }, antes: ReturnType<typeof digitado>) {
  expect(turnstile.reset).toHaveBeenCalledTimes(1);
  expect($<HTMLButtonElement>('#cadastro button[type="submit"]').disabled).toBe(false);
  expect(digitado()).toEqual(antes);
  expect(visivel($('#cadastro'))).toBe(true);
  expect(visivel($('#cadastro-ok'))).toBe(false);
}

describe.each(paginas)('formulário de cadastro ($lang): falhas do envio', (p) => {
  const html = read(p.arquivo);
  const f = msgFalha[p.lang];

  beforeEach(() => {
    vi.useRealTimers();
    document.body.innerHTML = corpo(html);
  });

  it.each([
    [400, 'E-mail inválido. Confira o endereço digitado.'],
    [403, 'Não foi possível confirmar que você não é um robô. Recarregue a página e tente de novo.'],
    [429, 'Muitos pedidos de cadastro. Tente de novo mais tarde.'],
    [503, 'O Science Tutor para Mac ainda não está disponível. Tente de novo mais tarde.'],
  ])('%i com {message}: mostra a message do servidor como veio', async (codigo, message) => {
    const { deps, fetch, turnstile } = criarDeps();
    fetch.mockResolvedValue(new Response(JSON.stringify({ error: 'x', message }), { status: codigo }));
    ligarCadastro(document, deps);
    preencherValido();
    const antes = digitado();
    enviar();
    await vi.waitFor(() => expect(status().textContent).toBe(message));
    esperarFalhaTratada(turnstile, antes);
  });

  it.each([
    ['corpo que não é JSON', () => new Response('<html>Bad gateway</html>', { status: 502 })],
    ['JSON sem message', () => new Response(JSON.stringify({ error: 'x' }), { status: 400 })],
  ])('%s: mensagem genérica', async (_nome, resposta) => {
    const { deps, fetch, turnstile } = criarDeps();
    fetch.mockResolvedValue(resposta());
    ligarCadastro(document, deps);
    preencherValido();
    const antes = digitado();
    enviar();
    await vi.waitFor(() => expect(status().textContent).toMatch(f.generica));
    esperarFalhaTratada(turnstile, antes);
  });

  it('erro de rede: falha de conexão com os campos intactos', async () => {
    const { deps, fetch, turnstile } = criarDeps();
    fetch.mockRejectedValue(new TypeError('Failed to fetch'));
    ligarCadastro(document, deps);
    preencherValido();
    const antes = digitado();
    enviar();
    await vi.waitFor(() => expect(status().textContent).toMatch(f.conexao));
    esperarFalhaTratada(turnstile, antes);
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
    ligarCadastro(document, deps);
    preencherValido();
    const antes = digitado();
    enviar();
    await vi.advanceTimersByTimeAsync(14_999);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(sinal?.aborted).toBe(false);
    expect(status().textContent).not.toMatch(f.conexao);
    await vi.advanceTimersByTimeAsync(1);
    expect(sinal?.aborted).toBe(true);
    expect(status().textContent).toMatch(f.conexao);
    esperarFalhaTratada(turnstile, antes);
    vi.useRealTimers();
  });

  it('depois da falha, novo envio com o token novo chama o fetch de novo', async () => {
    const { deps, fetch } = criarDeps();
    fetch.mockRejectedValueOnce(new TypeError('Failed to fetch'));
    ligarCadastro(document, deps);
    preencherValido();
    enviar();
    await vi.waitFor(() => expect(status().textContent).toMatch(f.conexao));
    enviar();
    await vi.waitFor(() => expect(visivel($('#cadastro-ok'))).toBe(true));
    expect(fetch).toHaveBeenCalledTimes(2);
  });
});

describe.each(paginas)('formulário de cadastro ($lang): corpo da resposta que não termina', (p) => {
  const html = read(p.arquivo);
  const f = msgFalha[p.lang];

  beforeEach(() => {
    vi.useRealTimers();
    document.body.innerHTML = corpo(html);
  });

  it('cabeçalhos chegam e o corpo não: aos 15 s, falha de conexão', async () => {
    vi.useFakeTimers();
    const { deps, fetch, turnstile } = criarDeps();
    // Resposta cujo corpo nunca termina de chegar (conexão que cai no meio, sem reset).
    const pendurada = { status: 503, ok: false, json: () => new Promise(() => {}), text: () => new Promise(() => {}) };
    fetch.mockResolvedValue(pendurada as unknown as Response);
    ligarCadastro(document, deps);
    preencherValido();
    const antes = digitado();
    enviar();
    await vi.advanceTimersByTimeAsync(14_999);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(status().textContent).not.toMatch(f.conexao);
    expect($<HTMLButtonElement>('#cadastro button[type="submit"]').disabled).toBe(true);
    await vi.advanceTimersByTimeAsync(1);
    expect(status().textContent).toMatch(f.conexao);
    esperarFalhaTratada(turnstile, antes);
    vi.useRealTimers();
  });
});
