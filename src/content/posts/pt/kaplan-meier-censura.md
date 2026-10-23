---
title: "Kaplan-Meier, censura e a premissa de censura independente"
date: 2026-10-23
lang: pt
translationKey: kaplan-meier-censura
description: "Como o estimador de Kaplan-Meier usa o tempo censurado, quais são os tipos de censura e por que a premissa de censura independente define a validade da curva."
category: estatistica
tags: [metodos, sobrevida, kaplan-meier, censura]
draft: false
---

## Conceito

Em desfechos de tempo até o evento, o seguimento de um participante é censurado quando o estado dele após certo ponto é desconhecido. Na censura à direita, o tempo real até o evento é desconhecido. Sabe-se apenas que ele é maior que o tempo observado.

A função de sobrevida $S(t)$ é a probabilidade de o participante continuar livre do evento até o tempo $t$. O estimador de Kaplan-Meier (produto-limite) estima $S(t)$ a partir de dados censurados.

Comparar a média do tempo de seguimento entre grupos, por exemplo com teste t, não estima o efeito sobre a sobrevida. Os tempos censurados subestimam os tempos reais até o evento.

## Como funciona o estimador

O Kaplan-Meier multiplica as probabilidades condicionais de sobreviver a cada intervalo, dado que o participante chegou vivo ao início do intervalo:

$$\hat S(t) = \prod_{t_j \le t} \left(1 - \frac{d_j}{n_j}\right)$$

Aqui $d_j$ é o número de eventos no tempo $t_j$ e $n_j$ é o número de participantes em risco logo antes de $t_j$. Um participante censurado sai do conjunto de risco a partir daquele momento. Ele contribui para os intervalos anteriores e deixa de contribuir para os seguintes.

Sem censura, o Kaplan-Meier coincide com a proporção simples de participantes livres do evento.

A curva é uma função em degraus. Ela fica plana entre eventos e cai a cada evento. Com mais participantes e mais eventos, os degraus diminuem e a curva se aproxima de uma linha contínua. A variância em cada ponto é estimada pela fórmula de Greenwood.

## Tipos de censura

- **Censura administrativa:** o ensaio atinge a data de encerramento comum antes de todos completarem o seguimento planejado, ou é interrompido precocemente por benefício ou dano.
- **Perda de seguimento:** o participante deixa de comparecer às visitas. É uma fonte distinta da censura administrativa.

A distinção importa porque cada fonte tem probabilidade diferente de estar ligada ao risco do evento.

## Premissa de censura independente

Os métodos padrão de sobrevida (Kaplan-Meier, log-rank, Cox) assumem censura independente. Uma vez considerados os covariáveis, o risco futuro de um participante censurado deve ser igual ao de participantes semelhantes que continuam em observação.

A censura administrativa costuma satisfazer a premissa. A perda de seguimento nem sempre satisfaz. O motivo da saída pode estar ligado ao prognóstico. Exemplos citados nas fontes:

- Participantes mais doentes deixam de conseguir fazer um teste funcional e saem do seguimento.
- Participantes recebem alta do acompanhamento porque melhoraram.
- O protocolo para de contar eventos alguns dias após a suspensão do tratamento ("off intervention, off study"). A suspensão raramente é independente do estado de saúde.

Quando a censura depende do risco do evento, ela é informativa (dependente) e os estimadores padrão ficam enviesados.

A censura dependente quase nunca pode ser confirmada diretamente. A informação necessária para testá-la é justamente a que falta.

## Erros comuns ao ler um artigo

- Ler o Kaplan-Meier como se a cauda da curva tivesse a mesma precisão do início. Com poucos participantes em risco, cada evento produz um degrau grande.
- Aceitar a curva sem verificar quantos participantes foram perdidos e se a perda diferiu entre os braços.
- Tratar a censura após a suspensão do tratamento como neutra.
- Interpretar o Kaplan-Meier como risco absoluto na presença de risco competitivo, como óbito por outras causas. Esse ponto é tratado em texto próprio sobre riscos competitivos.

## O que conferir ao ler um ensaio

- Tabela de número em risco abaixo da curva, por braço e por tempo.
- Proporção de perda de seguimento por braço e motivo da censura.
- Se o seguimento de eventos continuou após a suspensão do tratamento designado.
- Se os autores fizeram análise de sensibilidade para censura informativa, como pesos de probabilidade inversa de censura, que corrigem a censura dependente quando ela é explicada por covariáveis medidas.
- Intervalos de confiança das estimativas em tempos fixos.

## Exemplo

No APPROVe, 2586 pacientes com adenoma colorretal prévio foram randomizados para rofecoxib 25 mg/dia ou placebo. O risco relativo de eventos trombóticos cardiovasculares foi 1,92 (IC 95% 1,19 a 3,11). A contagem de eventos foi interrompida pouco tempo após a suspensão do rofecoxib. Friedman e colaboradores usam o caso para mostrar que eventos relevantes podem ocorrer depois da suspensão. A lição geral é manter o seguimento de desfechos após a interrupção do tratamento.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Capítulos sobre análise de sobrevida e sobre questões da análise (perda de seguimento).
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2nd ed. Springer; 2012. Capítulos 3 e 6.
- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2nd ed. Springer; 2019.
- Bresalier RS, Sandler RS, Quan H, Bolognese JA, et al. Cardiovascular events associated with rofecoxib in a colorectal adenoma chemoprevention trial. N Engl J Med. 2005;352:1092-102. doi: 10.1056/NEJMoa050493
