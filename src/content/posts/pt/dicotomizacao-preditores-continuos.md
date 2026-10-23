---
title: "Dicotomização de preditores contínuos"
date: 2026-10-23
lang: pt
translationKey: dicotomizacao-preditores-continuos
description: "O que se perde ao transformar uma variável contínua em duas categorias, por que pontos de corte escolhidos nos dados distorcem resultados, e quais alternativas usar."
category: estatistica
tags: [metodos, modelos-de-predicao, regressao, pontos-de-corte]
draft: true
---

## Conceito

Dicotomizar é dividir uma variável contínua em dois grupos por um ponto de corte. Exemplos são idade acima ou abaixo de um valor, ou fração de ejeção acima ou abaixo de um limiar. A prática simplifica tabelas e figuras. Em um modelo de regressão, ela muda a relação que o modelo representa.

## O que a dicotomização supõe

Um preditor dicotomizado supõe que o risco é constante de cada lado do corte e salta no limiar. Duas pessoas logo abaixo e logo acima do corte recebem riscos diferentes, embora sejam quase iguais na variável original. Na maioria das relações biológicas, o risco muda de forma gradual ao longo da faixa do preditor.

Steyerberg mostra que a função em degrau acerta o risco apenas perto dos pontos onde cruza a relação verdadeira. Fora desses pontos, ela representa o risco de forma errada. A forma da relação estimada também depende da distribuição da variável na amostra. Se essa distribuição muda, o padrão em degrau pode mudar bastante. A codificação contínua é mais estável a essas mudanças.

A perda de informação reduz o poder estatístico. Steyerberg descreve essa perda como substancial, tanto para dicotomização quanto para categorização em poucos grupos.

## Pontos de corte escolhidos nos dados

O problema se agrava quando o corte é escolhido a partir dos dados analisados. Friedman et al. descrevem que um desfecho contínuo sem diferença entre grupos em um teste padrão pode parecer significativo ou não significativo conforme o local do corte. Deslocar o limiar de resposta para cima ou para baixo pode alternar o resultado entre significativo e não significativo sem mudança nos dados. Testar vários cortes aumenta a chance de um *p* < 0,05 espúrio.

Buscar o corte "ótimo" que melhor separa os desfechos é pior prática que dicotomizar em um valor pré-especificado.

## Alternativas

Para o modelo final, funções suaves representam relações não lineares com poucos graus de liberdade adicionais:

- termo linear, quando a relação é aproximadamente linear na escala do modelo;
- termo quadrático ou transformação logarítmica;
- *splines* cúbicos restritos (RCS), em geral com 3 a 5 nós (2 a 4 graus de liberdade);
- polinômios fracionários.

Em um modelo logístico com *spline*, o logito do risco é uma soma de funções base de $x$: $\text{logit}(p) = \beta_0 + \sum_k \beta_k f_k(x)$. Não há saltos artificiais.

Categorizar em poucos grupos continua útil na fase exploratória, para inspecionar como o risco varia ao longo do preditor. Vittinghoff et al. sugerem, na ausência de convenção, cortes nos quantis da distribuição, para grupos de tamanho semelhante. Categorias com poucas observações, como menos de cerca de dez, ou homogêneas quanto ao desfecho devem ser fundidas com a vizinha.

Para preditores ordinais, um termo linear na categoria evita a perda de poder do corte único. Ele deve ser comparado com a codificação categórica completa por um teste de desvio da linearidade.

## Erros comuns ao ler um artigo

- Ponto de corte sem justificativa clínica prévia ou sem relato de como foi escolhido.
- Corte "ótimo" derivado da curva ROC na mesma amostra e usado para inferência.
- Resultado que depende de um único limiar, sem análise com cortes vizinhos.
- Desfecho contínuo transformado em "respondedor/não respondedor" sem definição pré-especificada.

## O que conferir ao ler um ensaio ou estudo

- O corte foi definido antes da análise, por convenção clínica ou por protocolo.
- O resultado se mantém em limiares próximos.
- A análise com a variável contínua é apresentada.
- Modelos de predição usam funções suaves no modelo final.

## Referências

- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2ª ed. Springer; 2019.
- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5ª ed. Springer; 2015.
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2ª ed. Springer; 2012.
