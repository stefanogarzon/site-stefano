---
translationKey: ischemia-extend
title: 'ISCHEMIA-EXTEND: sobrevida em 11 anos com estratégia inicial invasiva ou conservadora'
date: 2026-11-08
lang: pt
description: Em mediana de 9 anos, a estratégia invasiva inicial não reduziu a mortalidade (25,8% vs 26,9% em 11 anos; HR 0,97, IC 95% 0,86 a 1,09). A divisão por causa de morte é exploratória.
reference: Hochman JS, Anthopolos R, Reynolds HR, Bangalore S, Xu Y, O'Brien SM, et al. Long-Term Survival After Initial Invasive or Conservative Management of Stable Coronary Disease in ISCHEMIA-EXTEND. JAMA. 2026 (publicado online em 7 nov 2026).
doi: 10.1001/jama.2026.20375
design: Seguimento de longo prazo do ensaio clínico randomizado ISCHEMIA, 320 centros em 37 países
'n': 5179
summary: |-
  O ISCHEMIA randomizou 5.179 pacientes entre 2012 e 2018 para estratégia inicial invasiva (cateterismo, revascularização quando viável e tratamento clínico otimizado) ou conservadora (tratamento clínico otimizado, com cateterismo em caso de falha). Todos tinham isquemia moderada ou grave, FE ≥35%, nenhuma lesão de tronco ≥50%, nenhuma SCA nos 2 meses anteriores e nenhuma angina inaceitável. O ISCHEMIA-EXTEND seguiu os pacientes até 31/12/2025, com mediana de 9 anos (IIQ 8 a 10) e 1.071 óbitos. Os desfechos foram morte por qualquer causa, cardiovascular e não cardiovascular, por intenção de tratar.

  Li o texto principal e os três suplementos: plano de análise v1.2 (19/04/2026), orientação do protocolo (03/12/2018) e eTables.

  | Desfecho | Invasiva | Conservadora | Efeito (IC 95%) |
  |---|---|---|---|
  | Morte por qualquer causa, eventos | 518 | 553 | HR ajustado 0,97 (0,86 a 1,09) |
  | Morte por qualquer causa, KM em 11 anos | 25,8% | 26,9% | −1,0 pp (−4,2 a 2,1) |
  | Morte cardiovascular, eventos | 308 | 364 | HR causa-específico 0,88 (0,75 a 1,02) |
  | Morte não cardiovascular, eventos | 193 | 166 | HR causa-específico 1,18 (0,96 a 1,45) |
  | Sobrevida média restrita a 11 anos | 3.584 dias | 3.564 dias | +14 dias ajustado (−41 a 70) |

  O limite inferior do IC do HR de morte por qualquer causa (0,86) exclui uma redução relativa maior que 14%. Com 1.071 óbitos, o menor HR detectável com 80% de poder e alfa de 0,05 é 0,84 (cálculo meu). Pela estimativa pontual de 11 anos, o NNT é 96. O intervalo vai de NNT 24 a NNH 47 (cálculo meu).

  <figure><img src="/images/avaliacoes/ischemia-extend/hr-por-causa.pt.svg" width="680" height="272" alt="HR invasiva vs conservadora: morte por qualquer causa 0,97 (0,86 a 1,09); cardiovascular 0,88 (0,75 a 1,02); não cardiovascular 1,18 (0,96 a 1,45); não cardiovascular após reclassificação 1,10 (0,92 a 1,33)." loading="lazy"><figcaption>Figura 1. Hazard ratios da estratégia invasiva por causa de morte. A última linha reclassifica os 98 óbitos de causa desconhecida, que a análise principal conta como cardiovasculares.</figcaption></figure>
strengths: |-
  - Comparação randomizada com 5.179 pacientes e 1.071 óbitos, 289 deles na fase original do trial.
  - 3,7% (191/5.179) censurados precocemente. 36 dos 37 países contribuíram com seguimento.
  - Riscos competitivos tratados com modelos causa-específicos e de Fine-Gray, além de RMST e análise bayesiana.
  - Plano de análise público, com histórico de versões. Análise de sensibilidade para os 98 óbitos de causa desconhecida.
  - Os autores relatam os achados desfavoráveis: excesso de morte não cardiovascular e probabilidade bayesiana baixa de benefício.
  - Eventos, números em risco e intervalos de confiança relatados. Os números que recalculei batem com o artigo.
problems: |-
  - **Sem hierarquia de desfechos.** O plano de análise lista três desfechos sem definir o primário. O cálculo de poder mira morte cardiovascular em 10 anos (68% de poder para 2,25 pontos percentuais). O destaque do artigo é morte por qualquer causa.
  - **Plano finalizado depois de revisão não cega.** A versão 1.2 do plano de análise (19/04/2026) é posterior às revisões anuais não cegas do comitê de monitoramento (OSMB).
  - **Causa da morte.** Depois de junho de 2019, a causa foi relatada pelo centro e não foi adjudicada. Os 98 óbitos de causa desconhecida entram como cardiovasculares. Com a reclassificação, o HR de morte não cardiovascular cai de 1,18 para 1,10 (0,92 a 1,33). A divisão entre morte cardiovascular e não cardiovascular serve para gerar hipótese.

  <figure><img src="/images/avaliacoes/ischemia-extend/obitos-por-causa.pt.svg" width="680" height="194" alt="Óbitos na estratégia invasiva: 308 cardiovasculares, 193 não cardiovasculares, 17 não classificados, total 518. Na conservadora: 364, 166 e 23, total 553." loading="lazy"><figcaption>Figura 2. Óbitos por causa em cada braço. A estratégia invasiva teve 56 mortes cardiovasculares a menos e 27 não cardiovasculares a mais.</figcaption></figure>

  - **Contraste diluído.** No braço conservador, 26% foram revascularizados ainda na fase do trial. Procedimentos posteriores não foram coletados. O estudo compara estratégias iniciais.
  - **Análise bayesiana num perfil de referência.** As diferenças absolutas bayesianas são calculadas para um perfil fixo: homem, sem diabetes, covariáveis na média. A probabilidade de benefício >1 ponto percentual é de 18,4% em 9 anos. Em 11 anos é de 35,4%, e esse número aparece só na eTable 7A. A sensibilidade à priori e a imputação previstas no plano não foram relatadas.
  - **Benefício cardiovascular em doença de ≥2 vasos.** A afirmação se apoia numa interação com P nominal <0,05, no subconjunto com angiotomografia (3.913/5.179), sem controle de multiplicidade. O artigo tem 3 desfechos, 12 pontos no tempo e cerca de 14 subgrupos.
  - **Alcance.** Lesão de tronco, FE <35% e angina inaceitável foram excluídas. 77% dos pacientes eram homens.
opinion: |-
  A conclusão principal se sustenta. Em mediana de 9 anos, a estratégia invasiva de rotina não reduziu a morte por qualquer causa: 25,8% vs 26,9% em 11 anos, HR 0,97 (0,86 a 1,09). A diferença na sobrevida média foi de 14 dias.

  A estratégia invasiva teve menos mortes cardiovasculares (HR 0,88) e mais mortes não cardiovasculares (HR 1,18), com saldo semelhante. Essa divisão é exploratória. O benefício cardiovascular em doença de ≥2 vasos não tem sustentação nos dados apresentados.

  Em pacientes com isquemia moderada ou grave, sem lesão de tronco e com FE ≥35%, começar pelo tratamento clínico otimizado deu sobrevida semelhante à de começar pelo cateterismo. A escolha depende da angina e da preferência do paciente, em decisão compartilhada.

  Na sua prática, o resultado do teste de isquemia ainda leva direto ao cateterismo?
tags:
  - dac-cronica
  - riscos-competitivos
  - bayesiano
  - rmst
cover: ''
draft: false
---
