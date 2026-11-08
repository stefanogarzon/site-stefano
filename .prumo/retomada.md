# Retomada

## Onde parou
M2 fechado e verificado (aceite verde: 63 testes em `tests/cadastro-form.test.ts`, `npm test` com 140; revisão com 1 achado corrigido na 0008, re-revisão sem achado). Próximo: M3 (aviso de privacidade + exclusão), tarefas ainda por escrever.

## Por que
- O M3 reaproveita `enviarJson(fetch, url, corpo, esperado, msg)` de `src/scripts/cadastro-form.ts` (esperado 202 na exclusão); o prazo de 15 s cobre cabeçalhos e corpo.
- No M3, testar que `dist/` tem o arquivo apontado pelo href do checkbox (limpeza adiada do M1).
- Limpeza do revisor não feita: EMAIL_RE/MAX_CAMPO copiados do sarzel-dist sem teste cruzado (ver nota de triagem).
- Opcionais do M2: depois de falha do servidor, um novo envio barrado na validação deixa a mensagem antiga em `#cadastro-status`; `getResponse/reset(elemento)` do Turnstile não conferido contra a API real.

## Armadilha
- zsh não divide `$P` com espaços: usar função `p(){ python3 "$PRUMO_ROOT/scripts/prumo.py" "$@"; }`.
- Saída do vitest em happy-dom vem cheia de "Failed to load script ... api.js" (ruído, não falha): filtrar com `grep -v "Failed to load"`.
- Teste com timers falsos: usar `vi.advanceTimersByTimeAsync`, não `vi.waitFor` (avança o relógio sozinho).
