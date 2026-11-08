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
