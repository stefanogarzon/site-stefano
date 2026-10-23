---
translationKey: index-device-efficiency
title: 'Index of Device Efficiency: métrica de IVUS para o balão de corte na técnica RODIN-CUT'
date: 2026-04-08
lang: pt
description: O IDE propõe um ponto final para o preparo de lesão calcificada com balão de corte. Limiar e validação vêm das mesmas 50 lesões, e a análise preditiva se apoia em 4 lesões.
reference: 'Ungureanu C, Leibundgut G, Colletti G, Dumitrascu S, Spano A, Cocoi M, et al. Index of Device Efficiency: IVUS-Based Metric to Quantify Cutting Balloon Performance in Calcified Coronary Lesions. Catheter Cardiovasc Interv. 2026;107(7):2335-44.'
doi: 10.1002/ccd.70597
design: Estudo multicêntrico retrospectivo com IVUS seriado
'n': 47
summary: |-
  O estudo propõe o Index of Device Efficiency (IDE), uma razão derivada do IVUS: diâmetro luminal máximo após o balão de corte dividido pelo diâmetro nominal do balão, × 100. O objetivo é quantificar o desempenho do balão de corte em lesões calcificadas na técnica RODIN-CUT, com insuflações repetidas.

  Foram 50 lesões em 47 pacientes, com 270 pullbacks de IVUS. O platô foi definido como ganho ≤ 0,3 mm de diâmetro ou ≤ 0,5 mm² de área entre insuflações.

  | Resultado | Valor |
  |---|---|
  | IDE ≥ 100% após 1 insuflação | 40% das lesões |
  | IDE ≥ 100% após 4 insuflações | 92% das lesões, com platô depois |
  | Expansão ótima do stent, IDE ≥ 100% vs < 100% | 87% vs 10% (p = 0,007) |

  Aterectomia rotacional precedeu o balão de corte em 14% das lesões (7/50). Litotripsia foi usada depois em 4% (2/50). Balão não complacente na proporção 1:1 foi usado depois do balão de corte em 86% (43/50).
strengths: |-
  - Propõe uma métrica padronizada para o ponto final do preparo da placa, que hoje não existe.
  - Resolução de IVUS alta, com imagem após cada insuflação.
  - Uso de regressão logística penalizada de Firth para amostra pequena.
problems: |-
  - **Limiar e validação no mesmo conjunto de dados.** O corte de IDE ≥ 100%, a definição de platô e as associações preditivas foram derivados retrospectivamente das mesmas 50 lesões. Não houve divisão da amostra, bootstrap ou coorte externa. O teste mede o ajuste das próprias hipóteses.
  - **Balão de corte subdimensionado em cerca de 0,5 mm.** Com um balão de 3,0 mm em um vaso de 3,5 mm, atingir diâmetro luminal máximo ≥ 3,0 mm é uma meta baixa. O subdimensionamento é seguro e eficaz, como mostrou o estudo COPS. Mas os 92% de sucesso após quatro insuflações refletem em parte essa estratégia.
  - **Vários dispositivos no preparo.** O IDE é medido só após o balão de corte. O balão não complacente veio depois em 86% das lesões. A área mínima do stent incorpora esse efeito. O artigo não informa a área luminal mínima imediatamente antes do stent nem separa o ganho do balão de corte do ganho do balão não complacente.
  - **Sem grupo controle.** Sem comparação com angioplastia convencional, litotripsia isolada ou aterectomia isolada, não se distingue um efeito da técnica de um efeito físico de insuflações repetidas em alta pressão com qualquer balão.
  - **Análise preditiva com 4 lesões.** Após quatro insuflações, só 4 lesões ficaram com IDE < 100%. A comparação de 87% vs 10% é de 46 vs 4 lesões. Nenhum método estatístico compensa um denominador de 4. O artigo não descreve essas 4 lesões: se precisaram de aterectomia, se eram as mais calcificadas ou se eram de outro território.
  - **O platô é a regra de parada.** O protocolo manda insuflar até não haver mais ganho luminal. Relatar que a maioria das lesões chegou ao platô após quatro insuflações descreve o protocolo.
  - **Sem comparação com a área luminal mínima.** A área luminal mínima já é validada no IVUS e ligada à expansão do stent e a desfechos. Não há comparação de estatística C, reclassificação ou curva de decisão. Se a área pós-balão de corte prevê a expansão tão bem quanto o IDE, o IDE reapresenta informação existente.
  - **Diâmetro versus área.** O IDE usa diâmetro máximo. A expansão ótima (critérios ULTIMATE) usa área mínima do stent > 5,0 mm² e expansão > 90% da área de referência distal. Em lesões excêntricas ou elípticas, um diâmetro máximo grande pode coexistir com diâmetro mínimo restrito e área subótima.
opinion: |-
  O artigo explica o efeito das insuflações repetidas por fluência (creep) e fadiga do material. No modelo viscoelástico de Kelvin-Voigt, a fluência exige carga sustentada, e não pulsos de 5 a 10 segundos. Na mecânica de fratura de Griffith, a propagação da fissura depende da geometria da fissura e da concentração de tensão na ponta, e também favorece tensão sustentada. Os dois modelos indicam que o tempo sob carga importa, além do número de ciclos.

  Isso deixa duas perguntas sem teste. Um balão não complacente com insuflações mais longas ou repetidas teria ganho luminal parecido? O balão não complacente usado em 86% das lesões pode ter feito boa parte do trabalho. E o próprio balão de corte teria melhor resultado com insuflações mais longas? O protocolo usa 5 a 10 segundos; uma insuflação de 60 segundos poderia superar quatro de 10 segundos.

  Nas duas lesões que precisaram de litotripsia, a litotripsia superou um limite que o balão de corte não ultrapassou. Isso indica um limite do dispositivo: cálcio espesso ou profundo demais para fissuras iniciadas pelos aterótomos. A teoria de Griffith prevê isso: esgotadas as fissuras que podem se propagar, é preciso outro mecanismo de tensão.

  O estudo mostra que quatro insuflações do balão de corte produzem área luminal maior que uma. É um resultado esperado, mas precisava ser medido. Antes deste estudo, dizer que o balão chegou ao limite após quatro insuflações era conjectura.

  O resto (valor preditivo, platô e a própria métrica) exige validação prospectiva em coorte independente, com limiares pré-especificados, desfechos clínicos, braço comparador, registro de todo o preparo com vários dispositivos e comparação direta com a área luminal mínima. Hoje os dados descrevem a viabilidade e a reprodutibilidade de uma medida, e não sua utilidade clínica.
tags:
  - cto-pci-complexa
  - calcio
  - balao-de-corte
  - ivus
cover: ''
draft: false
---
