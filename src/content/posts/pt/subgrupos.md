---
title: "Análise de subgrupos: pré-especificação, teste de interação e replicação"
date: 2026-10-23
lang: pt
translationKey: subgrupos
description: "Explica como interpretar análises de subgrupos em ensaios randomizados: teste de interação, multiplicidade, poder, pré-especificação e falta de replicação."
category: estatistica
tags: [metodos, subgrupos, interacao, multiplicidade]
draft: false
---

## Conceito

A análise de subgrupos divide os participantes por características basais e verifica se o efeito do tratamento difere entre os grupos. Ela pode reforçar o resultado global ou gerar hipóteses sobre um grupo específico. Os achados de subgrupo são com frequência superestimados ou relatados de forma confusa.

Há dois tipos de interação tratamento-covariável. Na interação quantitativa, a magnitude do benefício varia, mas o mesmo tratamento é favorecido em todos os níveis. Na interação qualitativa, o tratamento beneficia em alguns níveis e prejudica em outros.

## Teste de interação

A pergunta correta é se o efeito difere entre os subgrupos. O teste de interação responde a essa pergunta com uma única estatística. Testar o efeito separadamente dentro de cada subgrupo responde a outra pergunta: se o efeito em cada nível difere de zero.

Em um modelo de regressão, a interação aparece como o coeficiente do produto entre tratamento e subgrupo:

$$g(Y) = \beta_0 + \beta_1 T + \beta_2 S + \beta_3 (T \times S)$$

O teste avalia $\beta_3$. Um subgrupo pode atingir significância e outro não apenas por diferença de tamanho amostral. Esse padrão não indica efeito diferente.

## Multiplicidade

Quanto mais subgrupos se examinam, maior a probabilidade de pelo menos um falso-positivo. Correções do tipo Bonferroni controlam essa taxa. Outra opção é declarar quantos falso-positivos seriam esperados entre os valores de p apresentados. A correção não impede a superinterpretação de um achado.

## Poder

Cada subgrupo tem menos participantes que o ensaio. O poder para detectar efeito ou interação é menor. Subgrupos menores também estão mais sujeitos a desequilíbrio basal por acaso, que pode criar ou mascarar um efeito aparente. Por isso, o resultado global do ensaio costuma estimar melhor o efeito em um subgrupo do que a estimativa do próprio subgrupo. Os intervalos de confiança de cada subgrupo indicam consistência de forma exploratória.

## Pré-especificação

Subgrupos devem ser definidos no protocolo, por variáveis basais, com justificativa biológica e plano de análise. Subgrupos ligados a variáveis de estratificação da randomização podem ser considerados antecipados. Exploração persistente após o ensaio quase sempre encontra algum subgrupo sugestivo, mesmo com tratamento inerte. Achados post hoc geram hipóteses para ensaios independentes.

Subgrupos definidos por um desfecho comum, ou por qualquer variável medida após a randomização, não preservam a comparação randomizada. A forma correta é redefinir o agrupamento por dados basais em cada braço.

Plausibilidade biológica não basta. Efeitos de subgrupo com explicação plausível também deixam de se replicar.

Lee e colaboradores dividiram ao acaso em dois grupos 1.073 pacientes coronarianos tratados clinicamente, sem nenhuma intervenção. Não houve diferença global de sobrevida. No subgrupo de 397 pacientes com doença triarterial e contração ventricular anormal, a sobrevida diferiu significativamente entre os grupos. O ajuste multivariável atribuiu a diferença a pequenos desequilíbrios em vários fatores prognósticos.

## Não replicação

A credibilidade de um subgrupo aumenta quando o efeito reaparece em estudos independentes ou na maioria dos centros de um ensaio multicêntrico. Definições diferentes de subgrupo entre estudos dificultam essa confirmação.

O PRAISE testou anlodipino em 1.153 pacientes com insuficiência cardíaca grave e fração de ejeção abaixo de 30%. O efeito global sobre morte não foi significativo (redução de 16%; p=0,07). No subgrupo pré-especificado de cardiomiopatia não isquêmica, a morte caiu 46% (p<0,001); no subgrupo isquêmico, não houve diferença. O PRAISE-2 randomizou 1.654 pacientes só com cardiomiopatia não isquêmica. Houve 278 mortes com anlodipino e 262 com placebo (HR 1,09; IC 95% 0,92 a 1,29). Somando os pacientes não isquêmicos dos dois ensaios, o HR foi 0,97 (IC 95% 0,83 a 1,13).

## Erros comuns ao ler um artigo

- Concluir que há diferença de efeito porque um subgrupo foi significativo e outro não.
- Destacar o subgrupo com maior diferença sem considerar o número de comparações.
- Tratar um achado post hoc como confirmatório.
- Aceitar plausibilidade biológica como prova.
- Ler o gráfico de floresta sem o valor de p de interação.

## O que conferir ao ler um ensaio

1. Se os subgrupos estavam no protocolo e quantos foram analisados.
2. Valor de p de interação para cada variável.
3. Se as variáveis eram basais.
4. Se a interação é quantitativa ou qualitativa.
5. Se o achado se repete em outros ensaios ou entre centros.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Capítulos sobre subgrupos e multiplicidade.
- Steyerberg EW. *Clinical Prediction Models*. 2nd ed. Springer; 2019. Seção sobre efeitos de tratamento em subgrupos.
- Byar DP. Assessing apparent treatment--covariate interactions in randomized clinical trials. Stat Med. 1985;4:255-63. doi: 10.1002/sim.4780040304
- Gail M, Simon R. Testing for qualitative interactions between treatment effects and patient subsets. Biometrics. 1985;41:361-72. doi: 10.2307/2530862
- Lee KL, McNeer JF, Starmer CF, Harris PJ, et al. Clinical judgment and statistics. Lessons from a simulated randomized trial in coronary artery disease. Circulation. 1980;61:508-15. doi: 10.1161/01.cir.61.3.508
- Packer M, O'Connor CM, Ghali JK, Pressler ML, et al. Effect of amlodipine on morbidity and mortality in severe chronic heart failure. N Engl J Med. 1996;335:1107-14. doi: 10.1056/NEJM199610103351504
- Packer M, Carson P, Elkayam U, Konstam MA, et al. Effect of amlodipine on the survival of patients with severe chronic heart failure due to a nonischemic cardiomyopathy: results of the PRAISE-2 study. JACC Heart Fail. 2013;1:308-14. doi: 10.1016/j.jchf.2013.04.004
