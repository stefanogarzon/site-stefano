---
translationKey: tsai-angio-imr
title: 'Tsai et al.: cinco métodos de angio-IMR comparados com IMR por guia de pressão em core lab'
date: 2026-04-06
lang: pt
description: Os cinco métodos de angio-IMR tiveram AUC de 0,53 a 0,58 contra o IMR invasivo; parte do problema está na variabilidade do próprio IMR usado como referência.
reference: Tsai TY, et al. Core Laboratory Comparison of Angiography-Derived Indexes of Microvascular Resistance Versus Pressure-Wire IMR and Absolute Resistance. JACC Cardiovasc Interv. 2026;19(6):755-72.
doi: 10.1016/j.jcin.2025.10.027
design: Estudo de acurácia diagnóstica com análise cega em core lab independente (CORRIB, Galway)
'n': 270
summary: |-
  O estudo comparou 5 fórmulas de angio-IMR, de 3 plataformas (QAngio XA 3D, FlashAngio e AngioPlus Core), com o IMR por guia de pressão (PW-IMR) em 274 vasos e com a resistência absoluta por termodiluição contínua (Rmicro) em 109 vasos. Três analistas independentes usaram software anonimizado; um investigador dedicado selecionou os quadros.

  - Correlação entre angio-IMR e PW-IMR: r de 0,04 a 0,12.
  - Três métodos superestimaram o IMR, com viés médio de −20 a −26 unidades.
  - AUC para PW-IMR ≥ 25: 0,53 a 0,58.
  - Contra Rmicro, três métodos tiveram AUC de 0,68 a 0,70.
  - Mediana do PW-IMR: 19,02 (IIQ 12,79 a 28,08).
strengths: |-
  - Core lab independente, análise cega, três analistas e software anonimizado.
  - Duas referências: PW-IMR e Rmicro por termodiluição contínua.
problems: |-
  - **Referência com variabilidade alta.** Gallinoro et al. (EuroIntervention 2023) fizeram medidas duplicadas por termodiluição em bolus em 102 pacientes com ANOCA. A variabilidade teste-reteste do IMR foi de 24,2 ± 19,3%. Com IMR real de 22, a faixa de 95% numa nova medida vai de cerca de 17 a 27, e a chance de classificação como anormal é de cerca de 30%. Com IMR real de 28, a faixa vai de cerca de 21 a 35, com 25 a 30% de chance de classificação como normal.
  - **População concentrada no limiar.** No IAMCSST, um IMR real de 70 tem faixa de cerca de 53 a 87, e a razão sinal-ruído fica entre 3:1 e 10:1. Na ANOCA, os "anormais" ficam em torno de 28 a 40 e os "normais" em torno de 12 a 22. Com 24% de ruído, a razão sinal-ruído cai para cerca de 1:1.
  - **Teto de AUC limitado pela referência.** Com cerca de 25% de classificação errada do PW-IMR perto do limiar, a AUC máxima de um teste perfeito seria de cerca de 0,80 a 0,85. Os valores observados ficam abaixo desse teto, então o angio-IMR tem problemas próprios, mas a distância até o máximo possível é menor do que parece.
  - **Erros que se multiplicam no angio-IMR.** A fórmula combina velocidade do contraste por contagem de quadros TIMI (r de 0,17 a 0,26 com a velocidade hiperêmica neste estudo), contorno angiográfico (erro elevado ao quadrado na conversão de diâmetro para área), pressão hiperêmica estimada e angio-FFR (r de 0,33 a 0,38 com o FFR invasivo). Cada fonte de erro se propaga pela fórmula.
opinion: |-
  O IMR foi introduzido por Fearon et al. em 2003 e validado em modelo suíno com obliteração da microcirculação por microesferas. A lógica é a lei de Ohm: resistência igual a pressão sobre fluxo. Como o fluxo é proporcional a 1/tempo médio de trânsito, IMR é a pressão distal multiplicada pelo tempo de trânsito em hiperemia. Depois, no IAMCSST, o IMR se correlacionou com o tamanho do infarto e predisse mortalidade. Num registro de 253 pacientes, IMR > 40 após ICP primária foi o único preditor independente de morte ou internação por insuficiência cardíaca em 1 ano. A validação ocorreu em destruição microvascular extensa e foi estendida a populações como a ANOCA, em que as diferenças são menores.

  A termodiluição contínua foi validada contra PET com ¹⁵O-H₂O e mede fluxo e resistência absolutos. Sua variabilidade é de cerca de 12%, contra cerca de 24% da termodiluição em bolus. O IMR não se correlaciona com a resistência microvascular hiperêmica absoluta por termodiluição contínua: r = 0,06, p = 0,425 (Gallinoro et al., JACC Interv 2023). No estudo de reprodutibilidade de Gallinoro (EuroIntervention 2023), CFR contínua e CFR em bolus discordaram em 35,3% da classificação com corte de 2,5; IMR e MRR tiveram r = 0,1 (p = 0,305). Fawaz et al. (IJC Heart Vasc 2024; 96 pacientes, 116 vasos) encontraram discordância de 35% e 39% nos cortes de CFR de 2,0 e 2,5. Jansen et al. (JAHA 2023; 246 pacientes com ANOCA) relataram discordância alta entre os métodos e observaram que CFR e IMR por bolus não se correlacionaram com sintomas, enquanto os parâmetros da termodiluição contínua se correlacionaram. Num estudo de Stanford em 20 pacientes transplantados (Circ Cardiovasc Interv 2025), o IMR teve ICC de 0,95. O comportamento do IMR parece depender da população.

  Vejo um raciocínio circular na validação do IMR. Ele distinguiu microcirculação lesada de intacta em cenários extremos. A partir daí, assumimos que mede resistência com precisão, que classifica bem em outros cenários e que serve de referência para outros métodos. É como um termômetro que distingue gelo de água fervente: isso não prova que distingue 36,8 °C de 37,2 °C.

  O CorMicA mostrou que tratamento estratificado por IMR e CFR melhorou angina e qualidade de vida em 1 ano. Para mim, isso mostra que o IMR funciona como triagem grosseira, e não que ele mede com precisão.

  O que Tsai et al. mostram: os métodos atuais de angio-IMR não substituem o PW-IMR no paciente individual, e o acúmulo de erros nas fórmulas por contagem de quadros reduz o sinal abaixo da utilidade clínica. O que o estudo não mostra: que o angio-IMR é inútil. Valor prognóstico e acurácia diagnóstica são propriedades diferentes; uma estimativa ruidosa que se associa a desfechos pode servir para triagem ou estratificação.

  Minha leitura: o PW-IMR não é a referência estável que tratamos como tal. A termodiluição contínua (Rmicro, MRR) é mais reproduzível e se associa a sintomas, mas é pouco disponível e tem limitações próprias. Os próximos passos que proponho:

  - Validar o angio-IMR e futuras ferramentas sem guia contra Rmicro como referência principal.
  - Fazer estudos prospectivos em coortes de ANOCA pura, com endotipagem completa (incluindo acetilcolina) e poder suficiente.
  - Trocar as equações de CFD em quadro único por análise da cine completa com aprendizado de máquina.
  - Aceitar que a microcirculação pode exigir mais de uma medida, e não um índice único.
tags:
  - fisiologia-imagem
  - imr
  - microcirculacao
cover: ''
draft: false
---
