---
title: "Exemplo: o que o valor de p não diz"
date: 2026-10-12
lang: pt
translationKey: exemplo-valor-p
description: Texto de exemplo sobre valor de p.
category: estatistica
tags: [inferência]
---
Custa US$ 10 e US$ 20. A média amostral é

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i
$$

```mermaid
flowchart LR
  A[Hipótese] --> B[Dados] --> C[Valor de p]
```

```r
t.test(x, mu = 0)
```
