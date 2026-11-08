# Modelos HTML de cartas

Os modelos HTML separam o layout da carta do conteúdo e das imagens finais.

- `card-model.css` — estrutura, dimensões e estilo-base.
- `card-data.js` — dados compartilhados de tipos, créditos, ícones e cartas.
- `card-renderer.js` — funções compartilhadas para gerar a frente e o verso HTML das cartas.
- `call-model.html` — modelo de impressão que importa os dados e o renderer.
- `playtest-model.html` — mesa visual inicial, com tabuleiro, baralhos empilhados, iniciativa e fichas dos personagens.
- `playtest-model.css` — layout da mesa de playtest; ainda sem regras ou drag and drop.
- `../../assets/cards/calls/call-background-model.png` — fundo visual sem arte, textos, títulos ou custos; o cabeçalho fixo é inserido pelo HTML.
- `../../assets/cards/users/user-background-model.png` — variante azul do fundo-base, usada pelas cartas de Usuário e pelas cartas de iniciativa de NPC.
- `../../assets/cards/events-generic/event-generic-background-model.png` — fundo roxo das cartas de Evento Genérico.
- `../../assets/cards/events-mission/event-mission-background-model.png` — fundo vermelho das cartas de Evento de Missão.
- Cartas de iniciativa usam o fundo azul existente de Usuário, mas recebem borda cinza, e procuram artes em `../../assets/illustrations/cards/initiative/`.
- `../../assets/illustrations/icons/call-header.png` — cabeçalho transparente `☎️ CHAMADO` usado pelo template.
- `../../assets/illustrations/icons/user-header.png` — cabeçalho transparente completo, com ícone de usuários em estilo de mensageiro instantâneo antigo e o título `USUÁRIO`.
- `../../assets/illustrations/icons/event-header.png` — cabeçalho transparente completo, com prancheta/raio e o título `EVENTOS`.
- `../../assets/illustrations/icons/mission-header.png` — cabeçalho transparente completo, com prancheta/raio e o título `MISSÃO`.
- `../../assets/illustrations/icons/routine-header.png` — cabeçalho transparente `ⓘ ROTINA` usado pela carta fixa de Rotina.
- `../../assets/illustrations/icons/call-rule-panel.png` — painel inferior transparente, repetido por linha nas cartas.
- `../tokens/token-model.css` — folha de estilo dos tokens e da trilha horizontal de Stress.
- `../boards/board-model.css` — folha A4 paisagem do tabuleiro, também incluída ao final do `call-model.html`.
- `../pawns/pawn-model.css` — discos de peões, com borda colorida e suporte a imagem central opcional.

O modelo usa o formato principal de 63 × 88 mm. Os espaços possuem `data-slot` para facilitar o preenchimento posterior por texto, ícones ou imagens PNG transparentes. Quando vazios, os slots não exibem bordas, fundos ou placeholders.

O topo do `call-model.html` possui um painel de exportação que não aparece na impressão. **Rascunho** usa somente o HTML, sem as artes completas de fundo; **Qualidade rascunho** usa os PNGs low; **Qualidade full** usa os PNGs high. O botão abre a impressão nativa do navegador, onde é possível escolher **Salvar como PDF**.

## Exportação rasterizada

O script `../../export_images.py` gera uma imagem PNG independente para cada carta em `../../exported-images/cards/`. Ele usa o Chrome headless para renderizar o mesmo HTML e CSS do modelo, sem duplicar o layout em Python. Por padrão, cada modo gera duas resoluções:

- `low`: 96 DPI, leve para o playtest.
- `high`: 300 DPI, adequada para impressão e gráfica.

```bash
python3 export_images.py --mode full
python3 export_images.py --mode no-art
python3 export_images.py --mode draft
```

Use `--resolution low` ou `--resolution high` para gerar apenas uma resolução. O modo padrão é `full` e a resolução padrão é `both`. Use `--code C1` para regenerar somente uma carta. A pasta `exported-images/` é ignorada pelo Git porque contém artefatos gerados. Tanto `call-model.html` quanto `playtest-model.html` procuram primeiro essas imagens; se elas ainda não existirem, usam o renderizador HTML como fallback. O `call-model.html` usa `high` quando **Qualidade full** está selecionada e mantém a resolução escolhida ao imprimir. Depois de regenerar os PNGs, basta recarregar as páginas.

## Exportação para Tabletop Simulator

O script `../../export_tts.py` monta folhas de baralho sem espaço entre as cartas
e gera os versos correspondentes. O script `../../export_tts_json.py` usa o
manifesto e as URLs da Cloud para criar o save com a estrutura inicial de decks
e tabuleiro. A resolução padrão é 150 DPI, suficiente para o uso no TTS e
mantendo as folhas abaixo do limite recomendado de 4096 px.

```bash
python3 ../../export_tts.py
```

Depois de enviar as imagens pelo Cloud Manager do TTS, copie as URLs para
`tts-export/cloud-urls.json` e execute:

```bash
python3 ../../export_tts_json.py
```

As missões seguem a ordem declarada em `card-data.js`; itens de cozinha e de
armário são exportados como baralhos separados.

### Instalação dos assets no TTS para Windows

Depois de clonar o repositório em outro computador, os PNGs exportados devem
ser copiados para a pasta local de imagens do Tabletop Simulator:

```text
C:\Users\<seu-usuário>\Documents\My Games\Tabletop Simulator\Mods\Images
```

Copie para essa pasta os arquivos de `tts-export/images/decks/` e
`tts-export/images/board/`. No TTS, abra `Upload > Cloud Manager` e use
`Upload All` para enviá-los à Steam Cloud. Depois, copie as URLs geradas para
`tts-export/cloud-urls.json` e rode `export_tts_json.py` novamente.

O save final deve ficar em:

```text
C:\Users\<seu-usuário>\Documents\My Games\Tabletop Simulator\Mods\Workshop\it-crowd-boardgame.json
```

Em seguida, abra `Games > Workshop` dentro do TTS. O arquivo
`cloud-urls.json` é ignorado pelo Git porque as URLs pertencem à conta Steam
que fez o upload; cada computador pode manter sua própria cópia local.

Cada regra pode declarar `nr_lines` para reservar altura proporcional ao número de linhas que precisa.

Cada carta também recebe um rodapé técnico na moldura, com o código da carta, o artista e o mês de crédito. Esses dados vêm de `CARD_CREDITS` no JavaScript; uma carta pode sobrescrever `artist` ou `date` individualmente quando necessário.

Na visualização e na impressão, as cartas são agrupadas automaticamente em folhas A4 portrait de 210 × 297 mm. Cada folha comporta 9 cartas em uma grade 3 × 3, com 2 mm de espaço entre elas para facilitar o corte. Ao adicionar mais cartas ao hash, uma nova folha é criada automaticamente a cada 9 cartas.

`resolve` é um array: cada item gera uma linha/painel independente. Isso permite representar chamados com várias etapas de resolução.

O custo de ação não aparece no modelo: cada linha de resolução custa uma ação por padrão, conforme o manual.

## Dados e artes

O objeto `cards` em `card-data.js` é a fonte compartilhada dos dados renderizados. Para criar outra carta, adicione uma nova entrada com seu código, por exemplo `C2`. As entradas `G1`–`G7` geram tiles quadrados, `T1`–`T12` geram tokens ou marcadores auxiliares e `P2`–`P7` geram peões de personagens e bombeiros. O `call-model.html` importa `card-data.js` e `card-renderer.js`; o futuro tabuleiro jogável poderá importar os mesmos dois arquivos para criar cartas arrastáveis sem duplicar o conteúdo.

`../../assets/illustrations/cards/calls/<codigo-em-minúsculas>.png`

Assim, uma entrada `C2` procura `assets/illustrations/cards/calls/c2.png`. O código também aparece no rodapé técnico da carta para identificação da versão impressa.

## Tipos de carta

`CARD_TYPES` concentra a tipagem visual e os caminhos dos assets. Cada entrada do hash deve informar seu tipo, por exemplo:

```js
type: CARD_TYPES.CALL,
```

Os tipos já previstos são `CALL`, `USER`, `GENERIC_EVENT`, `MISSION_EVENT`, `INITIATIVE`, `PLAYER_INITIATIVE`, `ROUTINE`, `CONSUMABLE_ITEM`, `EQUIPMENT_ITEM`, `REVERSIBLE_TILE`, `TOKEN` e `PAWN`. O tipo define o rótulo, a cor de borda, a cor de moldura, a pasta das ilustrações e o fundo da carta. Tiles, tokens e peões são renderizados em blocos próprios, sem entrar na grade de cartas 3 × 3; frentes e versos reversíveis ficam lado a lado na mesma folha e os blocos fluem sem quebra forçada entre categorias. O tabuleiro é acrescentado por último em uma página nomeada A4 paisagem. Novos fundos e cabeçalhos podem ser adicionados à configuração sem alterar a função de montagem.

Títulos, subtítulos, rótulos, descrições, efeitos e citações aceitam quebras manuais com `\\n`, por exemplo: `NÃO FUNCIONA...\\nSEI LÁ!`. A altura mínima da regra também considera as quebras declaradas; `nr_lines` pode reservar espaço adicional quando o texto precisar de mais área. Nas cartas de Usuário, cada linha usa duas colunas: rótulo fixo à esquerda e descrição à direita; o efeito adicional ocupa uma segunda linha da descrição quando existir. Cartas de Evento de Missão podem usar `subtitle` para exibir o ato abaixo do nome da missão.
