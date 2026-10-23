---
title: "A palestra de Packer no ESC 2026 sobre LLMs na decisão clínica"
date: 2026-08-30
lang: pt
translationKey: packer-llm-esc-2026
description: "Milton Packer argumentou contra LLMs comerciais na decisão clínica. Os dois estudos citados não envolvem LLMs, e a evidência randomizada localiza o déficit na passagem entre médico e ferramenta."
category: computacao
tags: [ia, llm, vies-de-automacao]
draft: false
---

No ESC Congress 2026, em Munique, o Dr. Milton Packer argumentou contra o uso dos grandes modelos de linguagem (LLMs) comerciais atuais na decisão clínica. O histórico dele em ensaios de insuficiência cardíaca justifica avaliar a palestra com cuidado. Discordo da conclusão. Os slides foram publicados no X.

## Escopo e teses da palestra

A palestra tratou de LLMs geradores de texto usados por médicos para tomar decisões clínicas. O slide inicial excluiu IA proprietária para leitura de ECG e ecocardiograma, documentação, formulários de convênio e organização de consultório. Seguiram-se cinco teses, nas palavras dele:

1. "Commercial Large Language Models Are Trained on the Lowest Quality Information"
2. "Commercial Large Language Models Cannot Read Most Papers Physicians Care About, But They Pretend They Can"
3. "Commercial LLMs Falsely Claim They Can Update With New Information"
4. "Commercial Large Language Models Cannot Weigh Evidence, Reason or Think"
5. "Commercial LLMs Do Not Seek the Truth. They Seek to Seduce You in the Shortest Possible Time"

Ele resumiu as cinco como "uma pessoa mal treinada que também sofre de demência". A analogia inverte o mecanismo que descreve. Demência é a perda progressiva de uma função que já existiu. Um conjunto de pesos congelado nunca teve essa função e não declina. Ele encerrou perguntando se um copiloto com essa descrição deveria receber decisões clínicas.

## Os dois estudos citados

As cinco teses vieram com duas citações. Nenhum dos estudos envolve LLM. Os dois foram apresentados como evidência de um mecanismo: viés de automação e perda de habilidade sob suporte à decisão.

**Budzyń et al.** (Lancet Gastroenterol Hepatol 2025;10:896-903) apareceu no slide como Romańczyk et al., que é o segundo autor e autor correspondente. Quatro centros poloneses introduziram detecção de pólipos por IA no fim de 2021. O estudo comparou colonoscopias sem IA nos 3 meses antes dessa data com colonoscopias sem IA nos 3 meses depois.

| Período | Taxa de detecção de adenoma sem IA |
|---|---|
| Antes da introdução da IA | 28,4% (226/795) |
| Depois da introdução da IA | 22,4% (145/648) |

Diferença absoluta de −6,0 pontos percentuais (IC 95% −10,5 a −1,6; p=0,0089), OR ajustado 0,69 (0,53 a 0,89). Análises por endoscopista não foram possíveis, então o mecanismo dentro de cada operador é inferido, e não medido. O desenho é retrospectivo e observacional, comparando dois períodos. O slide o descreveu como randomizado e como medida de desempenho após retirada da IA. A randomização pertencia ao estudo original, ACCEPT, e a comparação é antes contra depois da exposição. Os autores escreveram "might reduce" e "suggesting a negative effect".

**Dratsch et al.** (Radiology 2023;307:e222176) pediu a 27 radiologistas que lessem 50 mamografias com sugestões de um suposto sistema de IA. O sistema era simulado.

| Experiência do leitor | Acurácia, sugestão correta | Acurácia, sugestão errada |
|---|---|---|
| Inexperiente | 79,7% | 19,8% |
| Experiência moderada | 81,3% | 24,8% |
| Muito experiente | 82,3% | 45,5% |

Não houve braço sem auxílio. O slide destacou os leitores inexperientes. A diferença aparece em todos os grupos de experiência.

## Evidência randomizada sobre LLMs

**Goh et al.** (JAMA Netw Open 2024;7:e2440969; NCT06157944) randomizou 50 médicos para LLM mais recursos convencionais ou recursos convencionais isolados, em vinhetas clínicas. O escore mediano de raciocínio diagnóstico foi 76% vs 74%, diferença ajustada de 2 pontos (IC 95% −4 a 8; p=0,60). Numa comparação secundária exploratória, o modelo sozinho pontuou 16 pontos acima do grupo controle (IC 95% 2 a 30; p=0,03). Essa comparação não foi randomizada.

**Healy et al.** (Diagnosis 2026, doi 10.1515/dx-2025-0176) usou desenho intraindivíduo com 22 médicos do Reino Unido. O acesso ao LLM seguiu sequência alternada fixa, e só a ordem dos casos foi randomizada. O acesso ao LLM elevou os escores em relação aos recursos convencionais, 74,3% vs 65,7% (p=0,001). Os médicos com LLM ainda pontuaram 21,3 pontos abaixo do modelo sozinho (p<0,001). Só 30% das perguntas dos casos foram submetidas ao modelo.

Na minha leitura, o modelo pontua acima de médicos com recursos convencionais. A passagem do modelo para o médico não captura nada desse ganho no Goh e captura parte dele no Healy. A diferença está entre o médico e a ferramenta. Os dois estudos usaram vinhetas, e essa limitação vale também para o resultado favorável ao modelo.

## Teses sem âncora

O número de mais de 40.000 artigos predatórios por ano vem sem denominador, sem fração do corpus e sem medida de influência na resposta. A composição do treinamento não pode ser auditada fora dos desenvolvedores, então a tese não pode ser testada em nenhuma direção.

A tese 5 afirma que "nothing you say can move a LLM to ignore its training" e que os modelos não checam a validade da resposta. A primeira parte está parcialmente certa. Rodar o modelo para inferência não muda o treinamento: os pesos são fixos, e nenhum prompt os altera. A janela de contexto muda aquilo em que o modelo se baseia e, portanto, a resposta. Recuperação de fontes curadas, harnesses e escopo delimitado fazem isso de forma deliberada. A segunda parte é verdadeira, e também vale para médicos. O erro clínico é corrigido por estrutura externa: segunda leitura, checklists, trilhas de auditoria. A autoverificação interna falha como critério para os dois.

A tese 5 também conflita com a tese 2. A tese 2 afirma que os modelos não leem os artigos que importam aos médicos e inventam a partir de título e resumo. Carregar o texto completo na janela de contexto é a correção que a tese 2 sugere e a tese 5 exclui. Um slide posterior submeteu a moção a um LLM e usou a resposta a favor do argumento. Um instrumento declarado não confiável não pode depois servir de testemunha.

## Perda de habilidade

O argumento da perda de habilidade não depende da acurácia do modelo e precisa de uma condição. A perda de habilidade acompanha a substituição. Os médicos deixaram de calcular com régua de cálculo e de manipular os próprios medicamentos. Proponho três condições em que a perda é tolerável:

- o instrumento é validado para a tarefa;
- está disponível no ponto de necessidade;
- suas falhas são visíveis ao operador.

A colonoscopia assistida por IA tem validação regulatória e disponibilidade no ponto de atendimento. A visibilidade da falha é a condição que o Dratsch testa, e é a que falha. O operador sem auxílio é o controle da ferramenta, e esse controle é acionado depois que a ferramenta já errou.

O Budzyń importa enquanto houver trabalho sem auxílio: falha de equipamento, serviços sem a tecnologia, casos fora da indicação do dispositivo. O Budzyń relata só um lado da conta. A taxa de detecção com IA nos mesmos centros não foi apresentada, então o efeito líquido para os pacientes nos dois modos é desconhecido. O viés de automação é uma propriedade do operador e precisa de contramedida no operador.

## O que a palestra estabelece

LLMs comerciais usados sem procedência, sem escopo delimitado e sem trilha de auditoria não são instrumentos defensáveis de decisão clínica. Numa coorte retrospectiva, a exposição contínua ao suporte à decisão se associou a pior desempenho sem auxílio.

A palestra não estabelece que a ferramenta tem desempenho inferior ao do médico, nem que o déficit está no modelo. Dois estudos localizam o déficit na passagem entre os dois.

## Condições para uso competente

Estas condições não foram testadas contra desfecho. Um ensaio de uso competente teria de mantê-las fixas.

- Recuperação sobre um corpus definido, montado por você: diretrizes, ensaios, protocolos institucionais. Não a web aberta.
- Resposta ancorada em fonte, com cada citação aberta e conferida antes de entrar numa decisão.
- Escopo declarado antes. Gerar diagnóstico diferencial, checar dose e triar literatura são tarefas diferentes, com custos de falha diferentes.
- Trilha de auditoria: prompt, resposta, versão do modelo e registro da revisão humana.
- Prática sem auxílio programada, enquanto houver trabalho sem auxílio no serviço. Quando a ferramenta se torna universal e permanente, o desempenho sem auxílio deixa de ser um desfecho relevante.

Nada disso vem de abrir um chatbot de consumo e esperar uma resposta precisa, que é o fluxo pressuposto na maior parte deste debate. O Dr. Packer descreveu essa interface com precisão. A conclusão dele vai além da evidência que apresentou. Uma interface padrão ruim é argumento para construir uma melhor.
