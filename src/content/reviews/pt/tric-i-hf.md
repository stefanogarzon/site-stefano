---
translationKey: tric-i-hf
title: 'TRIC-I-HF: reparo transcateter da tricúspide na insuficiência cardíaca'
date: 2026-09-03
lang: pt
description: No TRIC-I-HF, a hospitalização por insuficiência cardíaca responde pela maior parte do efeito; a decisão de internar foi tomada sem cegamento.
reference: Hausleiter J, Stocker TJ, Geisler T, Lurz P, Rottbauer W, Lubos E, et al. Tricuspid-Valve Intervention in Heart Failure. N Engl J Med. 2026 (publicado online em 30 ago 2026).
doi: 10.1056/NEJMoa2606934
design: Ensaio clínico randomizado aberto, 2:1, 29 centros na Alemanha (NCT04634266)
'n': 360
summary: |-
  O TRIC-I-HF randomizou 360 pacientes com insuficiência tricúspide ao menos grave e risco aumentado de eventos de insuficiência cardíaca (IC). A alocação foi 2:1 para reparo transcateter mais tratamento clínico (237) ou tratamento clínico isolado (123). O estudo foi aberto, em 29 centros alemães, com inclusão de março de 2022 a junho de 2025. Idade média de 80,3 anos, 56,4% mulheres.

  O primeiro desfecho primário foi um composto hierárquico em 1 ano: morte, hospitalização por IC e melhora de 15 pontos ou mais no KCCQ. Win ratio 2,42 (IC 95% 1,76 a 3,33). O segundo desfecho primário, morte ou hospitalização por IC em 3 anos, teve HR 0,40 (0,29 a 0,55).

  | Camada do win ratio | Vitórias reparo | Vitórias clínico | Vantagem (pontos percentuais dos pares) |
  |---|---|---|---|
  | Morte | 4366 | 3166 | 4,1 |
  | Hospitalização por IC | 9280 | 2871 | 22,0 |
  | KCCQ | 3263 | 929 | 8,0 |
  | Total | 16.909 | 6966 | 34,1 |

  Na camada de mortalidade, 74,2% dos pares empatam. HR para hospitalização por IC em 3 anos: 0,35 (0,25 a 0,51). Eventos adversos maiores em 30 dias: 5,9%.
strengths: |-
  - Randomizado, com dois desfechos primários testados em sequência.
  - Seleção por risco documentado de eventos, o que gerou eventos suficientes para os desfechos clínicos.
  - Análise de risco competitivo para a primeira hospitalização (Figura S3).
problems: |-
  - **Efeito concentrado na hospitalização.** Dos 34,1 pontos de vantagem do win ratio, 22,0 vêm da hospitalização por IC, 8,0 do KCCQ e 4,1 da morte.
  - **Avaliação sem cegamento declarado.** O protocolo descreve o Comitê de Eventos Clínicos como independente, mas não como cego à alocação. O apêndice também não. O comitê foi criado por emenda em 18 de julho de 2024, cerca de dois anos após o início da inclusão.
  - **Decisão de internar sem cegamento.** A adjudicação classifica uma internação que já ocorreu. Quem decidiu internar foi um clínico que sabia se o paciente ainda tinha insuficiência tricúspide torrencial. Cegar o comitê não corrigiria isso.
  - **Troca do desfecho primário.** O win ratio não era o desfecho primário original. A emenda de 3 de junho de 2023 adotou o desfecho do TRILUMINATE depois da publicação desse estudo. O desfecho original passou a ser o segundo primário.
  - **Crossover no grupo controle.** 48 de 123 pacientes (39,0%) cruzaram para o reparo. Em 28 deles, o procedimento ocorreu na mesma internação que contou como evento primário. O crossover só era permitido após um evento primário, e o dispositivo é reembolsado na Alemanha. Os pacientes que cruzaram eram mais graves (Tabela S14): NYHA III/IV 81,3% vs 66,7%, IAM prévio 18,8% vs 9,3%. Os dois primários são de tempo até o primeiro evento e não sofrem esse viés. A mortalidade total e os desfechos funcionais e ecocardiográficos de 1 ano no grupo controle ficam contaminados.
  - **Mortalidade sem benefício estabelecido.** HR 0,74 (0,42 a 1,29) em 1 ano. HR 0,62 (0,40 a 0,96) em 3 anos, como desfecho secundário sem ajuste para multiplicidade. Com 79 mortes e alocação 2:1, o menor HR detectável com 80% de poder é cerca de 0,51, e o efeito observado fica acima disso.
  - **Seguimento de 3 anos incompleto.** O seguimento estava completo em 20,5% dos pacientes elegíveis aos 3 anos. Cinco pacientes do controle estavam em risco no dia 1095.
  - **Carga recorrente não analisada.** Tempo até o primeiro evento conta três internações seguidas de morte igual a uma internação com sobrevida.
opinion: |-
  ## Como eu analisaria o desfecho

  Modelos de eventos recorrentes isolados não servem aqui. Andersen-Gill, LWYY e binomial negativa tratam a morte como censura. Quem morre para de acumular internações, e o braço com mais mortes parece ter menos eventos.

  Dois métodos tratam os dois processos:

  - **Ghosh-Lin** estima a função cumulativa média com a morte como risco competitivo. A contagem congela na morte. Responde quantas internações a estratégia evita.
  - **Fragilidade conjunta** compartilha um efeito aleatório entre o processo recorrente e o risco de morte. O parâmetro α mede o quanto internação e morte estão ligadas. Na IC avançada, essa ligação é a razão de a censura simples falhar.

  Mao e Lin propõem incorporar a morte, com peso, ao processo de contagem.

  O TRIC-I-HF relatou incidência cumulativa com risco competitivo só para a primeira internação. Num estudo cujo efeito está na hospitalização, falta a análise da carga recorrente.

  ## O que o estudo prova

  O reparo reduz hospitalização por IC em idosos com insuficiência tricúspide predominantemente secundária, congestão sistêmica e risco documentado de eventos. Os centros tinham em média 176 procedimentos prévios. Eventos adversos maiores em 30 dias: 5,9%.

  ## O que o estudo não prova

  Benefício de mortalidade. Benefício sem risco elevado de eventos. Reprodutibilidade fora de centros de volume muito alto. A magnitude do efeito sobre hospitalização, já que a decisão de internar não foi cega e era também a via de acesso ao crossover.
tags:
  - ic
  - tricuspide
  - win-ratio
cover: ''
draft: false
---
