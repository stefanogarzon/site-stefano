---
translationKey: noble-10-anos
title: 'NOBLE aos 10 anos: ICP versus CRM no tronco de coronária esquerda não protegido'
date: 2026-04-26
lang: pt
description: O NOBLE aos 10 anos não mostrou diferença de mortalidade entre ICP e CRM no tronco, mas o desenho não permite a conclusão de equivalência publicada no artigo.
reference: 'Holck EN, Holm NR, Hildick-Smith D, Lindsay MM, Spence MS, Erglis A, et al. Percutaneous coronary intervention versus coronary artery bypass grafting for unprotected left main stenosis: 10-year final results from the randomised, open-label, non-inferiority NOBLE trial. Lancet. 2026;407:1374-82.'
doi: 10.1016/S0140-6736(26)00205-9
design: Ensaio clínico randomizado aberto, 36 centros no norte da Europa e Reino Unido
'n': 1201
summary: |-
  O NOBLE randomizou 1201 pacientes com lesão de tronco não protegido, elegíveis para os dois tratamentos por consenso do heart team, entre 2008 e 2015. Foram 598 para ICP e 603 para CRM; 592 por braço entraram na análise por intenção de tratar. A maioria recebeu stent farmacológico de segunda geração.

  O desenho original testava não-inferioridade de um MACCE composto aos 5 anos. Aos 10 anos, o desfecho relatado como principal é mortalidade por qualquer causa. O estado vital foi obtido em 98% dos pacientes.

  | Análise | ICP | CRM | HR (IC 95%) |
  |---|---|---|---|
  | Mortalidade em 10 anos | 23% (136/592) | 25% (145/592) | 0,93 (0,74 a 1,18); p = 0,56 |
  | Marco 0 a 5 anos | 9% | 9% | 1,06 (0,73 a 1,55) |
  | Marco 5 a 10 anos | 15% | 17% | 0,86 (0,64 a 1,16) |

  No subgrupo com síndrome coronária aguda, o HR foi 0,57 (0,32 a 0,99), com p de interação 0,049. A análise bayesiana-Weibull, com prior informativo de HR 1,10, deu mediana posterior de 0,95 (intervalo de credibilidade 95% 0,74 a 1,18).

  A conclusão publicada é que a ICP é "tão segura quanto" a CRM.
strengths: |-
  - Seguimento de 98% aos 10 anos.
  - A análise de marco 0 a 5 e 5 a 10 anos testou a hipótese de aumento tardio de mortalidade com ICP, levantada após o EXCEL. As duas janelas foram neutras.
  - A análise de sensibilidade bayesiana usou um prior conservador (HR 1,10, de SYNTAX e PRECOMBAT) e manteve o resultado neutro. Ressalva: o prior vem de estudos com stent de primeira geração, aplicado a uma comparação com stents majoritariamente de segunda geração.
problems: |-
  - **Plano de análise não pré-especificado.** Os autores informam que o plano estatístico do desfecho de 10 anos não estava no protocolo. Reusaram o plano de 5 anos. Na prática, o desfecho principal de 10 anos é post hoc.
  - **Sem poder para mortalidade.** O cálculo de poder original era para MACCE. Com 281 óbitos, a fórmula de Schoenfeld dá cerca de 80% de poder para detectar HR de 0,72. Para HR de 0,74, o poder é de cerca de 71%; seriam necessários cerca de 346 eventos. Os autores admitem que não se pode excluir erro tipo 2.
  - **Conclusão de equivalência sem teste de equivalência.** O estudo fez um teste de superioridade. p = 0,56 significa apenas que não se demonstrou diferença. "Tão segura quanto" exige margem pré-especificada, cálculo de poder para ela e IC inteiro dentro da margem. Com margem hipotética de 0,87 a 1,15, o limite superior de 1,18 ficaria fora e a equivalência falharia.
  - **Subgrupo de SCA frágil.** O p de interação de 0,049 está no limiar. Foram testados nove subgrupos sem correção. A chance de ao menos um falso positivo é $1 - 0{,}95^9 \approx 37\%$. O α de Bonferroni seria cerca de 0,0056, nove vezes menor que 0,049. A mortalidade da CRM na SCA foi de 31%, contra cerca de 22% em SYNTAX e PRECOMBAT combinados. O atraso mediano até a CRM na SCA foi de 6 dias, contra 1 dia para a ICP; a explicação é plausível, mas é raciocínio post hoc sobre uma interação limítrofe.
  - **Riscos proporcionais testados só por gráfico log-log.** Não há resíduos de Schoenfeld nem teste formal. No subgrupo de SCA, as curvas se separam tarde. Para esse subgrupo, o RMST seria mais adequado que o HR.
  - **Subestudo de IVUS confundido.** Post hoc, o HR de mortalidade contra CRM foi 0,79 (0,61 a 1,04) com IVUS final e 1,31 (0,94 a 1,83) sem IVUS final. O uso de IVUS variou por período, operador e centro.
  - **Sem eventos não fatais após o ano 5.** IAM, AVC e nova revascularização não foram coletados de 5 a 10 anos. Essa janela só tem mortalidade, o desfecho menos sensível para comparar ICP e CRM.
opinion: |-
  Uma leitura defensável: a mortalidade foi numericamente semelhante aos 10 anos, o estudo não foi desenhado para equivalência e o IC vai de redução relativa de 26% a aumento de 18% na mortalidade com ICP.

  O OPTIMAL (Testa et al., NEJM 2026) randomizou 806 pacientes com tronco não protegido para ICP guiada por IVUS ou por angiografia, SYNTAX médio de 29,7. O HR do composto orientado ao paciente foi 1,11 (0,87 a 1,42) e o de morte, 1,06 (0,74 a 1,50). O sinal do subestudo do NOBLE não se repetiu sob randomização. A explicação mais provável é confusão por período, operador e centro. Uma explicação secundária: o braço angiográfico do OPTIMAL aplicou as práticas derivadas do IVUS, com pós-dilatação em 96,0% e POT em 85,1%, por operadores de alto volume.

  O que o NOBLE aos 10 anos mostra: em pacientes selecionados com tronco sem lesões complexas, a mortalidade em 10 anos é semelhante com ICP e CRM, sem aumento tardio após o ano 5. O que ele não mostra: equivalência, paridade de MACE aos 10 anos, superioridade da ICP na SCA e, depois do OPTIMAL, benefício incremental do IVUS de rotina sobre a angiografia em centros experientes.

  A pergunta seria resolvida por um estudo randomizado de ICP contemporânea no tronco (imagem a critério do operador, POT, stent atual, DAPT otimizada) contra CRM multiarterial, com MACE pré-especificado até 10 anos e representação adequada de mulheres, SCA e pacientes não brancos. Até lá, a decisão deve ser compartilhada caso a caso.
tags:
  - tronco
  - pci-vs-cabg
  - nao-inferioridade
cover: ''
draft: false
---
