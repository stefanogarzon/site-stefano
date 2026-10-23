---
title: "Discriminação, calibração e curva de decisão"
date: 2026-10-23
lang: pt
translationKey: discriminacao-calibracao-curva-decisao
description: "As duas propriedades de desempenho de um modelo de predição, como se relacionam, e como o benefício líquido avalia a utilidade clínica em limiares de decisão."
category: estatistica
tags: [metodos, modelos-de-predicao, calibracao, net-benefit]
draft: false
---

## Conceito

Um modelo de predição estima o risco absoluto de um desfecho para cada paciente. Seu desempenho tem dois componentes.

**Discriminação** é a capacidade de atribuir risco maior a quem terá o evento do que a quem não terá. A medida usual é a estatística C, que em desfecho binário equivale à área sob a curva ROC. Em modelos de sobrevida, usa-se a versão para dados censurados.

**Calibração** é a concordância entre risco previsto e risco observado. Um modelo calibrado que prevê 20% de risco para um grupo deve observar cerca de 20% de eventos nesse grupo.

## Medidas de calibração

Steyerberg descreve uma hierarquia de calibração: média, fraca, moderada e forte.

- **Calibração na média** (*calibration-in-the-large*): compara o risco médio previsto com a incidência observada.
- **Inclinação de calibração**: coeficiente do preditor linear quando o desfecho é reajustado contra as predições em dados novos. O valor ideal é 1. Nos dados de desenvolvimento, a inclinação é 1 por construção.

As duas vêm do modelo de recalibração:

$$\text{logit}(P(Y=1)) = a + b \cdot LP$$

em que $LP$ é o preditor linear original. A calibração na média é testada com $LP$ como *offset*. Uma inclinação $b < 1$ indica predições extremas demais, típico de sobreajuste.

O gráfico de calibração mostra risco previsto contra observado. Testes de bondade de ajuste, como Hosmer-Lemeshow, avaliam calibração moderada.

## Como discriminação e calibração se relacionam

A calibração na média é independente da discriminação. Mudar a incidência, como em um desenho caso-controle, altera a calibração na média sem afetar a estatística C. A inclinação de calibração está ligada à discriminação. Uma inclinação abaixo de 1 na validação externa implica discriminação menor.

Um modelo pode ser bem calibrado e discriminar mal, se todas as predições ficam próximas da taxa média de eventos. Um modelo pode discriminar bem e estar mal calibrado para a população em que é aplicado.

Alguns autores priorizam a discriminação, porque a calibração poderia ser corrigida depois. Steyerberg observa que isso vale em pesquisa retrospectiva. Em decisão clínica em tempo real, o grau de descalibração é desconhecido e não pode ser corrigido antes da decisão.

## Benefício líquido e curva de decisão

Discriminação e calibração não informam se usar o modelo melhora decisões. O benefício líquido (*net benefit*) responde a essa pergunta em um limiar de decisão $p_t$:

$$NB = \frac{VP}{n} - \frac{FP}{n} \cdot \frac{p_t}{1 - p_t}$$

$VP$ e $FP$ são verdadeiros e falsos positivos no limiar, e $n$ é o tamanho da amostra. O peso $p_t/(1-p_t)$ expressa o dano relativo de um falso positivo frente ao benefício de um verdadeiro positivo. O limiar vem da razão entre danos e benefícios da ação clínica. Vickers e Elkin propuseram o método partindo da ideia de que o limiar em que o paciente optaria por tratar expressa como ele pondera um falso-positivo frente a um falso-negativo.

A curva de decisão mostra o benefício líquido ao longo de uma faixa de limiares plausíveis. Ela compara o modelo com as estratégias "tratar todos" e "não tratar ninguém".

A posição do limiar em relação à distribuição dos riscos previstos importa. Para um modelo calibrado, o benefício líquido é máximo quando o limiar coincide com a taxa de eventos. Se quase todas as predições ficam de um lado do limiar, o modelo não tem utilidade nesse limiar, qualquer que seja sua estatística C.

A melhora líquida de reclassificação (NRI) padrão soma mudança de sensibilidade e de especificidade. Isso pondera eventos e não eventos pela taxa de eventos, e não pelo balanço clínico de dano e benefício. Steyerberg considera a NRI padrão um resumo inadequado de utilidade clínica.

## Erros comuns ao ler um artigo

- Estatística C relatada sem qualquer medida de calibração.
- Calibração avaliada só por Hosmer-Lemeshow, sem gráfico nem inclinação.
- Desempenho aparente nos dados de desenvolvimento apresentado como desempenho esperado.
- Novo marcador justificado só por NRI ou aumento pequeno da estatística C.

## O que conferir ao ler um estudo de predição

- Validação interna (*bootstrap*) ou externa.
- Calibração na média, inclinação e gráfico de calibração.
- Curva de decisão com faixa de limiares clinicamente plausível.
- Distribuição dos riscos previstos em relação aos limiares de decisão.

## Referências

- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2ª ed. Springer; 2019.
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2ª ed. Springer; 2012.
- Vickers AJ, Elkin EB. Decision curve analysis: a novel method for evaluating prediction models. Med Decis Making. 2006;26:565-74. doi: 10.1177/0272989X06295361
