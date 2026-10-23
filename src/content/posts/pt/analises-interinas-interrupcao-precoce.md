---
title: "Análises interinas e interrupção precoce: O'Brien-Fleming, Pocock e Haybittle-Peto"
date: 2026-10-23
lang: pt
translationKey: analises-interinas-interrupcao-precoce
description: "Por que olhar os dados de um ensaio várias vezes infla o erro tipo I, como as fronteiras de O'Brien-Fleming, Pocock e Haybittle-Peto controlam esse erro, e o que conferir quando um ensaio é interrompido cedo."
category: estatistica
tags: [metodos, analise-interina, monitoramento, interrupcao-precoce]
draft: true
---

## Conceito

Ensaios longos têm análises interinas. Um comitê independente de monitoramento revisa os dados acumulados em reuniões programadas. O objetivo é interromper o estudo se houver benefício claro, dano ou futilidade.

Cada análise interina é um teste adicional sobre o mesmo desfecho. Se cada análise usar o limiar de 1,96 (bilateral, $\alpha = 0{,}05$), a probabilidade de algum resultado falso-positivo ao longo do estudo fica acima de 5%. Os métodos sequenciais de grupo definem fronteiras de parada que mantêm o erro tipo I global no nível nominal.

## Como funciona

O ensaio planeja $K$ análises. Em cada análise $k$, calcula-se a estatística $Z_k$ e compara-se com uma fronteira $c_k$. Se $|Z_k| > c_k$, o ensaio pode parar.

**Pocock.** Usa o mesmo valor crítico em todas as análises. Com cinco análises e $\alpha$ bilateral de 0,05, o valor crítico é cerca de 2,413, maior que 1,96. A consequência prática: uma estatística final moderadamente alta pode ser julgada não significativa, embora fosse significativa num teste único.

**O'Brien-Fleming.** O valor crítico cai ao longo do estudo:

$$c_k = c_{OBF}\sqrt{K/k}$$

Com cinco análises e $\alpha$ bilateral de 0,05, $c_{OBF}$ é cerca de 2,04. As primeiras análises exigem valores muito altos. Esses valores podem ser limitados (por exemplo, a 3,5) sem alterar de forma relevante as fronteiras finais. O valor crítico final fica próximo ao de um teste único: cerca de 2,05 contra 1,96, quando há menos de dez análises.

**Haybittle-Peto.** Usa um valor crítico alto e fixo, como 3,0, em todas as análises interinas. Na análise final aplica-se praticamente o valor usual. A regra é simples, mas não garante um erro tipo I global exato.

**Funções de gasto de alfa (*alpha spending*).** Lan e DeMets generalizaram esses métodos. O alfa total é distribuído ao longo da fração de informação acumulada, e as análises não precisam ocorrer em datas fixas. Uma função do tipo O'Brien-Fleming gasta pouco alfa no início. Uma do tipo Pocock gasta mais cedo.

Muitos comitês preferem fronteiras conservadoras no início. Com poucos eventos, alguns eventos adicionais mudam o resultado de forma importante.

## Erros comuns ao ler um artigo

- Interpretar o efeito estimado num ensaio interrompido por benefício como estimativa precisa. Bassler e colaboradores compararam 91 ensaios interrompidos por benefício com 424 ensaios não interrompidos sobre as mesmas perguntas. A razão dos riscos relativos foi 0,71 (IC 95% 0,65 a 0,77). A diferença independeu de haver regra de parada e foi maior nos ensaios com menos de 500 eventos.
- Ignorar o número de eventos no momento da parada. Poucos eventos significam estimativa imprecisa, mesmo com $p$ pequeno.
- Desconsiderar a fronteira usada e comparar o valor de p interino com 0,05.
- Não verificar se as análises interinas e a regra de parada estavam no protocolo.
- Tratar desfechos secundários e de segurança de um ensaio interrompido como se tivessem o poder planejado.

## O que conferir ao ler um ensaio

1. O protocolo define o número de análises interinas, a fração de informação de cada uma e o método de fronteira.
2. Um comitê independente fez as análises interinas.
3. O artigo informa a fronteira cruzada e o valor da estatística no momento da parada.
4. O número de eventos acumulados é compatível com uma estimativa precisa.
5. Há fronteiras separadas para dano e futilidade, que costumam ser assimétricas em relação à fronteira de benefício.
6. O efeito observado é plausível frente a ensaios prévios da mesma intervenção.

## Aplicação em cardiologia

Ensaios cardiovasculares orientados por eventos usam com frequência fronteiras do tipo O'Brien-Fleming ou Haybittle-Peto. Essas fronteiras tornam a parada precoce por benefício improvável no início e preservam um limiar final próximo de 0,05. Quando um ensaio para cedo por benefício, a leitura deve considerar a fronteira, o número de eventos e a largura do intervalo de confiança.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Pocock SJ. Group sequential methods in the design and analysis of clinical trials. Biometrika. 1977;64:191-9. doi: 10.1093/biomet/64.2.191
- O'Brien PC, Fleming TR. A multiple testing procedure for clinical trials. Biometrics. 1979;35:549-56. doi: 10.2307/2530245
- Haybittle JL. Repeated assessment of results in clinical trials of cancer treatment. Br J Radiol. 1971;44:793-7. doi: 10.1259/0007-1285-44-526-793
- Peto R, Pike MC, Armitage P, Breslow NE, et al. Design and analysis of randomized clinical trials requiring prolonged observation of each patient. I. Introduction and design. Br J Cancer. 1976;34:585-612. doi: 10.1038/bjc.1976.220
- Lan KKG, DeMets DL. Discrete sequential boundaries for clinical trials. Biometrika. 1983;70:659-63. doi: 10.2307/2336502
- Bassler D, Briel M, Montori VM, Lane M, et al. Stopping randomized trials early for benefit and estimation of treatment effects: systematic review and meta-regression analysis. JAMA. 2010;303:1180-7. doi: 10.1001/jama.2010.310
