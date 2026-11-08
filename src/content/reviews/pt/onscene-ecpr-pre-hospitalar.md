---
translationKey: onscene-ecpr-pre-hospitalar
title: 'OnScene: ECPR pré-hospitalar e os sobreviventes que nunca foram canulados'
date: 2026-11-08
lang: pt
description: Equipes de helicóptero com ECPR tiveram sobrevida à alta de 40% vs 20%. O desenho não separa o efeito da cânula dos efeitos de base, período e seleção, e 23 dos 57 sobreviventes do braço ECPR nunca foram canulados.
reference: Reis Miranda D, Moors X, Ali S, Maissan IM, van Schuppen HL, Mommers L, et al. Prehospital Extracorporeal Life Support in Refractory Out-of-Hospital Cardiac Arrest. N Engl J Med. 2026 (publicado online em 7 nov 2026).
doi: 10.1056/NEJMoa2602919
design: Estudo stepped-wedge não randomizado, 4 bases de helicóptero (HEMS) na Holanda (NCT04620070)
'n': 231
summary: |-
  O OnScene comparou duas fases nas 4 bases de helicóptero médico (HEMS) da Holanda, de outubro de 2021 a junho de 2025. Na fase de intervenção, a equipe do helicóptero podia iniciar ECPR na cena. Na fase convencional, o paciente era levado ao hospital, onde podia receber ECPR. Cada base mudava de fase numa data própria. Foram incluídos pacientes de 18 a 50 anos com PCR extra-hospitalar refratária há mais de 20 minutos, presenciada ou com sinais de vida, em FV/TV ou em AESP com suspeita de TEP. Dos 3.362 acionamentos, 231 pacientes entraram no estudo (144 intervenção, 87 convencional). O plano previa 390.

  Li o artigo, o apêndice suplementar, o protocolo (v3.0 e v5.0), o plano de análise e o registro no ClinicalTrials.gov. Os números marcados como cálculo meu vêm das contagens publicadas.

  | Desfecho | ECPR | Convencional | Efeito (IC 95%) |
  |---|---|---|---|
  | Sobrevida à alta | 57/144 (40%) | 17/87 (20%) | OR 2,72 (1,59 a 4,66); ajustado 2,66 (1,56 a 4,55) |
  | CPC 1 a 2 em 6 meses | 51/141 (36%) | 11/85 (13%) | OR 4,22 (2,82 a 6,32) |
  | Tempo até o fluxo de ECMO, mediana (IIQ) | 45 min (37 a 50) | 77 min (65 a 90) | |

  A análise usou GEE (logit binomial, correlação de independência, erro-padrão robusto), com a base como cluster e o período como efeito fixo.
strengths: |-
  - ECPR pré-hospitalar implantado em escala nacional, com cerca de 90 profissionais de HEMS treinados para canular na cena.
  - O tempo até o fluxo de ECMO caiu cerca de 30 minutos, o que dá plausibilidade à direção do efeito.
  - O desfecho primário bate com o registro e com o protocolo.
  - Protocolo, plano de análise e tabelas suplementares detalhadas (S7 a S9) permitem recalcular boa parte dos resultados.
problems: |-
  - **Quatro clusters e erro-padrão robusto.** O IC 95% da sobrevida no artigo é 1,59 a 4,66 (erro-padrão implícito 0,274). O IC binomial bruto é 1,44 a 5,05 (erro-padrão 0,320, cálculo meu). Para CPC 1 a 2, o artigo dá 2,82 a 6,32 e o bruto é 1,85 a 7,84 (cálculo meu). Com poucos clusters, o estimador sanduíche subestima o erro-padrão ([Mancl e DeRouen, Biometrics 2001](https://doi.org/10.1111/j.0006-341X.2001.00126.x)). Falta uma correção para amostra pequena e um modelo misto como sensibilidade.

  <figure><img src="/images/avaliacoes/onscene-ecpr-pre-hospitalar/or-sobrevida.pt.svg" width="680" height="312" alt="OR de sobrevida: GEE do artigo 2,72 (1,59 a 4,66); bruto 2,70 (1,44 a 5,05); estratificado por base 2,27; sem Roterdã 2,13 (0,98 a 4,61); só FV/TV 2,23 (1,15 a 4,34)." loading="lazy"><figcaption>Figura 1. OR de sobrevida à alta no artigo e em quatro recálculos meus a partir das contagens publicadas.</figcaption></figure>

  - **Uma base concentrou o braço ECPR.** A ordem de transição não foi randomizada. A seção 8.2 do protocolo descreve o estudo como "cluster randomized", com Roterdã excluída. Roterdã, única base com experiência prévia em ECMO (4 de 14 médicos), contribuiu com 87 dos 144 pacientes da intervenção e 8 dos 87 controles. Identifiquei as bases cruzando a lista de instituições do Suplemento com a Tabela S9. Estratificado por base, o OR fica em 2,27. Sem Roterdã, fica em 2,13 (0,98 a 4,61). O hospital de destino por braço não foi relatado. 192 dos 231 pacientes aparecem em 12 centros de ECMO, e 39 não estão listados (pelo menos 32 morreram antes do hospital).

  <figure><img src="/images/avaliacoes/onscene-ecpr-pre-hospitalar/pacientes-por-base.pt.svg" width="680" height="270" alt="Pacientes ECPR e convencionais por base: Roterdã 87 e 8, Nijmegen 40 e 12, Groningen 8 e 16, Amsterdã 9 e 51." loading="lazy"><figcaption>Figura 2. Pacientes por base e por fase.</figcaption></figure>

  - **Estimando.** Dos 57 sobreviventes do braço ECPR, 23 (40%) nunca receberam ECPR pré-hospitalar. Dos 46 pacientes do braço ECPR não canulados, 32 tiveram RCE antes, 11 não tinham vasos femorais visíveis e em 3 a canulação não começou. Esses pacientes sobreviveram em 50%. No braço convencional, os que não receberam ECPR sobreviveram em 17% (P<0,001, cálculo meu). Os subgrupos não são estritamente comparáveis, porque o momento do RCE difere. Se as fases diferissem só na cânula, os dois grupos deveriam evoluir de forma parecida. Explicações possíveis: outra conduta na reanimação (epinefrina 4 vs 6 mg), outro destino, seleção na inclusão e efeito de base. A análise intention to treat estima o efeito do sistema HEMS-ECPR inteiro. Sem randomização, ela fixa a população comparada, mas não protege contra confusão.

  <figure><img src="/images/avaliacoes/onscene-ecpr-pre-hospitalar/sobrevida-subgrupos.pt.svg" width="680" height="318" alt="Sobrevida à alta: braço ECPR com canulação tentada 35%, braço ECPR nunca canulado 50%, convencional com ECPR no hospital 25%, convencional sem ECPR 17%." loading="lazy"><figcaption>Figura 3. Sobrevida à alta por subgrupo. Os não canulados do braço ECPR sobreviveram mais que os canulados.</figcaption></figure>

  - **Case mix entre as fases.** AESP na inclusão foi 11% na intervenção e 25% no convencional (P=0,006). TEP como causa foi 11% e 23% (P=0,04). Padronizando a sobrevida do controle pela mistura de ritmos da intervenção, ela passa de 20% para 22% (cálculo meu), o que explica 2 a 3 dos 20 pontos. Só em FV/TV, o OR é 2,23 (1,15 a 4,34). O desequilíbrio sugere que o limiar para "suspeita de TEP" mudou entre as fases, e o ajuste por ritmo não corrige essa seleção.
  - **Desfecho neurológico.** Só 6 pacientes tiveram CPC 3 (2 vs 4), então a diferença em CPC 1 a 2 (23 pontos) acompanha a de sobrevida (20 pontos). O risco relativo é 2,8 (cálculo meu). O OR de 4,22 exagera o efeito porque o desfecho é frequente. A avaliação foi feita por um único intensivista não cego, um dos primeiros autores, em entrevista telefônica de 3 perguntas. Para o IC bruto cruzar 1, seria preciso reclassificar 18 dos 51 desfechos favoráveis (cálculo meu). O CPC de 12 meses e o custo por QALY, previstos no protocolo, não foram relatados.
  - **Local do óbito.** Dos óbitos da intervenção, 60% ocorreram na UTI (52/87) e 13% no pronto-socorro (11/87). Dos óbitos do controle, 34% ocorreram na UTI (24/70) e 50% no pronto-socorro (35/70). A retirada de suporte entra no desfecho, mas as decisões de retirada e a causa da morte na UTI não foram relatadas.
  - **Segurança.** A Tabela S8 relata dupla canulação venosa com óbito em 12 das 98 tentativas, mais um caso não fatal e um suspeito. O texto principal relata só a falha de canulação (15%).
  - **Pré-especificação.** O cálculo amostral do plano testa uma margem de 5 pontos percentuais. O artigo relata superioridade simples. As covariáveis foram escolhidas por triagem com P<0,20, e o tempo até a chegada do HEMS, pré-especificado, ficou fora do modelo final.
opinion: |-
  O estudo mostra que o ECPR pré-hospitalar é viável em escala nacional e encurta em cerca de 30 minutos o tempo até o fluxo de ECMO. Um sistema HEMS-ECPR se associou a maior sobrevida em pacientes jovens, com PCR presenciada e quase sempre em ritmo chocável. A direção do efeito é plausível. O OR de 2,72 é provavelmente um teto.

  O estudo deixa em aberto quanto dos 20 pontos vem da cânula, qual é a precisão real da estimativa com 4 clusters e se o efeito se mantém fora de Roterdã.

  O número que eu pediria aos autores: a sobrevida por braço entre os pacientes com RCE antes da canulação ou da chegada ao hospital.

  Mesmo com esses limites, o OnScene é uma referência para decidir onde o ECPR deve começar.
tags:
  - ecpr
  - parada-cardiaca
  - observacional
cover: ''
draft: false
---
