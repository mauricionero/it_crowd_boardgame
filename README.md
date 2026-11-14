# The IT Crowd — Board Game

Protótipo cooperativo inspirado em *The IT Crowd*: os jogadores administram chamados, telefones, usuários, equipamentos, incêndios e o **The Boss Stress**.

## Abrir o projeto

- [Manual de regras](IT_Crowd_rulebook.md)
- [Playtest interativo](templates/cards/playtest-model.html)
- [Cartas e exportação para PDF](templates/cards/call-model.html)
- [Dados das cartas e peças](templates/cards/card-data.js)

Abra os arquivos HTML em um navegador moderno. O playtest é um protótipo visual com drag and drop e armazenamento local das posições; ele não aplica validações automáticas das regras.

## Gerar imagens das cartas

As páginas de playtest e de exportação usam primeiro os PNGs gerados em `exported-images/cards/`. Se eles não existirem, o navegador usa a versão HTML como fallback.

É necessário ter Python 3 e Google Chrome instalados. Na raiz do projeto, execute:

```bash
python3 scripts/export_card_images.py
```

O script pergunta se deve regenerar todas as imagens ou apenas as ausentes/desatualizadas. Também é possível gerar uma carta específica:

```bash
python3 scripts/export_card_images.py --code H16 --resolution both --regenerate all
```

Resoluções disponíveis:

- `low`: 96 DPI, para o modo **Qualidade rascunho**.
- `high`: 300 DPI, para o modo **Qualidade full**.
- `both`: gera as duas versões; é o padrão.

Os arquivos gerados são ignorados pelo Git. Depois de gerar ou atualizar imagens, recarregue o [playtest](templates/cards/playtest-model.html) ou a página de [exportação](templates/cards/call-model.html).

## Exportação para Tabletop Simulator

Os scripts [export_tts.py](export_tts.py) e [export_tts_json.py](export_tts_json.py) geram, respectivamente, os spritesheets e o save JSON. Veja o guia completo em [tts-export/README.md](tts-export/README.md).

