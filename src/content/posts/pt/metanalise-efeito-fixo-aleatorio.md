---
title: "Metanálise: efeito fixo, efeito aleatório, heterogeneidade e viés de publicação"
date: 2026-10-23
lang: pt
translationKey: metanalise-efeito-fixo-aleatorio
description: "Como os modelos de efeito fixo e aleatório ponderam os estudos, como interpretar a heterogeneidade, e como a seleção de estudos e o viés de publicação afetam a estimativa combinada."
category: estatistica
tags: [metodos, metanalise, heterogeneidade, vies-de-publicacao]
draft: false
---

## Conceito

Uma metanálise combina os resultados de vários estudos em uma estimativa única. Ela difere de uma revisão narrativa porque anexa um valor de *p* à conclusão. Friedman et al. observam que esse valor pode transmitir uma precisão maior do que a evidência sustenta.

A validade da estimativa combinada depende de três fatores: quais estudos entram, como são ponderados e se os estudos são comparáveis.

## Efeito fixo e efeito aleatório

O modelo de **efeito fixo**, como o método de Mantel-Haenszel, supõe que todos os estudos estimam um único efeito verdadeiro. As diferenças entre estudos refletem só erro amostral. Cada estudo recebe peso proporcional ao inverso de sua variância, $w_i = 1/v_i$. Estudos grandes recebem mais peso.

O modelo de **efeito aleatório**, como o de DerSimonian e Laird, supõe que o efeito verdadeiro varia entre estudos. A variância entre estudos, $\tau^2$, entra no peso:

$$w_i^* = \frac{1}{v_i + \tau^2}$$

A estimativa combinada é a média ponderada $\hat{\theta} = \sum w_i \hat{\theta}_i / \sum w_i$.

Quando $\tau^2$ é grande, os pesos ficam mais parecidos entre estudos. Por isso o modelo aleatório pode dar a estudos pequenos influência desproporcional. Friedman et al. declaram preferência pelo efeito fixo e recomendam rodar os dois modelos para verificar se a conclusão depende da ponderação. Não há consenso sobre qual modelo é correto.

A análise bayesiana é uma terceira forma válida de síntese, menos usada. O *forest plot* é a apresentação gráfica padrão: efeito e intervalo de confiança de cada estudo, com a estimativa combinada.

## Heterogeneidade

Os estudos diferem em população, intervenção, desfecho e logística. Alguma inconsistência entre resultados é esperada. A estatística $Q$ de Cochran testa a homogeneidade. O poder desse teste depende do número de estudos. Higgins e Thompson propuseram a estatística $I^2 = (Q - gl)/Q$, em que $gl$ é o número de estudos menos 1. Ela descreve a proporção da variação total entre estimativas atribuível à heterogeneidade, e não depende do número de estudos nem da métrica do efeito. Os autores recomendam relatá-la em vez do teste de heterogeneidade.

Friedman et al. consideram o exame das diferenças clínicas entre estudos mais informativo que o teste formal. Características dos estudos, como idade da população, duração do tratamento ou tamanho do estudo, podem explicar parte da heterogeneidade.

Heterogeneidade **quantitativa** é diferença de magnitude com efeito no mesmo sentido. Heterogeneidade **qualitativa** ocorre quando alguns estudos mostram benefício e outros dano. Com heterogeneidade qualitativa, uma estimativa combinada não é recomendada, em especial quando ela reflete tendência temporal de dose ou de população.

## Seleção de estudos e viés de publicação

A escolha dos estudos incluídos é uma das principais ameaças à validade. A abordagem defensável considera todos os estudos relevantes realizados. Metanálises sobre a mesma pergunta, com critérios de inclusão diferentes, podem chegar a conclusões diferentes. Um protocolo pré-especificado reduz o viés do investigador.

Viés de publicação é a tendência de ensaios neutros ou negativos ficarem sem publicação, ou serem publicados com atraso. Uma busca sistemática em base padrão pode não encontrar parte relevante dos ensaios publicados. Simes comparou ensaios publicados com ensaios registrados previamente em um registro de câncer. Em câncer de ovário avançado, os publicados mostraram vantagem de sobrevida para quimioterapia combinada (razão de sobrevida mediana 1,16; *p* = 0,02). Os registrados não mostraram diferença significativa (1,05; *p* = 0,25). O gráfico de funil é a ferramenta usual para inspecionar assimetria compatível com esse viés. Egger et al. propuseram um teste de regressão para essa assimetria. Em oito pares de metanálise e ensaio grande posterior, quatro foram discordantes, todos com efeito maior na metanálise; houve assimetria em três dos quatro discordantes e em nenhum dos concordantes. O teste tem pouco poder quando a metanálise reúne poucos ensaios pequenos.

A qualidade dos dados de cada ensaio também varia. Por isso a metanálise funciona melhor com desfechos simples e objetivos, como mortalidade total ou eventos maiores.

## Erros comuns ao ler um artigo

- Valor de *p* da metanálise tratado como equivalente ao de um ensaio grande e bem conduzido.
- Escolha do modelo feita após ver os resultados.
- $I^2$ alto relatado sem exploração das fontes de heterogeneidade.
- Estimativa combinada apresentada apesar de efeitos em sentidos opostos.
- Busca restrita a estudos publicados, sem registros de ensaios.

## O que conferir ao ler uma metanálise

- Protocolo registrado e critérios de inclusão prévios.
- Fontes de busca, incluindo registros e dados não publicados.
- Resultado com efeito fixo e aleatório.
- Heterogeneidade avaliada clinicamente e estatisticamente.
- Avaliação de viés de publicação.
- Desfechos objetivos e definidos de forma semelhante entre estudos.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5ª ed. Springer; 2015.
- Cochran WG. The combination of estimates from different experiments. Biometrics. 1954;10:101-29. doi: 10.2307/3001666
- DerSimonian R, Laird N. Meta-analysis in clinical trials. Control Clin Trials. 1986;7:177-88. doi: 10.1016/0197-2456(86)90046-2
- Higgins JPT, Thompson SG. Quantifying heterogeneity in a meta-analysis. Stat Med. 2002;21:1539-58. doi: 10.1002/sim.1186
- Higgins JPT, Thompson SG, Deeks JJ, Altman DG. Measuring inconsistency in meta-analyses. BMJ. 2003;327:557-60. doi: 10.1136/bmj.327.7414.557
- Egger M, Davey Smith G, Schneider M, Minder C. Bias in meta-analysis detected by a simple, graphical test. BMJ. 1997;315:629-34. doi: 10.1136/bmj.315.7109.629
- Simes RJ. Publication bias: the case for an international registry of clinical trials. J Clin Oncol. 1986;4:1529-41. doi: 10.1200/JCO.1986.4.10.1529
- Sterling TD. Publication decisions and their possible effects on inferences drawn from tests of significance—or vice versa. J Am Stat Assoc. 1959;54:30-4. doi: 10.1080/01621459.1959.10501497
- Thompson SG. Why sources of heterogeneity in meta-analysis should be investigated. BMJ. 1994;309:1351-5. doi: 10.1136/bmj.309.6965.1351
