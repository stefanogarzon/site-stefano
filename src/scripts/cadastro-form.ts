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

const MSG: Record<Lang, Record<Campo, string> & { emailInvalido: string; enviando: string; conexao: string; generica: string }> = {
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
  if (!valido(email)) erros.email = m.email;
  else if (!EMAIL_RE.test(email)) erros.email = m.emailInvalido;
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
 * POSTs `corpo` as JSON, aborting after TIMEOUT_MS. Returns null on the `esperado` status, otherwise
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
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  let res: Response;
  try {
    res = await fetchFn(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(corpo),
      signal: ctrl.signal,
    });
  } catch {
    return msg.conexao;
  } finally {
    clearTimeout(timer);
  }
  if (res.status === esperado) return null;
  const dados = (await res.json().catch(() => null)) as { message?: unknown } | null;
  return typeof dados?.message === 'string' && dados.message ? dados.message : msg.generica;
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

    botao.disabled = true;
    if (status) status.textContent = MSG[lang].enviando;
    const falha = await enviarJson(deps.fetch, URL_CADASTRO, r.corpo, 201, MSG[lang]);
    if (falha === null && confirmacao) {
      form.hidden = true;
      confirmacao.querySelector<HTMLElement>(`[data-plataforma="${r.corpo.plataforma}"]`)?.removeAttribute('hidden');
      confirmacao.hidden = false;
      confirmacao.focus();
      return;
    }
    if (status) status.textContent = falha ?? MSG[lang].generica;
    // The Turnstile token is single use: a failed attempt needs a fresh one.
    deps.turnstile()?.reset(widget);
    botao.disabled = false;
  });
  return form;
}
