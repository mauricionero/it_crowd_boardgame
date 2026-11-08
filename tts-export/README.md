# Exportação para Tabletop Simulator

Este pacote foi gerado com `export_tts.py` em 150 DPI.

## Fluxo

1. Execute `python3 export_tts.py` para gerar ou atualizar as imagens.
2. Abra o TTS e acesse `Upload > Cloud Manager`.
3. Envie os PNGs dentro de `images/decks/` e `images/board/`.
4. Copie as URLs da Steam Cloud para `cloud-urls.json`.
5. Execute `python3 export_tts_json.py` para gerar o save.
6. Carregue `it-crowd-boardgame.json` no TTS.

## Windows

Copie os PNGs de `images/decks/` e `images/board/` para:

```text
C:\Users\<seu-usuário>\Documents\My Games\Tabletop Simulator\Mods\Images
```

No TTS, use `Upload > Cloud Manager > Upload All`. Depois de copiar as URLs
da Steam Cloud para `cloud-urls.json`, execute `python export_tts_json.py`.
Coloque o JSON gerado em:

```text
C:\Users\<seu-usuário>\Documents\My Games\Tabletop Simulator\Mods\Workshop
```

O arquivo `cloud-urls.json` não é versionado pelo Git.

O JSON já contém os decks, a quantidade de cartas e a configuração da grade.
As posições iniciais são aproximações para o primeiro teste e podem ser
ajustadas dentro do TTS antes de salvar a mesa final.

As folhas não possuem espaçamento entre cartas. O TTS corta cada célula usando
`NumWidth` e `NumHeight`; a ordem das cartas segue a ordem de `card-data.js`.
