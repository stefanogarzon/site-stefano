---
title: "Riscos competitivos e o modelo de Fine-Gray"
date: 2026-10-23
lang: pt
translationKey: riscos-competitivos-fine-gray
description: "O que é um risco competitivo, por que o Kaplan-Meier superestima o risco absoluto nesse cenário e como diferem o hazard causa-específico e o hazard de subdistribuição de Fine-Gray."
category: estatistica
tags: [metodos, sobrevida, riscos-competitivos, fine-gray]
draft: false
---

## Conceito

Um risco competitivo é um evento que impede a observação do desfecho de interesse. O exemplo típico é o óbito antes de uma complicação não fatal. Para cada participante, só um dos eventos competidores pode ocorrer primeiro.

O problema aparece com mais frequência em populações idosas e em seguimentos longos, quando o óbito por outras causas é comum.

## Duas estratégias

Vittinghoff e colaboradores descrevem duas estratégias:

- **Eliminação:** extrapola para um mundo em que o evento competidor não ocorre. É o que a censura faz.
- **Acomodação:** incorpora o evento competidor na análise como outro desfecho que encerra a observação.

A perda de seguimento costuma ser tratada por eliminação. O óbito costuma ser tratado por acomodação, porque projetar uma população sem mortalidade não tem sentido clínico.

## Hazard causa-específico

O hazard causa-específico é a taxa instantânea do evento de interesse entre os que ainda não tiveram esse evento nem um evento competidor:

$$h_k(t) = \lim_{\Delta t \to 0} \frac{P(t \le T < t+\Delta t,\ \text{causa}=k \mid T \ge t)}{\Delta t}$$

Na prática, estima-se com um Cox comum em que os eventos competidores são censurados. O HR causa-específico responde a uma pergunta etiológica: o tratamento muda a taxa do evento de interesse entre os que estão em risco?

O erro está em transformar esse modelo em probabilidade. A curva 1 − Kaplan-Meier com censura do óbito só tem interpretação de probabilidade se o óbito fosse eliminável e independente do evento de interesse. Quando há risco competitivo, essa curva superestima o risco absoluto. Ela trata quem morreu como se ainda pudesse ter o evento.

## Função de incidência cumulativa

A função de incidência cumulativa (CIF) estima a probabilidade real de ter o evento de interesse até o tempo $t$, considerando que o evento competidor remove pacientes do risco. É a medida adequada quando a pergunta é de risco absoluto.

## Modelo de Fine-Gray

O modelo de Fine-Gray define um hazard de subdistribuição. Pacientes que tiveram o evento competidor permanecem no conjunto de risco indefinidamente, como se tivessem tempo de censura infinito. O coeficiente é interpretado como efeito sobre esse hazard, com premissa de proporcionalidade nessa escala.

Um HR de subdistribuição acima de 1 significa incidência cumulativa prevista maior em todos os tempos de seguimento. O modelo fornece diretamente o risco absoluto em um tempo escolhido.

Propriedades descritas por Steyerberg:

- A estimativa de risco real é menor que a estimativa atuarial (com censura).
- A diferença cresce quando muitos eventos competidores ocorrem cedo.
- O HR causa-específico e o HR de subdistribuição divergem mais quando o preditor também afeta o evento competidor.
- Os dois coeficientes não são comparáveis. Cada modelo assume proporcionalidade na sua própria escala, e as duas premissas não podem valer ao mesmo tempo.

## Erros comuns ao ler um artigo

- Apresentar 1 − Kaplan-Meier como risco absoluto de evento não fatal em população com mortalidade alta.
- Ler o HR de subdistribuição como efeito sobre a taxa do evento entre os vivos.
- Comparar diretamente um HR causa-específico de um estudo com um HR de Fine-Gray de outro.
- Analisar desfecho não fatal só entre sobreviventes quando a mortalidade difere entre os braços.
- Ignorar que o tratamento pode alterar a taxa do evento competidor, o que muda a interpretação.

## O que conferir ao ler um ensaio

- Frequência do evento competidor em cada braço.
- Qual pergunta o modelo responde: etiológica (causa-específico) ou de risco absoluto (CIF, Fine-Gray).
- Se a mortalidade total é relatada junto com o desfecho causa-específico. Friedman recomenda relatar todas as categorias principais: mortalidade total, mortalidade causa-específica e outros eventos mórbidos.
- Se o efeito do tratamento sobre o evento competidor foi apresentado.

## Exemplo

Em ensaios de insuficiência cardíaca com desfecho de hospitalização, o óbito cardiovascular ou não cardiovascular impede hospitalizações futuras. Uma terapia que reduz mortalidade mantém mais pacientes em risco de hospitalização. O HR causa-específico e a CIF podem apontar magnitudes diferentes para o mesmo tratamento.

## Referências

- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2nd ed. Springer; 2019. Capítulo sobre desfechos de sobrevida e riscos competitivos.
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2nd ed. Springer; 2012. Capítulo 6.
- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Seção sobre eventos competitivos.
- Fine JP, Gray RJ. A proportional hazards model for the subdistribution of a competing risk. J Am Stat Assoc. 1999;94:496-509. doi: 10.1080/01621459.1999.10474144
