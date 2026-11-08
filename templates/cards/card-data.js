(() => {
      const CARD_TYPES = Object.freeze({
        CALL: Object.freeze({
          id: 'call',
          label: 'CHAMADO',
          icon: '☎️',
          accentColor: '#238653',
          frameColor: '#0f4930',
          backgroundPath: '../../assets/cards/calls/call-background-model.png',
          artRoot: '../../assets/illustrations/cards/calls/',
          headerPath: '../../assets/illustrations/icons/call-header.png',
        }),
        USER: Object.freeze({
          id: 'user',
          label: 'USUÁRIO',
          icon: '',
          accentColor: '#2378b8',
          frameColor: '#153d66',
          backgroundPath: '../../assets/cards/users/user-background-model.png',
          artRoot: '../../assets/illustrations/cards/users/',
          headerPath: '../../assets/illustrations/icons/user-header.png',
        }),
        GENERIC_EVENT: Object.freeze({
          id: 'event-generic',
          label: 'EVENTO GENÉRICO',
          icon: '⚙️',
          accentColor: '#7b4591',
          frameColor: '#3d214d',
          backgroundPath: '../../assets/cards/events-generic/event-generic-background-model.png',
          artRoot: '../../assets/illustrations/cards/events-generic/',
          headerPath: '../../assets/illustrations/icons/event-header.png',
        }),
        MISSION_EVENT: Object.freeze({
          id: 'event-mission',
          label: 'EVENTO DE MISSÃO',
          icon: '🎯',
          accentColor: '#b53d3d',
          frameColor: '#5b2020',
          backgroundPath: '../../assets/cards/events-mission/event-mission-background-model.png',
          artRoot: '../../assets/illustrations/cards/events-mission/',
          headerPath: '../../assets/illustrations/icons/mission-header.png',
        }),
        INITIATIVE: Object.freeze({
          id: 'initiative',
          label: 'INICIATIVA',
          icon: '⭐',
          accentColor: '#8a9197',
          frameColor: '#3e454a',
          backgroundPath: '../../assets/cards/users/user-background-model.png',
          artRoot: '../../assets/illustrations/cards/initiative/',
        }),
        PLAYER_INITIATIVE: Object.freeze({
          id: 'player-initiative',
          label: 'PERSONAGEM',
          icon: '⭐',
          accentColor: '#2378b8',
          frameColor: '#153d66',
          backgroundPath: '../../assets/cards/users/user-background-model.png',
          artRoot: '../../assets/illustrations/cards/initiative/',
        }),
        PLAYER_CHARACTER: Object.freeze({
          id: 'player-character',
          label: 'PERSONAGEM JOGÁVEL',
          icon: '👤',
          accentColor: '#2378b8',
          frameColor: '#153d66',
          backgroundPath: '../../assets/cards/users/user-background-model.png',
          artRoot: '../../assets/illustrations/cards/initiative/',
        }),
        ROUTINE: Object.freeze({
          id: 'routine',
          label: 'ROTINA',
          icon: 'ⓘ',
          accentColor: '#2378b8',
          frameColor: '#153d66',
          backgroundPath: '../../assets/cards/users/user-background-model.png',
          artRoot: '../../assets/illustrations/cards/initiative/',
          headerPath: '../../assets/illustrations/icons/routine-header.png',
        }),
        REFERENCE: Object.freeze({
          id: 'reference',
          label: 'AÇÕES',
          icon: '🚶',
          accentColor: '#fff7db',
          frameColor: '#303b42',
          backgroundPath: null,
          artRoot: '',
        }),
        CONSUMABLE_ITEM: Object.freeze({
          id: 'item-consumable',
          label: 'ITEM',
          icon: '☕',
          accentColor: '#6f4226',
          frameColor: '#3e2415',
          backgroundPath: null,
          artRoot: '',
          small: true,
        }),
        EQUIPMENT_ITEM: Object.freeze({
          id: 'item-equipment',
          label: 'ITEM',
          icon: '🧰',
          accentColor: '#b88958',
          frameColor: '#6b4528',
          backgroundPath: null,
          artRoot: '',
          small: true,
        }),
        REVERSIBLE_TILE: Object.freeze({
          id: 'reversible-tile',
          label: 'TILE REVERSÍVEL',
        }),
        TOKEN: Object.freeze({
          id: 'token',
          label: 'TOKEN',
        }),
        PAWN: Object.freeze({
          id: 'pawn',
          label: 'PEÃO',
        }),
      });

      const CARD_CREDITS = Object.freeze({
        artist: 'Codex',
        date: '2026-10',
      });


      const EVENT_ICONS = Object.freeze({
        NOW: '⚡',
        PREP: '🛠️',
        STEP_1: '🎯1',
        STEP_2: '🎯2',
        STEP_3: '🎯3',
        ONGOING: '⭐',
        TEST: '⭐',
        OBJECTIVE: '📌',
        DISCARD: '🗑️',
      });

      const cards = {
        A1: {
          type: CARD_TYPES.ROUTINE,
          title: 'INÍCIO DA RODADA',
          rules: [
            { label: '☎️⚡', line: '🔺 → 7–8: +⚠️ | 9–10: +⚠️; remova o tile ☎️ e ponha ☎️ + 👤 na fila.', nr_lines: 3, dense: true },
            { label: ' 📞', line: 'Para cada ☎️ + 👤 ainda na mão, resolva o efeito 📞 da carta de Usuário.', nr_lines: 2, dense: true },
            { label: '📞📞', line: 'Todos os telefones ocupados:\n🎲 ✅: +⚠️.', nr_lines: 2, dense: true },
            { label: ' 🦠', line: 'Servidor infectado: 🔺 → 6–8: +⚠️.\n9-10: +⚠️ e espalha para algum PC', nr_lines: 2 },
            { label: ' 🔥', line: 'Para cada fogo, 🎲 ✅: baixo vira alto e alto cria 1 baixo adjacente.', nr_lines: 3, dense: false },
          ],
        },
        A2: {
          type: CARD_TYPES.REFERENCE,
          title: '🚶 AÇÕES',
          rules: [
            { label: ' 👣', line: '👣 = valor do personagem por ação; cada ✅ em 🎲 soma 1 tile.', nr_lines: 2, dense: true },
            { label: '-🫩', line: '⏱️1: remova 🫩 de si ou de um aliado adjacente.', nr_lines: 2 },
            { label: '+🔋', line: '1×/turno: ⏱️1 → +🔋, até 5.', nr_lines: 1 },
            { label: '-🦠', line: '🖥️ PC: ⏱️1 · 🧠 ✅✅\n🗄️ SRV: ⏱️1 · 🧠 ✅✅✅', nr_lines: 2 },
            { label: ' 📞', line: '☎️⚡ → Em atendimento;\ncompre ☎️ + 👤.', nr_lines: 2 },
            { label: ' ⏸️', line: '⏱️1 · ☎️ + 👤 → fila; remova o tile ☎️.', nr_lines: 1 },
          ],
        },
        A3: {
          type: CARD_TYPES.REFERENCE,
          title: '🔋 ÂNIMO',
          rules: [
            { label: '🔋', line: '+1👣 ou +🙂 ou +🧠 durante 1⏱️', nr_lines: 1 },
            { label: '🔋', line: '+1 no resultado de 🔺', nr_lines: 1 },
            { label: '🔋', line: 'rerolar 1 dado sem 🔒', nr_lines: 1 },
            { label: '🔋🔋', line: '+⏱️', nr_lines: 1 },
            { label: '🔋🔋', line: '+1🎲 em uma rolagem', nr_lines: 1 },
            { label: 'LIMITE', line: 'Máx. 5 por personagem.', nr_lines: 2, dense: true },
          ],
        },
        B1: {
          type: CARD_TYPES.PLAYER_INITIATIVE,
          title: 'ROY TRENNEMAN',
          initiativeImage: '../../assets/pawns/roy-face.png',
          rules: [
            { label: 'ATRIBUTOS', line: '🧠3 · 🙂2 · 👣 = 3 + 1🎲', nr_lines: 1, dense: true },
            { label: '⭐', line: '3 ações.', nr_lines: 2 },
            { label: '', line: 'PEQUENA VITÓRIA: ao concluir um Chamado, +🔋.', nr_lines: 3, dense: true },
          ],
        },
        B2: {
          type: CARD_TYPES.PLAYER_INITIATIVE,
          title: 'MAURICE MOSS',
          initiativeImage: '../../assets/pawns/moss-face.png',
          rules: [
            { label: 'ATRIBUTOS', line: '🧠4 · 🙂1 · 👣 = 3 + 2🎲', nr_lines: 1, dense: true },
            { label: '⭐', line: '3 ações.', nr_lines: 2 },
            { label: '', line: 'HACKER: 1× por turno · adjacente a equipamento: ⏱️ -🦠', nr_lines: 3, dense: true },
          ],
        },
        PC1: {
          type: CARD_TYPES.PLAYER_CHARACTER,
          title: 'ROY TRENNEMAN',
          subtitle: 'TÉCNICO SÊNIOR · MÃO NA MASSA',
          characterImage: '../../assets/pawns/roy-face.png',
          attributes: '🧠 3   ·   🙂 2   ·   👣 = 3 + 1🎲',
          actions: '⭐ 3 ações por ativação',
          rules: [
            { label: '', line: 'PEQUENA VITÓRIA: ao concluir um Chamado, +🔋.', nr_lines: 3, dense: true },
          ],
        },
        PC2: {
          type: CARD_TYPES.PLAYER_CHARACTER,
          title: 'MAURICE MOSS',
          subtitle: 'HACKER · ESPECIALISTA EM COMPUTADORES',
          characterImage: '../../assets/pawns/moss-face.png',
          attributes: '🧠 4   ·   🙂 1   ·   👣 = 3 + 2🎲',
          actions: '⭐ 3 ações por ativação',
          rules: [
            { label: '', line: 'HACKER: 1× por turno · adjacente a equipamento: ⏱️ -🦠 grátis.', nr_lines: 3, dense: true },
          ],
        },
        PC3: {
          type: CARD_TYPES.PLAYER_CHARACTER,
          title: 'RICHMOND',
          subtitle: 'GÓTICO · CONFORTÁVEL NAS SOMBRAS',
          characterImage: '../../assets/pawns/richmond-face.png',
          inventoryLimit: 4,
          attributes: '🧠 2   ·   🙂 1   ·   👣 = 4 + 1🎲',
          actions: '⭐ 3 ações por ativação',
          rules: [
            { label: '', line: 'CLIMA PESADO: 1× por turno, ação livre: transfira 1🔋 de um personagem no mesmo hambiente para si.', nr_lines: 3, dense: true },
          ],
        },
        B3: {
          type: CARD_TYPES.PLAYER_INITIATIVE,
          title: 'JEN BARBER',
          initiativeImage: '../../assets/pawns/jen-face.png',
          rules: [
            { label: 'ATRIBUTOS', line: '🧠1 · 🙂3 · 👣 = 3 + 1🎲', nr_lines: 1, dense: true },
            { label: '⭐', line: '3 ações.', nr_lines: 2 },
            { label: 'SOCIAL', line: 'Chamado social concluído: −⚠️ adicional.', nr_lines: 3, dense: true },
          ],
        },
        B4: {
          type: CARD_TYPES.INITIATIVE,
          title: 'DENHOLM',
          rules: [
            { label: 'ATO 4', line: '1 ação: 👣 = 1 + 3🎲 em direção à sala.', nr_lines: 2, dense: true },
            { label: 'ATO 5', line: 'Siga a regra ⭐ da missão.', nr_lines: 3 },
          ],
        },
        B5: {
          type: CARD_TYPES.INITIATIVE,
          title: 'BOMBEIRO',
          rules: [
            { label: '⭐', line: '2 bombeiros · 2 ações cada: 👣 = 2 + 1🎲 ou apague 🔥 adjacente.', nr_lines: 3 },
            { label: '🔥', line: '🎲 ✅: apague 🔥.', nr_lines: 2 },
            { label: EVENT_ICONS.DISCARD, line: 'Quando não houver fogo no cenário.', nr_lines: 2 },
          ],
        },
        B6: {
          type: CARD_TYPES.PLAYER_INITIATIVE,
          title: 'RICHMOND',
          initiativeImage: '../../assets/pawns/richmond-face.png',
          rules: [
            { label: 'ATRIBUTOS', line: '🧠2 · 🙂1 · 👣 = 4 + 1🎲', nr_lines: 1, dense: true },
            { label: '⭐', line: '3 ações.', nr_lines: 2 },
            { label: '', line: 'CLIMA PESADO: 1× por turno, ação livre: transfira 1🔋 de um personagem no mesmo hambiente para si.', nr_lines: 3, dense: true },
          ],
        },
        C1: {
          type: CARD_TYPES.CALL,
          title: 'JÁ TENTOU DESLIGAR E LIGAR DE NOVO?',
          resolve: [
            {
              label: '📌',
            line: '🖥️ 🧠 ✅',
            },
          ],
        },
        C2: {
          type: CARD_TYPES.CALL,
          title: 'NÃO ABRE!',
          resolve: [
            {
              label: '📌',
              line: '🖥️ 🧠 ✅ + 🙂 ✅',
            },
          ],
        },
        C3: {
          type: CARD_TYPES.CALL,
          title: 'SENHA NÃO FUNCIONA',
          resolve: [
            {
              label: '📌',
              line: '🖥️ 🧠 ✅',
            },
          ],
        },
        C4: {
          type: CARD_TYPES.CALL,
          title: 'DERRUBEI A INTERNET',
          resolve: [
            {
              label: '📌 1',
              line: '🧠 ✅',
              effect: '🔄',
            },
            {
              label: '📌 2',
              line: '🖥️ 🧠 ✅✅',
            },
          ],
        },
        C5: {
          type: CARD_TYPES.CALL,
          title: '404: RELATÓRIO NÃO ENCONTRADO',
          resolve: [
            {
              label: '📌 1',
              line: '🖥️ 🧠 ✅✅',
              effect: '🔄',
            },
            {
              label: '📌 2',
              line: '🖥️ 🙂 ✅',
            },
          ],
        },
        C6: {
          type: CARD_TYPES.CALL,
          title: 'WHAT THE FLIP!',
          resolve: [
            {
              label: '📌',
              line: '🖥️ 🧠 ✅✅',
            },
          ],
        },
        C7: {
          type: CARD_TYPES.CALL,
          title: 'O MOUSE SUMIU',
          resolve: [
            {
              label: '📌',
              line: '🙂 ✅',
            },
          ],
        },
        C8: {
          type: CARD_TYPES.CALL,
          title: 'A IMPRESSORA NÃO IMPRIME',
          resolve: [
            {
              label: '📌',
              line: '🖥️ 🧠 ✅',
            },
          ],
        },
        D1: {
          type: CARD_TYPES.USER,
          title: 'O PACIENTE',
          quote: 'Só queria saber se alguém está cuidando disso.',
          rules: [
            { label: '✋', line: '-' },
            { label: '📞', line: '-' },
            { label: '⭐', line: '🔺 8–10: +⚠️' },
            { label: '🏁', line: '−⚠️' },
          ],
        },
        D2: {
          type: CARD_TYPES.USER,
          title: 'O IMPACIENTE',
          quote: 'Estou esperando há tempo demais.',
          rules: [
            { label: '✋', line: '-' },
            { label: '📞', line: '🎲 ✅: +⚠️' },
            { label: '⭐', line: '🔺 6–10: +⚠️' },
            { label: '🏁', line: '-' },
          ],
        },
        D3: {
          type: CARD_TYPES.USER,
          title: 'O IRRITADO',
          quote: 'Eu já expliquei isso três vezes!',
          rules: [
            { label: '✋', line: '-' },
            { label: '📞', line: '🎲 ✅: +⚠️' },
            { label: '⭐', line: '🔺 5–10: +⚠️' },
            { label: '🏁', line: '-' },
          ],
        },
        D4: {
          type: CARD_TYPES.USER,
          title: 'O PILHADO',
          quote: 'Quero falar com o responsável. Agora!',
          rules: [
            { label: '✋', line: '-' },
            { label: '📞', line: '🎲 ✅: +⚠️' },
            { label: '⭐', line: '🔺 6–10: +⚠️' },
            { label: '🏁', line: '-' },
          ],
        },
        D5: {
          type: CARD_TYPES.USER,
          title: 'O CONFUSO',
          quote: 'BING BONG NOISE',
          rules: [
            { label: '✋', line: '-' },
            { label: '📞', line: '🔺 10: +⚠️' },
            { label: '⭐', line: '🔺 8–10: +⚠️' },
            { label: '🏁', line: '-' },
          ],
        },
        D6: {
          type: CARD_TYPES.USER,
          title: 'SENHORA CARENTE',
          quote: '0118 999 881 999 119 725... 3',
          rules: [
            { label: '✋', line: '-' },
            { label: '📞', line: '-' },
            { label: '⭐', line: '🔺 9–10: +⚠️' },
            { label: '🏁', line: '+🔋' },
          ],
        },
        D7: {
          type: CARD_TYPES.USER,
          title: 'THE BOSS',
          quote: '',
          rules: [
            { label: '✋', line: '-' },
            { label: '📞', line: '🎲 ✅: +⚠️' },
            { label: '⭐', line: '🔺 4–10: +⚠️' },
            { label: '🏁', line: '-' },
          ],
        },
        D8: {
          type: CARD_TYPES.USER,
          title: 'AMIGO TAGARELA',
          quote: 'E aí, cara, quanto tempo?!',
          rules: [
            { label: '✋', line: '⏱️1 · 🙂 ✅: +🔋', nr_lines: 2, dense: true },
            { label: '📞', line: '-' },
            { label: '⭐', line: '-' },
            { label: '🏁', line: '−⚠️' },
          ],
        },
        E1: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'MAIS UM CHAMADO',
          rules: [
            {
              label: EVENT_ICONS.NOW,
              line: '+ ☎️⚡.\nSe todos estiverem ocupados, nada acontece.',
              effect: EVENT_ICONS.DISCARD,
              nr_lines: 4,
              dense: true,
            },
          ],
        },
        E2: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'ESPALHAR VÍRUS',
          rules: [
            {
              label: EVENT_ICONS.NOW,
              line: 'Se o servidor estiver 🦠: infecte um PC. Caso contrário: 🎲 ❌: infecte o servidor.',
              effect: EVENT_ICONS.DISCARD,
              nr_lines: 5,
              dense: true,
            },
          ],
        },
        E3: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'O SERVIDOR ESTÁ TOSSINDO',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Vire o tile do servidor para o lado infectado.', effect: EVENT_ICONS.DISCARD, nr_lines: 3 },
          ],
        },
        E4: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'SOLICITAÇÃO URGENTE\nDA DIRETORIA',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Coloque esta carta no fim da iniciativa.', nr_lines: 2 },
            {
              label: EVENT_ICONS.STEP_1,
              line: '1⏱️ 🖥️ 🧠 ✅✅ para preparar o relatório.',
              nr_lines: 3,
              dense: true,
            },
            {
              label: EVENT_ICONS.STEP_2,
              line: '1⏱️ 🖥️ 🙂 ✅ para enviar o relatório.',
              effect: EVENT_ICONS.DISCARD,
              nr_lines: 3,
              dense: true,
            },
            { label: EVENT_ICONS.ONGOING, line: '+⚠️', nr_lines: 2 },
          ],
        },
        E5: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'MOSS EXPLICA A SOLUÇÃO',
          quote: 'O problema era simples. A explicação, não.',
          rules: [
            {
              label: EVENT_ICONS.NOW,
              line: 'Escolha 1 opção:\nreduza 1⚠️ ou remova 🫩 de um personagem.',
              effect: EVENT_ICONS.DISCARD,
              nr_lines: 4,
              dense: true,
            },
          ],
        },
        E6: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'A SINERGIA DA DIRETORIA',
          quote: 'Ninguém sabe o que significa, mas todos precisam parecer ocupados.',
          rules: [
            { label: EVENT_ICONS.NOW, line: '+⚠️ e coloque esta carta no fim da iniciativa.\nSe nenhum ☎️ ativo: + ☎️⚡', nr_lines: 3 },
            { label: EVENT_ICONS.TEST, line: 'Cada jogador: 🎲 🙂\n❌: +🫩 | ✅: −⚠️\n🗑️', nr_lines: 3 },
          ],
        },
        E7: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'RELATÓRIO ATRASADO',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Coloque esta carta no fim da iniciativa.', nr_lines: 2 },
            {
              label: EVENT_ICONS.STEP_1,
              line: 'Preparar relatório:\n1⏱️ 🖥️ 🧠 ✅',
              nr_lines: 3,
            },
            {
              label: EVENT_ICONS.STEP_2,
              line: 'Enviar o relatório:\n1⏱️ 🖥️ 🙂 ✅',
              effect: EVENT_ICONS.DISCARD,
              nr_lines: 2,
            },
            { label: EVENT_ICONS.ONGOING, line: '🎲 ✅: +⚠️', nr_lines: 2 },
          ],
        },
        E8: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'DOIS ☎️⚡',
          quote: 'Alô? Alô? ALÔ?!',
          rules: [
            {
              label: EVENT_ICONS.NOW,
              line: '+ ☎️⚡ em até 2 telefones livres.',
              effect: EVENT_ICONS.DISCARD,
              nr_lines: 3,
              dense: true,
            },
          ],
        },
        E9: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'REUNIÃO DO MARKETING',
          quote: 'Precisamos alinhar o alinhamento.',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Mantenha esta carta no topo dos Eventos. Avance a iniciativa', nr_lines: 2 },
            { label: EVENT_ICONS.ONGOING, line: '🔺 → 1–6: 🗑️ | 9–10: −⚠️', nr_lines: 2, dense: true },
          ],
        },
        E10: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'DAR SATISFAÇÕES',
          quote: 'Só queria explicar uma coisa sobre aquele assunto... que não importa mais.',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Coloque esta carta no fim da iniciativa.', nr_lines: 2 },
            { label: EVENT_ICONS.STEP_1, line: '1⏱️ 🖥️ 🙂 ✅. Sucesso: −2⚠️ e 🗑️.', nr_lines: 3, dense: true },
          ],
        },
        E11: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'A APOSTA DO ENCONTRO',
          quote: 'Quem consegue um encontro primeiro mandando um e-mail cafajeste?',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Todos rolam 🙂. Mais ✅ vence; empate: só os empatados rolam novamente. Vencedor: +🔋🔋. Remova do jogo.', nr_lines: 5 },
          ],
        },
        E12: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'COUNTDOWN',
          quote: 'Você foi convidado para participar do programa Countdown.',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Todos rolam 🧠. Mais ✅ vence; empate: só os empatados rolam novamente. Vencedor: +🔋🔋. Remova do jogo.', nr_lines: 5 },
          ],
        },
        F1: {
          type: CARD_TYPES.MISSION_EVENT,
          title: "YESTERDAY'S JAM",
          subtitle: '1 — NOVA GERENTE',
          quote: 'Emails, enviar, receber, mouse, click, duplo click...',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Descubra que Jen não entende de computadores.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.PREP, line: 'Coloque Jen no elevador.', nr_lines: 2, dense: true },
            { label: '⭐', line: 'Jen: 👣 = 3 + 1🎲 até o técnico mais próximo.', nr_lines: 2, dense: true },
            {
              label: '⚔️',
              line: 'Técnico adjacente:\n🧠 vs 🙂 da Jen. Vitória: 🗑️',
              nr_lines: 4,
              dense: true,
            },
          ],
        },
        F2: {
          type: CARD_TYPES.MISSION_EVENT,
          title: "YESTERDAY'S JAM",
          subtitle: '2 — SINCLAIR ZX81',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Conclua as duas sabotagens antes que Jen chegue ao escritório de gerente.', nr_lines: 2 },
            { label: '⭐', line: 'Jen: 👣 = 2 + 1🎲, ou remova 💬\nSe faltar sabotagem ao chegar: +1 🙂.', nr_lines: 3, dense: true },
            { label: 'DISTRAIR', line: 'Jen: ⏱️ 🙂 vs 🙂. Vitória: +💬.', nr_lines: 1, dense: true },
            { label: EVENT_ICONS.STEP_1, line: 'No computador: 1⏱️ 🧠 ✅.', effect: 'vire o tile', nr_lines: 2 },
            { label: EVENT_ICONS.STEP_1, line: 'No telefone de Jen: 1⏱️.', effect: 'vire o tile', nr_lines: 2 },
            { label: EVENT_ICONS.DISCARD, line: 'Quando Jen chegar à cadeira. Revele a próxima missão', nr_lines: 2 },
          ],
        },
        F3: {
          type: CARD_TYPES.MISSION_EVENT,
          title: "YESTERDAY'S JAM",
          subtitle: '3 — AHAM, AHAM, CLARO...',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Credibilidade: 3.', nr_lines: 2, dense: true },
            { label: '🦠', line: 'PC de Jen infectado: −1🙂 para a Jen.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.TEST, line: 'Se jogador no escritório de Jen:\n🎲 ✅: Jen tenta usar o telefone:\nSe sabotado: 🗑️. | Se OK: +1🙂 Jen.', nr_lines: 3, dense: true },
            { label: '⚔️', line: 'Confronto direto: técnico a frente da mesa: 🧠 vs 🙂 da Jen.', effect: 'vitória: −1 Credibilidade', nr_lines: 3, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando a incompetência for comprovada ou a Credibilidade chegar a 0. Revele a próxima missão.', nr_lines: 3, dense: true },
          ],
        },
        F4: {
          type: CARD_TYPES.MISSION_EVENT,
          title: "YESTERDAY'S JAM",
          subtitle: '4 — FOUR, I MEAN, FIVE, I MEAN, FIRE!',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Esconda todos os fogos antes de Denholm entrar na sala.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.PREP, line: 'Fogo baixo no armario de baixo; Denholm no elevador; 2 🖥️ no escritório de Jen e 2 🖥️ no escritório principal.', nr_lines: 3, dense: true },
            { label: '⭐', line: 'Dhenolm: 1 ação · 👣 = 2 + 2🎲 em direção à sala.', nr_lines: 3, dense: true },
            { label: '🖥️', line: '⏱️1 pega 1🖥️; ⏱️1 solta quantos 🖥️ quiser.\nCada monitor ocupa 1 inventário; limite combinado: 3.', nr_lines: 3, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando Denholm entrar e todos os fogos estiverem escondidos. Revele a próxima missão.', nr_lines: 2, dense: true },
          ],
        },
        F5: {
          type: CARD_TYPES.MISSION_EVENT,
          title: "YESTERDAY'S JAM",
          subtitle: '5 — ARE YOU STRESSED?',
          rules: [
            { label: EVENT_ICONS.PREP, line: 'Jen na cadeira; Denholm diante da mesa.', nr_lines: 2 },
            { label: EVENT_ICONS.STEP_1, line: 'Chame os bombeiros: 🖥️ 🙂 ✅ + 🧠 ✅: 2 bombeiros no elevador', nr_lines: 3 },
            { label: EVENT_ICONS.STEP_2, line: 'Bombeiros devem apagar todos os 🔥.', nr_lines: 2, dense: true },
            { label: '⭐', line: 'Dhenolm: 2⏱️:\n💬: remova 1\nARE YOU SURE?: 🎲 ✅: +🫩 Jen.\nSe 🫩3+ na Jen, aumente no Boss stress', nr_lines: 4, dense: true },
            { label: 'DISTRAIR', line: '🙂 ✅✅. Vitória: +💬,\nDerrota: 🫩', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando não houver fogo no cenário.', nr_lines: 2 },
          ],
        },
        H1: {
          type: CARD_TYPES.CONSUMABLE_ITEM,
          copies: 4,
          title: 'XÍCARA DE CAFÉ',
          rules: [
            { label: 'USAR', line: 'Ação livre:\n+1🧠 +1👣 até o final do turno.\nDescarte.', nr_lines: 3, dense: true },
          ],
        },
        H2: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          title: 'SLIGHTLY LARGER GLASSES',
          rules: [
            { label: 'EQUIPADO', line: '+1🧠', nr_lines: 1 },
          ],
        },
        H3: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          title: 'ÓCULOS GLAMUROSO',
          rules: [
            { label: 'EQUIPADO', line: '+1🙂', nr_lines: 1 },
          ],
        },
        H4: {
          type: CARD_TYPES.CONSUMABLE_ITEM,
          copies: 3,
          title: 'BARRINHA DE PROTEÍNA',
          rules: [
            { label: 'USAR', line: 'Ação livre: +1⏱️.\nDescarte.', nr_lines: 2, dense: true },
          ],
        },
        H6: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          title: 'CAMISETA WWW.LADYSPROBLEMS.COM',
          rules: [
            { label: 'EQUIPADO', line: '−1🙂\n1×/ativação: remova 🫩 grátis.', nr_lines: 2, dense: true },
          ],
        },
        I1: {
          type: CARD_TYPES.MISSION_EVENT,
          title: 'TELEFONE MALDITO!',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Conclua os 3 chamados iniciais.', nr_lines: 2 },
            { label: EVENT_ICONS.PREP, line: '+ ☎️⚡ nos 3 telefones.', nr_lines: 2 },
            { label: EVENT_ICONS.DISCARD, line: 'Quando não houver telefones, usuários ou pendências.', nr_lines: 2 },
          ],
        },
        I2: {
          type: CARD_TYPES.MISSION_EVENT,
          title: 'FIREWALL',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Deixe os 3 computadores e o servidor funcionais.', nr_lines: 2 },
            { label: EVENT_ICONS.PREP, line: 'Comece com os 4 tiles infectados.', nr_lines: 2 },
            { label: EVENT_ICONS.DISCARD, line: 'Quando os 4 tiles estiverem funcionais.', nr_lines: 2 },
          ],
        },
        I3: {
          type: CARD_TYPES.MISSION_EVENT,
          title: 'ESQUECI DO CLIENTE',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Conclua 2 chamados e envie o relatório.', nr_lines: 2 },
            { label: EVENT_ICONS.PREP, line: 'Coloque 2 ☎️ + 👤 no fim da iniciativa.', nr_lines: 3, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando os 2 chamados e o relatório forem concluídos.', nr_lines: 2 },
          ],
        },
        I4: {
          type: CARD_TYPES.MISSION_EVENT,
          title: 'FIM DO EXPEDIENTE',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Complete 6 rodadas sem o Stress chegar a 8.', nr_lines: 2 },
            { label: EVENT_ICONS.PREP, line: 'Preparação: --', nr_lines: 2 },
            { label: EVENT_ICONS.DISCARD, line: 'Após 6 rodadas. Derrota: Stress chegar a 8.', nr_lines: 2, dense: true },
          ],
        },
        G1: {
          type: CARD_TYPES.REVERSIBLE_TILE,
          copies: 3,
          compact: true,
          front: { icon: '🖥️', tone: 'functional' },
          back: { icon: '🦠', tone: 'infected' },
        },
        G2: {
          type: CARD_TYPES.REVERSIBLE_TILE,
          front: { icon: '🗄️', tone: 'functional' },
          back: { icon: '🦠', tone: 'infected' },
        },
        G3: {
          type: CARD_TYPES.REVERSIBLE_TILE,
          copies: 3,
          compact: true,
          front: { icon: '⚡︎\n☎️', tone: 'connected' },
          back: { icon: '📞', tone: 'disconnected' },
        },
        G5: {
          type: CARD_TYPES.REVERSIBLE_TILE,
          front: { icon: '🧰', tone: 'supply' },
          back: { icon: '🧰', tone: 'supply-used' },
        },
        G6: {
          type: CARD_TYPES.REVERSIBLE_TILE,
          front: { icon: '☕', tone: 'kitchen-station' },
          back: { icon: '☕', tone: 'kitchen-station-used' },
        },
        G7: {
          type: CARD_TYPES.REVERSIBLE_TILE,
          front: { iconClass: 'cable-stretched', tone: 'connected' },
          back: { iconClass: 'cable-u', tone: 'disconnected' },
        },
        T1: {
          type: CARD_TYPES.TOKEN,
          copies: 8,
          front: { icon: '🔥', tone: 'fire-low' },
          back: { icon: '🔥🔥', tone: 'fire-high' },
        },
        T2: {
          type: CARD_TYPES.TOKEN,
          copies: 8,
          front: { icon: '🫩', tone: 'fatigue' },
        },
        T3: {
          type: CARD_TYPES.TOKEN,
          copies: 8,
          front: { icon: '💬', tone: 'distraction' },
        },
        T4: {
          type: CARD_TYPES.TOKEN,
          copies: 4,
          front: { icon: '📋', tone: 'meeting' },
        },
        T6: {
          type: CARD_TYPES.TOKEN,
          copies: 4,
          front: { icon: '🖥️', tone: 'monitor' },
        },
        T9: {
          type: CARD_TYPES.TOKEN,
          copies: 2,
          front: { icon: '⭐', tone: 'initiative' },
        },
        T11: {
          type: CARD_TYPES.TOKEN,
          kind: 'stress-arrow',
          copies: 1,
        },
        T12: {
          type: CARD_TYPES.TOKEN,
          kind: 'morale',
          copies: 6,
          front: { icon: '🔋', tone: 'morale' },
        },
        P2: {
          type: CARD_TYPES.PAWN,
          kind: 'character',
          name: 'Roy Trenneman',
          copies: 1,
          borderColor: '#d56a38',
          fillColor: '#f8dfd2',
          imagePath: '../../assets/pawns/roy-face.png',
        },
        P3: {
          type: CARD_TYPES.PAWN,
          kind: 'character',
          name: 'Maurice Moss',
          copies: 1,
          borderColor: '#7658a8',
          fillColor: '#e5def4',
          imagePath: '../../assets/pawns/moss-face.png',
        },
        P4: {
          type: CARD_TYPES.PAWN,
          kind: 'character',
          name: 'Jen Barber',
          copies: 1,
          borderColor: '#c75c82',
          fillColor: '#f5dce6',
          imagePath: '../../assets/pawns/jen-face.png',
        },
        P5: {
          type: CARD_TYPES.PAWN,
          kind: 'character',
          name: 'Denholm',
          copies: 1,
          borderColor: '#6d7378',
          fillColor: '#e0e3e5',
          imagePath: null,
        },
        P6: {
          type: CARD_TYPES.PAWN,
          kind: 'character',
          name: 'Bombeiro',
          copies: 2,
          borderColor: '#c44738',
          fillColor: '#f4d8d3',
          imagePath: null,
          icon: '👨‍🚒',
        },
        P7: {
          type: CARD_TYPES.PAWN,
          kind: 'character',
          name: 'Richmond',
          copies: 1,
          borderColor: '#343047',
          fillColor: '#d9d3e7',
          imagePath: '../../assets/pawns/richmond-face.png',
          icon: '🦇',
        },
      };



      window.ITCrowdCardData = Object.freeze({ CARD_TYPES, CARD_CREDITS, EVENT_ICONS, cards });
})();

