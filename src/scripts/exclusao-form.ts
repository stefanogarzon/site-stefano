import { MSG as MSG_CADASTRO, enviarFormulario, erroDeEmail, type CadastroDeps } from './cadastro-form';

export const URL_EXCLUSAO = 'https://downloads.sarzel.com/api/v2/cadastro/exclusao';

export type ExclusaoDeps = CadastroDeps;

const MSG = {
  pt: {
    ...MSG_CADASTRO.pt,
    conexao: 'Falha de conexão com o servidor. Confira a internet e tente de novo.',
    generica: 'Não foi possível concluir o pedido de exclusão. Tente de novo mais tarde.',
  },
  en: {
    ...MSG_CADASTRO.en,
    conexao: 'Connection to the server failed. Check your internet connection and try again.',
    generica: 'Could not complete the deletion request. Try again later.',
  },
};

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
    const msgEmail = erroDeEmail(email, m);
    mostrarErro(erroEmail, msgEmail);
    mostrarErro(erroTurnstile, turnstile ? undefined : m.turnstile);
    if (msgEmail) {
      input.setAttribute('aria-invalid', 'true');
      input.focus();
    } else input.removeAttribute('aria-invalid');
    if (msgEmail || !turnstile) return;

    await enviarFormulario({
      form, botao, status, confirmacao, deps, widget, url: URL_EXCLUSAO, corpo: { email, turnstile }, esperado: 202, msg: m,
    });
  });
  return form;
}
