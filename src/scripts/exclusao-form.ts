import { EMAIL_RE, MAX_CAMPO, enviarJson, type CadastroDeps } from './cadastro-form';

export const URL_EXCLUSAO = 'https://downloads.sarzel.com/api/v2/cadastro/exclusao';

export type ExclusaoDeps = CadastroDeps;

const MSG = {
  pt: {
    email: `Preencha o e-mail (até ${MAX_CAMPO} caracteres).`,
    emailInvalido: 'E-mail inválido. Confira o endereço digitado.',
    turnstile: 'Confirme que você não é um robô e envie de novo.',
    enviando: 'Enviando…',
    conexao: 'Falha de conexão com o servidor. Confira a internet e tente de novo.',
    generica: 'Não foi possível concluir o pedido de exclusão. Tente de novo mais tarde.',
  },
  en: {
    email: `Enter your email (up to ${MAX_CAMPO} characters).`,
    emailInvalido: 'Invalid email. Check the address you typed.',
    turnstile: 'Confirm you are not a robot and submit again.',
    enviando: 'Sending…',
    conexao: 'Connection to the server failed. Check your internet connection and try again.',
    generica: 'Could not complete the deletion request. Try again later.',
  },
} as const;

function mostrarErro(p: HTMLElement | null, msg: string | undefined) {
  if (!p) return;
  p.textContent = msg ?? '';
  p.hidden = !msg;
}

/** Wires the deletion request form; `null` when the page has none (build without PUBLIC_TURNSTILE_SITEKEY). */
export function ligarExclusao(raiz: Document, deps: ExclusaoDeps): HTMLFormElement | null {
  const form = raiz.querySelector<HTMLFormElement>('form#exclusao');
  if (!form) return null;
  const m = MSG[form.dataset.lang === 'en' ? 'en' : 'pt'];
  const widget = form.querySelector<HTMLElement>('.cf-turnstile') ?? undefined;
  form.querySelector('fieldset')?.removeAttribute('disabled');

  const input = form.querySelector<HTMLInputElement>('input[name="email"]')!;
  const botao = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const status = form.querySelector<HTMLElement>('#exclusao-status');
  const erroEmail = form.querySelector<HTMLElement>('#erro-exc-email');
  const erroTurnstile = form.querySelector<HTMLElement>('#erro-exc-turnstile');
  const confirmacao = raiz.querySelector<HTMLElement>('#exclusao-ok');

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (botao.disabled) return;
    const email = input.value.trim().toLowerCase();
    const turnstile = deps.turnstile()?.getResponse(widget) ?? '';
    const msgEmail =
      email === '' || email.length > MAX_CAMPO ? m.email : !EMAIL_RE.test(email) ? m.emailInvalido : undefined;
    mostrarErro(erroEmail, msgEmail);
    mostrarErro(erroTurnstile, turnstile ? undefined : m.turnstile);
    if (msgEmail) {
      input.setAttribute('aria-invalid', 'true');
      input.focus();
    } else input.removeAttribute('aria-invalid');
    if (msgEmail || !turnstile) return;

    botao.disabled = true;
    if (status) status.textContent = m.enviando;
    const falha = await enviarJson(deps.fetch, URL_EXCLUSAO, { email, turnstile }, 202, m);
    if (falha === null && confirmacao) {
      form.hidden = true;
      confirmacao.hidden = false;
      confirmacao.focus();
      return;
    }
    if (status) status.textContent = falha ?? m.generica;
    // The Turnstile token is single use: a failed attempt needs a fresh one.
    deps.turnstile()?.reset(widget);
    botao.disabled = false;
  });
  return form;
}
