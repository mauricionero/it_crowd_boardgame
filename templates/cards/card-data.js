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
          headerPath: '../../assets/illustrations/icons/initiative-header.png',
        }),
        PLAYER_INITIATIVE: Object.freeze({
          id: 'player-initiative',
          label: 'INICIATIVA',
          icon: '⭐',
          accentColor: '#2378b8',
          frameColor: '#153d66',
          backgroundPath: '../../assets/cards/users/user-background-model.png',
          artRoot: '../../assets/illustrations/cards/initiative/',
          headerPath: '../../assets/illustrations/icons/initiative-header.png',
        }),
        PLAYER_CHARACTER: Object.freeze({
          id: 'player-character',
          label: 'PERSONAGEM',
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
        ACTIONS: Object.freeze({
          id: 'actions',
          label: 'AÇÕES',
          icon: '🚶',
          accentColor: '#c9cbc2',
          frameColor: '#303b42',
          backgroundPath: '../../assets/cards/actions/action-background-model.png',
          artRoot: '',
          headerPath: '../../assets/illustrations/icons/actions-header.png',
        }),
        MORALE: Object.freeze({
          id: 'morale',
          label: 'ÂNIMO',
          icon: '🔋',
          accentColor: '#fff7db',
          frameColor: '#303b42',
          backgroundPath: '../../assets/cards/actions/action-background-model.png',
          artRoot: '',
          headerPath: '../../assets/illustrations/icons/morale-header.png',
        }),
        CONSUMABLE_ITEM: Object.freeze({
          id: 'item-consumable',
          label: 'ITEM',
          icon: '☕',
          accentColor: '#6f4226',
          frameColor: '#3e2415',
          backgroundPath: null,
          artRoot: '',
          headerPath: '../../assets/illustrations/icons/coffee-item-header.png',
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
          headerPath: '../../assets/illustrations/icons/equipment-item-header.png',
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

      const FLOORS = Object.freeze({
        BASEMENT: 'B',
        OFFICE_1: '1',
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
          title: 'PORÃO',
          rules: [
            { label: '☎️⚡', line: '🔺 → 7–8: +⚠️ | 9–10: +⚠️; remova o tile ☎️ e coloque ☎️ + 👤 na iniciativa.', nr_lines: 2, dense: true },
            { label: ' 📞', line: 'Para cada ☎️ + 👤 ainda na mão, resolva o efeito 📞 da carta de Usuário.', nr_lines: 2, dense: true },
            { label: '📞📞', line: 'Todos os telefones ocupados:\n🎲 ✅: +⚠️.', nr_lines: 2, dense: true },
            { label: '⚠️', line: 'se ⚠️ igual ou menor que a quantidade de personagens jogaveis: +☎️⚡', nr_lines: 2, dense: true },
            { label: '🗄️🦠', line: '🔺 → 6–8: +⚠️.\n9-10: +⚠️ e espalha para algum 🖥️ no porão', nr_lines: 2 },
            { label: ' 🔥', line: 'Para cada fogo, 🎲 ✅: baixo vira alto e alto cria 1 baixo adjacente.', nr_lines: 3, dense: false },
          ],
        },
        A2: {
          type: CARD_TYPES.ACTIONS,
          title: 'AÇÕES',
          rules: [
            { label: ' 👣', line: '👣 = valor do personagem por ação; cada ✅ em 🎲 soma 1 tile.', nr_lines: 2, dense: true },
            { label: '-🫩', line: '⏱️1: remova 🫩 de si ou de um aliado adjacente.', nr_lines: 2 },
            { label: '+🔋', line: '1×/turno: ⏱️1 → +🔋, até 5.', nr_lines: 1 },
            { label: '-🦠', line: '🖥️ PC: ⏱️1 · 🧠 ✅✅\n🗄️ SRV: ⏱️1 · 🧠 ✅✅✅', nr_lines: 2 },
            { label: ' 👨‍🚒', line: '⏱️1 · 🖥️ 🙂 + 🧠 = ✅✅ → 2👨‍🚒 no 🛗 + BOMBEIRO na iniciativa.', nr_lines: 2, dense: true },
            { label: ' 📞', line: '☎️⚡ → Em atendimento;\ncompre ☎️ + 👤.', nr_lines: 2 },
            { label: ' ⏸️', line: '⏱️1 · ☎️ + 👤 → fila; remova o tile ☎️.', nr_lines: 1 },
          ],
        },
        A3: {
          type: CARD_TYPES.MORALE,
          title: 'ÂNIMO',
          rules: [
            { label: '🔋', line: '+1👣 ou +🙂 ou +🧠 durante 1⏱️', nr_lines: 1 },
            { label: '🔋', line: '+1 ou -1 no resultado de 🔺', nr_lines: 1 },
            { label: '🔋', line: 'rerolar 1 dado sem 🔒', nr_lines: 1 },
            { label: '🔋🔋', line: '+⏱️', nr_lines: 1 },
            { label: '🔋🔋', line: '+1🎲 em uma rolagem', nr_lines: 1 },
            { label: 'LIMITE', line: 'Máx. 5 por personagem.', nr_lines: 2, dense: true },
          ],
        },
        A4: {
          type: CARD_TYPES.ROUTINE,
          floor: FLOORS.OFFICE_1,
          title: 'ANDAR 1',
          rules: [
            { label: '🖨️🚫', line: '🔺 7–10: +⚠️', nr_lines: 2, dense: true },
            { label: '🗄️🦠', line: '🔺 1–7: infecte 🖥️[resultado].', nr_lines: 2, dense: true },
            { label: '🖥️🦠', line: '🔺 se 🖥️🦠[resultado]: +⚠️.', nr_lines: 2, dense: true },
          ],
        },
        A5: {
          type: CARD_TYPES.ACTIONS,
          floor: FLOORS.OFFICE_1,
          title: 'ANDAR 1',
          rules: [
            { label: '🖨️', line: '⏱️1 · adj. 🖨️🚫 + 📄 no inventário: vire para 🖨️✅.', nr_lines: 2, dense: true },
            { label: '🖥️', line: '⏱️1 · 🧠 ✅: -🦠 de baia adjacente.', nr_lines: 2, dense: true },
            { label: '🏋️', line: 'No GYM: 2⏱️ · resolva até 3 Chamados da fila que exijam apenas 🙂.', nr_lines: 2, dense: true },
          ],
        },
        B1: {
          type: CARD_TYPES.PLAYER_INITIATIVE,
          title: 'ROY TRENNEMAN',
          initiativeImage: '../../assets/pawns/roy-face.png',
          rules: [
            { label: 'ATRIBUTOS', line: '🧠3 · 🙂2 · 👣 = 3 + 2🎲', nr_lines: 1, dense: true },
            { label: '⭐', line: '3 ações.', nr_lines: 2 },
            { label: '', line: 'MOTIVADO: ao concluir um Chamado, +🔋.', nr_lines: 3, dense: true },
          ],
        },
        B2: {
          type: CARD_TYPES.PLAYER_INITIATIVE,
          title: 'MAURICE MOSS',
          initiativeImage: '../../assets/pawns/moss-face.png',
          rules: [
            { label: 'ATRIBUTOS', line: '🧠4 · 🙂0 · 👣 = 4 + 1🎲', nr_lines: 1, dense: true },
            { label: '⭐', line: '3 ações.', nr_lines: 2 },
            { label: '', line: 'HACKER: 1× por turno · adjacente a equipamento: ⏱️ -🦠', nr_lines: 3, dense: true },
          ],
        },
        PC1: {
          type: CARD_TYPES.PLAYER_CHARACTER,
          title: 'ROY TRENNEMAN',
          subtitle: 'TÉCNICO SÊNIOR · MÃO NA MASSA',
          characterImage: '../../assets/pawns/roy-face.png',
          attributes: '🧠 3   ·   🙂 2   ·   👣 = 3 + 2🎲',
          actions: '⭐ 3 ações por ativação',
          rules: [
            { label: '', line: 'MOTIVADO: ao concluir um Chamado, +🔋.', nr_lines: 3, dense: true },
          ],
        },
        PC2: {
          type: CARD_TYPES.PLAYER_CHARACTER,
          title: 'MAURICE MOSS',
          subtitle: 'HACKER · ESPECIALISTA EM COMPUTADORES',
          characterImage: '../../assets/pawns/moss-face.png',
          attributes: '🧠 4   ·   🙂 0   ·   👣 = 4 + 1🎲',
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
          attributes: '🧠 2   ·   🙂 1   ·   👣 = 4 + 2🎲',
          actions: '⭐ 3 ações por ativação',
          rules: [
            { label: '', line: 'CONFORMADO: remova 1 🫩 de si por turno sem custo.', nr_lines: 3, dense: true },
          ],
        },
        PC4: {
          type: CARD_TYPES.PLAYER_CHARACTER,
          title: 'JEN BARBER',
          subtitle: 'GERENTE · BOA DE CONVERSA',
          characterImage: '../../assets/pawns/jen-face.png',
          attributes: '🧠 0   ·   🙂 3   ·   👣 = 3 + 1🎲',
          actions: '⭐ 3 ações por ativação',
          rules: [
            { label: 'LIDERANÇA', line: 'Jen pode ceder 🔋 a outro personagem para usar em um Chamado que esteja na mão.\nQualquer Chamado concluído: Jen recebe +🔋.', nr_lines: 3, dense: true },
          ],
        },
        B3: {
          type: CARD_TYPES.PLAYER_INITIATIVE,
          title: 'JEN BARBER',
          initiativeImage: '../../assets/pawns/jen-face.png',
          rules: [
            { label: 'ATRIBUTOS', line: '🧠0 · 🙂3 · 👣 = 3 + 1🎲', nr_lines: 1, dense: true },
            { label: '⭐', line: '3 ações.', nr_lines: 2 },
            { label: 'LIDERANÇA', line: 'Jen pode ceder 🔋 a outro personagem para usar em um Chamado que esteja na mão.\nQualquer Chamado concluído: Jen recebe +🔋.', nr_lines: 3, dense: true },
          ],
        },
        B4: {
          type: CARD_TYPES.INITIATIVE,
          title: 'DENHOLM',
          initiativeImage: '../../assets/pawns/denholm-face.png',
          rules: [
            { label: 'ATO 4', line: '1 ação: 👣 = 1 + 3🎲 em direção à sala.', nr_lines: 2, dense: true },
            { label: 'ATO 5', line: 'Siga a regra ⭐ da missão.', nr_lines: 3 },
          ],
        },
        B5: {
          type: CARD_TYPES.INITIATIVE,
          title: 'BOMBEIRO',
          initiativeImage: '../../assets/pawns/firefighter-face.png',
          rules: [
            { label: '⭐', line: '2⏱️: 👣 = 2 + 1🎲 ou apague 🔥 adjacente.', nr_lines: 3 },
            { label: '🔥', line: '🎲 ✅: apague 🔥.', nr_lines: 2 },
            { label: EVENT_ICONS.DISCARD, line: 'Quando não houver fogo no cenário.', nr_lines: 2 },
          ],
        },
        B6: {
          type: CARD_TYPES.PLAYER_INITIATIVE,
          title: 'RICHMOND',
          initiativeImage: '../../assets/pawns/richmond-face.png',
          rules: [
            { label: 'ATRIBUTOS', line: '🧠2 · 🙂1 · 👣 = 4 + 2🎲', nr_lines: 1, dense: true },
            { label: '⭐', line: '3 ações.', nr_lines: 2 },
            { label: '', line: 'CONFORMADO: remova 1 🫩 de si por turno sem custo.', nr_lines: 3, dense: true },
          ],
        },
        B7: {
          type: CARD_TYPES.INITIATIVE,
          floor: FLOORS.OFFICE_1,
          title: 'DOUGLAS',
          initiativeImage: '../../assets/pawns/douglas-face.png',
          rules: [
            { label: 'ATRIB.', line: '3⏱️ · 🧠1 · 🙂1 · 👣 = 2 + 1🎲', nr_lines: 1, dense: true },
            { label: '⭐', line: '🔺 1-6: mova em direção ao personagem mais próximo;\n7-8: +🫩 no personagem mais próximo;\n9-10: +⚠️ e aumente ou coloque 1🔥 no tile de Douglas.', nr_lines: 6, dense: true },
            { label: '⭐', line: 'Final do turno: +🫩 para todos personagens adjacentes.', nr_lines: 2, dense: true },
          ],
        },
        C1: {
          type: CARD_TYPES.CALL,
          title: 'JÁ TENTOU DESLIGAR E LIGAR DE NOVO?',
          resolve: [
            {
              label: '📌',
            line: '⏱️1',
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
          title: 'ESTÁ PLUGADO NA TOMADA?',
          quote: 'Vocẽ precisa por na tomada!',
          resolve: [
            {
              label: '📌',
              line: '🙂 ✅',
            },
          ],
        },
        C8: {
          type: CARD_TYPES.CALL,
          floor: FLOORS.OFFICE_1,
          title: 'IMPRESSORA NÃO FUNCIONA',
          quote: 'Acho que precisa de papel...',
          resolve: [
            {
              label: EVENT_ICONS.PREP,
              line: 'Vire a impressora para 🖨️🚫',
              nr_lines: 2,
              dense: true,
            },
            {
              label: '📌',
              line: '🖨️✅',
              nr_lines: 2,
              dense: true,
            },
          ],
        },
        C9: {
          type: CARD_TYPES.CALL,
          title: 'RECUPERE O ACESSO AO SERVIDOR',
          quote: 'Access the data supply and connect to the matrix',
          resolve: [
            {
              label: '📌',
              line: '🗄️ 🧠 ✅✅',
            },
          ],
        },
        C10: {
          type: CARD_TYPES.CALL,
          floor: FLOORS.OFFICE_1,
          title: 'MINHA TELA FICOU VERDE',
          quote: 'Siga o coelho branco.',
          resolve: [
            {
              label: EVENT_ICONS.PREP,
              line: '🔺 1–7: infecte 🖥️[resultado].\n8–10: role novamente.',
              nr_lines: 2,
              dense: true,
            },
            {
              label: '📌',
              line: '🖥️[resultado] funcional.',
              nr_lines: 1,
              dense: true,
            },
          ],
        },
        C11: {
          type: CARD_TYPES.CALL,
          floor: FLOORS.OFFICE_1,
          title: 'VIDEO NÃO FUNCIONA',
          quote: 'A reunião começa em 5 minutos!',
          resolve: [
            { label: '⭐', line: '+⚠️', nr_lines: 1, dense: true },
            { label: '🎯', line: 'Na Sala 1: 1⏱️ 🧠✅: −⚠️, 🗑️', nr_lines: 2, dense: true },
          ],
        },
        C12: {
          type: CARD_TYPES.CALL,
          floor: FLOORS.OFFICE_1,
          title: 'ESSE É O BARULHO QUANDO LIGA',
          quote: 'Desculpa, você é do passado?',
          resolve: [
            { label: '🎯', line: '⏱️1 🙂✅: 🗑️', nr_lines: 2, dense: true },
          ],
        },
        D1: {
          type: CARD_TYPES.USER,
          title: 'O PACIENTE',
          quote: 'Quem escreveu Missa Brevis em D Menor?..',
          rules: [
            { label: '✋', line: '-', nr_lines: 1 },
            { label: '📞', line: '-', nr_lines: 1 },
            { label: '⭐', line: '🔺 8–10: +⚠️', nr_lines: 2 },
            { label: '🏁', line: '−⚠️', nr_lines: 2 },
          ],
        },
        D2: {
          type: CARD_TYPES.USER,
          title: 'PRIME, O COLECIONADOR',
          quote: 'A fan of tiny biscuits. You are full of surprises.',
          rules: [
            { label: '✋', line: '', nr_lines: 2 },
            { label: '📞', line: '', nr_lines: 2 },
            { label: '⭐', line: '🔺 4–10: +⚠️', nr_lines: 2 },
            { label: '🏁', line: '1🏆 aleatório.', nr_lines: 2, dense: true },
          ],
        },
        D3: {
          type: CARD_TYPES.USER,
          title: 'BILL CROUSE',
          floor: FLOORS.OFFICE_1,
          quote: 'Sabe, eu fui o último com ela.',
          rules: [
            { label: '✋', line: '−🙂', nr_lines: 2 },
            { label: '📞', line: '-', nr_lines: 1 },
            { label: '⭐', line: '🔺 8–10: +⚠️', nr_lines: 2 },
            { label: '🏁', line: '+🔋', nr_lines: 2 },
          ],
        },
        D4: {
          type: CARD_TYPES.USER,
          title: 'SOBRINHO DO CHEFE',
          quote: 'Meu tio disse que vocês resolvem isso agora.',
          rules: [
            { label: '✋', line: '−🧠', nr_lines: 2, dense: true },
            { label: '📞', line: '-', nr_lines: 1 },
            { label: '⭐', line: '🔺 6–10: +⚠️', nr_lines: 2 },
            { label: '🏁', line: '+🔋 se concluir na mão', nr_lines: 1 },
          ],
        },
        D5: {
          type: CARD_TYPES.USER,
          title: 'O CONFUSO',
          quote: 'BING BONG NOISE',
          rules: [
            { label: '✋', line: '-', nr_lines: 1 },
            { label: '📞', line: '🔺 10: +⚠️', nr_lines: 2 },
            { label: '⭐', line: '🔺 8–10: +⚠️', nr_lines: 2 },
            { label: '🏁', line: '-', nr_lines: 1 },
          ],
        },
        D6: {
          type: CARD_TYPES.USER,
          title: 'SENHORA CARENTE',
          quote: '0118 999 881 999 119 725... 3',
          rules: [
            { label: '✋', line: '-', nr_lines: 1 },
            { label: '📞', line: '-', nr_lines: 1 },
            { label: '⭐', line: '🔺 9–10: +⚠️', nr_lines: 2 },
            { label: '🏁', line: '+🔋', nr_lines: 2 },
          ],
        },
        D7: {
          type: CARD_TYPES.USER,
          title: 'THE BOSS',
          quote: 'Apenas 2 coisas: Um sonho e $ 6 milhões.',
          rules: [
            { label: '✋', line: '-', nr_lines: 1 },
            { label: '📞', line: '🎲 ✅: +⚠️', nr_lines: 2 },
            { label: '⭐', line: '🔺 4–10: +⚠️', nr_lines: 2 },
            { label: '🏁', line: '-', nr_lines: 1 },
          ],
        },
        D8: {
          type: CARD_TYPES.USER,
          title: 'AMIZADE DO FRIENDFACE',
          quote: 'E aí, o que tem aprontado?!',
          rules: [
            { label: '✋', line: '⏱️1 · 🙂 ✅: +🔋', nr_lines: 2, dense: true },
            { label: '📞', line: '🔺 6–10: + ☎️⚡', nr_lines: 1 },
            { label: '⭐', line: '-', nr_lines: 1 },
            { label: '🏁', line: '+🔋🔋', nr_lines: 2 },
          ],
        },
        D9: {
          type: CARD_TYPES.USER,
          title: 'MICHAEL, THE MAGNIFICENT',
          quote: 'Im not a magician.',
          rules: [
            { label: '✋', line: '-', nr_lines: 1 },
            { label: '📞', line: '-', nr_lines: 1 },
            { label: '⭐', line: 'Se vazia: coloque 1 item de qualquer inventário nesta carta.', nr_lines: 2, dense: true },
            { label: '🏁', line: 'Devolva o item; +🔋.', nr_lines: 2, dense: true },
          ],
        },
        D10: {
          type: CARD_TYPES.USER,
          title: 'O SPOILER',
          quote: 'É nesse filme que ele estava morto no final né!',
          rules: [
            { label: '✋', line: '-🙂', nr_lines: 2 },
            { label: '📞', line: '+🫩', nr_lines: 2 },
            { label: '⭐', line: '🔺 4–10: +⚠️', nr_lines: 2 },
            { label: '🏁', line: '-🫩', nr_lines: 2, dense: true },
          ],
        },
        D11: {
          type: CARD_TYPES.USER,
          floor: FLOORS.OFFICE_1,
          title: 'SAMANTHA',
          quote: 'Back soon. Get it fixed!',
          rules: [
            { label: '✋', line: '-🙂', nr_lines: 1 },
            { label: '📞', line: '🔺 5–10: +🫩', nr_lines: 2 },
            { label: '⭐', line: '🔺 10: +⚠️', nr_lines: 2 },
            { label: '🏁', line: '-', nr_lines: 1 },
          ],
        },
        D12: {
          type: CARD_TYPES.USER,
          floor: FLOORS.OFFICE_1,
          title: 'A NERD',
          quote: 'I like your glasses',
          rules: [
            { label: '✋', line: '+🙂 +🧠', nr_lines: 1 },
            { label: '📞', line: '-', nr_lines: 1 },
            { label: '⭐', line: '-', nr_lines: 1 },
            { label: '🏁', line: '+🔋', nr_lines: 1 },
          ],
        },
        D13: {
          type: CARD_TYPES.USER,
          floor: FLOORS.OFFICE_1,
          title: 'JULY OU JUDIE?',
          quote: 'É July, ou Judie? Definitivamente uma delas.',
          rules: [
            { label: '✋', line: '🔺 1–5: +🙂 | 6–10: -🙂', nr_lines: 2, dense: true },
            { label: '📞', line: '-', nr_lines: 1 },
            { label: '⭐', line: '🔺 1–5: -🫩 | 6–10: -🔋', nr_lines: 2, dense: true },
            { label: '🏁', line: '🔺 1–5: +🔋 | 6–10: -🔋', nr_lines: 2 },
          ],
        },
        E1: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'MAIS UM CHAMADO',
          quote: 'Pode apertar Ctrl + Alt + Del?',
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
          quote: 'Não parece importante ou legal, mas precisamos de um firewall...',
          rules: [
            {
              label: EVENT_ICONS.NOW,
              line: 'Se 🗄️ estiver 🦠: infecte um 🖥️. Caso contrário: 🔺 1–5: infecte 🗄️',
              effect: EVENT_ICONS.DISCARD,
              nr_lines: 5,
              dense: true,
            },
          ],
        },
        E3: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'A LUZINHA VERMELHA',
          quote: 'flash flash flash..... flash',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Vire o tile de 🗄️ para o lado infectado.', effect: EVENT_ICONS.DISCARD, nr_lines: 3 },
          ],
        },
        E4: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'SOLICITAÇÃO URGENTE\nDA DIRETORIA',
          quote: 'Isso não é um troféu de cabeça de sorvete?',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Coloque esta carta no fim da iniciativa.', nr_lines: 2 },
            {
              label: EVENT_ICONS.STEP_1,
              line: '1⏱️ 🖥️ 🧠 ✅✅ para preparar o relatório.',
              nr_lines: 1,
              dense: true,
            },
            {
              label: EVENT_ICONS.STEP_2,
              line: '1⏱️ 🖥️ 🙂 ✅ para enviar o relatório.',
              effect: EVENT_ICONS.DISCARD,
              nr_lines: 2,
              dense: true,
            },
            { label: EVENT_ICONS.ONGOING, line: '+⚠️', nr_lines: 1 },
          ],
        },
        E5: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'ALMOÇO EM EQUIPE',
          quote: 'Hajam naturalmente... Mais normal!.. Só relaxem..',
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
          title: 'GUERRA CONTRA O STRESS!',
          quote: 'Quem estiver estressado, será demitido!',
          rules: [
            { label: EVENT_ICONS.NOW, line: '+⚠️ e coloque esta carta no fim da iniciativa.\nSe nenhum ☎️ ativo: + ☎️⚡', nr_lines: 3 },
            { label: EVENT_ICONS.TEST, line: 'Cada jogador: 🎲 🙂\n❌: +🫩 | ✅: −⚠️;\n🗑️', nr_lines: 3 },
          ],
        },
        E7: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'RELATÓRIO DO FGTS',
          quote: '1800 billion billions!',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Coloque esta carta no fim da iniciativa.', nr_lines: 2 },
            {
              label: EVENT_ICONS.STEP_1,
              line: 'Preparar relatório:\n1⏱️ 🖥️ 🧠 ✅',
              nr_lines: 2,
            },
            {
              label: EVENT_ICONS.STEP_2,
              line: 'Enviar o relatório:\n1⏱️ 🖥️ 🙂 ✅',
              effect: EVENT_ICONS.DISCARD,
              nr_lines: 2,
            },
            { label: EVENT_ICONS.ONGOING, line: '🎲 ✅: +⚠️', nr_lines: 1 },
          ],
        },
        E8: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'AH NÃO!',
          quote: 'Is it a PC or a Mac?',
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
          floor: FLOORS.OFFICE_1,
          title: 'REUNIÃO DO MARKETING',
          quote: 'Cavalheiros, ergam suas taças.',
          rules: [
            { label: EVENT_ICONS.NOW, line: '+ ☎️⚡; Mantenha esta carta no topo dos Eventos. Avance a iniciativa', nr_lines: 2 },
            { label: EVENT_ICONS.ONGOING, line: '🔺 → 1–6: 🗑️ | 9–10: −⚠️;\n🖥️ 📍1️⃣ não infectam', nr_lines: 2, dense: true },
          ],
        },
        E10: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'AJUSTE EXECUTIVO',
          quote: 'Damn this electric pants!',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Coloque esta carta no fim da iniciativa.', nr_lines: 2 },
            { label: EVENT_ICONS.ONGOING, line: '🔺 → 6-10: +⚠️', nr_lines: 2 },
            { label: EVENT_ICONS.STEP_1, line: '1⏱️ 🖥️ 🙂+🧠 ✅✅. Sucesso: −2⚠️ e 🗑️.', nr_lines: 3, dense: true },
          ],
        },
        E11: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'A APOSTA',
          quote: 'Perfil cafageste online. P.S.: No dogs!!',
          rules: [
            { label: EVENT_ICONS.NOW, line: '☎️⚡; Todos rolam 🙂; Vencedor: +🔋🔋 e compre um 🏆Item. Remova do jogo.', nr_lines: 5 },
          ],
        },
        E12: {
          type: CARD_TYPES.GENERIC_EVENT,
          floor: FLOORS.OFFICE_1,
          title: 'COUNTDOWN',
          quote: "Você foi convidado para o Countdown!",
          rules: [
            { label: EVENT_ICONS.NOW, line: '☎️⚡; Todos rolam 🧠. Vencedor: +🔋🔋 e o Item 🏆Teapot do Countdown. Remova do jogo.', nr_lines: 5 },
          ],
        },
        E13: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'DESLIGOU O FERRO DE SOLDA?',
          quote: 'Então eu ligo... e VOU EMBORA!',
          rules: [
            { label: EVENT_ICONS.NOW, line: '🔺 → 1–6: ☎️⚡, 🗑️ | 7–10: 1🔥 no porão.', nr_lines: 3 },
          ],
        },
        E14: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'O ACHADO!',
          quote: 'Olha o que estava no fundo da gaveta!',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Se stress menor que 4: ☎️⚡\nTodos rolam 🎲🎲🎲. Vencedor: 🏆\n🗑️', nr_lines: 4, dense: true },
          ],
        },
        E15: {
          type: CARD_TYPES.GENERIC_EVENT,
          floor: FLOORS.OFFICE_1,
          title: 'MARKETEIRO NERD',
          quote: 'Ouvi dizer que ele tem até uma Black Lotus...',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Posicione esta carta na Copa do 📍1️⃣.\nSe nenhum ☎️ ocupado: + ☎️⚡', nr_lines: 2, dense: true },
            { label: '🏁', line: 'Na Copa: 1⏱️ 🙂✅: 1🏆, 🗑️', nr_lines: 2, dense: true },
          ],
        },
        E16: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'MARKETING MEIO OCUPADO',
          quote: 'Isto é uma reunião confidencial.',
          rules: [
            { label: EVENT_ICONS.NOW, line: '☎️⚡; Mantenha esta carta no topo dos Eventos.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.ONGOING, line: '🔺 1-5: 🗑️', nr_lines: 2, dense: true },
          ],
        },
        E17: {
          type: CARD_TYPES.GENERIC_EVENT,
          floor: FLOORS.OFFICE_1,
          title: 'MAIS UM CHAMADO...',
          quote: 'Só uma perguntinha...',
          illustrationPath: '../../assets/illustrations/cards/events-generic/e17.png',
          rules: [
            { label: EVENT_ICONS.NOW, line: '+ ☎️⚡. 🗑️', nr_lines: 2, dense: true },
          ],
        },
        E18: {
          type: CARD_TYPES.GENERIC_EVENT,
          floor: FLOORS.OFFICE_1,
          title: 'CC: E-MAIL SUSPEITO',
          quote: 'Manda para todo mundo.',
          illustrationPath: '../../assets/illustrations/cards/events-generic/e18.png',
          rules: [
            { label: EVENT_ICONS.NOW, line: '🗄️🦠; 🔺 → 1–7: infecte o 🖥️📍1️⃣ do número sorteado; 🗑️', nr_lines: 3, dense: true },
          ],
        },
        E19: {
          type: CARD_TYPES.GENERIC_EVENT,
          floor: FLOORS.OFFICE_1,
          title: 'O VÍRUS SUBIU',
          quote: 'O servidor está compartilhando tudo.',
          illustrationPath: '../../assets/illustrations/cards/events-generic/e19.png',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Se 🗄️🦠: 🔺 → 1–7: infecte o 🖥️📍1️⃣ do número sorteado. Senão: 🗄️🦠. 🗑️', nr_lines: 2, dense: true },
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
              nr_lines: 2,
              dense: true,
            },
          ],
        },
        F2: {
          type: CARD_TYPES.MISSION_EVENT,
          title: "YESTERDAY'S JAM",
          subtitle: '2 — SINCLAIR ZX81',
          quote: 'Estranho, ela nem se importou com o ZX81',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Infecte o PC de Jen antes que ela chegue à cadeira.', nr_lines: 2 },
            { label: '⭐', line: 'Jen: 👣 = 2 + 1🎲, ou remova 💬\nSe não sabotar PC ao chegar: +1🙂 Jen.', nr_lines: 2, dense: true },
            { label: 'DISTRAIR', line: 'Jen: ⏱️ 🙂 vs 🙂. Vitória: +💬.', nr_lines: 1, dense: true },
            { label: EVENT_ICONS.STEP_1, line: 'No computador: 1⏱️ 🧠 ✅✅.', effect: 'vire o tile', nr_lines: 2 },
            { label: EVENT_ICONS.DISCARD, line: 'Quando Jen chegar à cadeira. Revele a próxima missão.', nr_lines: 2 },
          ],
        },
        F3: {
          type: CARD_TYPES.MISSION_EVENT,
          title: "YESTERDAY'S JAM",
          subtitle: '3 — QUER CONECTAR NA MATRIX?',
          quote: 'Vocês estão inventando tudo isso',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Credibilidade: 3.', nr_lines: 1 },
            { label: '🦠', line: 'PC de Jen infectado: −1🙂 para a Jen.', nr_lines: 1, dense: true },
            { label: '⭐', line: 'Jen tenta o 1º Chamado da iniciativa, só com 🙂.\n🧠: +⚠️; falha: +⚠️.', nr_lines: 3, dense: true },
            { label: '⚔️', line: 'Confronto direto: técnico a frente da mesa: 🧠 vs 🙂 da Jen.', effect: 'vitória: −1 Credibilidade', nr_lines: 3, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando a Credibilidade chegar a 0. Revele a próxima missão.', nr_lines: 2, dense: true },
          ],
        },
        F4: {
          type: CARD_TYPES.MISSION_EVENT,
          title: "YESTERDAY'S JAM",
          subtitle: '4 — QUE SCREEN SAVER REALISTA!',
          quote: 'Espere um pouco... Cadê a Jen?',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Esconda todos os fogos antes de Denholm entrar na sala.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.PREP, line: 'Fogo baixo no armario de baixo; Denholm no elevador; 2 🖥️ no escritório de Jen e 2 🖥️ no escritório principal.', nr_lines: 3, dense: true },
            { label: '⭐', line: 'Dhenolm: 1 ação · 👣 = 3 + 1🎲 em direção à sala.', nr_lines: 2, dense: true },
            { label: '🖥️', line: '⏱️1 pega 1🖥️; ⏱️1 solta 1 ou mais 🖥️.\nCada monitor ocupa 1 inventário', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando Denholm entrar e todos os fogos estiverem escondidos. Revele a próxima missão.', nr_lines: 3, dense: true },
          ],
        },
        F5: {
          type: CARD_TYPES.MISSION_EVENT,
          title: "YESTERDAY'S JAM",
          subtitle: '5 — ARE YOU STRESSED?',
          quote: 'Are you sure? Are you sure?',
          rules: [
            { label: EVENT_ICONS.PREP, line: 'Jen na cadeira; Denholm diante da mesa.', nr_lines: 2 },
            { label: EVENT_ICONS.STEP_1, line: 'Chame os bombeiros.', nr_lines: 1 },
            { label: EVENT_ICONS.STEP_2, line: 'Bombeiros devem apagar todos os 🔥.', nr_lines: 1, dense: true },
            { label: '⭐', line: 'Dhenolm: 2⏱️:\n* 💬: remova 1;\n* ARE YOU SURE?: 🎲 ✅: +🫩 Jen.\nSe 🫩3+ na Jen, aumente no Boss stress', nr_lines: 4, dense: true },
            { label: '💬', line: 'DISTRAIR: 🙂 ✅✅. Vitória: +💬,\nDerrota: 🫩', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando não houver fogo no cenário.', nr_lines: 2 },
          ],
        },
        F6: {
          type: CARD_TYPES.MISSION_EVENT,
          floor: FLOORS.OFFICE_1,
          requiredFloors: [FLOORS.BASEMENT, FLOORS.OFFICE_1],
          title: 'FUNCIONÁRIA DO MÊS',
          subtitle: '1 — THE INTERNET',
          quote: 'Precisamos sacanear a Jen!',
          illustrationPath: '../../assets/illustrations/cards/events-mission/f6.jpg',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Jen com a 🏆THE INTERNET', nr_lines: 1, dense: true },
            { label: EVENT_ICONS.PREP, line: '🏆THE INTERNET no 🗄️\n🏆A CHAVE no almoxarifado 📍1️⃣', nr_lines: 1, dense: true },
            { label: '🎯', line: 'Jen deve levar 🏆THE INTERNET no inventário até o andar 1. 🗑️', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando Jen estiver no andar 1\ncom 🏆THE INTERNET. Revele a próxima missão.', nr_lines: 1, dense: true },
          ],
        },
        F8: {
          type: CARD_TYPES.MISSION_EVENT,
          floor: FLOORS.OFFICE_1,
          requiredFloors: [FLOORS.BASEMENT, FLOORS.OFFICE_1],
          title: 'FUNCIONÁRIA DO MÊS',
          subtitle: '2 — PREPARADA PARA O DISCURSO',
          quote: 'Cuidado!',
          illustrationPath: '../../assets/illustrations/cards/events-mission/f8.png',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Jen com 🏆THE INTERNET na Sala 1.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.PREP, line: '🗄️🦠; 🖥️📍1️⃣🦠: (PC 1, 5 e 6)', nr_lines: 2, dense: true },
            { label: '⭐', line: 'Para cada 🖥️📍1️⃣🦠: mova Jen 3 tiles em direção a ele. Se adj. a algum 🖥️🦠: +⚠️.', nr_lines: 3, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando Jen e 🏆THE INTERNET estiverem na Sala 1.', nr_lines: 2, dense: true },
          ],
        },
        F9: {
          type: CARD_TYPES.MISSION_EVENT,
          floor: FLOORS.OFFICE_1,
          requiredFloors: [FLOORS.BASEMENT, FLOORS.OFFICE_1],
          title: 'FUNCIONÁRIA DO MÊS',
          subtitle: '3 — O DISCURSO',
          quote: 'Isso, é A INTERNET!',
          illustrationPath: '../../assets/illustrations/cards/events-mission/f9.png',
          rules: [
            { label: EVENT_ICONS.PREP, line: 'Jen usa ⏱️ apenas para discursar, rerolar ou comprar 🎲.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.PREP, line: 'Douglas na sala do PC 7; coloque DOUGLAS no fim da iniciativa.', nr_lines: 2, dense: true },
            { label: '🎤', line: 'Jen 🎲🙂 → 2✅: +💬 | 0✅: +⚠️.', nr_lines: 1, dense: true },
            { label: '🎯', line: 'Douglas não pode entrar no escritório de Jen antes de 4💬.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando Jen tiver 4💬.', nr_lines: 2, dense: true },
          ],
        },
        F10: {
          type: CARD_TYPES.MISSION_EVENT,
          floor: FLOORS.OFFICE_1,
          requiredFloors: [FLOORS.BASEMENT, FLOORS.OFFICE_1],
          title: 'FUNCIONÁRIA DO MÊS',
          subtitle: '4 — DOUGLAS LOCAÇO DE ROHYPNOL',
          quote: 'Rápido, tranque o Douglas no escritório!',
          illustrationPath: '../../assets/illustrations/cards/events-mission/f10.png',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Pegue 🏆A CHAVE no almoxarifado.\nDouglas dentro do escritório do 🖥️7.\nPersonagem com 🏆A CHAVE deve estar adjacente a porta para trancar', nr_lines: 5, dense: true },
          ],
        },
        H1: {
          type: CARD_TYPES.CONSUMABLE_ITEM,
          copies: 4,
          location: 'kitchen',
          title: 'CAFÉ',
          itemImage: '../../assets/illustrations/cards/items/coffee.png',
          rules: [
            { label: 'USAR', line: 'Ação livre:\n+1🧠 +1👣 até o final do turno.\nDescarte.', nr_lines: 3, dense: true },
          ],
        },
        H2: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          title: 'SLIGHTLY LARGER GLASSES',
          itemImage: '../../assets/illustrations/cards/items/slightly-larger-glasses.png',
          rules: [
            { label: 'EQUIPADO', line: '+1🧠', nr_lines: 1 },
          ],
        },
        H3: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          title: 'ÓCULOS\nBAD-ASS',
          itemImage: '../../assets/illustrations/cards/items/bad-ass-glasses.png',
          rules: [
            { label: 'EQUIPADO', line: '+1🙂', nr_lines: 1 },
          ],
        },
        H4: {
          type: CARD_TYPES.CONSUMABLE_ITEM,
          copies: 2,
          location: 'kitchen',
          title: 'SMARTIES',
          itemImage: '../../assets/illustrations/cards/items/smarties.png',
          rules: [
            { label: 'USAR', line: 'Ação livre: -1🫩.\nDescarte.', nr_lines: 2, dense: true },
          ],
        },
        H5: {
          type: CARD_TYPES.CONSUMABLE_ITEM,
          location: 'kitchen',
          title: 'LEITE',
          itemImage: '../../assets/illustrations/cards/items/milk.png',
          rules: [
            { label: 'USAR', line: 'Ação livre: +🔋🔋.\nDescarte.', nr_lines: 2, dense: true },
          ],
        },
        H6: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          title: 'CAMISETA LADYSPROBLEMS',
          itemImage: '../../assets/illustrations/cards/items/ladyproblems-shirt.png',
          rules: [
            { label: 'EQUIPADO', line: '−1🙂\n1×/ativação: +🔋.', nr_lines: 2, dense: true },
          ],
        },
        H7: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          floor: FLOORS.OFFICE_1,
          collectionOnly: true,
          title: 'CACHIMBO',
          itemImage: '../../assets/illustrations/cards/items/moss-pipe.png',
          rules: [
            { label: 'EQUIPADO', line: '1x por turno:\nre-role qualquer quantidade de 🎲🙂, inclusive 🔒.', nr_lines: 3, dense: true },
          ],
        },
        H9: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          title: 'CAMISETA RTFM',
          itemImage: '../../assets/illustrations/cards/items/rtfm-shirt.png',
          rules: [
            { label: 'EQUIPADO', line: '+1🙂', nr_lines: 1 },
          ],
        },
        H8: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          collectionOnly: true,
          title: 'RELÓGIO',
          itemImage: '../../assets/illustrations/cards/items/watch.png',
          rules: [
            { label: '', line: '1×/turno: ⏱️1 → topo.', nr_lines: 1, dense: true },
            { label: 'USAR', line: '−⚠️.', nr_lines: 1, dense: true },
          ],
        },
        H10: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          collectionOnly: true,
          title: 'TARANTINO SOUTH-KOREAN DVD',
          itemImage: '../../assets/illustrations/cards/items/tarantino-south-korean-dvd.png',
          rules: [
            { label: 'USAR', line: '−⚠️.', nr_lines: 1, dense: true },
          ],
        },
        H11: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          collectionOnly: true,
          title: 'TROFÉU BIGGEST SHIT HEAD AWARD',
          itemImage: '../../assets/illustrations/cards/items/biggest-shit-head-trophy.png',
          rules: [
            { label: 'USAR', line: 'Conclua 1 Chamado.', nr_lines: 1, dense: true },
          ],
        },
        H12: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          floor: FLOORS.OFFICE_1,
          collectionOnly: true,
          title: 'TEAPOT DO COUNTDOWN',
          itemImage: '../../assets/illustrations/cards/items/teapot-countdown.png',
          rules: [
            { label: 'USAR', line: 'Remova até 2🫩', nr_lines: 2, dense: true },
          ],
        },
        H13: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          collectionOnly: true,
          title: 'CALENDÁRIO NERDY',
          itemImage: '../../assets/illustrations/cards/items/nerdy-calendar.png',
          rules: [
            { label: '', line: 'A cada rodada, você pode alterar a ordem de iniciativa dos personagens.', nr_lines: 2, dense: true },
          ],
        },
        H14: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          collectionOnly: true,
          title: 'THE INTERNET',
          itemImage: '../../assets/illustrations/cards/items/the-internet.png',
          rules: [
            { label: 'USAR', line: '−⚠️ ou conclua 1 Chamado.', nr_lines: 2, dense: true },
          ],
        },
        H15: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          floor: FLOORS.OFFICE_1,
          collectionOnly: true,
          title: 'CARTÃO DO CLUBE 8+',
          itemImage: '../../assets/illustrations/cards/items/countdown-8-plus-card.png',
          rules: [
            { label: 'USAR', line: '−⚠️ ou conclua 1 Chamado.', nr_lines: 2, dense: true },
          ],
        },
        H16: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          collectionOnly: true,
          title: 'JEN 2',
          itemImage: '../../assets/illustrations/cards/items/jen-2.png',
          rules: [
            { label: 'POSSE', line: 'Chamados que exigem apenas 🙂✅ ou 1⏱️ são resolvidos automaticamente.', nr_lines: 3, dense: true },
          ],
        },
        H17: {
          type: CARD_TYPES.CONSUMABLE_ITEM,
          floor: FLOORS.OFFICE_1,
          copies: 1,
          location: 'deposit',
          itemIcon: '📄',
          headerPath: null,
          title: 'PAPEL PARA IMPRESSORA',
          itemImage: '../../assets/illustrations/cards/items/printer-paper.png',
          rules: [
            { label: 'POSSE', line: 'Maço de papel. Não descarte ao consertar a impressora.', nr_lines: 2, dense: true },
          ],
        },
        H18: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          collectionOnly: true,
          title: 'MOCHILA DO MOSS',
          itemImage: '../../assets/illustrations/cards/items/moss-backpack.png',
          rules: [
            { label: 'POSSE', line: '+2 espaço de Inventário: posicione os itens sobre esta carta.', nr_lines: 2, dense: true },
          ],
        },
        H19: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          title: 'HEADPHONE',
          itemImage: '../../assets/illustrations/cards/items/moss-headset.png',
          rules: [
            { label: 'EQUIPADO', line: 'Você pode ignorar os efeitos ✋ dos usuários.', nr_lines: 2, dense: true },
          ],
        },
        H20: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          title: 'CRACHÁ DE GERENTE',
          itemImage: '../../assets/illustrations/cards/items/manager-badge.png',
          rules: [
            { label: 'EQUIPADO', line: '−1🧠 +1🙂', nr_lines: 1 },
          ],
        },
        H21: {
          type: CARD_TYPES.EQUIPMENT_ITEM,
          floor: FLOORS.OFFICE_1,
          collectionOnly: true,
          title: 'A CHAVE',
          itemImage: '../../assets/illustrations/cards/items/facilities-master-key.png',
          rules: [
            { label: 'USAR', line: '−⚠️.', nr_lines: 1, dense: true },
          ],
        },
        I1: {
          type: CARD_TYPES.MISSION_EVENT,
          title: 'TELEFONE MALDITO!',
          quote: 'Have you tried turning it off and on again?',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Conclua todos os chamados e telefones.', nr_lines: 2 },
            { label: EVENT_ICONS.PREP, line: '+ ☎️⚡ em todos os telefones.', nr_lines: 2 },
            { label: EVENT_ICONS.DISCARD, line: 'Quando não houver telefones e pendências.', nr_lines: 2 },
          ],
        },
        I2: {
          type: CARD_TYPES.MISSION_EVENT,
          title: 'FIREWALL',
          quote: 'AHHH!',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Deixe os 3 🖥️ e o 🗄️ funcionais.', nr_lines: 2 },
            { label: EVENT_ICONS.PREP, line: 'Comece com os 4 🖥️ infectados (🦠).', nr_lines: 2 },
            { label: EVENT_ICONS.DISCARD, line: 'Quando os 4 tiles estiverem funcionais.', nr_lines: 2 },
          ],
        },
        I3: {
          type: CARD_TYPES.MISSION_EVENT,
          title: 'ESQUECI DO CLIENTE',
          quote: 'Você tentou um reboot inesperado?',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Conclua todos os chamados e envie o relatório.', nr_lines: 2 },
            { label: EVENT_ICONS.PREP, line: 'Coloque 2(☎️ + 👤) no fim da iniciativa e a carta de evento "SOLICITAÇÃO URGENTE DA DIRETORIA".', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando os 2 chamados e o relatório forem concluídos.', nr_lines: 2 },
          ],
        },
        I4: {
          type: CARD_TYPES.MISSION_EVENT,
          title: 'FIM DO EXPEDIENTE',
          quote: 'Não quero fumar lá fora. É muito soviético.',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Sobreviva 8 rodadas.', nr_lines: 1 },
            { label: EVENT_ICONS.PREP, line: 'coloque sobre essa missão 🔺 em 1; ⚠️ inicial = 👤 jogáveis.', nr_lines: 2, dense: true },
            { label: '⭐', line: '🔺: 3–7: +☎️⚡ | 8–10: revele 1 Evento sobre esta carta.', nr_lines: 2, dense: true },
            { label: '⭐', line: 'Aumente 1 no 🔺. Ao chegar em 9, essa missão conclui em vitória.', nr_lines: 2, dense: true },
          ],
        },
        I5: {
          type: CARD_TYPES.MISSION_EVENT,
          title: 'QUEM TEM MAIS ITENS RAROS?',
          quote: 'Meu DVD é mais raro!',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Primeiro jogador com 3🏆 vence.', nr_lines: 1, dense: true },
            { label: '🏆', line: '1⏱️ + 🔋🔋 + 🧠🙂 ✅✅✅: pegue 1🏆 do topo.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando alguém tiver 3🏆.', nr_lines: 1, dense: true },
          ],
        },
        I6: {
          type: CARD_TYPES.MISSION_EVENT,
          floor: FLOORS.OFFICE_1,
          requiredFloors: [FLOORS.BASEMENT, FLOORS.OFFICE_1],
          title: 'CC PARA TODOS',
          quote: 'Parece legítimo.',
          rules: [
            { label: EVENT_ICONS.PREP, line: '🗄️🦠; infecte os 🖥️📍1️⃣: 1, 3, 5 e 7.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.OBJECTIVE, line: 'Todos os 🖥️📍1️⃣ funcionais.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando todos os 🖥️📍1️⃣ estiverem funcionais.', nr_lines: 2, dense: true },
          ],
        },
        I7: {
          type: CARD_TYPES.MISSION_EVENT,
          floor: FLOORS.OFFICE_1,
          requiredFloors: [FLOORS.BASEMENT, FLOORS.OFFICE_1],
          title: 'PAPELADA URGENTE',
          quote: 'É só colocar papel.',
          rules: [
            { label: EVENT_ICONS.PREP, line: '🖨️🚫; 📄 no depósito.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.OBJECTIVE, line: 'Coloque papel na impressora: 🖨️✅.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando a impressora estiver 🖨️✅.', nr_lines: 2, dense: true },
          ],
        },
        I8: {
          type: CARD_TYPES.MISSION_EVENT,
          floor: FLOORS.OFFICE_1,
          requiredFloors: [FLOORS.BASEMENT, FLOORS.OFFICE_1],
          title: 'CRISE',
          quote: 'Sexta-feira normal no departamento de TI.',
          rules: [
            { label: EVENT_ICONS.PREP, line: '🗄️🦠; 🖨️🚫; todos os ☎️⚡.', nr_lines: 3, dense: true },
            { label: EVENT_ICONS.OBJECTIVE, line: '🗄️✅ + 🖨️✅ + 0🦠 + 0 chamados abertos.', nr_lines: 3, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Sem ☎️⚡ ou ☎️+👤 na mão ou na iniciativa.', nr_lines: 2, dense: true },
          ],
        },
        I9: {
          type: CARD_TYPES.MISSION_EVENT,
          title: 'FOUR, I MEAN, FIVE, I MEAN, FIRE!!',
          quote: 'E-mail: Necessito de assistência imediata.',
          illustrationPath: '../../assets/illustrations/cards/events-mission/i9.png',
          rules: [
            { label: EVENT_ICONS.PREP, line: 'Coloque 3🔥 em tiles diferentes não adjacentes.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.OBJECTIVE, line: 'Chame os Bombeiros e apague todos os 🔥.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando não houver 🔥 no cenário.', nr_lines: 2, dense: true },
          ],
        },
        G1: {
          type: CARD_TYPES.REVERSIBLE_TILE,
          copies: 4,
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
          copies: 4,
          compact: true,
          front: { icon: '⚡︎\n☎️', tone: 'connected' },
          back: { icon: '📞', tone: 'disconnected' },
        },
        G4: {
          type: CARD_TYPES.REVERSIBLE_TILE,
          floor: FLOORS.OFFICE_1,
          front: { icon: '🖨️\n🚫', tone: 'disconnected' },
          back: { icon: '🖨️\n✅', tone: 'functional' },
        },
        G5: {
          type: CARD_TYPES.REVERSIBLE_TILE,
          front: { icon: '🧰', tone: 'supply' },
          back: { icon: '🧰', tone: 'supply-used' },
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
        T5: {
          type: CARD_TYPES.TOKEN,
          floor: FLOORS.OFFICE_1,
          copies: 7,
          front: { icon: '🦠', tone: 'infection-marker' },
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
          copies: 15,
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
          imagePath: '../../assets/pawns/denholm-face.png',
        },
        P6: {
          type: CARD_TYPES.PAWN,
          kind: 'character',
          name: 'Bombeiro',
          copies: 2,
          borderColor: '#c44738',
          fillColor: '#f4d8d3',
          imagePath: '../../assets/pawns/firefighter-face.png',
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
        P8: {
          type: CARD_TYPES.PAWN,
          kind: 'character',
          name: 'Douglas',
          copies: 1,
          borderColor: '#7f4d43',
          fillColor: '#eadbd1',
          imagePath: '../../assets/pawns/douglas-face.png',
        },
      };



      const nonCardTypes = new Set([
        CARD_TYPES.REVERSIBLE_TILE,
        CARD_TYPES.TOKEN,
        CARD_TYPES.PAWN,
      ]);
      Object.values(cards).forEach((card) => {
        if (nonCardTypes.has(card.type)) return;
        if (!card.floor) card.floor = FLOORS.BASEMENT;
        if (!card.requiredFloors) card.requiredFloors = [card.floor];
      });

      window.ITCrowdCardData = Object.freeze({ CARD_TYPES, CARD_CREDITS, EVENT_ICONS, FLOORS, cards });
})();

