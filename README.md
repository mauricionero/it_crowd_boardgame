# The IT Crowd — Board Game

Protótipo cooperativo inspirado em *The IT Crowd*: os jogadores administram chamados, telefones, usuários, equipamentos, incêndios e o **The Boss Stress**.

## Abrir o projeto

- [Manual de regras](IT_Crowd_rulebook.md)
- [Manual do jogo](IT_Crowd_game_manual.html) — manual visual e linear com setup, regras, missões e consulta rápida.
- [Playtest interativo](playtest.html)
- [Cartas e exportação para PDF](templates/cards/call-model.html)
- [Imprimir cartas](imprimir-cartas.html) — atalho na raiz para o gerador de cartas.
- [Dados das cartas e peças](templates/cards/card-data.js)
- [Resumo de dificuldade](summary.py) — contagem de Eventos e Missões por expansão.

## Preparar o projeto

Para regenerar todas as imagens das cartas e exportar o manual em PDF diretamente na raiz, execute:

```bash
python3 install.py
```

O script gera as cartas em `exported-images/cards/` e o arquivo `IT_Crowd_game_manual.pdf` na raiz do projeto.

Requisitos: Python 3 e Google Chrome ou Chromium instalados. No Windows, o comando equivalente pode ser `py install.py`.

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

Quando `both` é usado, as versões low e high são processadas em paralelo. Se o Chrome não suportar duas renderizações simultâneas, o script repete automaticamente em sequência.

Os arquivos gerados são ignorados pelo Git. Depois de gerar ou atualizar imagens, recarregue o [playtest](templates/cards/playtest-model.html) ou a página de [exportação](templates/cards/call-model.html).

## Resumir dificuldades

Para contar cartas fáceis, médias, difíceis e com benefício (`+`) por expansão e tipo:

```bash
python3 summary.py
```

Para obter o mesmo resumo em JSON:

```bash
python3 summary.py --json
```

## Exportar o manual em PDF

Para gerar o manual em A4 sem os cabeçalhos e rodapés automáticos do navegador:

```bash
python3 scripts/export_game_manual_pdf.py
```

O PDF será salvo em `output/pdf/IT_Crowd_game_manual.pdf`, uma pasta ignorada pelo Git. Também é possível escolher outro caminho com `--output`.

## Exportação para Tabletop Simulator

Os scripts [export_tts.py](export_tts.py) e [export_tts_json.py](export_tts_json.py) geram, respectivamente, os spritesheets e o save JSON. Veja o guia completo em [tts-export/README.md](tts-export/README.md).

