---
title: "Não inferioridade: margem e população de análise"
date: 2026-10-23
lang: pt
translationKey: nao-inferioridade-margem
description: "Explica como se define e se testa a margem de não inferioridade, por que a análise por intenção de tratar favorece a conclusão de não inferioridade e o que conferir ao ler esse tipo de ensaio."
category: estatistica
tags: [metodos, nao-inferioridade, itt, ensaios-clinicos]
draft: false
---

## Conceito

Um ensaio de não inferioridade compara um tratamento novo com um controle ativo de eficácia já estabelecida. O objetivo é excluir uma perda de eficácia maior que um limite aceitável. Esse desenho se justifica quando o tratamento novo oferece outra vantagem: menor toxicidade, menor custo, administração mais simples ou melhor qualidade de vida.

Um ensaio de equivalência testa se a diferença fica dentro de uma faixa nos dois sentidos. O de não inferioridade testa só um sentido. Ter um controle ativo não torna um ensaio automaticamente de não inferioridade. O que define o tipo é a pergunta declarada.

## A margem

A margem $\delta$ é a maior perda de eficácia tolerada. Ela deve estar no protocolo, fixada antes do início, e ter justificativa clínica e estatística.

Para um desfecho desfavorável expresso como risco relativo, as hipóteses são:

$$H_0: RR_{I/C} \geq \delta \quad \text{versus} \quad H_a: RR_{I/C} < \delta, \quad \delta > 1$$

Declara-se não inferioridade quando o limite superior do IC 95% bilateral (ou 97,5% unilateral) fica abaixo de $\delta$.

A margem depende de ensaios prévios do controle contra placebo. Eles fornecem o efeito histórico que a margem preserva em parte. A escolha equilibra dois pontos: a margem precisa ser pequena para convencer e grande o bastante para um tamanho amostral viável. Margens absolutas mudam de significado quando a taxa de eventos observada difere muito da taxa assumida no planejamento. No SPORTIF V (ximelagatrana versus varfarina na fibrilação atrial), a taxa do desfecho primário foi 1,6% ao ano com ximelagatrana e 1,2% ao ano com varfarina (diferença 0,45% ao ano; IC 95% −0,13% a 1,03%). A não inferioridade foi declarada pelo critério pré-definido (p<0,001). O leitor precisa comparar a margem absoluta com a taxa de 1,2% ao ano do controle.

## Tamanho amostral

Para desfecho binário, assumindo taxas iguais nos dois braços ($p$), o tamanho total é:

$$2N = \frac{4\,p(1-p)\,(Z_\alpha + Z_\beta)^2}{\delta^2}$$

com $\delta$ na escala de diferença absoluta. A amostra cresce com o inverso do quadrado da margem. Reduzir a margem pela metade quadruplica o tamanho amostral.

## Pressupostos

A comparação indireta com um placebo hipotético depende de dois pressupostos difíceis de verificar. O efeito do controle precisa ter permanecido constante no tempo. A população atual precisa se parecer com a dos ensaios originais contra placebo.

O controle ativo precisa ser administrado com a mesma qualidade dos ensaios que estabeleceram seu benefício. O desfecho precisa ser capaz de detectar diferença entre tratamentos (sensibilidade do ensaio). Escolher desfechos semelhantes aos dos ensaios originais contra placebo ajuda nesse ponto.

## ITT versus por protocolo

Em superioridade, a análise por intenção de tratar é conservadora: a não adesão dilui a diferença e dificulta mostrar benefício. Em não inferioridade, essa mesma diluição aproxima os braços e favorece a conclusão de não inferioridade. Um ensaio mal conduzido, com muita não adesão, tende a "mostrar" não inferioridade.

A análise por protocolo, restrita aos aderentes, reflete melhor o efeito biológico. Excluir não aderentes, porém, introduz viés de direção imprevisível. Nenhuma das duas resolve o problema sozinha.

A fonte recomenda desenhar o ensaio para minimizar a não adesão, dimensioná-lo para manter o poder com a não adesão esperada e apresentar as duas análises. Quando ambas apontam para não inferioridade e a margem é razoável, a conclusão é mais sólida.

## Erros comuns ao ler um artigo

- Aceitar a margem sem procurar sua justificativa no efeito histórico do controle.
- Interpretar não inferioridade como equivalência ou como superioridade.
- Considerar a análise ITT suficiente em um ensaio de não inferioridade.
- Não verificar a adesão ao controle e o uso de medicações concomitantes entre braços.
- Aplicar uma margem absoluta planejada para uma taxa de eventos a um ensaio com taxa muito diferente.

## O que conferir ao ler um ensaio

1. Valor da margem, escala (absoluta ou relativa) e justificativa.
2. Se a margem foi definida antes do início.
3. Resultados ITT e por protocolo, e se concordam.
4. Adesão em cada braço e desequilíbrio de tratamentos concomitantes.
5. Semelhança entre população e desfecho atuais e os dos ensaios do controle contra placebo.
6. Taxa de eventos observada versus a assumida no cálculo amostral.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Capítulos sobre desenho, tamanho amostral e análise de ensaios de não inferioridade.
- Makuch R, Simon R. Sample size requirements for evaluating a conservative therapy. Cancer Treat Rep. 1978;62:1037-40.
- Blackwelder WC. "Proving the null hypothesis" in clinical trials. Control Clin Trials. 1982;3:345-53. doi: 10.1016/0197-2456(82)90024-1
- Blackwelder WC, Chang MA. Sample size graphs for "proving the null hypothesis". Control Clin Trials. 1984;5:97-105. doi: 10.1016/0197-2456(84)90116-8
- Albers GW, Diener HC, Frison L, Grind M, et al. Ximelagatran vs warfarin for stroke prevention in patients with nonvalvular atrial fibrillation: a randomized trial. JAMA. 2005;293:690-8. doi: 10.1001/jama.293.6.690
