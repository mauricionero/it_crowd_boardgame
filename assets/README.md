# Organização dos assets

## Tabuleiros

- `boards/base/` — tabuleiro principal e versões aprovadas.
- `boards/drafts/` — rascunhos e versões intermediárias.
- `boards/missions/` — extensões e tabuleiros específicos de missão.
- `boards/overlays/` — overlays, marcadores de salas e elementos sobrepostos.

## Cartas

- `cards/calls/` — Chamados, borda verde.
- `cards/users/` — Usuários, borda azul.
- `cards/events-generic/` — Eventos Genéricos, borda roxa.
- `cards/events-mission/` — Eventos de Missão, borda vermelha.
- `cards/items-consumables/` — Itens Consumíveis, borda amarela.
- `cards/items-equipment/` — Itens Equipamentos, borda laranja.
- `cards/characters/` — Personagens jogáveis e NPCs.
- `cards/references/` — Rotina e cartas de referência dos jogadores.

## Outros componentes visuais

- `tiles/` — Tiles reversíveis e espaços do tabuleiro. Os modelos editáveis ficam em `../templates/tiles/`.
- `illustrations/characters/` — Ilustrações de personagens.
- `illustrations/locations/` — Ilustrações de ambientes.
- `illustrations/icons/` — Ícones e símbolos.
- `illustrations/cards/calls/` — Artes individuais das cartas de Chamado, nomeadas pelo código (`c1.png`, `c2.png`, ...).
- `pawns/` — Imagens opcionais para o centro dos peões de personagens e usuários.
- `tokens/` — Arte de marcadores e fichas.

O modelo de impressão do tabuleiro fica em `../templates/boards/board-model.html`.

## Templates editáveis

- `../templates/cards/` — Modelos HTML/CSS para montar cartas sem depender de uma imagem rasterizada única.
