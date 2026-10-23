---
title: "Múltiplas comparações e desfechos secundários"
date: 2026-10-23
lang: pt
translationKey: multiplas-comparacoes-desfechos-secundarios
description: "Como o número de testes de um ensaio aumenta a chance de resultado significativo por acaso, e como ler desfechos secundários e subgrupos com esse problema em mente."
category: estatistica
tags: [metodos, multiplicidade, desfechos-secundarios, subgrupos]
draft: true
---

## Conceito

Cada teste estatístico feito com $\alpha = 0{,}05$ tem 5% de chance de dar significativo quando não há efeito. Um ensaio raramente faz um teste só. Ele compara vários desfechos, olha subgrupos, combina desfechos em compostos e analisa os dados em mais de um momento. Cada comparação adicional aumenta a chance de pelo menos um resultado falso-positivo no estudo.

Friedman e colaboradores citam uma revisão de ensaios publicados em revistas médicas de grande circulação. A mediana foi de oito testes de significância por ensaio. Alguns ensaios relataram mais de vinte. Pocock e colaboradores examinaram 45 relatos de ensaios comparativos no BMJ, no Lancet e no NEJM. Os resumos tendiam a destacar os desfechos com maior significância estatística.

## Como funciona

Com $k$ testes independentes, cada um a $\alpha$, a probabilidade de pelo menos um falso-positivo é:

$$P = 1 - (1 - \alpha)^k$$

Com 20 testes independentes a 0,05, espera-se cerca de um resultado significativo por acaso.

Os procedimentos de correção controlam o erro tipo I global (*family-wise error rate*):

- **Bonferroni.** Divide $\alpha$ pelo número de comparações: $\alpha/k$. Com dez comparações a 0,05, cada teste precisa de $p < 0{,}005$. O método é conservador e reduz o poder.
- **Holm.** Ordena os valores de p do menor para o maior. O menor é comparado com $\alpha/k$, o seguinte com $\alpha/(k-1)$, e assim por diante. O teste para no primeiro passo não significativo. Nenhuma hipótese seguinte pode ser rejeitada depois disso.
- **Hochberg.** Procedimento em sentido inverso (*step-up*), com o mesmo objetivo de controle global.
- **Teste hierárquico.** Os desfechos são ordenados por prioridade científica no protocolo. Cada um só é testado se o anterior foi significativo.

Quando os testes são correlacionados, como ocorre com desfechos relacionados ou subgrupos sobrepostos, as correções padrão tendem a corrigir em excesso.

O custo da correção é o poder. Um limiar mais rígido exige amostra maior para detectar o mesmo efeito. Por isso o tamanho amostral costuma ser calculado para um único desfecho primário. Ensaios com mais de um desfecho coprimário precisam de um cálculo amostral próprio para essa situação.

## Erros comuns ao ler um artigo

- Tratar um desfecho secundário significativo como confirmação, quando o primário foi neutro.
- Ler o valor de p de um subgrupo como evidência isolada de efeito naquele subgrupo.
- Ignorar quantos testes foram feitos e considerar só os que aparecem no resumo.
- Aceitar um procedimento de correção escolhido depois de ver os dados. Métodos diferentes podem dar conclusões diferentes com os mesmos dados.
- Somar significâncias de vários desfechos como se fossem evidências independentes.

## O que conferir ao ler um ensaio

1. O desfecho primário é único e foi definido no protocolo antes do início do estudo.
2. O protocolo ou o plano de análise estatística define o método de controle da multiplicidade (Bonferroni, Holm, hierárquico ou outro).
3. O artigo informa o número total de comparações feitas, e não só as apresentadas.
4. Os desfechos secundários e os subgrupos estão rotulados como exploratórios quando não há controle de multiplicidade.
5. Quando primário e secundários discordam em direção, os autores discutem a discordância em vez de destacar o secundário.
6. O conjunto de desfechos aponta na mesma direção. A consistência entre desfechos relacionados pesa mais do que um valor de p isolado.

## Aplicação em cardiologia

Ensaios cardiovasculares de grande porte costumam ter um desfecho primário composto e uma lista de secundários: morte cardiovascular, hospitalização, componentes isolados do composto. Quando o primário é neutro e um componente isolado tem $p < 0{,}05$, esse achado gera hipótese. Ele não estabelece benefício. Uma alternativa descrita por Friedman é exigir $p < 0{,}01$ para desfechos secundários ou tratá-los explicitamente como exploratórios.

## Referências

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Pocock SJ, Hughes MD, Lee RJ. Statistical problems in the reporting of clinical trials. A survey of three medical journals. N Engl J Med. 1987;317:426-32. doi: 10.1056/NEJM198708133170706
- Miller RG. *Simultaneous Statistical Inference*. 2nd ed. Springer; 1981. doi: 10.1007/978-1-4613-8122-8
- Holm S. A simple sequentially rejective multiple test procedure. Scand J Stat. 1979;6:65-70.
- Hochberg Y. A sharper Bonferroni procedure for multiple tests of significance. Biometrika. 1988;75:800-2. doi: 10.1093/biomet/75.4.800
