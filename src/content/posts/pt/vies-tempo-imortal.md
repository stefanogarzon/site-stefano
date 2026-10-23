---
title: "Viés de tempo imortal"
date: 2026-10-23
lang: pt
translationKey: vies-tempo-imortal
description: "Como o viés de tempo imortal surge quando uma exposição iniciada durante o seguimento é tratada como presente desde o início, e como a covariável dependente do tempo e o landmark o evitam."
category: estatistica
tags: [metodos, sobrevida, vies, estudos-observacionais]
draft: true
---

## Conceito

O viés de tempo imortal surge quando um período em que o desfecho não podia ser observado é classificado como tempo exposto. O resultado é uma exposição que parece benéfica sem ser.

O mecanismo é simples. Para ser classificado como exposto, o paciente precisa sobreviver até receber a exposição. O intervalo entre o início do seguimento e a exposição é "imortal" para esse grupo. Se esse intervalo é contado como tempo exposto, o grupo exposto acumula pessoa-tempo sem eventos.

O viés é um caso de um problema geral: usar informação de um momento posterior do seguimento para descrever o estado do paciente em um momento anterior.

## Quando ocorre

O risco existe sempre que a exposição é definida por algo que acontece durante o seguimento e depois é tratada como se valesse desde o início. Exemplos de estrutura:

- Receber um transplante após entrar na lista.
- Iniciar um medicamento após a alta hospitalar.
- Completar um programa de reabilitação.
- Receber um dispositivo após um período de otimização clínica.

Em todos, quem morre cedo não tem tempo de ser exposto e cai no grupo não exposto. Isso aumenta a mortalidade aparente dos não expostos e reduz a dos expostos.

Ensaios randomizados com análise por intenção de tratar não têm esse viés na comparação principal, porque a exposição é definida no tempo zero. O viés reaparece em análises secundárias que classificam pacientes por algo ocorrido depois da randomização, como adesão ou recebimento efetivo do tratamento.

## Como funciona a correção

**Covariável dependente do tempo.** A exposição entra no modelo de Cox como variável que muda de valor durante o seguimento:

$$h(t) = h_0(t)\, e^{\beta\, X(t)}$$

$X(t) = 0$ antes do evento qualificante e $X(t) = 1$ depois. Cada paciente contribui com tempo não exposto até a exposição e com tempo exposto a partir dela. O banco de dados precisa ser reestruturado em múltiplos registros por paciente, um por intervalo.

A covariável dependente do tempo só pode usar informação disponível até o tempo corrente. Valores posteriores nunca podem descrever um tempo anterior.

**Landmark.** Escolhe-se um ponto fixo do seguimento. Só entram na análise os pacientes vivos e em seguimento nesse ponto. A exposição é classificada pelo que ocorreu até o landmark. Quem é exposto depois do landmark é mantido no grupo de origem.

## Erros comuns ao ler um artigo

- Grupos definidos por um evento pós-basal ("pacientes que receberam X durante a internação") e seguimento contado a partir da admissão.
- Excluir pacientes que morreram antes de poderem receber a exposição sem explicar o efeito dessa exclusão.
- Comparar respondedores e não respondedores a partir do início do tratamento.
- Associações protetoras grandes em estudos observacionais de medicamentos iniciados após a alta, sem descrição de como o tempo até o início foi tratado.

## O que conferir ao ler um estudo

- Qual é o tempo zero de cada grupo e se ele coincide com o momento de classificação da exposição.
- Se a exposição foi modelada como covariável dependente do tempo ou com landmark.
- Se há pacientes que morreram antes de poderem ser expostos e em qual grupo foram contados.
- Em ensaios, se análises por adesão ou por tratamento recebido tratam o tempo antes da exposição corretamente.

## Exemplo

Aurora e colaboradores acompanharam 124 crianças com fibrose cística aceitas para transplante pulmonar. O tempo zero foi a entrada na lista. 47 receberam transplante e 68 morreram na espera. O transplante entrou no modelo de Cox como covariável dependente do tempo. O HR ajustado para transplante foi 0,31 (IC 95% 0,13 a 0,72). Vittinghoff e colaboradores usam o estudo como exemplo dessa estrutura de exposição.

Suissa quantificou o viés em coortes farmacoepidemiológicas. O viés na razão de taxas cresce em proporção à duração do tempo imortal e é maior quando o hazard do desfecho diminui com o tempo.

## Referências

- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2nd ed. Springer; 2012. Capítulo 6, covariáveis dependentes do tempo.
- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2nd ed. Springer; 2019. Seção sobre landmark.
- Suissa S. Immortal time bias in pharmaco-epidemiology. Am J Epidemiol. 2008;167:492-9. doi: 10.1093/aje/kwm324
- Aurora P, Whitehead B, Wade A, Bowyer J, et al. Lung transplantation and life extension in children with cystic fibrosis. Lancet. 1999;354:1591-3. doi: 10.1016/s0140-6736(99)03031-7
