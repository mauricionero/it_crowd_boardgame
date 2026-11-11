# Modelo de tiles reversíveis

`tile-model.html` gera os tiles reversíveis definidos na seção G do manual.

## Escala do cenário atual

O tabuleiro `board-base-v4-main-entrance-right-only.png` tem uma malha visual aproximada de 23 colunas × 13 linhas. Considerando o tabuleiro impresso em A4 paisagem, usando os 297 mm de largura, o tile padrão é calculado como:

```text
297 mm ÷ 23 colunas ≈ 12,9 mm
```

Essa medida fica centralizada em `TILE_SIZE_MM` no HTML e em `--tile-size` no CSS. Se o tabuleiro for impresso em outra escala, o tile deve ser ampliado ou reduzido na mesma proporção.

## Resolução de impressão

O template não fixa uma resolução em DPI porque a impressão é definida por unidades físicas (`mm`). Na visualização do navegador, a referência é 96 CSS px por polegada; em PDF ou impressão direta, texto, bordas e gradientes são renderizados pelo navegador e pela impressora na resolução escolhida.

Como referência, uma folha A4 paisagem em 300 DPI teria 3508 × 2480 px, e este tile de 12,9 mm equivaleria a aproximadamente 152 × 152 px. Para o protótipo atual, recomenda-se exportar ou imprimir em **300 DPI**, escala **100%** e com a opção de imprimir fundos ativada.

## Impressão

O arquivo gera uma única folha vertical com cada frente e verso lado a lado. Os códigos G1–G7 existem apenas no hash para organização e não são impressos nos tiles. O manual continua sendo a referência para identificar cada componente.

Os tiles usam somente ícone, estado e uma regra curta. O rótulo e os dados do componente vêm de `../cards/card-data.js`; explicações completas permanecem no manual para preservar a leitura no tamanho reduzido.
