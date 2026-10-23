---
title: "Hazard ratio e a premissa de riscos proporcionais"
date: 2026-10-23
lang: pt
translationKey: hazard-ratio-riscos-proporcionais
description: "O que o hazard ratio resume, o que significa a premissa de riscos proporcionais e como ela é verificada com o gráfico log-menos-log e os resíduos de Schoenfeld."
category: estatistica
tags: [metodos, sobrevida, cox, hazard-ratio]
draft: false
---

## Conceito

O hazard (risco instantâneo) é a taxa de ocorrência do evento em um instante, entre os que ainda não tiveram o evento. O hazard ratio (HR) é o hazard do grupo intervenção dividido pelo hazard do grupo controle.

- HR = 1: as curvas de sobrevida são idênticas.
- HR > 1: o grupo intervenção tem hazard maior e sua curva fica abaixo da curva controle.
- HR < 1: o grupo intervenção tem hazard menor e sua curva fica acima da curva controle.

O HR é a medida-resumo mais usada para comparar duas curvas de sobrevida.

## Como funciona

O modelo de Cox escreve o hazard de um participante como um hazard basal multiplicado por um fator que depende dos covariáveis:

$$h(t \mid x) = h_0(t)\, e^{\beta x}$$

O hazard basal $h_0(t)$ não é especificado. Por isso o modelo é semiparamétrico. O HR para uma unidade de $x$ é $e^{\beta}$.

A premissa de riscos proporcionais diz que a razão entre os hazards dos dois grupos é constante ao longo do seguimento. Quando ela vale, um único número descreve o efeito. Quando não vale, o HR estimado é uma média ponderada de razões que mudam com o tempo e não tem uma interpretação única.

O ajuste do modelo de Cox não exige que a premissa seja exata. O log-rank e o Cox mantêm desempenho razoável, com alguma perda de poder, quando os hazards não se cruzam. Um resultado significativo ainda indica diferença real entre as curvas. O que se perde é a descrição de como essa diferença se comporta no tempo. Sob riscos não proporcionais, o grupo favorecido pode mudar conforme o ponto do seguimento.

## Verificação da premissa

**Gráfico log-menos-log.** Para um preditor categórico, plota-se $\log[-\log \hat S(t)]$ do Kaplan-Meier contra o tempo, por grupo. Sob riscos proporcionais, as curvas ficam paralelas, separadas por uma distância vertical igual ao log do HR. Curvas que convergem indicam efeito que diminui. Curvas que divergem indicam efeito que aumenta. Curvas que se cruzam sugerem inversão do efeito.

**Resíduos de Schoenfeld escalonados.** O gráfico suavizado (LOWESS) dos resíduos contra o tempo estima como o log do HR varia no seguimento. Uma linha aproximadamente plana é compatível com a premissa. O teste formal avalia a correlação entre resíduos e tempo. Correlação positiva sugere log HR crescente. Correlação negativa sugere log HR decrescente.

O teste formal tem limitações:

- Detecta melhor uma deriva linear do log HR.
- Poucos resíduos extremos distorcem o resultado.
- Tem pouco poder em amostras pequenas e aponta desvios irrelevantes em amostras grandes.

A inspeção gráfica deve vir antes do teste.

**HR por intervalo.** Estimar o HR em períodos separados do seguimento. Os valores devem ser semelhantes se a premissa vale. Outra opção é testar a interação do preditor com o log do tempo.

## Quando a premissa falha

- **Cox estratificado:** adequado para um confundidor categórico que não é o foco. O fator de estratificação não recebe coeficiente.
- **Coeficiente variável no tempo:** interação do preditor com uma função do tempo, como covariável dependente do tempo. Uma versão simples divide o seguimento em poucos períodos e estima um HR constante em cada um.

## Erros comuns ao ler um artigo

- Ler o HR como razão de riscos cumulativos. O HR compara taxas instantâneas.
- Aceitar um HR único quando as curvas de Kaplan-Meier se cruzam.
- Concluir que a premissa vale porque o teste de Schoenfeld deu p > 0,05 em um estudo pequeno.
- Concluir que a premissa falhou por um p pequeno em um estudo grande sem olhar o tamanho do desvio no gráfico.

## O que conferir ao ler um ensaio

- Se os autores relatam como verificaram a premissa (gráfico, teste, ou ambos).
- Se as curvas de Kaplan-Meier se cruzam ou convergem.
- Se há HR por período ou outra medida complementar quando a premissa falha.
- Se o risco absoluto em tempo fixo é apresentado junto com o HR.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Capítulo sobre análise de sobrevida.
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2nd ed. Springer; 2012. Capítulo 6.
- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2nd ed. Springer; 2019.
- Schoenfeld D. Partial residuals for the proportional hazards regression model. Biometrika. 1982;69:239-41. doi: 10.1093/biomet/69.1.239
- Therneau TM, Grambsch PM. *Modeling Survival Data: Extending the Cox Model*. Springer; 2000.
