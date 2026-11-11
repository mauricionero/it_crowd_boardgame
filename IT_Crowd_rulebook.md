# THE IT CROWD — Manual de regras v0.7

# PARTE I — MANUAL DE REGRAS

**Protótipo de design · versão consolidada 0.7**
Jogo cooperativo PvE de gestão de crises, atendimento e sabotagem.

> Documento de protótipo não oficial. Os valores de atributos e probabilidades são parâmetros iniciais para playtest.

## 1. Objetivo do jogo

Os jogadores controlam os funcionários do departamento de TI. Precisam resolver chamados, lidar com usuários por telefone, manter computadores e servidor funcionando e impedir que o **The Boss Stress** chegue ao limite.

Uma missão roteirizada acrescenta objetivos próprios. No modo genérico, os jogadores escolhem um objetivo de expediente e tentam concluí-lo antes que a situação saia do controle.

## 2. Componentes

- Tabuleiro top-down do porão, dividido em tiles quadrados: sala de TI, escritório de Jen, sala de servidores, cozinha, corredor e elevador.
- Extensão de tabuleiro com escritório de Denholm e corredor para a missão *Yesterday's Jam*.
- Tiles reversíveis para computadores, servidor e telefones.
- Quatro tiles de computador e quatro tiles de telefone, com os lados **Tocando / Em atendimento**. Há um ramal para cada personagem jogável escolhido; os tiles excedentes ficam disponíveis para uso. Um telefone livre não fica no cenário: quando o ramal estiver livre, remova seu tile da mesa. No setup, cada jogador escolhe um escritório para seu personagem; o telefone e o computador desse personagem ficam nesse tile quando o telefone estiver em uso. Os telefones são funcionalmente equivalentes: qualquer telefone livre pode ser atendido, e qualquer personagem pode usar qualquer telefone ou computador.
- O escritório do gerente, localizado à direita do tabuleiro, é reservado à missão e não pode ser escolhido como escritório de um personagem jogável.
- Peões dos personagens e dois peões de Bombeiro. Usuários comuns são representados apenas pela combinação de cartas `☎️ + 👤`; não há peões genéricos de Usuário.
- Baralho de Chamados, baralho de Usuários, baralho de Eventos Genéricos, cartas de Missão e baralho de Colecionáveis `🏆`.
- Uma carta fixa de **Rotina** e uma estrela para indicar a iniciativa.
- Cartas de iniciativa de Denholm e do Bombeiro.
- Tokens recortáveis de 🫩 Cansaço, 🔋 Ânimo, 💬 Distração e monitores quebrados.
- Uma régua vertical de ⚠️ **The Boss Stress**, de 0 a 15, e uma seta móvel para indicar o valor atual.
- Fichas de 🔥 Fogo, com lados Fogo baixo / Fogo alto.
- Marcador de estação disponível/usada do Armário.
- Baralhos de Itens Consumíveis e Equipamentos.
- Uma carta de Ações e uma carta de Ânimo.
- D6 customizado e d10 comum.

O elevador ocupa **2 × 2 tiles**. A área serve como ponto físico de surgimento e posicionamento; estar nela não cria um estado especial nem altera o movimento.

### Escritórios dos jogadores

No setup, cada jogador escolhe um tile de escritório para seu personagem, exceto o escritório do gerente à direita do tabuleiro, que é reservado à missão. Coloque nesse escritório o computador correspondente ao personagem. Essa escolha serve apenas para definir a posição inicial desses componentes: qualquer personagem pode usar qualquer telefone ou computador. Se uma missão definir uma posição específica para um componente, a regra da missão tem prioridade.

### Ponto de surgimento

Cada cenário pode definir um ou mais **pontos de surgimento** para personagens especiais. Usuários comuns de chamados são representados apenas pela combinação de cartas **☎️ + 👤** e não entram fisicamente no cenário.

Se um surgimento especial estiver lotado, ignore o pedido completo e não aplique outra penalidade. Tente o surgimento novamente quando uma regra posterior permitir.

Use o próprio componente para mostrar o estado sempre que possível: tile virado indica computador ou servidor infectado; o tile de telefone mostra se o ramal está Tocando ou Em atendimento; carta girada 90° indica etapa concluída quando a carta assim determinar.

## 3. Iconografia

### Cartas, eventos e iniciativa

| Ícone | Significado |
|---|---|
| ⚡ | Resolver imediatamente quando a carta é revelada. |
| ⭐ | Efeito de paciência do usuário quando a estrela alcançar sua carta na fila. Cartas especiais podem escrever outros efeitos. |
| 🛠️ | Preparação da missão; resolva uma única vez quando a missão for revelada e prepare o tabuleiro conforme indicado. |
| 📌 | Objetivo de uma carta de Missão. |
| 🎯1 / 🎯2 / 🎯3 | Etapas numeradas de resolução de um Evento ou objetivo. |
| ⚔️ | Confronto ou interação direta entre personagens. |
| 🗑️ | Descarte a carta após resolver o efeito ou cumprir a condição indicada. |
| 🔄 | Vire a carta 90°. |

### Chamados, telefones e usuários

| Ícone | Significado |
|---|---|
| ☎️ | Telefone/chamado. O tile físico tem os lados Tocando / Em atendimento; se estiver livre, seu tile é removido do cenário. |
| ☎️⚡ | Telefone no estado Tocando; `+ ☎️⚡` coloca um telefone nesse estado. |
| 📴 | Telefone livre; seu tile não está no cenário. |
| 📞 | Efeito do Usuário enquanto o telefone está Em atendimento; resolva apenas na Rotina. |
| ✋ | Efeito especial enquanto `☎️ + 👤` estiver na mão de um personagem. |
| ⏸️ | Postergar: gaste uma ação, remova o tile de telefone e coloque `☎️ + 👤` no fim da fila de iniciativa. |
| 👤 | Usuário associado ao chamado; só fica em cena quando a carta ou missão disser explicitamente. |
| 🏁 | Conclusão: aplique o efeito ao finalizar um chamado. |

### Personagens, ações e testes

| Ícone | Significado |
|---|---|
| ⏱️ | Ação. Ex.: ⏱️1 = gastar uma ação. |
| 🧠 | Inteligência: quantidade de d6 igual ao atributo. |
| 🙂 | Carisma: quantidade de d6 igual ao atributo. |
| 👣 | Movimento em tiles. A notação `👣 = X + Y🎲` indica X tiles fixos mais 1 tile por cada `✅` obtido nos Y dados. |
| 🎲 | Role o d6 customizado de sucessos e falhas. |
| 🔺 | Role um d10 comum para uma tabela numérica; cada número vale 10%. |
| ✅ | Sucesso; repita o ícone para indicar mais de um sucesso, como ✅✅. |
| 🔒 | Cadeado sobreposto: o resultado está bloqueado e não pode ser rerrolado. `❌ + 🔒` é falha bloqueada; `✅ + 🔒` é sucesso bloqueado. |
| 🎲 ✅ | Role o d6 customizado; com ✅, resolva o efeito. |

### Cenário, riscos e marcadores

| Ícone | Significado |
|---|---|
| 🖥️ | Resolver junto a um computador funcional. |
| 🛗 | Elevador. |
| 🦠 | Vírus; vire um tile funcional para o lado infectado. |
| -🦠 | Desinfectar: remova o vírus de um equipamento, virando-o para o lado funcional. |
| 🔥 | Fogo ativo; o lado da ficha indica Fogo baixo ou Fogo alto. |
| 💬 | Marcador de distração em Jen; cada marcador reduz em 1 tile o próximo movimento dela. |
| ⚠️ | The Boss Stress da Empresa. |

### Recursos e itens

| Ícone | Significado |
|---|---|
| 🫩 | Cansaço. Cada marcador reduz em uma as ações do personagem por ativação. |
| 🔋 | Ânimo. Recurso pessoal; cada personagem pode guardar até 5. Consulte a carta de referência 🔋 Ânimo. |
| ☕ | Item Consumível. |
| 🧰 | Item Equipamento. |
| 🏆 | 1 item especial. |

### Símbolos de interação no tabuleiro

| Identificador | Espaço | Interação |
|---|---|---|
| ☎ TEL | Telefone | Atender ou manter um chamado em atendimento. |
| 🖥️ PC | Computador | Resolver chamados que exigem computador funcional. |
| 🗄️ SRV | Servidor | Restaurar o servidor e aplicar os efeitos da Rotina. |
| 🛗 ELEV | Elevador | Ponto físico de surgimento e posicionamento. |
| ☕ CAF | Cafeteira ou micro-ondas da Cozinha | Retirar Item Consumível. |
| 🧰 SUP | Armário de suprimentos | Produzir Item Equipamento. |
| 🚪 DNH | Porta de Denholm | Interações específicas da missão. |

## 4. Testes e dados

🎲 Role uma quantidade de d6 igual ao atributo usado. O dado customizado tem seis resultados:
**1 = ❌ + 🔒**
**2–4 = ❌**
**5 = ✅**
**6 = ✅ + 🔒**.
Tanto ✅ quanto ✅ + 🔒 contam como sucesso; os resultados com 🔒 são bloqueados. O jogo não usa números de dificuldade diferentes: apenas a quantidade de sucessos exigida varia. Uma dificuldade como **✅✅** significa obter dois sucessos para concluir a tarefa; eles podem vir de várias rolagens durante a mesma ativação, mas não precisam sair na mesma rolagem.

Exemplos:

- **🧠 ✅**: role os dados de Inteligência e acumule um sucesso.
- **🙂 ✅✅**: role os dados de Carisma e acumule dois sucessos.
- **🧠 vs 🙂**: cada lado rola seu próprio pool; compare a quantidade de sucessos.
- **🧠 ✅ e 🙂 ✅**: acumule um sucesso de Inteligência e um de Carisma; cada requisito é acompanhado separadamente.

Depois de uma rolagem, gaste **⏱️1** para rerrolar qualquer quantidade de dados **não bloqueados** pertencentes a um único personagem por vez. Isso também pode ser feito com os dados de um NPC. Dados com 🔒 são bloqueados e não podem ser rerrolados. Um dado rerrolado substitui seu resultado anterior. Os sucessos já obtidos permanecem acumulados durante a ativação atual. Cada rerrolagem pode acrescentar novos sucessos à mesma tarefa. Se a tarefa não for concluída até o fim da ativação, descarte todo o progresso parcial; uma nova ativação começa sem sucessos acumulados, salvo se a própria regra disser o contrário.

**Exemplo:** uma tarefa **✅✅** começa com 1 sucesso. O personagem pode usar outra ação para rolar ou rerrolar dados e tentar obter o segundo sucesso. Se a ativação terminar com apenas 1✅, esse progresso é perdido e a próxima ativação começa novamente do zero.

### Tentar novamente ou rerrolar

Essas são duas escolhas diferentes:

- **Tentar novamente:** gaste o custo normal da tarefa para começar um novo teste. Role novamente o pool inteiro do atributo, descarte os resultados anteriores e zere os sucessos acumulados daquela tentativa. Use esta opção quando quiser uma nova chance completa ou quando os dados bloqueados tornarem a rerrolagem pouco útil.
- **Rerrolar:** gaste **⏱️1** adicional depois da rolagem normal para escolher qualquer quantidade de dados não bloqueados de um único personagem. Isso pode incluir ✅ e ❌; cada dado escolhido substitui seu resultado anterior. Essa opção permite buscar um resultado melhor, e também pode trocar um ✅ por um ❌. Resultados com 🔒 não podem ser escolhidos.

**Exemplo:** o resultado foi `✅ · ❌ · ❌🔒`. O jogador pode rerrolar o `✅`, o `❌` ou os dois, mas não pode escolher o `❌🔒`. Se rerrolar o `❌`, a nova face substitui a anterior. Se preferir tentar novamente, descarta os três resultados e role todo o pool outra vez.

O atributo 0 não gera dados e não pode produzir sucessos em um teste que exija esse atributo, salvo exceção escrita na carta. Testes resolvidos automaticamente pela Rotina, por uma ativação ⭐ ou por uma tabela 🔺 não usam rerrolagem, salvo se a própria regra permitir.

Use `🔺` quando a carta mostrar resultados numéricos ou faixas de um d10. Use `🎲` quando a rolagem depender de `✅` ou `❌` do d6 customizado.

Faixas como **6+** (6 ou mais) que aparecem em tabelas de Rotina ou reações de d10 são gatilhos específicos daquela rolagem, não dificuldades de testes de atributo.

### Confrontos entre atributos

Quando uma regra usar **A vs B**, cada lado rola uma quantidade de d6 igual ao próprio atributo. Cada resultado 5 ou 6 vale ✅; o lado com mais sucessos vence. Isso funciona tanto para atributos iguais quanto diferentes, como 🧠 vs 🧠 ou 🧠 vs 🙂. Um confronto não tem uma quantidade fixa de sucessos exigida.

**Empate:** nenhum lado vence e nenhum efeito do confronto acontece. A ação ou ativação usada é gasta. O confronto só pode ser repetido se a regra permitir uma nova tentativa.

Quando uma regra indicar um atributo combinado, como **🧠 + 🙂**, some os dados dos dois atributos e conte os resultados 5 ou 6 como sucessos no mesmo teste.

Quando uma regra indicar atributos diferentes e um sucesso diferente para cada, como **🧠✅ 🙂✅✅**, sao rolagens independentes para cada atributo, nesse caso seria 1 sucesso para 🧠 e 2 sucessos para 🙂.

## 5. Personagens e ações

Cada personagem jogável recebe **3 ações por ativação**, antes das penalidades de Cansaço (🫩). No setup, os jogadores escolhem a ordem de ativação dos personagens.

Ações básicas:

- **Mover:** até o valor de **👣** tiles por ação.
- **Atender:** junto a qualquer `☎️⚡`, gastar ⏱️1, virar o marcador para Em atendimento (📞) e comprar uma carta de Chamado e uma carta de Usuário.
- **Resolver, investigar ou sabotar:** seguir o custo e o teste impressos na carta ou no tile.
- **Gerar Ânimo:** uma vez por ativação, gaste ⏱️1 para ganhar 1🔋, se o personagem tiver menos de 5🔋.
- **Postergar:** enquanto segura uma combinação ☎️ + 👤, gaste ⏱️1 para desligar o telefone, removendo seu tile da mesa, e colocar as duas cartas no fim da fila de iniciativa, com o Chamado por cima. Qualquer personagem pode resolver o Chamado diretamente da fila durante seu turno.
- **Recuperar:** gaste ⏱️1 para remover 1🫩 de si ou de um aliado adjacente.

### Regras avançadas: converter ações em recurso

- **Trocar ação por Cansaço:** durante sua ativação, um personagem pode gastar **⏱️1** para remover **1🫩** de si ou de um aliado adjacente. Alternativamente, pode colocar **1🫩** sobre si para realizar **1 ação extra imediatamente**; esse 🫩 passa a reduzir as ações disponíveis normalmente na próxima ativação. A opção de colocar 🫩 pode ser usada no máximo **2 vezes por ativação**. Não é permitido ultrapassar 3🫩, o personagem com 3🫩 ficará incapacitado até receber ajuda pois não tem ações para conseguir se recuperar.
- **Comprar um dado:** antes de um teste de atributo, gaste **⏱️1** para adicionar **+1 dado** ao atributo usado naquele teste. O dado extra vale para a rolagem e suas rerrolagens, não altera o atributo da ficha e é descartado ao terminar o teste. O custo é adicional ao custo normal da tarefa.
- **Ânimo:** cada personagem pode guardar até **5🔋**. Além das fontes indicadas nas cartas, cada personagem pode gerar 1🔋 por turno conforme a ação **Gerar Ânimo**. Gaste os tokens conforme a carta de referência **🔋 Ânimo**.
- **Interrupções:** um jogador pode gastar **🔋** a qualquer momento, inclusive durante a ativação de outro personagem e antes de resolver uma carta de Evento ou Missão. A opção de colocar **1🫩** para ganhar **1 ação extra** também pode ser declarada como interrupção. Resolva a interrupção antes de continuar a resolução interrompida; respeite os momentos indicados na carta de referência para declarar cada bônus.
- **Reabastecer café:** estando adjacente ao tile **☕ CAFÉ**, gaste **⏱️2** para retornar à Cozinha todas as cartas de **Xícara de café** removidas do jogo. Não mova cafés que ainda estejam no inventário nem crie cópias extras.

### Cansaço

Antes de cada ativação de personagem, recalcule as ações disponíveis:

**Ações disponíveis = 3 − ações já gastas − 🫩 atuais.**

| 🫩 no início da ativação | Ações disponíveis |
|---:|---:|
| 0 | 3 |
| 1 | 2 |
| 2 | 1 |
| 3 ou mais | 0 |

Com 3 ou mais 🫩, o personagem fica incapacitado e não pode se recuperar sozinho. Outro personagem no mesmo cômodo pode gastar uma ação para ajudá-lo, removendo 1🫩 por ação; portanto, podem ser necessárias várias ações para recapacitá-lo.

Exemplo: caso 1 personagem esteja com 🫩 na sua ativação, significa que ele possui 2 ações. O jogador pode gastar 2 ações como quiser, uma das ações pode ser remover 1🫩. Portanto, na prática, cada vez que se troca uma ação extra por um 🫩, está custando no final 2 ações.

### Atributos iniciais para playtest

| Personagem | 🧠 Inteligência | 🙂 Carisma | 👣 Movimento |
|---|---:|---:|---:|
| Roy | 3 | 2 | `3 + 1🎲` |
| Moss | 4 | 1 | `3 + 2🎲` |
| Richmond | 2 | 1 | `4 + 1🎲` |
| Jen | 1 | 3 | `3 + 1🎲` |
| Denholm (NPC) | 1 | 2 | `1 + 3🎲` |

**Roy — Pequena Vitória:** ao concluir um Chamado, ganhe 1🔋.

**Moss — Hacker:** 1× por ativação, se estiver adjacente a um equipamento, pode usar `-🦠` sem rolar 🎲, apenas gastando 1⏱️.

**Richmond — Conformado:** 1× por turno, remova 1🫩 de si sem gastar ⏱️.

**Jen — Sabe lidar com gente:** ao concluir com sucesso um chamado social, reduz 1⚠️.

## 6. Movimento e ocupação dos tiles

**Adjacência:** dois tiles são adjacentes quando compartilham um lado ou um canto. Portanto, tiles na diagonal também são adjacentes. Essa definição vale para interação, transferência de itens e todos os efeitos que mencionem um tile ou personagem adjacente; o movimento segue a regra própria abaixo.

- Personagens jogáveis aplicam sua expressão de **👣** a cada ação de Mover. NPCs e personagens especiais só se movem quando a própria carta ou missão determinar.
- Na notação `👣 = X + Y🎲`, mova primeiro X tiles e role Y dados; cada `✅` acrescenta 1 tile no movimento.
- Cada tile comporta uma miniatura. Não é permitido terminar o movimento no tile ocupado por outro personagem.
- O movimento só pode ser ortogonal (+): cima, baixo, esquerda ou direita. Cada tile atravessado conta como 1 movimento. O caminho deve seguir tiles conectados, e paredes continuam bloqueando o movimento.

## 7. Fila de iniciativa

No setup, escolha a ordem dos personagens jogáveis. Posicione primeiro a carta de rotina, depois o baralho de eventos, depois os personagens e por último a(s) missão(ões)

**Ordem base da fila:**

1. **Rotina** — carta fixa no início da fila, resolvida no início de cada rodada antes de a estrela avançar.
2. **Eventos Genéricos** — verifica e revela o topo do baralho quando a estrela chegar à posição e não houver evento revelado.
3. **Personagens jogáveis** — na ordem escolhida no setup.
4. **Missão** — resolve a carta de missão ativa.
5. **Cartas na iniciativa** — pendências, usuários e eventos persistentes, na ordem em que foram adicionados.

### Cartas que entram na iniciativa

- Toda carta que entrar na iniciativa vai para a **extremidade direita da fila**, depois das cartas que já estão nela.
- Uma combinação **☎️ + 👤** entra na fila somente quando um personagem usa **Postergar**, quando a Rotina tira 9–10 em um `☎️⚡` ou quando uma missão/evento disser explicitamente para colocá-la ali. Enquanto estiver na mão, ela não ocupa uma posição na fila.
- Ao postergar um chamado, deve-se desligar o telefone e remover o tile de telefone do tabuleiro
- Tudo que estiver na fila pode ser resolvido durante o turno de qualquer personagem, pagando ações e cumprindo os testes impressos.
- Quando a estrela alcança uma carta, resolva seu efeito ⭐. Se a condição de descarte ainda não foi cumprida, a carta permanece na fila para a próxima volta.
- Cartas resolvidas saem da fila e vão para o descarte apropriado.

### Eventos Genéricos: ⚡ e ⭐

- **⚡** indica a resolução imediata, feita assim que a carta é revelada. Se a carta precisar entrar na iniciativa, essa instrução aparece nessa área.
- **⭐** indica o efeito resolvido quando a estrela chega à carta na fila.
- O evento revelado permanece exposto sobre o topo do baralho de Eventos Genéricos até cumprir sua condição de descarte.

### Eventos de missão

- O evento de missão revelado permanece exposto sobre o topo do baralho de Missão até cumprir sua condição de descarte.
- Quando a estrela alcançar a missão ativa, resolva suas linhas **⭐**. NPCs controladas pela missão, como Jen em *Yesterday's Jam*, têm sua movimentação e seus efeitos resolvidos pela ativação **⭐** da carta de missão.
- A carta revelada é a única referência necessária durante a partida; as regras completas ficam na seção da missão neste manual.

### Revelação de eventos

- Eventos Genéricos e Eventos de Missão seguem a mesma regra: quando a estrela alcançar uma posição de eventos sem carta revelada, revele a carta do topo do baralho correspondente.
- Depois de revelada, qualquer carta de evento permanece exposta sobre seu baralho até cumprir sua condição de descarte. Não revele outra carta desse baralho enquanto ela permanecer ativa.
- Eventos que tenham somente ⚡ resolvem o efeito imediatamente; o símbolo 🗑️ ao final indica que a carta deve ser descartada após essa resolução.

## 8. Telefones e Atendimento

Há quatro tiles de telefone disponíveis no jogo. Cada telefone representa um ramal próprio e tem dois lados: **☎️ Tocando** e **☎️ Em atendimento**. Um telefone livre não tem tile no cenário. Um telefone ocupado por qualquer um desses lados não pode receber outra chamada. Os telefones não precisam ser usados pelo personagem que os escolheu: qualquer personagem pode atender qualquer telefone livre. Quando todos os telefones estiverem ocupados, novos efeitos que tentem aplicar `+ ☎️⚡` não produzem efeito.

Uma carta de Chamado e uma carta de Usuário associadas formam a combinação **☎️ + 👤**. As duas cartas permanecem juntas até o chamado ser concluído.

### Carta fixa: ROTINA — início da rodada

Resolva os itens na ordem indicada, antes de a estrela avançar:

1. **☎️ Telefones:** para cada `☎️⚡`, faça 🎲:

   - 1–6 = nada.
   - 7–8 = +⚠️; mantenha `☎️⚡`.
   - 9–10 = +⚠️; remova o tile de telefone e compre 1 carta de Chamado e 1 carta de Usuário. Associe as duas cartas e ponha o conjunto no fim da fila, com o Chamado por cima.

2. **🦠 Servidor:** se o tile estiver infectado, faça 🔺 → 1–5: nada; 6–8: +⚠️; 9–10: +⚠️ e espalhe para algum 🖥️.

3. **Estações:** vire o marcador de **🧰 SUP** para **Disponível**.

4. **🔥 Fogo:** para cada ficha de fogo ativa, faça 🎲 ✅: aplique a regra de alastramento da seção **10.1. Fogo**.

### Atender um telefone

Estando junto a um `☎️⚡`, gaste ⏱️1, vire o marcador para Em atendimento e compre **uma carta de Chamado e uma carta de Usuário**. Associe imediatamente as duas cartas na mão do personagem: Chamado por cima e Usuário ligeiramente deslocado para identificação. O jogador conhece o problema e o perfil de quem ligou antes de escolher como agir.

Enquanto a combinação ☎️ + 👤 estiver na mão, o personagem que a segura é o responsável pelo atendimento. Durante sua ativação, ele só pode gastar ações para resolver esse Chamado ou usar **Postergar**; não pode mover, comprar itens ou realizar outras interações. A Rotina resolve automaticamente a linha `📞` da carta de Usuário para cada combinação que continuar na mão. Fora das linhas `☎️` impressas na carta, não há modificadores adicionais do Usuário durante o atendimento.

- **Resolver:** use o custo e os testes impressos na carta de Chamado. Aplique a regra geral de sucessos acumulados e rerrolagens da seção 4. Ao concluir, resolva o `🏁` do Usuário, se houver, e depois o `🏁` do Chamado. Descarte Chamado e Usuário juntos e remova qualquer marcador que esteja Em atendimento.
- **Postergar:** gaste ⏱️1, remova o tile de telefone da mesa e coloque a combinação ☎️ + 👤 no fim da fila de iniciativa, com o Chamado por cima. Qualquer personagem pode continuar a resolução diretamente da fila durante o próprio turno. Não faça teste adicional.

Quando a estrela alcançar a combinação ☎️ + 👤 na iniciativa, resolva a linha `⭐` da carta de Usuário. Se o Chamado ainda não tiver sido concluído, qualquer personagem pode resolvê-lo diretamente da fila durante seu turno. A ativação `⭐` é um efeito adicional e não substitui a resolução do Chamado. O usuário permanece representado apenas pelas cartas; uma combinação na fila não retorna para a mão.

Quando o chamado for concluído, descarte as duas cartas juntas.

### Chamados que entram na fila pela Rotina

Quando a Rotina tirar 9–10 em um `☎️⚡`, remova o tile de telefone, compre uma carta de Chamado e uma carta de Usuário e coloque-as juntas no fim da fila de iniciativa, com o Chamado por cima. Na iniciativa, resolva a linha `⭐` da carta de Usuário.

### Baralho esgotado

Quando o baralho de Chamados ou o de Usuários acabar, embaralhe separadamente as cartas concluídas de cada tipo e forme novos baralhos. Cartas na mão, na iniciativa ou associadas a um usuário ativo não entram nos descartes. Se um dos baralhos estiver vazio e não houver descarte, não é possível gerar uma nova combinação ☎️ + 👤; aumente ⚠️ em 1.

## 9. Usuários e Chamados

Cada usuário tem um chamado associado pela combinação de duas cartas **☎️ + 👤**: Chamado + Usuário. Em regra geral, as duas cartas são o único componente do usuário: ele não recebe miniatura, não se move e não usa elevador.

A carta de Chamado define exclusivamente o problema, a dificuldade e a conclusão. A carta de Usuário define o efeito `📞` enquanto a combinação está na mão e a paciência `⭐` enquanto a combinação está na fila.

### Ativação do usuário

Quando a estrela alcançar uma combinação ☎️ + 👤 na iniciativa, resolva a linha `⭐` da carta de Usuário. Essas linhas representam a impaciência acumulada por deixar o chamado na fila e devem ser mais severas que as linhas `📞` sempre que possível. Depois, qualquer personagem pode resolver o Chamado durante seu turno. Não existe uma etapa adicional de surgimento, movimento ou desligamento do telefone.

Uma carta de Usuário ou missão pode criar uma exceção e escrever explicitamente um efeito especial para a combinação de cartas. Mesmo nesses casos, o usuário continua sendo representado pelas cartas; não há peão genérico de Usuário.

Quando um efeito especial mandar colocar um Item sob a carta de Usuário, esse Item fica temporariamente fora do inventário e não pode ser usado ou equipado. Devolva-o quando a própria carta determinar, normalmente na conclusão do chamado.

## 10. Computadores e servidor infectados

O estado é mostrado no próprio tile: funcional de um lado, infectado do outro.

- Chamados que exigem computador funcional precisam ser resolvidos junto a um computador funcional.
- **Computador infectado:** ⏱️ · 🧠 ✅✅. Ao obter dois sucessos durante a mesma ativação, vire o tile para o lado funcional.
- **Servidor infectado:** ⏱️ · 🧠 ✅✅✅. Ao obter três sucessos durante a mesma ativação, vire o tile para o lado funcional.
- Se o servidor estiver infectado no início da rodada, a Rotina faz a rolagem de Stress descrita na seção 8.
- O ícone 🦠 em um evento pode infectar um equipamento funcional. O efeito só espalha vírus se pelo menos um computador ou o servidor já estiver infectado.

## 10.1. Fogo

Uma ficha de fogo representa um incêndio em um tile. O fogo começa pelo lado **Fogo baixo**; o verso da ficha é **Fogo alto**.

**Apagar 🔥:** quando uma regra disser para apagar um fogo, remova a ficha do cenário, seja ela **🔥 Fogo baixo** ou **🔥🔥 Fogo alto**.

- Um tile com fogo não pode ser atravessado nem ocupado por personagens, usuários ou bombeiros.
- Na Rotina, faça 🎲 ✅ para cada fogo ativo. Com sucesso, o fogo se alastra:
  - se estiver baixo, vire a ficha para o lado Fogo alto;
  - se estiver alto, coloque 1 nova ficha de Fogo baixo em um tile adjacente livre que ainda não tenha fogo.
- Um tile adjacente válido precisa estar livre, ser atravessável e não possuir outra ficha de fogo. Se não houver tile válido, não coloque uma nova ficha.
- Um fogo coberto por um monitor quebrado continua ativo, pode se alastrar e ainda precisa ser apagado. Quando um bombeiro iniciar uma tentativa de apagar esse fogo, remova o monitor para revelar a ficha.

## 10.2. Itens e produção

Itens representam recursos improvisados do escritório. Produzir ou usar um item ocupa uma ação apenas quando a regra do item ou da estação indicar.

### Estações de produção

- No setup, separe os baralhos de Consumíveis e Equipamentos. Coloque todas as cartas de Consumíveis disponíveis no estoque da Cozinha. Coloque as cartas de Equipamentos na parte inferior do mapa, também parcialmente para fora do mapa, junto ao Armário.
- Posicione o tile **🧰 SUP** do Armário na parte inferior do mapa, próximo às cartas de Equipamento. Posicione o tile **☕ CAF** dentro da Cozinha, representando a fonte dos itens da cozinha. Esses tiles são as estações: o personagem precisa ficar adjacente a eles para comprar.
- **☕ CAF — Cafeteira:** mantém o estoque de Itens Consumíveis disponíveis.
- **🧰 SUP — Armário de suprimentos:** produz um Item Equipamento.

O tabuleiro deve destacar esses dois espaços com **✦ ☕ CAF** e **✦ 🧰 SUP**. A posição física das cartas no playtest serve para lembrar a origem de cada item; o cenário pode alterar essas posições sem mudar a regra.

Para usar uma estação, o personagem precisa estar **adjacente ao tile da estação**.

- **Consumível:** um personagem adjacente ao tile **☕ CAF** pode gastar ⏱️1 para pegar uma carta de Consumível disponível no estoque da Cozinha. Não é necessário preparar o café. Cada carta consumida é removida do jogo.
- **Equipamento:** junto ao tile **🧰 SUP**, gaste ⏱️1 para escolher e pegar qualquer carta de Equipamento disponível. O equipamento pode ser colocado diretamente na área **Equipado** nessa mesma ação, respeitando o limite de um por tipo; caso contrário, vai para o Inventário.
- **Colecionável:** mantenha as oito cartas únicas do baralho de Colecionáveis separadas do Armário. No setup, embaralhe esse baralho e deixe-o virado para baixo, ao alcance dos jogadores. Quando uma carta mandar comprar um Colecionável, compre a carta do topo e coloque-a na **Coleção** do jogador. Colecionáveis não ocupam o Inventário nem os encaixes de Equipado, salvo quando a própria carta disser **EQUIPADO**. Eles não podem ser comprados no tile **🧰 SUP**.
- **Contexto do Colecionador:** os `🏆` vêm do Colecionador, um funcionário da mesma empresa que guarda uma coleção de itens raros e estranhos. Quando um jogador obtém um desses itens, é como se tivesse conseguido uma peça por meio de uma troca ou de um favor entre colegas; não é uma compra normal no Armário.
- **Usar um Colecionável:** quando uma carta tiver a linha **USAR** ou **CONSUMIR**, o efeito representa cobrar esse favor do Colecionador. Resolva o efeito e devolva a carta ao baralho de Colecionáveis; embaralhe o baralho antes de deixá-lo novamente virado para baixo. Cartas com **POSSE** ou **EQUIPADO** permanecem na Coleção enquanto o efeito estiver ativo.

O Armário pode ser usado uma vez por rodada; vire seu marcador para o lado **Usada** depois de pegar um Equipamento. A Cafeteira permanece disponível enquanto houver Consumíveis no estoque. A Rotina desvira o marcador do Armário no início da rodada seguinte. Se não houver carta disponível, a ação não produz nada.

Cada personagem tem duas áreas diferentes para Itens. Os encaixes na parte superior da cartela representam o **Inventário**; as cartas colocadas abaixo da cartela ou ficha representam os itens **Equipados**.

As cartas de **Colecionável** ficam abertas na **Coleção** do jogador, ao lado da cartela. Elas representam itens que pertencem ao jogador, mas não estão sendo carregados no cenário. A Coleção não tem limite de cartas e não ocupa os encaixes de Inventário ou Equipado.

- **Inventário:** a área superior da cartela comporta até **3 cartas de Item**, em qualquer combinação. Richmond comporta até **4 cartas de Item**. Durante o Ato 4 de *Yesterday's Jam*, cada token de monitor quebrado também ocupa 1 espaço do inventário; cartas e monitores entram na mesma contagem máxima. Os itens do inventário são carregados, mas seus efeitos de Equipamento não estão ativos.
- **Equipado:** fica imediatamente abaixo da carta ou ficha do personagem. A cartela também possui dois encaixes laterais para lembrar esse limite. Apenas cartas de Equipamento ficam nessa área e seus efeitos estão ativos. O personagem pode equipar no máximo **dois Equipamentos**, respeitando o limite de **um Equipamento de cada tipo**.

Para trocar um Equipamento, devolva o que está equipado ao espaço do Armário e pegue o outro na mesma ação de ⏱️1; o novo equipamento também pode ser colocado diretamente na área **Equipado**. Consumíveis permanecem no Inventário até serem usados.

Um técnico adjacente a outro personagem pode transferir qualquer quantidade de Itens entre os dois gastando **⏱️1**. A troca não exige uma ação de movimento nem custa uma ação por item.

- **Consumível (☕):** resolve o efeito uma vez e é removido do jogo.
- **Equipamento (🧰):** permanece com o personagem enquanto o efeito estiver ativo. A própria carta informa quando o equipamento é descartado.

Em regra geral, os Itens alteram uma rolagem, removem uma penalidade ou reduzem uma consequência. As exceções estão escritas nas próprias cartas; por exemplo, um Colecionável pode concluir um Chamado ou resolver automaticamente um Chamado compatível.

## 11. The Boss Stress

O **The Boss Stress** (⚠️) vai de 0 a 15. No setup, coloque a seta em 0, salvo se a missão indicar outro valor. Aumente ou reduza o Stress conforme as cartas e missões determinarem; ele nunca passa de 15.

Quando o Stress alcançar um dos marcos abaixo pela primeira vez, o efeito correspondente é desbloqueado para todos os personagens jogáveis. Os efeitos são permanentes e cumulativos, mesmo que o Stress diminua depois:

- **8:** `+1👣`
- **11:** `+1🙂`
- **13:** `+1🧠`
- **14:** `+1⏱️` por ativação

Os símbolos impressos na régua servem como lembrete; não é necessário fazer um teste adicional ao alcançar um marco.

Se o Stress chegar a **15**, a partida termina em derrota. Uma missão pode substituir essa condição por uma condição própria.

## 12. Elevador

A área do elevador ocupa **2 × 2 tiles** e comporta no máximo quatro miniaturas, uma por espaço. Ela é apenas um ponto físico de posicionamento para personagens especiais; não existe porta, rolagem de abertura, espera ou regra especial de saída para usuários.

Usuários comuns não usam o elevador nem recebem miniatura. Quando uma missão indicar o surgimento de um personagem especial no elevador, use um espaço livre; se os quatro espaços estiverem ocupados, ignore o surgimento até uma regra posterior permitir novamente.

Personagens, Denholm e o Bombeiro que forem colocados no elevador também estão no cenário e podem se mover normalmente em suas ativações. A área continua respeitando a capacidade máxima de quatro miniaturas.

## 13. Missões

As cartas de missão seguem uma ordem fixa e não são embaralhadas. O manual contém a história, a preparação e as exceções de cada ato; a carta ativa serve apenas como lembrete visual do objetivo, dos números e dos efeitos principais.

Quando a estrela chega à posição **Missão**, resolva o efeito ⭐ da carta de ato revelada. A carta permanece exposta sobre o topo do baralho e ativa até que sua condição de descarte seja cumprida. Ao concluir um ato, descarte sua carta, aplique a preparação do ato seguinte e revele o próximo ato quando a estrela voltar à posição **Missão**.

O símbolo **🛠️** nas cartas de missão indica uma instrução de preparação. Resolva-a apenas uma vez, no momento em que a missão for iniciada e revelada, antes de continuar a rodada. A preparação pode colocar personagens, usuários, chamados, tiles ou marcadores no tabuleiro conforme descrito na carta e detalhado no manual. Ela não é repetida quando a estrela volta à carta.

Ao passar de um ato para o seguinte, mantenha os estados atuais do cenário, das cartas e dos marcadores, salvo quando a preparação ou outra regra do novo ato disser explicitamente para alterá-los.

### Preparação de Yesterday's Jam

Use as cartas F1 a F5 nesta ordem. Separe-as do baralho de Eventos e deixe-as viradas para baixo, com F1 no topo. Escolha os personagens jogáveis normalmente, sem usar o escritório do gerente à direita como escritório de jogador. Jen começa como NPC e, durante todos os atos, usa apenas as regras especiais da missão e suas ativações **⭐**. Use o tabuleiro com o escritório de Denholm e mantenha disponíveis os tiles do computador, do elevador e as fichas de fogo.

O objetivo da campanha é sobreviver à chegada de Jen, provar que ela não entende de computadores, esconder o incêndio causado por Moss e apagar os fogos antes que Denholm perceba o estresse de Jen. Se uma regra do ato entrar em conflito com uma regra geral, a regra do ato tem prioridade.

## F1. Nova gerente

*Denholm apresenta Jen como a nova gerente. Ela parece confiante: “Emails, enviar, receber, mouse, click, duplo click...”.*

**Preparação:** revele F1 e coloque Jen no tile imediatamente à frente do elevador. Ela é uma NPC durante este ato.

**Ativação ⭐ de Jen:** quando a estrela alcançar F1, mova Jen com `👣 = 3 + 1🎲` em direção ao técnico mais próximo. Ao chegar a um tile adjacente a um técnico, encerre o movimento. Se ela já estiver adjacente no início da ativação, ela não se move.

**Descobrir a incompetência:** um técnico adjacente pode gastar ⏱️1 para iniciar uma conversa e fazer um confronto **🧠 vs 🙂** da Jen. O lado com mais sucessos vence. Se o técnico vencer, fica claro que Jen não entende de computadores.

**Descarte:** quando um técnico vencer o confronto **🧠 vs 🙂** da Jen.

## F2. Sinclair ZX81

*Jen está a caminho da cadeira do escritório. Para evitar que ela descubra como o departamento realmente funciona, a equipe decide preparar uma pequena surpresa: um computador infectado.*

**Preparação:** mantenha Jen no tabuleiro e preserve o estado atual do computador. Jen começa a avançar em direção à cadeira do escritório à direita.

**Ativação ⭐:** quando a estrela alcançar F2, mova Jen com `👣 = 3 + 1🎲` em direção à cadeira do escritório. Jen não ganha ações de personagem: essa expressão é todo o movimento da ativação dela.

**Distrair Jen:** um personagem pode gastar ⏱️1 para fazer um confronto **🙂 vs 🙂 de Jen**. Se o personagem vencer, coloque 💬 sobre Jen; em caso de empate ou derrota, nada acontece. Durante o movimento dela, remova 💬 para cancelar 1 👣; cada marcador usado cancela apenas 1 👣.

Se Jen chegar à cadeira antes de o computador ser infectado, aumente 🙂 de Jen em 1.

### Sabotagens:
**Infectar o computador:** um personagem posicionado na cadeira do escritório, em frente ao computador funcional, pode gastar ⏱️1 e fazer 🧠 ✅. Com sucesso, vire o tile para o lado infectado. Em caso de falha, o tile permanece funcional e outra ação pode tentar novamente.

**Descarte:** assim que Jen chegar à cadeira.

## F3. Aham, aham, claro...

*A equipe agora precisa provar que Jen é uma fraude. Denholm espera uma demonstração simples; a equipe espera que o computador infectado faça o trabalho por ela.*

**Preparação:** mantenha Jen na cadeira do escritório e coloque um d6 em 3 para marcar a Credibilidade. Jen não se move durante este ato; qualquer técnico pode se aproximar para iniciar um confronto.

**⭐ — Tentativa de Jen:** se houver um Chamado na fila, Jen tenta resolver o primeiro Chamado usando apenas seu **🙂**. Se o Chamado exigir **🧠**, ou 🧠 combinado com outro atributo, ela falha automaticamente e a empresa recebe **+⚠️**. Se exigir apenas **🙂**, role o Carisma atual de Jen contra os sucessos impressos no Chamado. Em caso de sucesso, conclua o par normalmente; em caso de falha, aplique **+⚠️**. Essa tentativa não gasta ⏱️ e não permite rerrolagem.

**Computador infectado:** enquanto o computador permanecer infectado, Jen rola 1 dado 🙂 a menos nos confrontos diretos. Se o computador estiver funcional, não aplique o modificador.

**Confrontos diretos:** um técnico adjacente a Jen pode gastar ⏱️1 para iniciar um confronto 🧠 vs 🙂 da Jen. Se o técnico vencer, reduza a Credibilidade em 1. Empate ou derrota não alteram a Credibilidade. Quando ela chegar a 0, a incompetência de Jen é comprovada.

**Descarte:** quando a Credibilidade chegar a 0.

## F4. Four, I mean, five, I mean, FIRE!

*Moss colocou fogo no escritório e só percebeu quando as chamas ficaram grandes demais. Agora a equipe precisa esconder o incêndio com monitores quebrados antes que Denholm saia do elevador e entre na sala principal.*

**Preparação:** coloque 1 ficha de fogo baixo no armário inferior. Coloque Denholm no elevador e sua carta no fim da iniciativa. Coloque 2 tokens de monitor quebrado no escritório de Jen e 2 no escritório principal. Jen permanece onde terminou o ato anterior.

**Denholm:** durante este ato, Denholm tem 1 ação por ativação. Em cada ativação, mova **`👣 = 1 + 3🎲`** em direção à sala principal. Não se aplicam rerrolagens, compra de dados ou bônus de personagens.

**Esconder os fogos:** um personagem pode gastar ⏱️1 para pegar 1 token de monitor quebrado. Cada token ocupa 1 espaço do inventário, e monitores e cartas de Item entram na mesma contagem máxima do personagem. Um personagem pode gastar ⏱️1 para colocar 1 ou 2 tokens no próprio tile; cada token colocado sobre uma ficha de fogo a esconde. Esconder um fogo não o apaga: ele continua ativo e pode se alastrar.

**Derrota:** se Denholm entrar na sala principal antes de todos os fogos estarem escondidos.

**Descarte:** quando Denholm entrar na sala principal e todos os fogos estiverem escondidos.

## F5. Are you stressed?

*Denholm vê os monitores quebrados cobrindo as chamas. “Screen saver legal, hein! Bem realista.” Então percebe que Jen está na sala e começa a interrogá-la.*

**Preparação:** coloque Jen na cadeira do escritório. Coloque Denholm no tile em frente à mesa de Jen. Deixe a carta de Denholm na iniciativa.

**Jen:** Jen não se move e tem apenas 1 ação em sua ativação. Essa ação só pode remover 1 marcador de 🫩 dela.

**Cansaço de Jen:** Jen pode usar sua ação da ativação para remover 1🫩 de si. Em **ARE YOU SURE?**, se o resultado for sucesso, coloque 1🫩 em Jen; se ela já tiver 3🫩, aumente ⚠️ em vez de colocar outro marcador. A derrota do F5 ocorre pela condição normal de derrota do **The Boss Stress**.

### Objetivos

1. **Chamar os bombeiros:** um personagem junto a um computador funcional pode gastar ⏱️1 e fazer o teste combinado `🙂 ✅ + 🧠 ✅`. Com sucesso, coloque **2 bombeiros** no elevador e **uma carta do Bombeiro** no fim da iniciativa. Quando ela for ativada, os dois bombeiros agem juntos.
2. **Apagar 🔥:** os bombeiros devem alcançar cada fogo e apagá-lo conforme as regras da sua carta.

### Are you sure?

Na ativação de Denholm, ele tem **2 ações**. Em cada ação, escolha uma opção:

- Remova 1 `💬` de Denholm.
- **ARE YOU SURE?** faça 🎲 ✅: coloque 1🫩 em Jen.

### Distrair Denholm

Um personagem jogável adjacente a Denholm pode gastar ⏱️1 para fazer **🙂 vs 🙂 de Denholm**. Vitória: coloque 1 `💬` em Denholm. Falha: o técnico recebe 1🫩. Empate: nada acontece.

**Vitória:** quando não houver mais fichas de fogo no cenário. Denholm conclui que Jen não está estressada e vai embora.

### Yesterday's Jam

1. **Nova gerente** — Jen chega ao porão e se aproxima do técnico mais próximo. Um técnico adjacente tenta descobrir que ela não entende de computadores.
2. **Sinclair ZX81** — infectar o PC antes que Jen chegue à cadeira; se ela chegar primeiro, seu Carisma aumenta.
3. **Aham, aham, claro...** — deixar que Jen tente resolver Chamados sociais e provar sua incompetência com confrontos diretos.
4. **Four, I mean, five, I mean, FIRE!** — esconder todos os fogos antes que Denholm entre na sala.
5. **Are you stressed?** — chamar os bombeiros e reduzir todos os fogos antes que o **The Boss Stress** cause a derrota.

O texto curto impresso de cada ato está em `templates/cards/card-data.js`; este manual contém a preparação, o contexto e as exceções necessárias para resolvê-lo.

### Missões genéricas

- **Telefone maldito!:** comece com `+ ☎️⚡` nos 3 telefones. Vitória quando todos os chamados iniciais forem concluídos e não houver telefones, usuários ou pendências associados a eles.
- **Firewall:** comece com todos os computadores dos escritórios escolhidos e o servidor infectados. Vitória quando todos esses tiles estiverem funcionais.
- **Esqueci do cliente:** comece com duas combinações ☎️ + 👤 no fim da iniciativa e coloque a carta **Preciso desse relatório para ontem** no topo do baralho de Eventos Genéricos. Vitória quando as duas combinações forem concluídas e o relatório for enviado.
- **Fim do expediente:** comece com o Stress em 8 e sobreviva seis rodadas sem ele chegar a 15. Ao cumprir as seis rodadas, a missão é concluída.
- **Quem tem mais itens raros?:** missão competitiva opcional. Durante a missão, qualquer jogador pode tentar obter o topo do baralho 🏆 pagando `1⏱️` e `🔋🔋`, e fazendo um teste combinado `🧠🙂` com **3✅** de dificuldade. Se passar, pega a carta do topo sem revelá-la antes. O primeiro jogador a reunir 3 `🏆` vence e a missão é descartada. Os `🏆` já obtidos antes da missão também contam.

## 14. Pontos para playtest

- **Atendimento e paciência:** verifique se as linhas `📞` e `⭐` dos usuários criam pressão suficiente sem tornar uma combinação impossível de resolver.
- **Probabilidades de reação:** as faixas `📞` e `⭐` impressas em cada carta são valores iniciais. Ajuste-as se os usuários causarem Stress rápido demais.
- **Elevador:** observe se a capacidade física de quatro miniaturas no ponto de surgimento é suficiente sem bloquear o tabuleiro.
- **Chamados:** compare o valor de resolver, postergar e deixar o chamado acumulando demora. Cada opção deve ter uma vantagem e um custo claros.

## Fonte dos dados das cartas e peças

O conteúdo das cartas e peças não é duplicado neste manual. A fonte canônica é o objeto `cards` em `templates/cards/card-data.js`, que concentra textos, rótulos, efeitos, códigos, quantidades e metadados usados pelo gerador.

Use `templates/cards/call-model.html` para visualizar as cartas e `scripts/export_card_images.py` para gerar as versões rasterizadas. Ao alterar uma carta, edite primeiro `card-data.js` e regenere os PNGs; não mantenha uma segunda cópia do texto no manual.

Este manual continua sendo a referência das regras gerais, da preparação, das exceções de missões e da interpretação dos ícones. A documentação técnica do gerador e dos formatos de impressão fica em `templates/cards/README.md`.
