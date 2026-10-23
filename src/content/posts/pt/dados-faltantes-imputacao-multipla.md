---
title: "Dados faltantes: MCAR, MAR, MNAR e imputação múltipla"
date: 2026-10-23
lang: pt
translationKey: dados-faltantes-imputacao-multipla
description: "Os três mecanismos de dados faltantes, o que cada um permite concluir, e como a imputação múltipla combina estimativas e incerteza."
category: estatistica
tags: [metodos, dados-faltantes, imputacao-multipla, ensaios-clinicos]
draft: true
---

## Conceito

Todo método para lidar com dados faltantes depende de uma suposição sobre por que os dados faltam. Essa suposição liga os valores não observados aos observados. Como os valores ausentes não foram medidos, a suposição não pode ser verificada nos próprios dados.

A classificação usual, proposta por Rubin (1976), define três mecanismos.

- **MCAR** (*missing completely at random*): a probabilidade de o valor faltar não depende de nenhuma variável, observada ou não.
- **MAR** (*missing at random*): a probabilidade de faltar depende de preditores e de desfechos já observados, mas não do valor ausente, uma vez considerada a informação observada.
- **MNAR** (*missing not at random*): a probabilidade de faltar depende do próprio valor ausente ou de outras quantidades não observadas.

## O que cada mecanismo permite

Sob MCAR, a análise de casos completos não tem viés, mas perde precisão. MCAR é pouco realista em estudos longitudinais, porque as perdas aumentam com o tempo de seguimento. Encontrar associação entre uma variável observada e a perda, como pior gravidade basal entre os que abandonam, é evidência contra MCAR.

Sob MAR ou MCAR, análises baseadas em verossimilhança e a imputação múltipla produzem inferência válida. Friedman et al. observam que, em ensaios clínicos, MAR é difícil de verificar e muitas vezes implausível. A perda tende a se relacionar com o estado de saúde do participante, e não apenas com covariáveis registradas.

MNAR não pode ser confirmado nem excluído com os dados observados. A resposta recomendada é análise de sensibilidade, por exemplo com imputação múltipla ajustada para cenários MNAR, modelos de mistura de padrões ou modelos de seleção.

## Métodos de imputação simples e seus limites

A análise de casos completos é o comportamento padrão da maioria dos programas. Ela descarta qualquer registro com valor ausente sem aviso. O primeiro passo é verificar quantas observações foram excluídas.

A imputação simples substitui cada valor ausente por um único valor: média, mediana, última observação levada adiante (LOCF) ou valor basal levado adiante. Qualquer imputação simples trata o valor substituído como observado. O resultado são erros-padrão pequenos demais e intervalos de confiança estreitos demais. A LOCF supõe que o valor ficou constante desde a última visita, o que falha quando a variável ainda está mudando.

## Imputação múltipla

A imputação múltipla segue uma sequência definida:

1. especificar um modelo probabilístico que relaciona a variável ausente às variáveis observadas;
2. gerar valores imputados a partir desse modelo, com variação aleatória;
3. repetir para obter $m$ bancos completos;
4. ajustar o modelo de interesse em cada banco;
5. combinar as estimativas e os erros-padrão.

A estimativa combinada é a média das $m$ estimativas, $\bar{Q} = \frac{1}{m}\sum_{j=1}^{m} \hat{Q}_j$. A variância total soma a variância média dentro dos bancos ($\bar{U}$) à variância entre os bancos ($B$): $T = \bar{U} + (1 + 1/m)\,B$. O termo $B$ representa a incerteza que a imputação simples ignora.

A parte mais difícil é o modelo de imputação. Ele deve incluir o desfecho e as variáveis da análise principal. Duas abordagens usuais são equações encadeadas (ICE) e imputação normal multivariada.

## Erros comuns ao ler um artigo

- Análise de casos completos sem relato do número de exclusões.
- LOCF apresentada como abordagem conservadora sem discussão da trajetória da variável.
- Imputação múltipla tratada como solução para MNAR.
- Um único método de dados faltantes apresentado como definitivo.

## O que conferir ao ler um ensaio

- Proporção de dados faltantes por braço e por variável.
- Mecanismo assumido e justificativa.
- Método principal e análises de sensibilidade com suposições diferentes.
- Comparação entre participantes com e sem dados completos.
- Medidas de desenho e condução para reduzir perdas. Friedman et al. consideram a prevenção mais eficaz que a correção analítica.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5ª ed. Springer; 2015.
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2ª ed. Springer; 2012.
- Rubin DB. Inference and missing data. Biometrika. 1976;63:581-92. doi: 10.1093/biomet/63.3.581
