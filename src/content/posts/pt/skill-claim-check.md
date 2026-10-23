---
title: "claim-check: skill do Claude para buscar a evidência de uma afirmação"
date: 2026-10-23
lang: pt
translationKey: skill-claim-check
description: "Skill gratuita do Claude que busca no PubMed a evidência de uma frase de manuscrito, cita o trecho literal do artigo e mantém uma tabela de evidências em Excel por manuscrito."
category: computacao
tags: [claude, skills, pubmed, escrita-cientifica]
draft: false
---

O claim-check é uma skill do Claude para quem escreve ou lê um manuscrito. Ela trata uma afirmação por vez: busca no PubMed, mostra o trecho literal que apoia ou contradiz a frase e registra tudo numa tabela de evidências. O código está no repositório [clinical-ai-skills](https://github.com/stefanogarzon/clinical-ai-skills), com download em [claim-check.zip](https://github.com/stefanogarzon/clinical-ai-skills/raw/master/skills/claim-check.zip).

## Dois modos

**Afirmação.** Frase com direção de efeito, como "o treinamento físico reduz internações na ICFEp". Cada artigo recebe um veredito: apoia, contradiz ou apoia em parte. Os artigos que contradizem aparecem primeiro na lista.

**Pergunta.** Pergunta aberta, como "o que se sabe sobre fragilidade em pacientes de TAVI?". A skill mostra resumos curtos para o usuário escolher. Depois busca o texto completo e os trechos exatos dos artigos escolhidos.

## Regras

- Nenhuma referência, número ou citação entra sem PMID ou DOI e sem trecho literal conferido por código contra o texto do artigo.
- A evidência contrária aparece com o mesmo destaque da favorável.
- "Não encontrado" significa "não encontrado com esta busca". A busca usada fica registrada.
- Fontes primárias têm preferência. Quando o trecho vem de revisão ou diretriz, a skill nomeia o estudo original e oferece buscá-lo.
- Trecho da introdução de um artigo não vale como achado do artigo. O script rejeita.
- Só o usuário marca uma linha como verificada.
- As buscas usam apenas PubMed, PubMed Central e, se o conector estiver ativo, ClinicalTrials.gov.

## Tabela de evidências

Cada manuscrito tem um arquivo Excel. As colunas são: afirmação, veredito, achado, trecho literal, desenho e N, referência Vancouver, PMID/DOI, busca usada, verificado e notas. Uma segunda aba, "Seen, not added", guarda a evidência contrária ou parcial que o usuário viu e decidiu não citar. Abas ocultas guardam o texto-fonte, o que permite reconferir os trechos depois de edições no Excel.

A skill exporta a lista de referências em Vancouver e um bloco de DOIs para o Zotero (*Add Item by Identifier*).

## Limites

A skill faz busca direcionada e não substitui uma revisão sistemática. Ela usa apenas PubMed. Os resumos gerados pela IA aparecem rotulados como tal. A conferência literal e a aprovação do usuário sustentam o resultado.

## Instalação

1. Baixar o `.zip`.
2. Em Claude: **Settings → Capabilities**, ativar *Code execution and file creation*.
3. **Settings → Capabilities → Skills → Upload skill**, escolher o zip.
4. Ativar o conector **PubMed** (Settings → Connectors). Modelo recomendado: Sonnet.

Ao fim de cada sessão, a skill entrega o `.xlsx` atualizado. Na sessão seguinte, o usuário envia o arquivo para continuar.

## Licença

Código sob MIT. Texto da skill e documentação sob CC BY 4.0.
