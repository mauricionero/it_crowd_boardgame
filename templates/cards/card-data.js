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
            { label: '☎️', line: 'Tocando: 🎲 1d6 → 5: +⚠️ | 6: +⚠️ e faça surgir ☎️ + 👤.', nr_lines: 2, dense: false },
            { label: '🛗', line: 'Elevador com usuário: 🎲 1d6 → 5+: abre a porta.', nr_lines: 2 },
            { label: '🦠', line: 'Servidor infectado: 🎲 1d6 → 4+: +⚠️.\n6: espalha para algum PC', nr_lines: 3 },
            { label: '🔥', line: 'Para cada fogo, 🎲 1d6 → 5+: baixo vira alto e alto cria 1 baixo adjacente.', nr_lines: 3, dense: false },
          ],
        },
        A2: {
          type: CARD_TYPES.REFERENCE,
          title: '🚶 AÇÕES',
          rules: [
            { label: 'MOVER', line: '👣 até o valor do personagem por ação.', nr_lines: 1 },
            { label: 'ANIMAR', line: '🎲 1d6 → 5–6: remova 😔. Pode animar outro personagem adjacente.', nr_lines: 3 },
            { label: 'INTERAGIR', line: 'Siga o custo e o teste do espaço, tile ou carta.', nr_lines: 2 },
            { label: 'DESINFECTAR', line: '🖥️ PC: ⏱️1 · 🧠 ✅✅\nSRV: ⏱️1 · 🧠 ✅✅✅', nr_lines: 2, dense: true },
            { label: 'ATENDER', line: '☎️ Tocando → Em atendimento; compre ☎️ + 👤.', nr_lines: 2 },
            { label: 'RESOLVER', line: 'Siga o Chamado.', nr_lines: 1 },
            { label: 'ASSUMIR', line: '☎️ + 👤 da mão de outro; junto a um telefone livre.', nr_lines: 2 },
          ],
        },
        B1: {
          type: CARD_TYPES.PLAYER_INITIATIVE,
          title: 'ROY TRENNEMAN',
          rules: [
            { label: 'ATRIBUTOS', line: '🧠3 · 🙂2 · 👣2', nr_lines: 1 },
            { label: '⭐', line: '3 ações.', nr_lines: 2 },
            { label: '⌛', line: '+1 dado 🙂 ao enrolar um chamado por telefone.', nr_lines: 2, dense: true },
          ],
        },
        B2: {
          type: CARD_TYPES.PLAYER_INITIATIVE,
          title: 'MAURICE MOSS',
          rules: [
            { label: 'ATRIBUTOS', line: '🧠4 · 🙂1 · 👣3', nr_lines: 1 },
            { label: '⭐', line: '3 ações.', nr_lines: 2 },
            { label: 'GÊNIO', line: '🙂1. 🎲 1d6 → 4–6: remova 😔.', nr_lines: 2, dense: true },
          ],
        },
        PC1: {
          type: CARD_TYPES.PLAYER_CHARACTER,
          title: 'ROY TRENNEMAN',
          subtitle: 'TÉCNICO SÊNIOR · ENROLADOR PROFISSIONAL',
          characterImage: '../../assets/pawns/roy-face.png',
          attributes: '🧠 3   ·   🙂 2   ·   👣 2',
          actions: '⭐ 3 ações por ativação',
          rules: [
            { label: '⌛', line: '+1 dado 🙂 ao enrolar um chamado por telefone.', nr_lines: 2 },
          ],
        },
        PC2: {
          type: CARD_TYPES.PLAYER_CHARACTER,
          title: 'MAURICE MOSS',
          subtitle: 'GÊNIO ANTISSOCIAL · ESPECIALISTA EM COMPUTADORES',
          characterImage: '../../assets/pawns/moss-face.png',
          attributes: '🧠 4   ·   🙂 1   ·   👣 3',
          actions: '⭐ 3 ações por ativação',
          rules: [
            { label: 'ANIMADO', line: '🙂 1. 🎲 1d6 → 4–6: remova 😔.', nr_lines: 2 },
          ],
        },
        B3: {
          type: CARD_TYPES.PLAYER_INITIATIVE,
          title: 'JEN BARBER',
          rules: [
            { label: 'ATRIBUTOS', line: '🧠1 · 🙂3 · 👣2', nr_lines: 1 },
            { label: '⭐', line: '3 ações.', nr_lines: 2 },
            { label: 'SOCIAL', line: 'Chamado social concluído: −⚠️ adicional.', nr_lines: 2, dense: true },
          ],
        },
        B4: {
          type: CARD_TYPES.INITIATIVE,
          title: 'DENHOLM',
          rules: [
            { label: 'ATO 4', line: '1 ação: 👣3 em direção à sala.', nr_lines: 2 },
            { label: 'ATO 5', line: 'Fica diante da mesa de Jen.\nNão se move.', nr_lines: 3 },
            { label: '', line: 'ARE YOU SURE? Verifique se Jen tem 3+ 😔.', nr_lines: 2 },
          ],
        },
        B5: {
          type: CARD_TYPES.INITIATIVE,
          title: 'BOMBEIRO',
          rules: [
            { label: '⭐', line: '2 ações: 👣2 por ação ou tente apagar um fogo adjacente.', nr_lines: 3 },
            { label: '🔥', line: '🎲 1d6 → 5–6: alto vira baixo; baixo é removido.', nr_lines: 2 },
            { label: EVENT_ICONS.DISCARD, line: 'Quando não houver fogo no cenário.', nr_lines: 2 },
          ],
        },
        C1: {
          type: CARD_TYPES.CALL,
          title: 'JÁ TENTOU DESLIGAR E LIGAR DE NOVO?',
          resolve: [
            {
              label: '📌',
            line: '🧠 ✅',
            effect: '🏁 −⚠️',
            },
          ],
          enroll: {
            label: '⌛',
            line: '🙂 ✅',
          },
        },
        C2: {
          type: CARD_TYPES.CALL,
          title: 'NÃO ABRE!',
          resolve: [
            {
              label: '📌',
              line: '🧠 ✅ + 🙂 ✅',
              effect: '🏁 −⚠️',
            },
          ],
          enroll: {
            label: '⌛',
            line: '🙂 ✅',
          },
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
          enroll: {
            label: '⌛',
            line: '🙂 ✅',
          },
        },
        C4: {
          type: CARD_TYPES.CALL,
          title: 'DERRUBEI A INTERNET',
          resolve: [
            {
              label: '📌 1',
              line: '🧠 ✅✅',
              effect: '🔄',
            },
            {
              label: '📌 2',
              line: '🖥️ 🧠 ✅✅✅',
              effect: '🏁 −⚠️',
            },
          ],
          enroll: {
            label: '⌛',
            line: '🙂 ✅',
          },
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
              effect: '🏁 −⚠️',
            },
          ],
          enroll: {
            label: '⌛',
            line: '🙂 ✅ | falha +⚠️',
            dense: true,
          },
        },
        C6: {
          type: CARD_TYPES.CALL,
          title: 'WHAT THE FLIP!',
          resolve: [
            {
              label: '📌',
              line: '🖥️ 🧠 ✅✅',
              effect: '🏁 −⚠️',
            },
          ],
          enroll: {
            label: '⌛',
            line: '🙂 ✅',
          },
        },
        D1: {
          type: CARD_TYPES.USER,
          title: 'O PACIENTE',
          quote: 'Só queria saber se alguém está cuidando disso.',
          rules: [
            { label: '⭐ ⏸️', line: '🎲 1–5: nada | 6: 👤 📴' },
            { label: '⭐ ⊞', line: '👣3\n🎲 1–6: permanece paciente', dense: true },
          ],
        },
        D2: {
          type: CARD_TYPES.USER,
          title: 'O IMPACIENTE',
          quote: 'Estou esperando há tempo demais.',
          rules: [
            { label: '✋', line: '−1 🙂' },
            { label: '⭐ ⏸️', line: '🎲 1–3: nada | 4–5: +⚠️\n6: +⚠️ e 👤 📴', dense: true },
            { label: '⭐ ⊞', line: '👣3\n🎲 1–4: nada | 5: +⚠️ | 6: 😔', dense: true },
          ],
        },
        D3: {
          type: CARD_TYPES.USER,
          title: 'O IRRITADO',
          quote: 'Eu já expliquei isso três vezes!',
          rules: [
            { label: '✋', line: '−1 🧠' },
            { label: '⭐ ⏸️', line: '🎲 1–2: nada | 3–4: +⚠️\n5-6: +⚠️ e 👤 📴', dense: true },
            { label: '⭐ ⊞', line: '👣3\n🎲 1–3: nada | 4: +⚠️ | 5–6: 😔', dense: true },
          ],
        },
        D4: {
          type: CARD_TYPES.USER,
          title: 'O PILHADO',
          quote: 'Quero falar com o responsável. Agora!',
          rules: [
            { label: '✋', line: '−1 🧠' },
            { label: '⭐ ⏸️', line: '🎲 1: nada | 2: +⚠️ | 3–5: 👤 📴\n6: +⚠️ e 👤 📴', dense: true },
            { label: '⭐ ⊞', line: '👣4\n🎲 1–2: nada | 3–6: 😔' },
          ],
        },
        D5: {
          type: CARD_TYPES.USER,
          title: 'O CONFUSO',
          quote: 'BING BONG NOISE',
          rules: [
            { label: '✋', line: '−1 🧠' },
            { label: '⭐ ⏸️', line: '🎲 1–4: nada | 5–6: 👤 📴' },
            { label: '⭐ ⊞', line: '👣3\n🎲 1–5: nada | 6: 😔', dense: true },
            { label: '👥', line: '🎲 1–2: nada | 3–6: 😔', dense: true },
          ],
        },
        D6: {
          type: CARD_TYPES.USER,
          title: 'SENHORA CARENTE',
          quote: '0118 999 881 999 119 725... 3',
          rules: [
            { label: '⭐ ⏸️', line: '🎲 1–3: nada | 4–6: 👤 📴' },
            { label: '⭐ ⊞', line: '👣2\n🎲 1–4: nada | 5–6: 😔' },
          ],
        },
        D7: {
          type: CARD_TYPES.USER,
          title: 'THE BOSS',
          quote: '',
          rules: [
            { label: '✋', line: '−1 🙂' },
            { label: '⭐ ⏸️', line: '🎲 1–2: nada | 3–4: +⚠️\n5–6: +⚠️ e 👤 📴', dense: true },
            { label: '⭐ ⊞', line: '👣3\n🎲 1–3: nada | 4–5: +⚠️ | 6: 😔', dense: true },
            { label: '👥', line: '❌ → 😔' },
          ],
        },
        D8: {
          type: CARD_TYPES.USER,
          title: 'O AMIGO DO FAVOR',
          quote: 'E aí, cara, quanto tempo?!',
          rules: [
            { label: '✋', line: '+1 🙂 | +1 🧠' },
            { label: '⭐ ⏸️', line: '🎲 1–3: nada | 4–6: 👤 📴' },
            { label: '⭐ ⊞', line: '👣3' },
            { label: '👥', line: '⏱️ 🙂 ✅✅ · 1×\n🏁 ☎️ + 👤', nr_lines: 2, dense: true },
          ],
        },
        E1: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'MAIS UM CHAMADO',
          rules: [
            {
              label: EVENT_ICONS.NOW,
              line: 'Coloque ☎️ em um telefone livre.\nSe todos estiverem ocupados, nada acontece.',
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
              line: 'Espalhe um vírus, se nenhum estiver infectado: Jogue um dado, se der 5+, infecte o servidor.',
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
              line: 'Em um computador funcional:\n🧠 ✅✅ para preparar o relatório.',
              nr_lines: 3,
              dense: true,
            },
            {
              label: EVENT_ICONS.STEP_2,
              line: 'No mesmo computador funcional:\n🙂 ✅ para enviar o relatório.',
              effect: EVENT_ICONS.DISCARD,
              nr_lines: 3,
              dense: true,
            },
            { label: EVENT_ICONS.ONGOING, line: '+⚠️ em cada ativação.', nr_lines: 2 },
          ],
        },
        E5: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'MOSS EXPLICA A SOLUÇÃO',
          quote: 'O problema era simples. A explicação, não.',
          rules: [
            {
              label: EVENT_ICONS.NOW,
              line: 'Escolha 1 opção:\nreduza ⚠️ em 1 ou remova 😔 de um personagem.',
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
            { label: EVENT_ICONS.NOW, line: '+⚠️ e coloque esta carta no fim da iniciativa.', nr_lines: 2 },
            { label: EVENT_ICONS.TEST, line: 'Cada personagem jogável faz 🙂 ✅.\nQuem falhar recebe 😔.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Depois que todos os personagens testarem.', nr_lines: 2 },
          ],
        },
        E7: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'PRECISO DESSE RELATÓRIO\nPARA ONTEM',
          rules: [
            { label: EVENT_ICONS.NOW, line: 'Coloque esta carta no fim da iniciativa.', nr_lines: 2 },
            {
              label: EVENT_ICONS.STEP_1,
              line: 'Em um computador funcional:\n⏱️1 · 🧠 ✅ para preparar o relatório.',
              nr_lines: 3,
              dense: true,
            },
            {
              label: EVENT_ICONS.STEP_2,
              line: 'No mesmo computador funcional:\n⏱️1 · 🙂 ✅ para enviar o relatório.',
              effect: EVENT_ICONS.DISCARD,
              nr_lines: 3,
              dense: true,
            },
          ],
        },
        E8: {
          type: CARD_TYPES.GENERIC_EVENT,
          title: 'DOIS TELEFONES TOCANDO',
          quote: 'Alô? Alô? ALÔ?!',
          rules: [
            {
              label: EVENT_ICONS.NOW,
              line: 'Coloque ☎️ em 2 telefones livres.\nIgnore se não houver telefones livres.',
              effect: EVENT_ICONS.DISCARD,
              nr_lines: 4,
              dense: true,
            },
          ],
        },
        F1: {
          type: CARD_TYPES.MISSION_EVENT,
          title: "YESTERDAY'S JAM",
          subtitle: '1 — NOVA GERENTE',
          quote: 'Emails, enviar, receber, mouse, click, duplo click...',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Descubra que Jen não entende de computadores.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.PREP, line: 'Jen no tile à frente do elevador.', nr_lines: 2, dense: true },
            { label: '⭐', line: 'Jen: 👣4 até o técnico mais próximo.', nr_lines: 2, dense: true },
            {
              label: '⚔️',
              line: 'Técnico adjacente:\n🧠 vs 🙂. Vitória: 🗑️; empate/derrota: tente novamente.',
              effect: EVENT_ICONS.DISCARD,
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
            { label: EVENT_ICONS.OBJECTIVE, line: 'Conclua as duas sabotagens antes que Jen chegue à cadeira.', nr_lines: 2 },
            { label: '⭐', line: 'Jen: 👣2, ou remova 💬\nSe faltar sabotagem ao chegar: +1 🙂.', nr_lines: 3 },
            { label: '⌛', line: '⏱️ 🙂 vs 🙂 de Jen. Vitória: +💬 na Jen.', nr_lines: 1, dense: true },
            { label: EVENT_ICONS.STEP_1, line: 'No computador: 🧠 ✅.', effect: 'vire o tile', nr_lines: 2 },
            { label: EVENT_ICONS.STEP_2, line: 'No telefone de Jen: sem teste.', effect: 'vire o tile', nr_lines: 2 },
            { label: EVENT_ICONS.DISCARD, line: 'Quando Jen chegar à cadeira.', nr_lines: 2 },
          ],
        },
        F3: {
          type: CARD_TYPES.MISSION_EVENT,
          title: "YESTERDAY'S JAM",
          subtitle: '3 — AHAM, AHAM, CLARO...',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Credibilidade: 3. Preserve o estado dos tiles.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.TEST, line: 'Ao alcançar esta carta, 🎲 1d6 → 5–6: Jen tenta usar o telefone; se desconectado, comprove a incompetência.', nr_lines: 3, dense: true },
            { label: '⚔️', line: 'Confronto direto: técnico adjacente:\n🧠 vs 🙂.', effect: 'vitória: −1 Credibilidade', nr_lines: 3, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando a incompetência for comprovada ou a Credibilidade chegar a 0.', nr_lines: 3, dense: true },
          ],
        },
        F4: {
          type: CARD_TYPES.MISSION_EVENT,
          title: "YESTERDAY'S JAM",
          subtitle: '4 — FOUR, I MEAN, FIVE, I MEAN, FIRE!',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Esconda todos os fogos antes de Denholm entrar na sala.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.PREP, line: 'Fogo baixo na mesa; Denholm no elevador; 4 monitores no escritório de Jen.', nr_lines: 3, dense: true },
            { label: 'DENHOLM', line: 'Ao sair: 1 ação · 👣3 em direção à sala.', nr_lines: 2 },
            { label: 'MONITORES', line: '⏱️1 pega 1; ⏱️1 solta 1–2. Limite: 2 por personagem.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando Denholm entrar e todos os fogos estiverem escondidos.', nr_lines: 2, dense: true },
          ],
        },
        F5: {
          type: CARD_TYPES.MISSION_EVENT,
          title: "YESTERDAY'S JAM",
          subtitle: '5 — ARE YOU STRESSED?',
          rules: [
            { label: EVENT_ICONS.PREP, line: 'Jen na cadeira; Denholm diante da mesa.', nr_lines: 2 },
            { label: EVENT_ICONS.STEP_1, line: 'Chame os bombeiros: 🖥️ · ⏱️1 · 🙂 ✅.', nr_lines: 2 },
            { label: EVENT_ICONS.STEP_2, line: 'Aguarde o bombeiro por 2 turnos. Coloque 1 bombeiro no elevador.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.STEP_3, line: 'Bombeiros devem apagar os fogos.', nr_lines: 2, dense: true },
            { label: '', line: 'ARE YOU SURE? Na ativação de Denholm: Jen com 3+ 😔 = derrota.', nr_lines: 2, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando não houver fogo no cenário.', nr_lines: 2 },
          ],
        },
        H1: {
          type: CARD_TYPES.CONSUMABLE_ITEM,
          copies: 3,
          title: 'XÍCARA DE CAFÉ',
          rules: [
            { label: 'USAR', line: 'Ação livre:\n• +1👣;\n• Remova 😔 ou receba +1🧠 ou +1🙂 até o final do turno. Descarte.', nr_lines: 2, dense: true },
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
        I1: {
          type: CARD_TYPES.MISSION_EVENT,
          title: 'TELEFONE MALDITO!',
          rules: [
            { label: EVENT_ICONS.OBJECTIVE, line: 'Conclua os 3 chamados iniciais.', nr_lines: 2 },
            { label: EVENT_ICONS.PREP, line: 'Comece com os 3 telefones no lado Tocando.', nr_lines: 2 },
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
            { label: EVENT_ICONS.OBJECTIVE, line: 'Remova os 2 usuários e envie o relatório.', nr_lines: 2 },
            { label: EVENT_ICONS.PREP, line: 'faça surgir 2 ☎️ + 👤 no ponto de surgimento do cenário', nr_lines: 3, dense: true },
            { label: EVENT_ICONS.DISCARD, line: 'Quando os usuários saírem e o relatório for enviado.', nr_lines: 2 },
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
        G4: {
          type: CARD_TYPES.REVERSIBLE_TILE,
          front: { icon: '🚪', tone: 'closed' },
          back: { icon: '➜]', tone: 'open' },
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
          front: { icon: '😔', tone: 'despondency' },
        },
        T3: {
          type: CARD_TYPES.TOKEN,
          copies: 8,
          front: { icon: '💬', tone: 'enroll' },
        },
        T4: {
          type: CARD_TYPES.TOKEN,
          copies: 4,
          front: { icon: '📋', tone: 'meeting' },
        },
        T5: {
          type: CARD_TYPES.TOKEN,
          copies: 2,
          front: { icon: '⏳', tone: 'waiting' },
        },
        T6: {
          type: CARD_TYPES.TOKEN,
          copies: 4,
          front: { icon: '🖥️', tone: 'monitor' },
        },
        T9: {
          type: CARD_TYPES.TOKEN,
          copies: 1,
          front: { icon: '⭐', tone: 'initiative' },
        },
        T11: {
          type: CARD_TYPES.TOKEN,
          kind: 'stress-arrow',
          copies: 1,
        },
        P1: {
          type: CARD_TYPES.PAWN,
          kind: 'user',
          name: 'Usuário genérico',
          copies: 6,
          borderColor: '#2378b8',
          fillColor: '#e5f2fb',
          imagePath: null,
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
          copies: 1,
          borderColor: '#c44738',
          fillColor: '#f4d8d3',
          imagePath: null,
        },
      };



      window.ITCrowdCardData = Object.freeze({ CARD_TYPES, CARD_CREDITS, EVENT_ICONS, cards });
})();

