---
title: "Interpretação do valor de p e do intervalo de confiança"
date: 2026-10-23
lang: pt
translationKey: valor-de-p-intervalo-de-confianca
description: "O que o valor de p e o intervalo de confiança informam sobre o resultado de um ensaio, a relação entre os dois e as leituras incorretas mais frequentes."
category: estatistica
tags: [metodos, valor-de-p, intervalo-de-confianca, inferencia]
draft: false
---

## Conceito

O **valor de p** é a probabilidade de observar uma diferença igual ou maior que a encontrada, se a hipótese nula for verdadeira. Ele mede a incerteza estatística sobre o resultado. Ele não mede o tamanho do efeito nem a sua relevância clínica.

O **intervalo de confiança** (IC) reúne a estimativa pontual e a sua precisão. Um IC de 95% é construído por um procedimento que, repetido em muitas amostras, contém o valor verdadeiro em 95% delas. A largura do intervalo mostra a precisão: intervalo estreito indica estimativa precisa, intervalo largo indica incerteza.

## Como funciona

Para uma diferença entre grupos $d$ com erro-padrão $EP$:

$$IC_{95\%} = d \pm 1{,}96 \times EP$$

O multiplicador 1,96 é o mesmo valor crítico do teste bilateral com $\alpha = 0{,}05$. Por isso as duas ferramentas são equivalentes quanto à decisão:

- Se o IC de 95% exclui o valor nulo, $p < 0{,}05$ no teste bilateral.
- Se o IC inclui o valor nulo, $p \geq 0{,}05$.

O valor nulo é 0 para diferenças e 1 para razões (risco relativo, *odds ratio*, *hazard ratio*). Para razões, o intervalo é calculado na escala logarítmica.

O IC acrescenta o que o valor de p omite: a faixa de efeitos compatíveis com os dados. Com o intervalo, cada leitor pode julgar se o efeito é clinicamente relevante, sem depender só do cruzamento de um limiar.

## Erros comuns ao ler um artigo

- **Ler o valor de p como probabilidade de a hipótese nula ser verdadeira.** O valor de p é calculado supondo que a hipótese nula é verdadeira.
- **Equiparar significância estatística com importância clínica.** Num ensaio grande, uma diferença clinicamente irrelevante pode ter $p$ muito pequeno.
- **Ler $p \geq 0{,}05$ como prova de ausência de efeito.** Um IC que inclui o nulo pode incluir também efeitos clinicamente relevantes. Um estudo pequeno pode não detectar um efeito verdadeiro.
- **Comparar valores de p entre estudos ou subgrupos.** Um subgrupo com $p = 0{,}03$ e outro com $p = 0{,}20$ não demonstram efeitos diferentes. A comparação exige teste de interação.
- **Ignorar a largura do intervalo.** Dois estudos com o mesmo $p$ podem ter precisões muito diferentes.

## O que conferir ao ler um ensaio

1. O resultado principal traz estimativa pontual, IC e valor de p juntos.
2. O IC é estreito o bastante para orientar decisão. Os dois extremos levariam à mesma conduta.
3. Num resultado neutro, o IC exclui o menor efeito considerado clinicamente relevante. Se não exclui, o estudo é inconclusivo.
4. Num resultado positivo, o extremo do IC mais próximo do nulo ainda representa um efeito clinicamente relevante.
5. O valor de p se refere a uma comparação pré-especificada. Valores de p de comparações múltiplas não corrigidas têm outro peso.

## Uso do IC para comparar estudos

Intervalos de confiança permitem avaliar se os resultados de ensaios diferentes são compatíveis entre si. Dois estudos com intervalos sobrepostos e na mesma direção apontam para um efeito consistente, mesmo que só um tenha $p < 0{,}05$.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Rothman KJ. A show of confidence. N Engl J Med. 1978;299:1362-3. doi: 10.1056/NEJM197812142992410
