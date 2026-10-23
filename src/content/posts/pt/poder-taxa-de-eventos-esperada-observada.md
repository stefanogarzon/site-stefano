---
title: "Poder e tamanho amostral: taxa de eventos esperada e observada"
date: 2026-10-23
lang: pt
translationKey: poder-taxa-de-eventos-esperada-observada
description: "Como a taxa de eventos assumida no planejamento determina o tamanho amostral, por que a taxa observada costuma ser menor, e como isso reduz o poder de um ensaio."
category: estatistica
tags: [metodos, poder, tamanho-amostral, taxa-de-eventos]
draft: true
---

## Conceito

O poder é a probabilidade de o ensaio detectar um efeito de tamanho especificado, se esse efeito existir. Equivale a $1 - \beta$, em que $\beta$ é o erro tipo II. O cálculo do tamanho amostral depende de quatro entradas: $\alpha$, poder desejado, taxa de eventos no grupo controle e efeito esperado da intervenção.

Duas dessas entradas são suposições: a taxa de eventos no controle e o tamanho do efeito. Se qualquer uma for otimista, o ensaio fica com poder menor que o declarado.

## Como funciona

Para um desfecho binário, a taxa esperada no grupo intervenção é:

$$p_I = p_C\,(1 - RRR)$$

em que $p_C$ é a taxa no controle e $RRR$ é a redução relativa de risco assumida. O cálculo amostral precisa detectar a diferença absoluta $p_C - p_I$. Para uma mesma $RRR$, uma taxa de controle menor gera uma diferença absoluta menor e exige amostra maior.

Em desfechos de tempo até o evento, a informação estatística vem sobretudo do número de eventos observados, e não do número de participantes. Com taxa de eventos baixa e muita censura, recrutar mais pessoas sem acumular eventos acrescenta pouco poder. Por isso muitos ensaios cardiovasculares são planejados por eventos: o estudo termina quando atinge um número pré-definido de eventos.

## Por que a taxa observada costuma ser menor

- **Efeito de triagem.** Os critérios de elegibilidade excluem pessoas de maior risco. A população incluída tem taxa de eventos menor que a da fonte histórica.
- **Efeito do voluntário saudável.** Quem aceita participar de um ensaio tende a ser mais saudável que a população geral.
- **Comparação com dados históricos.** Estimativas tiradas de coortes antigas ou mais amplas não refletem a população selecionada nem o tratamento de base atual.
- **Não adesão.** Abandono do tratamento no grupo intervenção e uso da intervenção no grupo controle diluem a diferença entre os grupos. O tamanho amostral deve ser ajustado para isso.

O Physicians' Health Study randomizou 22.071 médicos para aspirina ou placebo, com mortalidade cardiovascular como desfecho primário. O braço de aspirina foi interrompido antes do previsto. O infarto do miocárdio caiu 44% (RR 0,56; IC 95% 0,45 a 0,70). Para mortalidade cardiovascular, o RR foi 0,96 (IC 95% 0,60 a 1,54). Os autores consideraram essa evidência inconclusiva pelo número pequeno de participantes com esses eventos.

## Erros comuns ao ler um artigo

- Ler um resultado neutro como prova de ausência de efeito sem comparar a taxa de eventos observada com a planejada.
- Aceitar um efeito assumido no cálculo amostral sem verificar se ele é plausível frente à evidência prévia.
- Avaliar o tamanho do ensaio pelo número de participantes, e não pelo número de eventos.
- Ignorar mudanças de desenho durante o estudo, como ampliação do desfecho composto ou prolongamento do seguimento, feitas porque os eventos vieram abaixo do previsto.

## O que conferir ao ler um ensaio

1. A seção de métodos informa taxa de controle, efeito esperado, $\alpha$ e poder.
2. A fonte da taxa de controle assumida é citada e a população é comparável.
3. A taxa observada no grupo controle é próxima da planejada.
4. O número de eventos atingiu o número planejado.
5. O efeito assumido é compatível com estudos anteriores.
6. O intervalo de confiança de um resultado neutro exclui efeitos clinicamente relevantes. Se não exclui, o estudo é inconclusivo.

## Consequência de ensaios com poder insuficiente

Um ensaio com poder insuficiente pode levar ao abandono de uma intervenção útil. Depois de um resultado negativo, a intervenção pode não ser testada de novo.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Steering Committee of the Physicians' Health Study Research Group. Final report on the aspirin component of the ongoing Physicians' Health Study. N Engl J Med. 1989;321:129-35. doi: 10.1056/NEJM198907203210301
