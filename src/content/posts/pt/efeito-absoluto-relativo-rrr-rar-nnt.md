---
title: "Efeito absoluto e relativo: RRR, RAR e NNT"
date: 2026-10-23
lang: pt
translationKey: efeito-absoluto-relativo-rrr-rar-nnt
description: "Definição de redução relativa de risco, redução absoluta de risco e número necessário para tratar, e por que o efeito relativo isolado não informa o benefício para o paciente."
category: estatistica
tags: [metodos, rrr, rar, nnt, risco-basal]
draft: false
---

## Conceito

O efeito de um tratamento pode ser expresso em escala relativa ou absoluta. As duas escalas descrevem os mesmos dados e respondem a perguntas diferentes.

- **Escala relativa.** Risco relativo, razão de chances (*odds ratio*), razão de riscos instantâneos (*hazard ratio*) e redução relativa de risco. Informam a proporção do risco removida pelo tratamento.
- **Escala absoluta.** Redução absoluta de risco e número necessário para tratar. Informam quantos eventos o tratamento evita em uma população com determinado risco basal.

## Como funciona

Sejam $p_C$ a taxa de eventos no grupo controle e $p_I$ no grupo intervenção, no mesmo período de seguimento.

$$RR = \frac{p_I}{p_C} \qquad RRR = 1 - RR = \frac{p_C - p_I}{p_C}$$

$$RAR = p_C - p_I \qquad NNT = \frac{1}{RAR}$$

A relação entre as escalas passa pelo risco basal:

$$RAR = p_C \times RRR$$

Uma mesma $RRR$ produz benefícios absolutos diferentes conforme o risco basal. Com $RRR$ de 25%:

| Risco basal ($p_C$) | RAR | NNT |
|---|---|---|
| 20% | 5% | 20 |
| 4% | 1% | 100 |

Os números da tabela são aritméticos e servem para ilustrar a relação. Não vêm de um ensaio.

O NNT só tem sentido junto com o período de seguimento: "NNT de 20 em 3 anos". Ele também deve ser acompanhado do número necessário para causar dano (NNH), calculado da mesma forma a partir do aumento absoluto de eventos adversos.

## Efeito constante em uma escala e variável em outra

Um tratamento pode ter a mesma redução relativa em todos os estratos de risco e redução absoluta muito diferente entre eles. O mesmo vale para a razão de chances. A homogeneidade numa escala não implica homogeneidade em outra. Uma análise de subgrupos que mostra efeito relativo constante não informa se o benefício absoluto é o mesmo.

Por isso modelos de predição de risco são úteis para decisões de tratamento. Uma probabilidade predita é um risco absoluto. Uma razão de chances ou de riscos é uma medida relativa e não informa o nível de risco do paciente.

## Erros comuns ao ler um artigo

- Apresentar só a $RRR$, que parece maior que a $RAR$ quando o risco basal é baixo.
- Aplicar o NNT de um ensaio a um paciente com risco basal diferente do da população estudada.
- Comparar NNT de ensaios com seguimentos de durações diferentes.
- Ler um *hazard ratio* como risco relativo acumulado ao fim do seguimento.
- Concluir que o benefício é igual em todos os subgrupos porque o efeito relativo foi homogêneo.

## O que conferir ao ler um ensaio

1. O artigo informa as taxas de eventos nos dois grupos, e não só a medida relativa.
2. O período ao qual a taxa absoluta se refere está explícito.
3. A $RAR$ e o NNT têm intervalo de confiança.
4. Os eventos adversos estão em escala absoluta, permitindo calcular o NNH.
5. O risco basal do paciente a tratar é comparável ao do grupo controle do ensaio.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2nd ed. Springer; 2019.
