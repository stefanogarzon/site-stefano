---
id: 0001
milestone: M1
objetivo: src/lib/turnstile.ts exporta turnstileSitekey(valor) que devolve a chave aparada ou null quando ausente/vazia; .env.example com PUBLIC_TURNSTILE_SITEKEY= e README com a variável e a chave de teste 1x00000000000000000000AA
verify:
  - suite::npx vitest run tests/turnstile.test.ts
testes:
  - tests/turnstile.test.ts
cap: 4
status: pendente
consumidor: componente da página /downloads/science-tutor/ (tarefa 0002), que lê import.meta.env.PUBLIC_TURNSTILE_SITEKEY por esta função
---

# src/lib/turnstile.ts exporta turnstileSitekey(valor) que devolve a chave aparada ou null quando ausente/vazia; .env.example com PUBLIC_TURNSTILE_SITEKEY= e README com a variável e a chave de teste 1x00000000000000000000AA
