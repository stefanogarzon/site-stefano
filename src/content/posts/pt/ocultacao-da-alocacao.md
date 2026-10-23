---
title: "Ocultação da alocação e desequilíbrio basal"
date: 2026-10-23
lang: pt
translationKey: ocultacao-da-alocacao
description: "Explica a ocultação da sequência de randomização, sua relação empírica com desequilíbrio basal e como interpretar e ajustar diferenças na tabela 1 de um ensaio."
category: estatistica
tags: [metodos, randomizacao, vies, covariaveis]
draft: true
---

## Conceito

Ocultação da alocação significa que quem recruta e inclui participantes não consegue prever a próxima alocação. Ela protege o momento da inclusão. O cegamento protege o período após a alocação. São salvaguardas distintas.

Sem ocultação, quem inclui pode decidir, consciente ou inconscientemente, quem entra e quando. Um ensaio nominalmente randomizado passa então a se comportar como um estudo não randomizado quanto ao risco de desequilíbrio.

## Evidência empírica

Chalmers e colaboradores revisaram 145 relatos de tratamento do infarto agudo do miocárdio. Dividiram os estudos em três grupos: randomização oculta (57), randomização possivelmente não oculta (45) e controles não randomizados (43).

| Grupo | Desequilíbrio em ≥ 1 variável prognóstica (p < 0,05) | Diferença de letalidade (p < 0,05) |
|---|---|---|
| Randomização oculta | 14,0% | 8,8% |
| Randomização possivelmente não oculta | 26,7% | 24,4% |
| Controles não randomizados | 58,1% | 58,1% |

O desequilíbrio foi cerca de duas vezes mais frequente sem ocultação e cerca de quatro vezes mais frequente sem randomização. A frequência de diferença no desfecho seguiu o mesmo gradiente.

## Desequilíbrio basal em ensaio bem randomizado

A randomização não garante equilíbrio perfeito, sobretudo em amostras pequenas. Em ensaios grandes com ocultação adequada, diferenças na tabela 1 refletem acaso. O teste de significância de diferenças basais responde a uma pergunta já conhecida: os grupos vieram do mesmo processo aleatório.

A relevância de um desequilíbrio depende da força da associação entre a variável e o desfecho. Uma diferença pequena em um preditor forte pode importar mais que uma diferença grande em uma variável sem valor prognóstico.

## Ajuste por covariáveis

Há duas posições na literatura. Uma restringe o ajuste às covariáveis com disparidade evidente e prefere a estimativa não ajustada nos demais casos. A outra ajusta para um conjunto pequeno de fatores sabidamente prognósticos, independentemente do desequilíbrio observado. Canner e Beach e Meier participaram desse debate.

Incluir covariáveis fortemente associadas ao desfecho reduz a variância da estatística de teste e aumenta a sensibilidade da análise. O ajuste raramente remove toda a influência de um desequilíbrio.

Em qualquer das posições, o conjunto de covariáveis da análise ajustada primária deve estar no protocolo. Ajustes escolhidos após ver os dados são exploratórios.

A estratificação pode ocorrer antes da randomização ou na análise. Em ensaios grandes, o ajuste na análise tem poder estatístico semelhante ao da estratificação prévia e permite incluir fatores que só se mostraram relevantes depois.

## Erros comuns ao ler um artigo

- Confundir ocultação da alocação com cegamento.
- Considerar a randomização adequada só porque o artigo diz "randomizado", sem descrição do mecanismo.
- Usar valores de p da tabela 1 para julgar a qualidade da randomização.
- Aceitar como confirmatória uma análise ajustada por covariáveis escolhidas após ver os dados.
- Ignorar desequilíbrio em um preditor forte porque o valor de p não foi significativo.

## O que conferir ao ler um ensaio

1. Mecanismo de alocação: central, por sistema eletrônico, envelopes opacos sequenciais ou outro.
2. Se quem incluía tinha acesso à sequência.
3. Tamanho do ensaio e magnitude das diferenças basais nos preditores conhecidos do desfecho.
4. Se as covariáveis de ajuste estavam pré-especificadas.
5. Se as estimativas ajustada e não ajustada concordam.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Capítulos sobre randomização e análise.
- Chalmers TC, Celano P, Sacks HS, Smith H. Bias in treatment assignment in controlled clinical trials. N Engl J Med. 1983;309:1358-61. doi: 10.1056/NEJM198312013092204
- Canner PL. Covariate adjustment of treatment effects in clinical trials. Control Clin Trials. 1991;12:359-66. doi: 10.1016/0197-2456(91)90016-f
- Beach ML, Meier P. Choosing covariates in the analysis of clinical trials. Control Clin Trials. 1989;10(4 Suppl):161S-175S. doi: 10.1016/0197-2456(89)90055-x
