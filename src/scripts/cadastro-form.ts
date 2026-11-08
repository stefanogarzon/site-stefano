/** Same rules as the sarzel-dist server (src/v2/cadastro.ts): the browser refuses what the server would. */
export const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;
export const MAX_CAMPO = 100;

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

const MSG: Record<Lang, Record<Campo, string> & { emailInvalido: string }> = {
  pt: {
    nome: `Preencha o nome (até ${MAX_CAMPO} caracteres).`,
    sobrenome: `Preencha o sobrenome (até ${MAX_CAMPO} caracteres).`,
    email: `Preencha o e-mail (até ${MAX_CAMPO} caracteres).`,
    emailInvalido: 'E-mail inválido. Confira o endereço digitado.',
    plataforma: 'Escolha o computador: Mac ou Windows.',
    aceite_privacidade: 'Para se cadastrar, aceite o aviso de privacidade.',
    turnstile: 'Confirme que você não é um robô e envie de novo.',
  },
  en: {
    nome: `Enter your first name (up to ${MAX_CAMPO} characters).`,
    sobrenome: `Enter your last name (up to ${MAX_CAMPO} characters).`,
    email: `Enter your email (up to ${MAX_CAMPO} characters).`,
    emailInvalido: 'Invalid email. Check the address you typed.',
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

/** Wires the sign-up form; `null` when the page has none (build without PUBLIC_TURNSTILE_SITEKEY). */
export function ligarCadastro(raiz: Document, deps: CadastroDeps): HTMLFormElement | null {
  const form = raiz.querySelector<HTMLFormElement>('form#cadastro');
  if (!form) return null;
  const lang: Lang = form.dataset.lang === 'en' ? 'en' : 'pt';
  const widget = form.querySelector<HTMLElement>('.cf-turnstile') ?? undefined;
  form.querySelector('fieldset')?.removeAttribute('disabled');

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const token = deps.turnstile()?.getResponse(widget) ?? '';
    const r = validar(form, lang, token);
    mostrarErros(form, r.ok ? {} : r.erros);
  });
  return form;
}
