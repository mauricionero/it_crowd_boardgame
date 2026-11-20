(() => {
  window.ITCrowdCardLocales = window.ITCrowdCardLocales || {};
  // This file preserves the current Portuguese card text independently from the English source.
  window.ITCrowdCardLocales['pt-BR'] = {
  "types": {
    "call": {
      "label": "CHAMADO"
    },
    "user": {
      "label": "USUÁRIO"
    },
    "event-generic": {
      "label": "EVENTOS"
    },
    "event-mission": {
      "label": "MISSÃO"
    },
    "initiative": {
      "label": "INICIATIVA"
    },
    "player-initiative": {
      "label": "INICIATIVA"
    },
    "player-character": {
      "label": "PERSONAGEM"
    },
    "routine": {
      "label": "ROTINA"
    },
    "reference": {
      "label": "LEMBRETES"
    },
    "actions": {
      "label": "AÇÕES"
    },
    "morale": {
      "label": "ÂNIMO"
    },
    "item-consumable": {
      "label": "ITEM"
    },
    "item-equipment": {
      "label": "ITEM"
    },
    "reversible-tile": {
      "label": "TILE REVERSÍVEL"
    },
    "token": {
      "label": "TOKEN"
    },
    "pawn": {
      "label": "PEÃO"
    }
  },
  "cards": {
    "A1": {
      "title": "PORÃO",
      "rules": [
        {
          "label": "☎️⚡",
          "line": "🔺 → 7–8: +⚠️ | 9–10: +⚠️; remova o tile ☎️ e coloque ☎️ + 👤 na iniciativa."
        },
        {
          "label": " 📞",
          "line": "Para cada ☎️ + 👤 ainda na mão, resolva o efeito 📞 da carta de Usuário."
        },
        {
          "label": "⚠️",
          "line": "se ⚠️ igual ou menor que a quantidade de personagens jogaveis: +☎️⚡"
        },
        {
          "label": "🗄️🦠",
          "line": "🔺 → 6–8: +⚠️.\n9-10: +⚠️ e espalha para algum 🖥️ no porão"
        },
        {
          "label": " 🔥",
          "line": "Para cada fogo, 🎲 ✅: baixo vira alto e alto cria 1 baixo adjacente."
        }
      ]
    },
    "A2": {
      "title": "AÇÕES",
      "rules": [
        {
          "label": " 👣",
          "line": "👣 = valor do personagem por ação; cada ✅ em 🎲 soma 1 tile."
        },
        {
          "label": "-🫩",
          "line": "⏱️1: remova 🫩 de si ou de um aliado adjacente."
        },
        {
          "label": "+🔋",
          "line": "1×/turno: ⏱️1 → +🔋, até 5."
        },
        {
          "label": "-🦠",
          "line": "🖥️ PC: ⏱️1 · 🧠 ✅✅\n🗄️ SRV: ⏱️1 · 🧠 ✅✅✅"
        },
        {
          "label": " 👨‍🚒",
          "line": "⏱️1 · 🖥️ 🙂 + 🧠 = ✅✅ → 2👨‍🚒 no 🛗 + BOMBEIRO na iniciativa."
        },
        {
          "label": " 📞",
          "line": "☎️⚡ → Em atendimento;\ncompre ☎️ + 👤."
        },
        {
          "label": " ⏸️",
          "line": "⏱️1 · ☎️ + 👤 → fila; remova o tile ☎️."
        }
      ]
    },
    "A3": {
      "title": "ÂNIMO",
      "rules": [
        {
          "label": "🔋",
          "line": "+1👣 ou +🙂 ou +🧠 durante 1⏱️"
        },
        {
          "label": "🔋",
          "line": "rerolar 1 dado sem 🔒"
        },
        {
          "label": "🔋🔋",
          "line": "+⏱️"
        },
        {
          "label": "🔋🔋",
          "line": "+1🎲 em uma rolagem"
        },
        {
          "label": "LIMITE",
          "line": "Máx. 5 por personagem."
        }
      ]
    },
    "A4": {
      "title": "ANDAR 1",
      "rules": [
        {
          "label": "🖨️🚫",
          "line": "🔺 7–10: +⚠️"
        },
        {
          "label": "🗄️🦠",
          "line": "🔺 1–7: infecte 🖥️[resultado]."
        },
        {
          "label": "🖥️🦠",
          "line": "🔺 se 🖥️🦠[resultado]: +⚠️."
        }
      ]
    },
    "A5": {
      "title": "ANDAR 1",
      "rules": [
        {
          "label": "🖨️",
          "line": "⏱️1 · adj. 🖨️🚫 + 📄 no inventário: vire para 🖨️✅."
        },
        {
          "label": "🖥️",
          "line": "⏱️1 · 🧠 ✅: -🦠 de baia adjacente."
        },
        {
          "label": "🏋️",
          "line": "No GYM: 2⏱️ · resolva até 3 Chamados da fila que exijam apenas 🙂."
        }
      ]
    },
    "A6": {
      "title": "LEMBRETES",
      "rules": [
        {
          "label": "🛠️",
          "line": "☎️ disponíveis = jogadores."
        },
        {
          "label": "☎️⚡",
          "line": "Se um telefone tocar e não houver telefone livre: +⚠️."
        },
        {
          "label": "👣",
          "line": "Sem diagonal; não termine em 🔥, bloqueio ou personagem."
        },
        {
          "label": "🔥",
          "line": "Atravessar 🔥: +🫩. 👨‍🚒 ignora."
        },
        {
          "label": "⭐",
          "line": "Esquerda para a direita. Fim da fila → início."
        }
      ]
    },
    "B1": {
      "title": "ROY TRENNEMAN",
      "rules": [
        {
          "label": "ATRIBUTOS",
          "line": "🧠3 · 🙂2 · 👣 = 4 + 2🎲"
        },
        {
          "label": "⭐",
          "line": "3 ações."
        },
        {
          "label": "",
          "line": "MOTIVADO: ao concluir um Chamado, +🔋."
        }
      ]
    },
    "B2": {
      "title": "MAURICE MOSS",
      "rules": [
        {
          "label": "ATRIBUTOS",
          "line": "🧠4 · 🙂0 · 👣 = 5 + 1🎲"
        },
        {
          "label": "⭐",
          "line": "3 ações."
        },
        {
          "label": "",
          "line": "HACKER: 1× por turno · adjacente a equipamento: ⏱️ -🦠"
        }
      ]
    },
    "PC1": {
      "title": "ROY TRENNEMAN",
      "subtitle": "TÉCNICO SÊNIOR · MÃO NA MASSA",
      "attributes": "🧠 3   ·   🙂 2   ·   👣 = 4 + 2🎲",
      "actions": "⭐ 3 ações por ativação",
      "rules": [
        {
          "label": "",
          "line": "MOTIVADO: ao concluir um Chamado, +🔋."
        }
      ]
    },
    "PC2": {
      "title": "MAURICE MOSS",
      "subtitle": "HACKER · ESPECIALISTA EM COMPUTADORES",
      "attributes": "🧠 4   ·   🙂 0   ·   👣 = 5 + 1🎲",
      "actions": "⭐ 3 ações por ativação",
      "rules": [
        {
          "label": "",
          "line": "HACKER: 1× por turno · adjacente a equipamento: ⏱️ -🦠 grátis."
        }
      ]
    },
    "PC3": {
      "title": "RICHMOND",
      "subtitle": "GÓTICO · CONFORTÁVEL NAS SOMBRAS",
      "attributes": "🧠 2   ·   🙂 1   ·   👣 = 5 + 2🎲",
      "actions": "⭐ 3 ações por ativação",
      "rules": [
        {
          "label": "",
          "line": "CONFORMADO: remova 1 🫩 de si por turno sem custo."
        }
      ]
    },
    "PC4": {
      "title": "JEN BARBER",
      "subtitle": "GERENTE · BOA DE CONVERSA",
      "attributes": "🧠 0   ·   🙂 3   ·   👣 = 4 + 1🎲",
      "actions": "⭐ 3 ações por ativação",
      "rules": [
        {
          "label": "",
          "line": "LIDERANÇA: Jen pode ceder 🔋 a outro personagem que tenha chamado na mão.\nQualquer Chamado concluído: Jen recebe +🔋."
        }
      ]
    },
    "B3": {
      "title": "JEN BARBER",
      "rules": [
        {
          "label": "ATRIBUTOS",
          "line": "🧠0 · 🙂3 · 👣 = 4 + 1🎲"
        },
        {
          "label": "⭐",
          "line": "3 ações."
        },
        {
          "label": "",
          "line": "LIDERANÇA: Jen pode ceder 🔋 a outro personagem que tenha chamado na mão.\nQualquer Chamado concluído: Jen recebe +🔋."
        }
      ]
    },
    "B4": {
      "title": "DENHOLM",
      "rules": [
        {
          "label": "ATO 4",
          "line": "1 ação: 👣 = 1 + 3🎲 em direção à sala."
        },
        {
          "label": "ATO 5",
          "line": "Siga a regra ⭐ da missão."
        }
      ]
    },
    "B5": {
      "title": "BOMBEIRO",
      "rules": [
        {
          "label": "⭐",
          "line": "2⏱️: 👣 = 2 + 1🎲 ou apague 🔥 adjacente."
        },
        {
          "label": "🔥",
          "line": "🎲 ✅: apague 🔥."
        },
        {
          "label": "🗑️",
          "line": "Quando não houver fogo no cenário."
        }
      ]
    },
    "B6": {
      "title": "RICHMOND",
      "rules": [
        {
          "label": "ATRIBUTOS",
          "line": "🧠2 · 🙂1 · 👣 = 5 + 2🎲"
        },
        {
          "label": "⭐",
          "line": "3 ações."
        },
        {
          "label": "",
          "line": "CONFORMADO: remova 1 🫩 de si por turno sem custo."
        }
      ]
    },
    "B7": {
      "title": "DOUGLAS",
      "rules": [
        {
          "label": "ATRIB.",
          "line": "3⏱️ · 🧠1 · 🙂1 · 👣 = 2 + 1🎲"
        },
        {
          "label": "⭐",
          "line": "🔺 1-6: mova em direção ao personagem mais próximo;\n7-8: +🫩 no personagem mais próximo;\n9-10: +⚠️ e aumente ou coloque 1🔥 no tile de Douglas."
        },
        {
          "label": "⭐",
          "line": "Final do turno: +🫩 para todos personagens adjacentes."
        }
      ]
    },
    "C1": {
      "title": "JÁ TENTOU DESLIGAR E LIGAR DE NOVO?",
      "resolve": [
        {
          "label": "📌",
          "line": "⏱️1"
        }
      ]
    },
    "C2": {
      "title": "NÃO ABRE!",
      "resolve": [
        {
          "label": "📌",
          "line": "🖥️ 🧠 ✅ + 🙂 ✅"
        }
      ]
    },
    "C3": {
      "title": "SENHA NÃO FUNCIONA",
      "resolve": [
        {
          "label": "📌",
          "line": "🖥️ 🧠 ✅"
        }
      ]
    },
    "C4": {
      "title": "DERRUBEI A INTERNET",
      "resolve": [
        {
          "label": "📌 1",
          "line": "🧠 ✅"
        },
        {
          "label": "📌 2",
          "line": "🖥️ 🧠 ✅✅"
        }
      ]
    },
    "C5": {
      "title": "404: RELATÓRIO NÃO ENCONTRADO",
      "resolve": [
        {
          "label": "📌 1",
          "line": "🖥️ 🧠 ✅✅"
        },
        {
          "label": "📌 2",
          "line": "🖥️ 🙂 ✅"
        }
      ]
    },
    "C6": {
      "title": "WHAT THE FLIP!",
      "resolve": [
        {
          "label": "📌",
          "line": "🖥️ 🧠 ✅✅"
        }
      ]
    },
    "C7": {
      "title": "ESTÁ PLUGADO NA TOMADA?",
      "quote": "Vocẽ precisa por na tomada!",
      "resolve": [
        {
          "label": "📌",
          "line": "🙂 ✅"
        }
      ]
    },
    "C8": {
      "title": "IMPRESSORA NÃO FUNCIONA",
      "quote": "Acho que precisa de papel...",
      "resolve": [
        {
          "label": "🛠️",
          "line": "Vire a impressora para 🖨️🚫"
        },
        {
          "label": "📌",
          "line": "🖨️✅"
        }
      ]
    },
    "C9": {
      "title": "RECUPERE O ACESSO AO SERVIDOR",
      "quote": "Access the data supply and connect to the matrix",
      "resolve": [
        {
          "label": "🛠️",
          "line": "🗄️🦠 Infecte o servidor"
        },
        {
          "label": "📌",
          "line": "🗄️✅"
        }
      ]
    },
    "C10": {
      "title": "MINHA TELA FICOU VERDE",
      "quote": "Siga o coelho branco.",
      "resolve": [
        {
          "label": "🛠️",
          "line": "🔺 1–7: infecte 🖥️[resultado].\n8–10: role novamente."
        },
        {
          "label": "📌",
          "line": "🖥️[resultado] funcional."
        }
      ]
    },
    "C11": {
      "title": "VIDEO NÃO FUNCIONA",
      "quote": "A reunião começa em 5 minutos!",
      "resolve": [
        {
          "label": "⭐",
          "line": "+⚠️"
        },
        {
          "label": "🎯",
          "line": "Na Sala 1: 1⏱️: −⚠️, 🗑️"
        }
      ]
    },
    "C12": {
      "title": "ESSE É O BARULHO QUANDO LIGA",
      "quote": "Desculpa, você é do passado?",
      "resolve": [
        {
          "label": "🎯",
          "line": "⏱️1 🙂✅: 🗑️"
        }
      ]
    },
    "D1": {
      "title": "O PACIENTE",
      "quote": "Quem escreveu Missa Brevis em D Menor?..",
      "rules": [
        {
          "label": "✋",
          "line": "-"
        },
        {
          "label": "📞",
          "line": "-"
        },
        {
          "label": "⭐",
          "line": "🔺 8–10: +⚠️"
        },
        {
          "label": "🏁",
          "line": "−⚠️"
        }
      ]
    },
    "D2": {
      "title": "PRIME, O COLECIONADOR",
      "quote": "A fan of tiny biscuits. You are full of surprises.",
      "rules": [
        {
          "label": "✋",
          "line": ""
        },
        {
          "label": "📞",
          "line": ""
        },
        {
          "label": "⭐",
          "line": "🔺 4–10: +⚠️"
        },
        {
          "label": "🏁",
          "line": "1🏆 aleatório."
        }
      ]
    },
    "D3": {
      "title": "BILL CROUSE",
      "quote": "Sabe, eu fui o último com ela.",
      "rules": [
        {
          "label": "✋",
          "line": "−🙂"
        },
        {
          "label": "📞",
          "line": "-"
        },
        {
          "label": "⭐",
          "line": "🔺 8–10: +⚠️"
        },
        {
          "label": "🏁",
          "line": "+🔋"
        }
      ]
    },
    "D4": {
      "title": "SOBRINHO DO CHEFE",
      "quote": "Meu tio disse que vocês resolvem isso agora.",
      "rules": [
        {
          "label": "✋",
          "line": "−🧠"
        },
        {
          "label": "📞",
          "line": "-"
        },
        {
          "label": "⭐",
          "line": "🔺 6–10: +⚠️"
        },
        {
          "label": "🏁",
          "line": "+🔋 se concluir na mão"
        }
      ]
    },
    "D5": {
      "title": "O CONFUSO",
      "quote": "BING BONG NOISE",
      "rules": [
        {
          "label": "✋",
          "line": "-"
        },
        {
          "label": "📞",
          "line": "🔺 10: +⚠️"
        },
        {
          "label": "⭐",
          "line": "🔺 8–10: +⚠️"
        },
        {
          "label": "🏁",
          "line": "-"
        }
      ]
    },
    "D6": {
      "title": "SENHORA CARENTE",
      "quote": "0118 999 881 999 119 725... 3",
      "rules": [
        {
          "label": "✋",
          "line": "-🧠"
        },
        {
          "label": "📞",
          "line": "-"
        },
        {
          "label": "⭐",
          "line": "🔺 9–10: +⚠️"
        },
        {
          "label": "🏁",
          "line": "+🔋"
        }
      ]
    },
    "D7": {
      "title": "THE BOSS",
      "quote": "Apenas 2 coisas: Um sonho e $ 6 milhões.",
      "rules": [
        {
          "label": "✋",
          "line": "-"
        },
        {
          "label": "📞",
          "line": "🎲 ✅: +⚠️"
        },
        {
          "label": "⭐",
          "line": "🔺 4–10: +⚠️"
        },
        {
          "label": "🏁",
          "line": "-"
        }
      ]
    },
    "D8": {
      "title": "AMIZADE DO FRIENDFACE",
      "quote": "E aí, o que tem aprontado?!",
      "rules": [
        {
          "label": "✋",
          "line": "⏱️1 · 🙂 ✅: +🔋"
        },
        {
          "label": "📞",
          "line": "🔺 6–10: + ☎️⚡"
        },
        {
          "label": "⭐",
          "line": "-"
        },
        {
          "label": "🏁",
          "line": "+🔋🔋"
        }
      ]
    },
    "D9": {
      "title": "MICHAEL, THE MAGNIFICENT",
      "quote": "Im not a magician.",
      "rules": [
        {
          "label": "✋",
          "line": "-"
        },
        {
          "label": "📞",
          "line": "-"
        },
        {
          "label": "⭐",
          "line": "Se vazia: coloque 1 item de qualquer inventário nesta carta."
        },
        {
          "label": "🏁",
          "line": "Devolva o item; +🔋."
        }
      ]
    },
    "D10": {
      "title": "O SPOILER",
      "quote": "É nesse filme que ele estava morto no final né!",
      "rules": [
        {
          "label": "✋",
          "line": "-🙂"
        },
        {
          "label": "📞",
          "line": "+🫩"
        },
        {
          "label": "⭐",
          "line": "🔺 4–10: +⚠️"
        },
        {
          "label": "🏁",
          "line": "-🫩"
        }
      ]
    },
    "D11": {
      "title": "SAMANTHA",
      "quote": "Back soon. Get it fixed!",
      "rules": [
        {
          "label": "✋",
          "line": "-🙂"
        },
        {
          "label": "📞",
          "line": "🔺 5–10: +🫩"
        },
        {
          "label": "⭐",
          "line": "🔺 10: +⚠️"
        },
        {
          "label": "🏁",
          "line": "-"
        }
      ]
    },
    "D12": {
      "title": "A NERD",
      "quote": "I like your glasses",
      "rules": [
        {
          "label": "✋",
          "line": "+🙂 +🧠"
        },
        {
          "label": "📞",
          "line": "-"
        },
        {
          "label": "⭐",
          "line": "-"
        },
        {
          "label": "🏁",
          "line": "+🔋"
        }
      ]
    },
    "D13": {
      "title": "JULY OU JUDIE?",
      "quote": "É July, ou Judie? Definitivamente uma delas.",
      "rules": [
        {
          "label": "✋",
          "line": "🔺 1–5: +🙂 | 6–10: -🙂"
        },
        {
          "label": "📞",
          "line": "-"
        },
        {
          "label": "⭐",
          "line": "🔺 1–5: -🫩 | 6–10: -🔋"
        },
        {
          "label": "🏁",
          "line": "🔺 1–5: +🔋 | 6–10: -🔋"
        }
      ]
    },
    "D14": {
      "title": "THE NEW BOSS",
      "quote": "Vou transformar isso tudo em um banheiro!",
      "rules": [
        {
          "label": "✋",
          "line": "−🧠"
        },
        {
          "label": "📞",
          "line": "🔺 6–10: +🫩"
        },
        {
          "label": "⭐",
          "line": "🔺 4–10: +⚠️"
        },
        {
          "label": "🏁",
          "line": "−⚠️"
        }
      ]
    },
    "E1": {
      "title": "MAIS UM CHAMADO",
      "quote": "Pode apertar Ctrl + Alt + Del?",
      "rules": [
        {
          "label": "⚡",
          "line": "+ ☎️⚡.\nSe todos estiverem ocupados, nada acontece."
        }
      ]
    },
    "E2": {
      "title": "ESPALHAR VÍRUS",
      "quote": "Não parece importante ou legal, mas precisamos de um firewall...",
      "rules": [
        {
          "label": "⚡",
          "line": "Se 🗄️ estiver 🦠: infecte um 🖥️. Caso contrário: 🗄️🦠"
        }
      ]
    },
    "E3": {
      "title": "A LUZINHA VERMELHA",
      "quote": "flash flash flash..... flash",
      "rules": [
        {
          "label": "⚡",
          "line": "Vire o tile de 🗄️ para o lado infectado 🦠."
        }
      ]
    },
    "E4": {
      "title": "SOLICITAÇÃO URGENTE\nDA DIRETORIA",
      "quote": "Isso não é um troféu de cabeça de sorvete?",
      "rules": [
        {
          "label": "⚡",
          "line": "Coloque esta carta no fim da iniciativa."
        },
        {
          "label": "🎯1",
          "line": "1⏱️ 🖥️ 🧠 ✅✅ para preparar o relatório."
        },
        {
          "label": "🎯2",
          "line": "1⏱️ 🖥️ 🙂 ✅ para enviar o relatório."
        },
        {
          "label": "⭐",
          "line": "+⚠️"
        }
      ]
    },
    "E5": {
      "title": "ALMOÇO EM EQUIPE",
      "quote": "Hajam naturalmente... Mais normal!.. Só relaxem..",
      "rules": [
        {
          "label": "⚡",
          "line": "Escolha 1 opção:\nreduza 1⚠️ ou remova 🫩 de um personagem."
        }
      ]
    },
    "E6": {
      "title": "GUERRA CONTRA O STRESS!",
      "quote": "Quem estiver estressado, será demitido!",
      "rules": [
        {
          "label": "⚡",
          "line": "+⚠️ e coloque esta carta no fim da iniciativa.\nSe nenhum ☎️ ativo: + ☎️⚡"
        },
        {
          "label": "⭐",
          "line": "Cada jogador: 🎲 🙂\n❌: +🫩 | ✅: −⚠️;\n🗑️"
        }
      ]
    },
    "E7": {
      "title": "RELATÓRIO DO FGTS",
      "quote": "1800 billion billions!",
      "rules": [
        {
          "label": "⚡",
          "line": "Coloque esta carta no fim da iniciativa."
        },
        {
          "label": "🎯1",
          "line": "Preparar relatório:\n1⏱️ 🖥️ 🧠 ✅"
        },
        {
          "label": "🎯2",
          "line": "Enviar o relatório:\n1⏱️ 🖥️ 🙂 ✅"
        },
        {
          "label": "⭐",
          "line": "🎲 ✅: +⚠️"
        }
      ]
    },
    "E8": {
      "title": "AH NÃO!",
      "quote": "Is it a PC or a Mac?",
      "rules": [
        {
          "label": "⚡",
          "line": "+ ☎️⚡ em até 2 telefones livres."
        }
      ]
    },
    "E9": {
      "title": "REUNIÃO DO MARKETING",
      "quote": "Cavalheiros, ergam suas taças.",
      "rules": [
        {
          "label": "⚡",
          "line": "+ ☎️⚡; Mantenha esta carta no topo dos Eventos. Avance a iniciativa"
        },
        {
          "label": "⭐",
          "line": "🔺 → 1–6: 🗑️ | 9–10: −⚠️;\n🖥️ 📍1️⃣ não infectam"
        }
      ]
    },
    "E10": {
      "title": "AJUSTE EXECUTIVO",
      "quote": "Damn this electric pants!",
      "rules": [
        {
          "label": "⚡",
          "line": "Coloque esta carta no fim da iniciativa."
        },
        {
          "label": "⭐",
          "line": "🔺 → 6-10: +⚠️"
        },
        {
          "label": "🎯1",
          "line": "1⏱️ 🖥️ 🙂+🧠 ✅✅. Sucesso: −2⚠️ e 🗑️."
        }
      ]
    },
    "E11": {
      "title": "A APOSTA",
      "quote": "Perfil cafageste online. P.S.: No dogs!!",
      "rules": [
        {
          "label": "⚡",
          "line": "☎️⚡; Todos rolam 🙂; Vencedor: +🔋🔋 e compre um 🏆Item. Remova do jogo."
        }
      ]
    },
    "E12": {
      "title": "COUNTDOWN",
      "quote": "Você foi convidado para o Countdown!",
      "rules": [
        {
          "label": "⚡",
          "line": "☎️⚡; Todos rolam 🧠. Vencedor: +🔋🔋 e o Item 🏆Teapot do Countdown. Remova do jogo."
        }
      ]
    },
    "E13": {
      "title": "DESLIGOU O FERRO DE SOLDA?",
      "quote": "Então eu ligo... e VOU EMBORA!",
      "rules": [
        {
          "label": "⚡",
          "line": "🔺 → 1–6: ☎️⚡, 🗑️ | 7–10: 1🔥 na sala principal do porão."
        }
      ]
    },
    "E14": {
      "title": "O ACHADO!",
      "quote": "Olha o que estava no fundo da gaveta!",
      "rules": [
        {
          "label": "⚡",
          "line": "Se stress menor que 4: ☎️⚡;\nTodos rolam 🎲🎲🎲. Vencedor: 🏆\n🗑️"
        }
      ]
    },
    "E15": {
      "title": "MARKETEIRO NERD",
      "quote": "Ouvi dizer que ele tem até uma Black Lotus...",
      "rules": [
        {
          "label": "⚡",
          "line": "Posicione esta carta na Copa do 📍1️⃣.\nSe nenhum ☎️ ocupado: + ☎️⚡"
        },
        {
          "label": "🏁",
          "line": "Na Copa: 1⏱️ 🙂✅: 1🏆, 🗑️"
        }
      ]
    },
    "E16": {
      "title": "MARKETING MEIO OCUPADO",
      "quote": "Isto é uma reunião confidencial.",
      "rules": [
        {
          "label": "⚡",
          "line": "☎️⚡; Mantenha esta carta no topo dos Eventos."
        },
        {
          "label": "⭐",
          "line": "🔺 1-5: 🗑️"
        }
      ]
    },
    "E17": {
      "title": "MAIS UM CHAMADO...",
      "quote": "Só uma perguntinha...",
      "rules": [
        {
          "label": "⚡",
          "line": "+ ☎️⚡. 🗑️"
        }
      ]
    },
    "E18": {
      "title": "CC: E-MAIL SUSPEITO",
      "quote": "Manda para todo mundo.",
      "rules": [
        {
          "label": "⚡",
          "line": "🗄️🦠; 🔺 → 1–7: infecte o 🖥️📍1️⃣ do número sorteado; 🗑️"
        }
      ]
    },
    "E19": {
      "title": "O VÍRUS SUBIU",
      "quote": "O servidor está compartilhando tudo.",
      "rules": [
        {
          "label": "⚡",
          "line": "Se 🗄️🦠: 🔺 → 1–7: infecte o 🖥️📍1️⃣ do número sorteado. Senão: 🗄️🦠. 🗑️"
        }
      ]
    },
    "E20": {
      "title": "ACABOU O PAPEL!",
      "quote": "Não imprime! Será que é tinta?",
      "rules": [
        {
          "label": "⚡",
          "line": "Vire a 🖨️ para 🖨️🚫 e coloque esta carta no fim da iniciativa."
        },
        {
          "label": "⭐",
          "line": "🖨️🚫: 🔺 → 1–5: +⚠️ | 🖨️✅: 🗑️"
        }
      ]
    },
    "F1": {
      "title": "YESTERDAY'S JAM",
      "subtitle": "1 — NOVA GERENTE",
      "quote": "Emails, enviar, receber, mouse, click, duplo click...",
      "rules": [
        {
          "label": "📌",
          "line": "Descubra que Jen não entende de computadores."
        },
        {
          "label": "🛠️",
          "line": "Coloque Jen no elevador."
        },
        {
          "label": "⭐",
          "line": "Jen: 👣 = 3 + 1🎲 até o técnico mais próximo."
        },
        {
          "label": "⚔️",
          "line": "Técnico adjacente:\n🧠 vs 🙂 da Jen. Vitória: 🗑️"
        }
      ]
    },
    "F2": {
      "title": "YESTERDAY'S JAM",
      "subtitle": "2 — SINCLAIR ZX81",
      "quote": "Estranho, ela nem se importou com o ZX81",
      "rules": [
        {
          "label": "📌",
          "line": "Infecte o PC de Jen antes que ela chegue à cadeira."
        },
        {
          "label": "⭐",
          "line": "Jen: 👣 = 2 + 1🎲, ou remova 💬;\nSe não sabotar PC ao chegar: +1🙂 Jen."
        },
        {
          "label": "DISTRAIR",
          "line": "Jen: ⏱️ 🙂 vs 🙂. Vitória: +💬."
        },
        {
          "label": "🎯1",
          "line": "No computador: 1⏱️ 🧠 ✅✅."
        },
        {
          "label": "🗑️",
          "line": "Quando Jen chegar à cadeira. Revele a próxima missão."
        }
      ]
    },
    "F3": {
      "title": "YESTERDAY'S JAM",
      "subtitle": "3 — QUER CONECTAR NA MATRIX?",
      "quote": "Vocês estão inventando tudo isso",
      "rules": [
        {
          "label": "📌",
          "line": "Credibilidade: 3."
        },
        {
          "label": "🦠",
          "line": "PC de Jen infectado: −1🙂 para a Jen."
        },
        {
          "label": "⭐",
          "line": "Jen tenta o 1º Chamado da iniciativa, só com 🙂.\n🧠: +⚠️; falha: +⚠️."
        },
        {
          "label": "⚔️",
          "line": "Confronto direto: técnico a frente da mesa: 🧠 vs 🙂 da Jen."
        },
        {
          "label": "🗑️",
          "line": "Quando a Credibilidade chegar a 0. Revele a próxima missão."
        }
      ]
    },
    "F4": {
      "title": "YESTERDAY'S JAM",
      "subtitle": "4 — QUE SCREEN SAVER REALISTA!",
      "quote": "Espere um pouco... Cadê a Jen?",
      "rules": [
        {
          "label": "📌",
          "line": "Esconda todos os fogos antes de Denholm entrar na sala."
        },
        {
          "label": "🛠️",
          "line": "Fogo baixo no armario de baixo; Denholm no elevador; 2 🖥️ no escritório de Jen e 2 🖥️ no escritório principal."
        },
        {
          "label": "⭐",
          "line": "Dhenolm: 1 ação · 👣 = 3 + 1🎲 em direção à sala."
        },
        {
          "label": "🖥️",
          "line": "⏱️1 pega 1🖥️; ⏱️1 solta 1 ou mais 🖥️.\nCada monitor ocupa 1 inventário"
        },
        {
          "label": "🗑️",
          "line": "Quando Denholm entrar e todos os fogos estiverem escondidos. Revele a próxima missão."
        }
      ]
    },
    "F5": {
      "title": "YESTERDAY'S JAM",
      "subtitle": "5 — ARE YOU STRESSED?",
      "quote": "Are you sure? Are you sure?",
      "rules": [
        {
          "label": "🛠️",
          "line": "Jen na cadeira; Denholm diante da mesa."
        },
        {
          "label": "🎯1",
          "line": "Chame os bombeiros."
        },
        {
          "label": "🎯2",
          "line": "Bombeiros devem apagar todos os 🔥."
        },
        {
          "label": "⭐",
          "line": "Dhenolm: 2⏱️:\n* 💬: remova 1;\n* ARE YOU SURE?: 🎲 ✅: +🫩 Jen.\nSe 🫩3+ na Jen, aumente no Boss stress"
        },
        {
          "label": "💬",
          "line": "DISTRAIR: 🙂 ✅✅. Vitória: +💬,\nDerrota: 🫩"
        },
        {
          "label": "🗑️",
          "line": "Quando não houver fogo no cenário."
        }
      ]
    },
    "F6": {
      "title": "FUNCIONÁRIA DO MÊS",
      "subtitle": "1 — THE INTERNET",
      "quote": "Precisamos sacanear a Jen!",
      "rules": [
        {
          "label": "📌",
          "line": "Jen com a 🏆THE INTERNET"
        },
        {
          "label": "🛠️",
          "line": "🏆THE INTERNET no 🗄️\n🏆A CHAVE no almoxarifado 📍1️⃣"
        },
        {
          "label": "🎯",
          "line": "Jen deve levar 🏆THE INTERNET no inventário até o andar 1. 🗑️"
        },
        {
          "label": "🗑️",
          "line": "Quando Jen estiver no andar 1\ncom 🏆THE INTERNET. Revele a próxima missão."
        }
      ]
    },
    "F8": {
      "title": "FUNCIONÁRIA DO MÊS",
      "subtitle": "2 — PREPARADA PARA O DISCURSO",
      "quote": "Cuidado!",
      "rules": [
        {
          "label": "📌",
          "line": "Jen com 🏆THE INTERNET na Sala 1."
        },
        {
          "label": "🛠️",
          "line": "🗄️🦠; 🖥️📍1️⃣🦠: (PC 1, 5 e 6)"
        },
        {
          "label": "⭐",
          "line": "Para cada 🖥️📍1️⃣🦠: mova Jen 3 tiles em direção a ele. Se adj. a algum 🖥️🦠: +⚠️."
        },
        {
          "label": "🗑️",
          "line": "Quando Jen e 🏆THE INTERNET estiverem na Sala 1."
        }
      ]
    },
    "F9": {
      "title": "FUNCIONÁRIA DO MÊS",
      "subtitle": "3 — O DISCURSO",
      "quote": "Isso, é A INTERNET!",
      "rules": [
        {
          "label": "🛠️",
          "line": "Jen usa ⏱️ apenas para discursar, rerolar ou comprar 🎲."
        },
        {
          "label": "🛠️",
          "line": "Douglas na sala do PC 7; coloque DOUGLAS no fim da iniciativa."
        },
        {
          "label": "🎤",
          "line": "Jen 🎲🙂 → 2✅: +💬 | 0✅: +⚠️."
        },
        {
          "label": "🎯",
          "line": "Douglas não pode entrar no escritório de Jen antes de 4💬."
        },
        {
          "label": "🗑️",
          "line": "Quando Jen tiver 4💬."
        }
      ]
    },
    "F10": {
      "title": "FUNCIONÁRIA DO MÊS",
      "subtitle": "4 — DOUGLAS LOCAÇO DE ROHYPNOL",
      "quote": "Rápido, tranque o Douglas no escritório!",
      "rules": [
        {
          "label": "📌",
          "line": "Pegue 🏆A CHAVE no almoxarifado.\nDouglas dentro do escritório do 🖥️7.\nPersonagem com 🏆A CHAVE deve estar adjacente a porta para trancar"
        }
      ]
    },
    "H1": {
      "title": "CAFÉ",
      "rules": [
        {
          "label": "USAR",
          "line": "Ação livre:\n+1🧠 +1👣 até o final do turno.\nDescarte."
        }
      ]
    },
    "H2": {
      "title": "SLIGHTLY LARGER GLASSES",
      "rules": [
        {
          "label": "EQUIPADO",
          "line": "+1🧠"
        }
      ]
    },
    "H3": {
      "title": "ÓCULOS\nBAD-ASS",
      "rules": [
        {
          "label": "EQUIPADO",
          "line": "+1🙂"
        }
      ]
    },
    "H4": {
      "title": "SMARTIES",
      "rules": [
        {
          "label": "USAR",
          "line": "Ação livre: -1🫩.\nDescarte."
        }
      ]
    },
    "H5": {
      "title": "LEITE",
      "rules": [
        {
          "label": "USAR",
          "line": "Ação livre: +🔋🔋.\nDescarte."
        }
      ]
    },
    "H6": {
      "title": "CAMISETA LADYSPROBLEMS",
      "rules": [
        {
          "label": "EQUIPADO",
          "line": "−1🙂\n1×/ativação: +🔋."
        }
      ]
    },
    "H7": {
      "title": "CACHIMBO",
      "rules": [
        {
          "label": "EQUIPADO",
          "line": "1x por turno:\nre-role qualquer quantidade de 🎲🙂, inclusive 🔒."
        }
      ]
    },
    "H9": {
      "title": "CAMISETA RTFM",
      "rules": [
        {
          "label": "EQUIPADO",
          "line": "1×/turno: +1🔋"
        }
      ]
    },
    "H8": {
      "title": "RELÓGIO",
      "rules": [
        {
          "label": "",
          "line": "⏱️1 → veja o próximo evento"
        },
        {
          "label": "USAR",
          "line": "−⚠️."
        }
      ]
    },
    "H10": {
      "title": "TARANTINO SOUTH-KOREAN DVD",
      "rules": [
        {
          "label": "USAR",
          "line": "−⚠️."
        }
      ]
    },
    "H11": {
      "title": "TROFÉU BIGGEST SHIT HEAD AWARD",
      "rules": [
        {
          "label": "USAR",
          "line": "Conclua 1 Chamado."
        }
      ]
    },
    "H12": {
      "title": "TEAPOT DO COUNTDOWN",
      "rules": [
        {
          "label": "USAR",
          "line": "Remova até 2🫩"
        }
      ]
    },
    "H13": {
      "title": "CALENDÁRIO NERDY",
      "rules": [
        {
          "label": "",
          "line": "A cada rodada, você pode alterar a ordem de iniciativa dos personagens."
        }
      ]
    },
    "H14": {
      "title": "THE INTERNET",
      "rules": [
        {
          "label": "USAR",
          "line": "−⚠️ ou conclua 1 Chamado."
        }
      ]
    },
    "H15": {
      "title": "CARTÃO DO CLUBE 8+",
      "rules": [
        {
          "label": "USAR",
          "line": "−⚠️ ou conclua 1 Chamado."
        }
      ]
    },
    "H16": {
      "title": "JEN 2",
      "rules": [
        {
          "label": "POSSE",
          "line": "Chamados que exigem apenas 🙂✅ ou 1⏱️ são resolvidos automaticamente."
        }
      ]
    },
    "H17": {
      "title": "PAPEL PARA IMPRESSORA",
      "rules": [
        {
          "label": "POSSE",
          "line": "Maço de papel. Não descarte ao consertar a impressora."
        }
      ]
    },
    "H18": {
      "title": "MOCHILA DO MOSS",
      "rules": [
        {
          "label": "POSSE",
          "line": "+2 espaço de Inventário: posicione os itens sobre esta carta."
        }
      ]
    },
    "H19": {
      "title": "HEADPHONE",
      "rules": [
        {
          "label": "EQUIPADO",
          "line": "Ignore os efeitos ✋ dos usuários.\n1×/turno: +🔋."
        }
      ]
    },
    "H20": {
      "title": "CRACHÁ DE GERENTE",
      "rules": [
        {
          "label": "EQUIPADO",
          "line": "−1🧠 +1🙂"
        }
      ]
    },
    "H21": {
      "title": "A CHAVE",
      "rules": [
        {
          "label": "USAR",
          "line": "−⚠️."
        }
      ]
    },
    "H22": {
      "title": "THE SHOOSA",
      "rules": [
        {
          "label": "EQUIPADO",
          "line": "−1👣 +1🙂"
        }
      ]
    },
    "H23": {
      "title": "WOMAN SLACKS",
      "rules": [
        {
          "label": "EQUIPADO",
          "line": "+1👣\nIgnore efeitos que reduzam 🙂."
        }
      ]
    },
    "I1": {
      "title": "TELEFONE MALDITO!",
      "quote": "Have you tried turning it off and on again?",
      "rules": [
        {
          "label": "📌",
          "line": "Conclua todos os chamados e telefones."
        },
        {
          "label": "🛠️",
          "line": "+ ☎️⚡ em todos os telefones."
        },
        {
          "label": "🗑️",
          "line": "Quando não houver telefones e pendências."
        }
      ]
    },
    "I2": {
      "title": "FIREWALL",
      "quote": "AHHH!",
      "rules": [
        {
          "label": "📌",
          "line": "Deixe os 3 🖥️ e o 🗄️ funcionais."
        },
        {
          "label": "🛠️",
          "line": "Comece com os 4 🖥️ infectados (🦠)."
        },
        {
          "label": "🗑️",
          "line": "Quando os 4 tiles estiverem funcionais."
        }
      ]
    },
    "I3": {
      "title": "ESQUECI DO CLIENTE",
      "quote": "Você tentou um reboot inesperado?",
      "rules": [
        {
          "label": "📌",
          "line": "Conclua todos os chamados e envie o relatório."
        },
        {
          "label": "🛠️",
          "line": "Coloque 2(☎️ + 👤) no fim da iniciativa e a carta de evento \"SOLICITAÇÃO URGENTE DA DIRETORIA\"."
        },
        {
          "label": "🗑️",
          "line": "Quando os 2 chamados e o relatório forem concluídos."
        }
      ]
    },
    "I4": {
      "title": "FIM DO EXPEDIENTE",
      "quote": "Não quero fumar lá fora. É muito soviético.",
      "rules": [
        {
          "label": "📌",
          "line": "Sobreviva 8 rodadas."
        },
        {
          "label": "🛠️",
          "line": "coloque sobre essa missão 🔺 em 1;\n⚠️ inicial = 👤 jogáveis."
        },
        {
          "label": "⭐",
          "line": "🔺: 3–7: +☎️⚡ | 8–10: revele 1 Evento sobre esta carta se não tiver nenhum evento revelado."
        },
        {
          "label": "⭐",
          "line": "Aumente 1 no 🔺. Ao chegar em 9, essa missão conclui em vitória."
        }
      ]
    },
    "I5": {
      "title": "QUEM TEM MAIS ITENS RAROS?",
      "quote": "Meu DVD é mais raro!",
      "rules": [
        {
          "label": "📌",
          "line": "Primeiro jogador com 3🏆 vence."
        },
        {
          "label": "🏆",
          "line": "1⏱️ + 🔋🔋 + 🧠🙂 ✅✅✅: pegue 1🏆 do topo."
        },
        {
          "label": "🗑️",
          "line": "Quando alguém tiver 3🏆."
        }
      ]
    },
    "I6": {
      "title": "CC PARA TODOS",
      "quote": "Parece legítimo.",
      "rules": [
        {
          "label": "🛠️",
          "line": "🗄️🦠; infecte os 🖥️📍1️⃣: 1, 3, 5 e 7."
        },
        {
          "label": "📌",
          "line": "Todos os 🖥️📍1️⃣ funcionais."
        },
        {
          "label": "🗑️",
          "line": "Quando todos os 🖥️📍1️⃣ estiverem funcionais."
        }
      ]
    },
    "I7": {
      "title": "PAPELADA URGENTE",
      "quote": "É só colocar papel.",
      "rules": [
        {
          "label": "🛠️",
          "line": "🖨️🚫; 📄 no depósito."
        },
        {
          "label": "📌",
          "line": "Coloque papel na impressora: 🖨️✅."
        },
        {
          "label": "🗑️",
          "line": "Quando a impressora estiver 🖨️✅."
        }
      ]
    },
    "I8": {
      "title": "CRISE",
      "quote": "Sexta-feira normal no departamento de TI.",
      "rules": [
        {
          "label": "🛠️",
          "line": "🗄️🦠; 🖨️🚫; todos os ☎️⚡."
        },
        {
          "label": "📌",
          "line": "🗄️✅ + 🖨️✅ + 0🦠 + 0 chamados abertos."
        },
        {
          "label": "🗑️",
          "line": "Sem ☎️⚡ ou ☎️+👤 na mão ou na iniciativa. 🖨️✅"
        }
      ]
    },
    "I9": {
      "title": "FOUR, I MEAN, FIVE, I MEAN, FIRE!!",
      "quote": "E-mail: Necessito de assistência imediata.",
      "rules": [
        {
          "label": "🛠️",
          "line": "Coloque 3🔥 em tiles diferentes não adjacentes."
        },
        {
          "label": "📌",
          "line": "Chame os Bombeiros e apague todos os 🔥."
        },
        {
          "label": "🗑️",
          "line": "Quando não houver 🔥 no cenário."
        }
      ]
    },
    "P2": {
      "name": "Roy Trenneman"
    },
    "P3": {
      "name": "Maurice Moss"
    },
    "P4": {
      "name": "Jen Barber"
    },
    "P5": {
      "name": "Denholm"
    },
    "P6": {
      "name": "Bombeiro"
    },
    "P7": {
      "name": "Richmond"
    },
    "P8": {
      "name": "Douglas"
    }
  }
};
})();

