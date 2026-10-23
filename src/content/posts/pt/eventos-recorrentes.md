---
title: "Eventos recorrentes como desfecho"
date: 2026-10-23
lang: pt
translationKey: eventos-recorrentes
description: "Quando usar o número total de eventos em vez do tempo até o primeiro evento, quais modelos se aplicam (Poisson, binomial negativa, extensões de Cox com fragilidade) e o papel do óbito como evento terminal."
category: estatistica
tags: [metodos, sobrevida, eventos-recorrentes, dados-de-contagem]
draft: false
---

## Conceito

Alguns eventos podem ocorrer mais de uma vez no mesmo participante. Exemplos: hospitalizações por insuficiência cardíaca, ataques isquêmicos transitórios, crises convulsivas, choques de cardiodesfibrilador.

A análise convencional usa o tempo até o primeiro evento. Ela descarta os eventos seguintes. Dois pacientes com uma e com cinco hospitalizações contam da mesma forma.

Um desfecho de eventos recorrentes usa a frequência dos eventos. Ele captura a diferença de carga de doença entre participantes que tiveram ao menos um evento.

## Como funciona

**Taxa bruta agregada.** Somar todos os eventos do grupo e dividir pelo número de participantes não é um método válido. Friedman aponta que o cálculo precisa respeitar o histórico de eventos de cada participante. Poucos participantes com muitos eventos dominam a soma, e o tempo de seguimento de cada um varia.

**Modelos de contagem.** A regressão de Poisson modela o número de eventos com função de ligação log e com o tempo de seguimento como offset:

$$\log E(Y_i) = \log(\text{tempo}_i) + \beta_0 + \beta_1 x_i$$

O coeficiente exponenciado é uma razão de taxas de incidência. O Poisson assume variância igual à média. Em dados clínicos, a variância costuma exceder a média (superdispersão). Isso decorre de heterogeneidade não medida entre pacientes e de eventos correlacionados no mesmo paciente.

Sob superdispersão, as estimativas pontuais do Poisson continuam consistentes se o modelo da média está correto, mas os erros-padrão ficam pequenos demais. O erro tipo I aumenta. Há duas correções:

- **Variância robusta (sanduíche):** mantém o modelo da média do Poisson e corrige os erros-padrão.
- **Binomial negativa:** mistura Poisson-gama com variância $\mu + \alpha\mu^2$. O parâmetro $\alpha$ é estimado junto com os coeficientes.

As duas abordagens podem divergir quando a distribuição é assimétrica ou tem contagens extremas. A escolha deve estar pré-especificada no plano de análise.

**Extensões de Cox.** Eventos repetidos no mesmo paciente são correlacionados por uma fragilidade individual não observada. O Cox padrão ignora essa dependência. Modelos de fragilidade ou outras extensões de Cox para eventos recorrentes incorporam essa correlação. O modelo de Andersen-Gill trata os eventos como um processo de contagem, com intervalos de risco sucessivos para cada paciente. O modelo de Lin, Wei, Yang e Ying (LWYY) estima a razão das taxas médias de eventos e usa variância robusta para a dependência entre eventos do mesmo paciente.

**Win ratio.** Pocock et al. propuseram comparar pares de pacientes dos dois braços por ordem de prioridade clínica: primeiro quem teve óbito cardiovascular antes; se não for possível decidir, quem teve hospitalização por insuficiência cardíaca antes. O *win ratio* é o número de vitórias do tratamento dividido pelo número de derrotas. O método dá prioridade ao óbito em vez de ao primeiro evento ocorrido. Os autores o ilustraram com reanálises do EMPHASIS-HF, PARTNER B e CHARM.

## Óbito como evento terminal

O óbito encerra a possibilidade de novos eventos. Um tratamento que reduz mortalidade mantém pacientes vivos e expostos a mais hospitalizações. Um tratamento que aumenta mortalidade pode reduzir hospitalizações por remover pacientes do risco.

Por isso, a análise de eventos não fatais recorrentes deve ser lida junto com a mortalidade. Friedman recomenda relatar mortalidade total, mortalidade causa-específica e outros eventos mórbidos. Restringir a análise aos sobreviventes enviesa o resultado quando a mortalidade difere entre os braços.

## Erros comuns ao ler um artigo

- Ler a razão de taxas de eventos totais como se fosse um HR de primeiro evento.
- Aceitar uma taxa calculada como total de eventos dividido por participantes.
- Ignorar superdispersão e aceitar intervalos de confiança de um Poisson sem correção.
- Interpretar redução de hospitalizações recorrentes sem olhar o efeito sobre óbito.
- Atribuir o efeito a todos os pacientes quando poucos participantes concentram a maior parte dos eventos.

## O que conferir ao ler um ensaio

- Se a análise de eventos recorrentes foi pré-especificada como primária ou secundária.
- Qual modelo foi usado e como a superdispersão ou a correlação intraindividual foram tratadas.
- Se o tempo de seguimento entrou como offset ou de outra forma.
- Como o óbito foi incorporado: como componente do desfecho, como evento terminal ou como censura.
- Se há tabela de distribuição do número de eventos por participante em cada braço.
- Se o resultado de tempo até o primeiro evento é apresentado junto.

## Exemplo

Em ensaios de insuficiência cardíaca, desfechos compostos por óbito cardiovascular e hospitalizações totais por insuficiência cardíaca passaram a ser usados como alternativa ao primeiro evento. A leitura exige conferir os três pontos acima: modelo, tratamento do óbito e concentração de eventos.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5ª ed. Springer; 2015.
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2ª ed. Springer; 2012.
- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2ª ed. Springer; 2019.
- Andersen PK, Gill RD. Cox's regression model for counting processes: a large sample study. Ann Stat. 1982;10:1100-20. doi: 10.1214/aos/1176345976
- Lin DY, Wei LJ, Yang I, Ying Z. Semiparametric regression for the mean and rate functions of recurrent events. J R Stat Soc Series B Stat Methodol. 2000;62:711-30. doi: 10.1111/1467-9868.00259
- Pocock SJ, Ariti CA, Collier TJ, Wang D. The win ratio: a new approach to the analysis of composite endpoints in clinical trials based on clinical priorities. Eur Heart J. 2012;33:176-82. doi: 10.1093/eurheartj/ehr352
