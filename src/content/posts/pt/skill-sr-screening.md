---
title: "sr-screening: skill do Claude para triagem de revisão sistemática"
date: 2026-10-23
lang: pt
translationKey: skill-sr-screening
description: "Skill gratuita do Claude que conduz uma revisão sistemática da pergunta PICO até a tabela de extração e as contagens PRISMA 2020, com aprovação humana de cada exclusão."
category: computacao
tags: [claude, skills, revisao-sistematica, prisma]
draft: false
---

O sr-screening é uma skill do Claude para revisão sistemática. Ela cobre o trabalho entre a pergunta clínica e a tabela de extração de dados. O código e as instruções estão no repositório [clinical-ai-skills](https://github.com/stefanogarzon/clinical-ai-skills), com download em [sr-screening.zip](https://github.com/stefanogarzon/clinical-ai-skills/raw/master/skills/sr-screening.zip).

## Divisão de trabalho

A IA lê, propõe e registra. O usuário decide. Nenhum registro é excluído sem aprovação. Cada proposta de exclusão nomeia o critério que falhou. Registros incertos são decididos um a um pelo usuário. A aprovação em bloco só é permitida depois que o usuário vê as exclusões agrupadas por motivo.

A confiança que a IA atribui a cada proposta é autoavaliada (alta, média ou baixa). A skill informa isso ao usuário e não a apresenta como probabilidade.

## Etapas

1. **Pergunta e protocolo.** PICO(S), critérios de inclusão e exclusão testáveis e campos de extração. A skill sugere registrar o protocolo no PROSPERO antes da triagem.
2. **Estratégia de busca.** Uma string por base (PubMed, Embase, Cochrane), com a explicação de cada bloco. O usuário roda as buscas e envia os arquivos exportados.
3. **Importação e deduplicação.** Arquivos nbib, RIS ou CSV. Reimportar o mesmo arquivo não duplica registros.
4. **Calibração.** O usuário tria cerca de 40 registros às cegas. A skill mostra onde a proposta da IA diverge da decisão humana.
5. **Triagem de título/resumo e de texto completo.** Em lotes, com marcadores de desenho e de desfecho e trechos do artigo destacados.
6. **Extração.** Cada valor extraído traz a página e a citação literal. Valor ausente no texto vira `not_reported`. Valor ilegível (PDF escaneado, tabela em imagem) vira `manual_extraction_required`.
7. **Exportação.** Tabela de extração (CSV/XLSX), contagens PRISMA, registro de decisões e arquivo RIS dos incluídos.

## Verificação por código

O estado da revisão fica em `project.json` e só é alterado por um script Python (`srs.py`). O script recusa entrada inválida. Ele rejeita, por exemplo, citação tirada da introdução do artigo como evidência do que o estudo fez. A IA não edita o arquivo à mão.

A interação usa botões e páginas interativas ao lado do chat. O usuário marca as decisões e cola o resultado de volta, sem digitar listas de identificadores.

## Limites

A skill não faz metanálise, avaliação de risco de viés nem triagem dupla independente. Ela não roda buscas no Embase ou no Scopus pelo usuário e não baixa artigos pagos. Os limites de uso do plano do Claude se aplicam.

## Instalação

1. Baixar o `.zip`.
2. Em Claude: **Settings → Capabilities**, ativar *Code execution and file creation*.
3. **Settings → Capabilities → Skills → Upload skill**, escolher o zip.
4. Modelo recomendado: Sonnet.
5. Abrir uma conversa e descrever a revisão.

Ao fim de cada sessão, a skill entrega o `project.json` atualizado. Na sessão seguinte, o usuário envia o arquivo para retomar.

## Licença

Código sob MIT. Texto da skill e documentação sob CC BY 4.0.
