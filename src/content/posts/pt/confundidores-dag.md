---
title: "Seleção de confundidores com DAG"
date: 2026-10-23
lang: pt
translationKey: confundidores-dag
description: "Como um diagrama acíclico direcionado (DAG) define quais covariáveis ajustar em um estudo observacional, e por que ajustar mediadores ou colisores introduz viés."
category: estatistica
tags: [metodos, confundimento, estudos-observacionais, dag]
draft: false
---

## Conceito

Em um estudo observacional, a tarefa central da análise é afastar o confundimento da associação entre a exposição e o desfecho. A escolha das covariáveis do modelo decide se isso acontece. Um diagrama acíclico direcionado (DAG) organiza essa escolha a partir de hipóteses causais explícitas, em vez de critérios estatísticos aplicados à amostra.

Um DAG representa variáveis como nós e relações causais hipotéticas como setas. Nenhuma sequência de setas retorna ao nó de origem. Com o diagrama desenhado, o pesquisador identifica um conjunto mínimo suficiente de ajuste. Esse conjunto controla o confundimento sem incluir variáveis desnecessárias, o que pode reduzir custo de medida e melhorar a eficiência estatística.

## Caminhos, portas dos fundos e colisores

Um caminho entre exposição e desfecho é qualquer sequência de setas que os conecta, em qualquer direção. Um caminho de porta dos fundos (*backdoor path*) começa com uma seta que entra na exposição. Esses caminhos transmitem associação não causal e precisam ser bloqueados.

Caminhos que saem da exposição e passam por mediadores fazem parte do efeito causal. Eles não devem ser bloqueados.

Um colisor é um nó onde duas setas se encontram no mesmo caminho, ou seja, um efeito comum de seus vizinhos. As regras de bloqueio são:

- um caminho de porta dos fundos é bloqueado pelo ajuste de pelo menos um nó não colisor nele;
- um caminho que contém um colisor já está bloqueado, desde que o colisor não seja ajustado;
- ajustar um colisor abre o caminho e cria associação espúria.

Se todos os caminhos de porta dos fundos estão bloqueados, a associação observada pode ser atribuída ao efeito causal hipotetizado, dentro dos limites do diagrama.

## Variáveis que não devem entrar no modelo

Vittinghoff et al. listam três tipos de covariável que não devem ser ajustados: medidas alternativas do desfecho, medidas alternativas da exposição e mediadores hipotetizados. Um diagnóstico definido em grande parte pela própria medida do desfecho é um exemplo de *proxy* do desfecho.

O viés de colisor aparece também fora do ajuste de covariáveis. Restringir a entrada no estudo por características do participante equivale a condicionar em um colisor quando causas comuns ligam essas características à exposição e ao desfecho. O mesmo mecanismo explica parte do viés por censura informativa ou abandono. Em análises de mudança, ajustar pelo valor basal pode criar viés quando a exposição afeta o valor basal medido com erro. Glymour et al. mostraram isso em 5.726 idosos: o ajuste pelo escore cognitivo basal inflou de forma substancial o coeficiente de escolaridade sobre a mudança cognitiva. Em um ensaio randomizado, esse ajuste é legítimo, porque a alocação não tem seta para a medida basal.

## Alternativa sem DAG: eliminação retrógrada com limiar liberal

Quando não é possível especificar todos os confundidores, a eliminação retrógrada parte do modelo completo e remove a variável de maior valor de *p*. Para controle de confundimento, Vittinghoff et al. recomendam limiar de remoção em torno de 0,2, para não descartar confundidores reais em amostras pequenas. Outra regra mantém a covariável se sua remoção muda o coeficiente da exposição em mais de cerca de 10 a 15%. Em simulações, Mickey e Greenland, e depois Maldonado e Greenland, observaram que o critério de mudança na estimativa funcionou melhor com corte de 10%, e que os critérios por teste de significância só tiveram desempenho aceitável com alfa de 0,20 ou mais.

Incluir preditores demais aumenta os erros-padrão. Em modelos logísticos e de sobrevida, também pode introduzir viés quando há muitos parâmetros para o número de eventos.

## Erros comuns ao ler um artigo

- Ajuste por variáveis posteriores à exposição, como mediadores, apresentado como "ajuste completo".
- Seleção de covariáveis apenas por significância estatística na amostra, sem justificativa causal.
- Restrição da amostra por uma condição afetada pela exposição e pelo desfecho, sem discussão de viés de seleção.
- Ausência de qualquer diagrama ou justificativa para o conjunto de ajuste.

## O que conferir ao ler um estudo observacional

- O artigo apresenta um DAG ou descreve as hipóteses causais que guiaram o ajuste.
- O conjunto de ajuste exclui mediadores, colisores e *proxies* do desfecho.
- Os critérios de inclusão e o tratamento de perdas são discutidos como possível fonte de viés de colisor.
- A comparação entre modelo não ajustado e ajustado é mostrada.

## Referências

- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2ª ed. Springer; 2012.
- Pearl J. Causal diagrams for empirical research. Biometrika. 1995;82:669-88. doi: 10.1093/biomet/82.4.669
- Greenland S, Pearl J, Robins JM. Causal diagrams for epidemiologic research. Epidemiology. 1999;10:37-48. doi: 10.1097/00001648-199901000-00008
- Greenland S. Quantifying biases in causal models: classical confounding vs collider-stratification bias. Epidemiology. 2003;14:300-6. doi: 10.1097/01.ede.0000042804.12056.6c
- Glymour MM, Weuve J, Berkman LF, Kawachi I, et al. When is baseline adjustment useful in analyses of change? An example with education and cognitive change. Am J Epidemiol. 2005;162:267-78. doi: 10.1093/aje/kwi187
- Hernán MA, Hernández-Díaz S, Robins JM. A structural approach to selection bias. Epidemiology. 2004;15:615-25. doi: 10.1097/01.ede.0000135174.63482.43
- Maldonado G, Greenland S. Simulation study of confounder-selection strategies. Am J Epidemiol. 1993;138:923-36. doi: 10.1093/oxfordjournals.aje.a116813
- Mickey RM, Greenland S. The impact of confounder selection criteria on effect estimation. Am J Epidemiol. 1989;129:125-37. doi: 10.1093/oxfordjournals.aje.a115101
