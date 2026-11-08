/** Same rules as the sarzel-dist server (src/v2/cadastro.ts): the browser refuses what the server would. */
export const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;
export const MAX_CAMPO = 100;

export const URL_CADASTRO = 'https://downloads.sarzel.com/api/v2/cadastro';
export const TIMEOUT_MS = 15_000;

export interface TurnstileApi {
  getResponse(widget?: string | HTMLElement): string | undefined;
  reset(widget?: string | HTMLElement): void;
}

export interface CadastroDeps {
  fetch: typeof fetch;
  /** Read at submit time: the Turnstile api.js loads async and may not be there yet. */
  turnstile: () => TurnstileApi | undefined;
}

type Lang = 'pt' | 'en';
type Campo = 'nome' | 'sobrenome' | 'email' | 'plataforma' | 'aceite_privacidade' | 'turnstile';

export const MSG: Record<Lang, Record<Campo, string> & { emailInvalido: string; enviando: string; conexao: string; generica: string }> = {
  pt: {
    nome: `Preencha o nome (até ${MAX_CAMPO} caracteres).`,
    sobrenome: `Preencha o sobrenome (até ${MAX_CAMPO} caracteres).`,
    email: `Preencha o e-mail (até ${MAX_CAMPO} caracteres).`,
    emailInvalido: 'E-mail inválido. Confira o endereço digitado.',
    enviando: 'Enviando…',
    conexao: 'Falha de conexão com o servidor de cadastro. Confira a internet e tente de novo.',
    generica: 'Não foi possível concluir o cadastro. Tente de novo mais tarde.',
    plataforma: 'Escolha o computador: Mac ou Windows.',
    aceite_privacidade: 'Para se cadastrar, aceite o aviso de privacidade.',
    turnstile: 'Confirme que você não é um robô e envie de novo.',
  },
  en: {
    nome: `Enter your first name (up to ${MAX_CAMPO} characters).`,
    sobrenome: `Enter your last name (up to ${MAX_CAMPO} characters).`,
    email: `Enter your email (up to ${MAX_CAMPO} characters).`,
    emailInvalido: 'Invalid email. Check the address you typed.',
    enviando: 'Sending…',
    conexao: 'Connection to the sign-up server failed. Check your internet connection and try again.',
    generica: 'Could not complete the sign-up. Try again later.',
    plataforma: 'Choose your computer: Mac or Windows.',
    aceite_privacidade: 'To sign up, accept the privacy notice.',
    turnstile: 'Confirm you are not a robot and submit again.',
  },
};

export interface Cadastro {
  nome: string;
  sobrenome: string;
  email: string;
  plataforma: 'macos' | 'windows';
  aceite_privacidade: true;
  turnstile: string;
}

/** Message for an e-mail the server would refuse (already trimmed and lower-cased), or undefined. */
export const erroDeEmail = (email: string, m: { email: string; emailInvalido: string }) =>
  !valido(email) ? m.email : !EMAIL_RE.test(email) ? m.emailInvalido : undefined;

const texto = (v: FormDataEntryValue | null) => (typeof v === 'string' ? v.trim() : '');
const valido = (s: string) => s !== '' && s.length <= MAX_CAMPO;

/** Returns the request body, or the per-field messages when something is missing or malformed. */
type Validacao = { ok: true; corpo: Cadastro } | { ok: false; erros: Partial<Record<Campo, string>> };

function validar(form: HTMLFormElement, lang: Lang, turnstile: string): Validacao {
  const m = MSG[lang];
  const dados = new FormData(form);
  const erros: Partial<Record<Campo, string>> = {};
  const nome = texto(dados.get('nome'));
  const sobrenome = texto(dados.get('sobrenome'));
  const email = texto(dados.get('email')).toLowerCase();
  const plataforma = dados.get('plataforma');
  if (!valido(nome)) erros.nome = m.nome;
  if (!valido(sobrenome)) erros.sobrenome = m.sobrenome;
  const msgEmail = erroDeEmail(email, m);
  if (msgEmail) erros.email = msgEmail;
  if (plataforma !== 'macos' && plataforma !== 'windows') erros.plataforma = m.plataforma;
  if (dados.get('aceite_privacidade') === null) erros.aceite_privacidade = m.aceite_privacidade;
  if (!turnstile) erros.turnstile = m.turnstile;
  if (Object.keys(erros).length) return { ok: false, erros };
  const corpo: Cadastro = { nome, sobrenome, email, plataforma: plataforma as Cadastro['plataforma'], aceite_privacidade: true, turnstile };
  return { ok: true, corpo };
}

const ORDEM: Campo[] = ['nome', 'sobrenome', 'email', 'plataforma', 'aceite_privacidade', 'turnstile'];

function mostrarErros(form: HTMLFormElement, erros: Partial<Record<Campo, string>>) {
  let primeiro: HTMLElement | null = null;
  for (const campo of ORDEM) {
    const p = form.querySelector<HTMLElement>(`#erro-${campo}`);
    const msg = erros[campo];
    if (p) {
      p.textContent = msg ?? '';
      p.hidden = !msg;
    }
    const input = form.querySelector<HTMLElement>(`[name="${campo}"]`);
    if (!input || campo === 'turnstile') continue;
    if (msg) {
      input.setAttribute('aria-invalid', 'true');
      primeiro ??= input;
    } else input.removeAttribute('aria-invalid');
  }
  primeiro?.focus();
}

/**
 * POSTs `corpo` as JSON, aborting when the response (body included) takes over TIMEOUT_MS. Returns null on the `esperado` status, otherwise
 * the message to show: the server's `message` as sent (pt-BR), or a client message for network
 * failure, timeout and bodies without a usable `message`.
 */
export async function enviarJson(
  fetchFn: typeof fetch,
  url: string,
  corpo: unknown,
  esperado: number,
  msg: { conexao: string; generica: string },
): Promise<string | null> {
  const ctrl = new AbortController();
  let timer: ReturnType<typeof setTimeout> | undefined;
  // One deadline for the whole exchange: headers and body. A body that stops arriving is a timeout too.
  const prazo = new Promise<never>((_ok, falha) => {
    timer = setTimeout(() => {
      ctrl.abort();
      falha(new DOMException('Timeout', 'TimeoutError'));
    }, TIMEOUT_MS);
  });
  try {
    const res = await Promise.race([
      fetchFn(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corpo),
        signal: ctrl.signal,
      }),
      prazo,
    ]);
    if (res.status === esperado) return null;
    let dados: { message?: unknown } | null = null;
    try {
      dados = (await Promise.race([res.json(), prazo])) as { message?: unknown } | null;
    } catch {
      if (ctrl.signal.aborted) return msg.conexao;
    }
    return typeof dados?.message === 'string' && dados.message ? dados.message : msg.generica;
  } catch {
    return msg.conexao;
  } finally {
    clearTimeout(timer);
  }
}

export interface Envio {
  form: HTMLFormElement;
  botao: HTMLButtonElement;
  status: HTMLElement | null;
  confirmacao: HTMLElement | null;
  deps: CadastroDeps;
  widget?: HTMLElement;
  url: string;
  corpo: unknown;
  esperado: number;
  msg: { enviando: string; conexao: string; generica: string };
  antesDeConfirmar?: (confirmacao: HTMLElement) => void;
}

/**
 * Sends a validated form: button disabled while it runs; on the expected status the form gives way
 * to the confirmation; on failure the message shows, the Turnstile resets and the button comes back.
 */
export async function enviarFormulario(e: Envio): Promise<void> {
  e.botao.disabled = true;
  if (e.status) e.status.textContent = e.msg.enviando;
  const falha = await enviarJson(e.deps.fetch, e.url, e.corpo, e.esperado, e.msg);
  if (falha === null) {
    // Success keeps the button disabled: a repeated request would only hit the rate limit.
    if (e.status) e.status.textContent = '';
    if (!e.confirmacao) return;
    e.form.hidden = true;
    e.antesDeConfirmar?.(e.confirmacao);
    e.confirmacao.hidden = false;
    e.confirmacao.focus();
    return;
  }
  if (e.status) e.status.textContent = falha;
  // The Turnstile token is single use: a failed attempt needs a fresh one.
  e.deps.turnstile()?.reset(e.widget);
  e.botao.disabled = false;
}

/** Wires the sign-up form; `null` when the page has none (build without PUBLIC_TURNSTILE_SITEKEY). */
export function ligarCadastro(raiz: Document, deps: CadastroDeps): HTMLFormElement | null {
  const form = raiz.querySelector<HTMLFormElement>('form#cadastro');
  if (!form) return null;
  const lang: Lang = form.dataset.lang === 'en' ? 'en' : 'pt';
  const widget = form.querySelector<HTMLElement>('.cf-turnstile') ?? undefined;
  form.querySelector('fieldset')?.removeAttribute('disabled');

  const botao = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const status = form.querySelector<HTMLElement>('#cadastro-status');
  const confirmacao = raiz.querySelector<HTMLElement>('#cadastro-ok');

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (botao.disabled) return;
    const token = deps.turnstile()?.getResponse(widget) ?? '';
    const r = validar(form, lang, token);
    mostrarErros(form, r.ok ? {} : r.erros);
    if (!r.ok) return;

    const plataforma = r.corpo.plataforma;
    await enviarFormulario({
      form, botao, status, confirmacao, deps, widget, url: URL_CADASTRO, corpo: r.corpo, esperado: 201, msg: MSG[lang],
      antesDeConfirmar: (c) => c.querySelector<HTMLElement>(`[data-plataforma="${plataforma}"]`)?.removeAttribute('hidden'),
    });
  });
  return form;
}
