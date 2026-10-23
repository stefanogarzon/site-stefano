---
title: "Desfechos compostos: construção e interpretação"
date: 2026-10-23
lang: pt
translationKey: desfechos-compostos
description: "Explica por que ensaios usam desfechos compostos, como o resultado global se relaciona com cada componente e o que conferir ao ler um ensaio com desfecho composto."
category: estatistica
tags: [metodos, desfechos, ensaios-clinicos]
draft: true
---

## Conceito

Um desfecho composto combina dois ou mais tipos de evento em uma única variável de resposta. Cada participante contribui com no máximo um evento para a análise. A unidade de análise é o participante, não o evento. Em análises de tempo até o evento, conta-se o primeiro componente que ocorrer.

## Motivo do uso

O composto aumenta a taxa global de eventos em relação a qualquer componente isolado. Com mais eventos, o tamanho amostral necessário diminui. O cálculo amostral usa a taxa combinada. Em termos aproximados, se os componentes não se sobrepõem, a taxa do composto é a soma das taxas:

$$p_{\text{composto}} \approx p_1 + p_2 + \dots + p_k$$

Na prática há sobreposição, porque o mesmo participante pode ter mais de um tipo de evento, e a taxa observada fica abaixo da soma.

O composto também se justifica quando os componentes decorrem da mesma condição ou respondem ao mesmo mecanismo de ação. Nesse caso, o resultado combinado permanece clinicamente interpretável.

## Critérios de construção

A fonte recomenda componentes com:

- importância clínica semelhante;
- frequência semelhante;
- resposta esperada semelhante ao mecanismo do tratamento.

Quando um componente menos grave é muito mais frequente, ele domina o número de eventos. O resultado global passa a refletir esse componente. Componentes de menor relevância clínica reduzem a interpretabilidade do composto.

## Relação entre o composto e os componentes

Cada componente tem bem menos eventos que o composto. O poder para detectar efeito em um componente isolado é, portanto, baixo. Um componente sem significância estatística não invalida um composto significativo.

A credibilidade do resultado depende de os componentes apontarem na mesma direção. Uma salvaguarda proposta é exigir que o componente mais grave, como a morte, se mova na mesma direção que o resultado global. Outra é restringir o composto primário a componentes graves e deixar eventos mais leves como desfechos secundários.

A interpretação do composto e o que se pode afirmar sobre cada componente devem ser definidos antes do início do ensaio.

## Problemas de relato

Cordoba e colaboradores revisaram 40 ensaios randomizados publicados em 2008 com desfecho composto binário. Em 28 (70%), os componentes não tinham importância clínica semelhante; em 20 deles, morte era combinada com internação. Em 13, a definição do composto mudava entre resumo, métodos e resultados. Só 24 (60%) apresentavam estimativas confiáveis do composto e de cada componente. Em 11 de 16 ensaios com composto significativo, a conclusão do resumo sugeria que o efeito valia também para o componente mais importante.

## Erros comuns ao ler um artigo

- Ler um composto significativo como efeito sobre cada componente, em especial sobre mortalidade.
- Não verificar qual componente concentra os eventos.
- Interpretar um componente sem significância como ausência de efeito, sem considerar o poder.
- Ignorar componentes com efeito em direções opostas.
- Comparar compostos de ensaios diferentes que têm o mesmo nome e definições distintas.

## O que conferir ao ler um ensaio

1. Definição de cada componente e se ela é a mesma em métodos, resultados e material suplementar.
2. Número de eventos por componente em cada braço.
3. Direção do efeito em cada componente, com destaque para o mais grave.
4. Se os componentes têm gravidade e frequência comparáveis.
5. Se a forma de interpretação estava pré-especificada.

## Exemplo genérico em cardiologia

Ensaios cardiovasculares usam com frequência compostos de morte cardiovascular, infarto e AVC, às vezes acrescidos de revascularização ou hospitalização. Quando o componente mais leve e mais frequente é incluído, a leitura deve começar pela tabela de componentes antes da curva do composto.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Capítulos sobre desfechos e relato.
- Cordoba G, Schwartz L, Woloshin S, Bae H, et al. Definition, reporting, and interpretation of composite outcomes in clinical trials: systematic review. BMJ. 2010;341:c3920. doi: 10.1136/bmj.c3920
