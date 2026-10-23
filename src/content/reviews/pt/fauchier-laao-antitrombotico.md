---
translationKey: fauchier-laao-antitrombotico
title: 'Fauchier et al.: DOAC em dose reduzida versus antiplaquetários após oclusão do apêndice atrial esquerdo'
date: 2026-09-17
lang: pt
description: Após LAAO, a vantagem de SAPT sobre DAPT resiste às análises de sensibilidade do próprio artigo. A vantagem do DOAC em dose reduzida sobre DAPT não resiste.
reference: Fauchier L, Nasarre M, Pierre B, Bisson A, Lip GYH. Reduced-dose direct oral anticoagulant versus antiplatelet strategies after left atrial appendage occlusion. EuroIntervention. 2026;22:e935-e945.
doi: 10.4244/EIJ-D-26-00102
design: Coorte retrospectiva com pareamento por escore de propensão (rede TriNetX, 2010–2025)
'n': 48788
summary: |-
  O estudo usou a rede TriNetX para identificar 48.788 pacientes com FA submetidos a oclusão percutânea do apêndice atrial esquerdo (LAAO) entre 2010 e 2025. Foram feitas três comparações independentes, com pareamento 1:1 por escore de propensão em 89 covariáveis. O seguimento médio foi de 1,4 a 1,6 ano.

  O desfecho primário foi o benefício clínico líquido (NCB): morte, AVC isquêmico, IAM e sangramento maior.

  | Comparação | Pares | NCB, HR (IC 95%) |
  |---|---|---|
  | DOAC dose reduzida vs DAPT | 1.773 | 0,866 (0,782 a 0,958) |
  | SAPT vs DAPT | 4.914 | 0,865 (0,814 a 0,920) |
  | DOAC dose reduzida vs SAPT | 1.582 | 1,056 (0,947 a 1,178) |
strengths: |-
  - Maior conjunto comparativo disponível sobre terapia antitrombótica após LAAO. Os dados randomizados (ADRIFT, ADALA, ANDES) são pequenos e de curta duração.
  - As três estimativas são coerentes entre si. Se DOAC e SAPT têm HR de 0,866 e 0,865 contra DAPT, o esperado para DOAC vs SAPT é 1,001. O observado foi 1,056, diferença de 5,5%.
  - O Apêndice Suplementar 3 traz uma seção de limitações mais completa que a habitual para esse desenho. A Figura Suplementar 3 publica dados autocríticos.
  - Lista de códigos de sangramento publicada (Tabela Suplementar 1).
problems: |-
  - **DOAC vs DAPT não resiste às análises do próprio artigo.** Apliquei Benjamini-Hochberg aos 30 testes das três tabelas principais. Para DOAC vs DAPT: NCB q = 0,060, morte q = 0,075, sangramento q = 0,075. Com tempo zero no dia 28: NCB 0,904 (p = 0,15) e sangramento 0,915 (p = 0,29). Na coorte 2020–2025, o IC do NCB é 0,939 a 1,242, exclui a estimativa principal e põe o ponto do outro lado de 1. Para mortalidade, o IC pós-2020 (0,717 a 1,217) ainda contém 0,789: é imprecisão, não contradição.
  - **Riscos proporcionais não testados.** Cerca de metade dos eventos não fatais ocorreu nos primeiros 90 dias (NCB 48% e 51%, sangramento maior 50% e 52%, AVC 46% e 49%), contra 14% das mortes. O AVC precoce fica em torno de 22%/ano e depois em 5,6%/ano. Os métodos dizem que os resíduos de Schoenfeld foram testados, mas nenhum resultado aparece no artigo ou no suplemento. RMST teria sido informativo.
  - **Definição de sangramento maior por código.** Inclui R31 (hematúria), R04 (hemorragia de vias aéreas, que contém epistaxe), N93 (sangramento uterino anormal, em coorte com idade média de 78 anos e 53% homens), M25.0 (hemartrose) e S06.4 (hemorragia extradural traumática). A taxa observada é 13,8 a 15,3%/ano. Com 515 sangramentos contra 757 eventos de NCB, esse componente domina o composto, e hematúria codificada pesa o mesmo que morte.
  - **Confusão residual.** Calculei E-values (aproximação de VanderWeele para desfechos comuns) no limite do IC mais próximo de 1: 1,20 para mortalidade na comparação com DOAC, 1,21 para NCB, 1,24 para mortalidade na comparação com SAPT e 1,43 para sangramento na comparação com SAPT. Um confundidor associado cerca de 1,2 vez ao tratamento e à morte anula os achados de mortalidade. Fragilidade, cognição e capacidade funcional não estavam disponíveis.
  - **Mortalidade parecida com estratégias opostas.** DOAC e SAPT, opostos no eixo trombótico, reduzem a mortalidade contra DAPT em magnitude semelhante (0,789 e 0,839). O fator comum é não estar em DAPT, uma escolha do prescritor. A seleção do paciente julgado apto a anticoagulação empurraria o resultado nessa direção.
  - **Dois sinais trombóticos não discutidos.** Com tempo zero no dia 28, trombose relacionada ao dispositivo ou intracardíaca com DOAC vs DAPT: 2,153 (1,050 a 4,418; p = 0,03). Na coorte pós-2020, AVC isquêmico: 1,325 (1,003 a 1,751; p = 0,05), com 113 vs 88 eventos. São exploratórios e sujeitos ao mesmo problema de multiplicidade. O texto descreve as comparações que perderam significância na coorte recente e omite esta, que ganhou significância na direção oposta.
  - **Taxas anuais que não fecham.** Dividir eventos pela taxa anual dá 3.796 pessoas-ano para NCB no braço DOAC, contra um teto de 2.482 (1.773 × 1,4 ano). Também dá mais tempo em risco para desfechos não fatais que para morte. O efeito absoluto não é relatado e as contagens brutas são quase idênticas (morte 202 vs 206, NCB 757 vs 757, sangramento 515 vs 526). Não é possível calcular RRA nem NNT. Deixo como pergunta: como o TriNetX define esse denominador?
opinion: |-
  A comparação SAPT vs DAPT é a parte que eu defendo. Após Benjamini-Hochberg, três testes sobrevivem a FDR de 5%, todos do bloco SAPT: sangramento maior (q = 0,0008), NCB (q = 0,0008) e morte (q = 0,040). Com tempo zero no dia 28, o efeito aumenta (morte 0,737, sangramento 0,825, NCB 0,850, todos p < 0,0001). Na coorte 2020–2025, o NCB se mantém (0,918; 0,843 a 0,999). A hemorragia intracraniana, o desfecho de sangramento mais difícil de codificar errado, vai na mesma direção (0,673; 0,487 a 0,929; p = 0,02).

  Sobre DOAC vs SAPT, não discuto a palavra "comparável". O IC é 0,947 a 1,178, e uma margem convencional, se tivesse sido declarada, provavelmente seria atendida. Com evento tão frequente, o limite superior ainda importa: NCB em 668 de 1.582 (42,2%) com DOAC e 622 de 1.582 (39,3%) com SAPT, em 1,5 ano. Eu manteria a formulação do resumo: "nenhuma vantagem clara sobre SAPT".

  O que o artigo estabelece: após LAAO, SAPT se associa a menos sangramento codificado, menos hemorragia intracraniana e menor mortalidade que DAPT, e a associação resiste à correção de multiplicidade, à mudança do tempo zero e à restrição temporal. DAPT de rotina após LAAO não tem base empírica maior que as alternativas. O que não estabelece: que DOAC em dose reduzida supere DAPT na prática atual, ou causalidade para qualquer das três estratégias. A vantagem precoce de mortalidade do DOAC sobre SAPT (0 a 90 dias) tem índice de fragilidade de 1, e os autores dizem que ela não persiste.

  O próximo passo é um ensaio randomizado com tempo zero na alta, SAPT vs DOAC em dose reduzida vs DAPT, sangramento por BARC 3 a 5, trombose do dispositivo com protocolo fixo de imagem, adjudicação cega e margem de equivalência pré-declarada para DOAC vs SAPT. Até lá, este é o maior conjunto comparativo disponível, e vale a leitura do suplemento.
tags:
  - laao-antitrombotico
  - laao
  - observacional
cover: ''
draft: false
---
