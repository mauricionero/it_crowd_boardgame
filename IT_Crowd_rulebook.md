# THE IT CROWD — Manual de regras v0.6

# PARTE I — MANUAL DE REGRAS

**Protótipo de design · versão consolidada 0.6**  
Jogo cooperativo PvE de gestão de crises, atendimento e sabotagem.

> Documento de protótipo não oficial. Os valores de atributos e probabilidades são parâmetros iniciais para playtest.

## 1. Objetivo do jogo

Os jogadores controlam os funcionários do departamento de TI. Precisam resolver chamados, lidar com usuários que surgem em cena, manter computadores e servidor funcionando e impedir que o **Stress da Empresa** leve a demissões.

Uma missão roteirizada acrescenta objetivos próprios. No modo genérico, os jogadores escolhem um objetivo de expediente e tentam concluí-lo antes que a situação saia do controle.

## 2. Componentes

- Tabuleiro top-down do porão, dividido em tiles quadrados: sala de TI, escritório de Jen, sala de servidores, cozinha, corredor e elevador.
- Extensão de tabuleiro com escritório de Denholm e corredor para a missão *Yesterday's Jam*.
- Tiles reversíveis para computadores, servidor, telefones e fio do telefone de Jen.
- Um tile de telefone para cada personagem jogável, com os lados **Tocando / Em atendimento**. Um telefone livre não fica no cenário: quando o ramal estiver livre, remova seu tile da mesa. No setup, cada jogador escolhe um escritório para seu personagem; o telefone e o computador desse personagem ficam nesse tile quando o telefone estiver em uso. Os telefones são funcionalmente equivalentes: qualquer telefone livre pode ser atendido, e qualquer personagem pode usar qualquer telefone ou computador.
- O escritório do gerente, localizado à direita do tabuleiro, é reservado à missão e não pode ser escolhido como escritório de um personagem jogável.
- Peões dos personagens e dois peões de Bombeiro. Usuários comuns são representados apenas pela combinação de cartas `☎️ + 👤`; não há peões genéricos de Usuário.
- Baralho de Chamados, baralho de Usuários, baralho de Eventos Genéricos e cartas de Missão.
- Uma carta fixa de **Rotina** e uma estrela para indicar a iniciativa.
- Cartas de iniciativa de Denholm e do Bombeiro.
- Tokens recortáveis de 🫩 Cansaço, 🔋 Ânimo, 💬 Distração e monitores quebrados.
- Uma faixa horizontal de ⚠️ **The Boss Stress**, de 0 a 15, e uma seta móvel para indicar o valor atual.
- Fichas de 🔥 Fogo, com lados Fogo baixo / Fogo alto, e marcadores de reunião de desempenho.
- Marcador de estação disponível/usada do Armário.
- Baralhos de Itens Consumíveis e Equipamentos.
- Uma carta de referência de atendimento para cada jogador.
- D6.

O elevador ocupa **2 × 2 tiles** e comporta no máximo quatro miniaturas. A área serve como ponto físico de surgimento e posicionamento; estar nela não cria um estado especial nem altera o movimento.

### Escritórios dos jogadores

No setup, cada jogador escolhe um tile de escritório para seu personagem, exceto o escritório do gerente à direita do tabuleiro, que é reservado à missão. Coloque nesse escritório o telefone e o computador correspondentes ao personagem. Essa escolha serve apenas para definir a posição inicial desses componentes: qualquer personagem pode usar qualquer telefone ou computador. Se uma missão definir uma posição específica para um componente, a regra da missão tem prioridade.

### Ponto de surgimento

Cada cenário pode definir um ou mais **pontos de surgimento** para personagens especiais. Usuários comuns de chamados são representados apenas pela combinação de cartas **☎️ + 👤** e não entram fisicamente no cenário.

Se um surgimento especial estiver lotado, ignore o pedido completo e não aplique outra penalidade. Tente o surgimento novamente quando uma regra posterior permitir.

Use o próprio componente para mostrar o estado sempre que possível: tile virado indica computador/servidor infectado ou telefone sabotado; carta girada 90° indica etapa concluída quando a carta assim determinar.

## 3. Iconografia

| Ícone | Significado |
|---|---|
| ⚡ | Resolver imediatamente quando a carta é revelada. |
| ⭐ | Efeito de paciência do usuário quando a estrela alcançar sua carta na fila. Cartas especiais podem escrever outros efeitos. |
| 🛠️ | Preparação da missão; resolva uma única vez quando a missão for revelada e prepare o tabuleiro conforme indicado. |
| ⏱️ | Ação. Ex.: ⏱️1 = gastar uma ação. |
| ☎️ | Telefone/chamado. O tile físico tem os lados Tocando / Em atendimento; se estiver livre, seu tile é removido do cenário. |
| ✋ | Efeito especial enquanto `☎️ + 👤` estiver na mão de um personagem. |
| 🧠 | Inteligência: quantidade de d6 igual ao atributo. |
| 🙂 | Carisma: quantidade de d6 igual ao atributo. |
| ✅ | Sucesso; repita o ícone para indicar mais de um sucesso, como ✅✅. |
| 🔒 | Cadeado sobreposto: o resultado está bloqueado e não pode ser rerrolado. `❌ + 🔒` é falha bloqueada; `✅ + 🔒` é sucesso bloqueado. |
| 🏁 | Conclusão: aplique o efeito ao finalizar um chamado. |
| 👣 | Movimento em tiles. A notação `👣 = X + Y🎲` indica X tiles fixos mais 1 tile por cada `✅` obtido nos Y dados. |
| 🖥️ | Resolver junto a um computador funcional. |
| 👤 | Usuário associado ao chamado; só fica em cena quando a carta ou missão disser explicitamente. |
| 😐 | Usuário paciente, aguardando atendimento. |
| 🫩 | Cansaço. Cada marcador reduz em uma as ações do personagem por ativação. |
| 🔋 | Ânimo. Recurso pessoal; cada personagem pode guardar até 5. Consulte a carta de referência 🔋 Ânimo. |
| ⚠️ | The Boss Stress da Empresa. |
| 🔥 | Fogo ativo; o lado da ficha indica Fogo baixo ou Fogo alto. |
| 🦠 | Vírus; vire um tile funcional para o lado infectado. |
| -🦠 | Desinfectar: remova o vírus de um equipamento, virando-o para o lado funcional. |
| 🔄 | Vire a carta 90°. |
| 🎲 | Role o d6 customizado de sucessos e falhas. |
| 🔺 | Role um d10 comum para uma tabela numérica; cada número vale 10%. |
| ☎️⚡ | Telefone no estado Tocando; `+ ☎️⚡` coloca um telefone nesse estado. |
| 🎲 ✅ | Role o d6 customizado; com ✅, resolva o efeito. |
| 📞 | Efeito do Usuário enquanto o telefone está Em atendimento; resolva apenas na Rotina. |
| 📵 | Todos os telefones ocupados; faça o teste de pressão da Rotina. |
| ⏸️ | Postergar: gaste uma ação, remova o tile de telefone e coloque `☎️ + 👤` no fim da fila de iniciativa. |
| 📴 | Telefone livre; seu tile não está no cenário. |
| 🎯1 | Primeira etapa de resolução de um Evento ou objetivo numerado. |
| 🎯2 | Segunda etapa de resolução de um Evento ou objetivo numerado. |
| 🎯3 | Terceira etapa de resolução de um Evento ou objetivo numerado. |
| ⚔️ | Confronto ou interação direta entre personagens. |
| ✪ | Efeito contínuo resolvido na iniciativa enquanto a carta permanecer ativa. |
| 🗑️ | Descarte a carta após resolver o efeito ou cumprir a condição indicada. |
| 📌 | Objetivo de uma carta de Missão. |
| 🛗 | Elevador. |
| 💬 | Marcador de distração em Jen; cada marcador reduz em 1 tile o próximo movimento dela. |
| ☕ | Item Consumível. |
| 🧰 | Item Equipamento. |

### Símbolos de interação no tabuleiro

Todo espaço do tabuleiro que possui uma regra própria deve ser destacado com o símbolo **✦** e um identificador curto. A posição exata desses espaços é definida pelo layout do tabuleiro; as regras apenas definem o que cada identificador permite fazer.

| Identificador | Espaço | Interação |
|---|---|---|
| ☎ TEL | Telefone | Atender ou manter um chamado em atendimento. |
| 🖥️ PC | Computador | Resolver chamados que exigem computador funcional. |
| 🖥 SRV | Servidor | Restaurar o servidor e aplicar os efeitos da Rotina. |
| 🛗 ELEV | Elevador | Ponto físico de surgimento e posicionamento. |
| ☕ CAF | Cafeteira ou micro-ondas da Cozinha | Retirar Item Consumível. |
| 🧰 SUP | Armário de suprimentos | Produzir Item Equipamento. |
| ☎ JEN | Telefone de Jen | Interações específicas da missão. |
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
- **Rerrolar:** gaste **⏱️1** adicional depois da rolagem para escolher qualquer quantidade de dados não bloqueados de um único personagem. Isso inclui ✅ e ❌; cada dado escolhido substitui seu resultado anterior. Essa opção permite buscar um resultado melhor, mas também pode trocar um ✅ por uma falha. Resultados com 🔒 não podem ser escolhidos.

**Exemplo:** o resultado foi `✅ · ❌ · ❌+🔒`. O jogador pode rerrolar o `✅`, o `❌` ou os dois, mas não pode escolher o `❌+🔒`. Se rerrolar o `✅`, a nova face substitui a anterior. Se preferir tentar novamente, descarta os três resultados e rola todo o pool outra vez.

O atributo 0 não gera dados e não pode produzir sucessos em um teste que exija esse atributo, salvo exceção escrita na carta. Testes resolvidos automaticamente pela Rotina, por uma ativação ⭐ ou por uma tabela 🔺 não usam rerrolagem, salvo se a própria regra permitir.

Use `🔺` quando a carta mostrar resultados numéricos ou faixas de um d10. Use `🎲` quando a rolagem depender de `✅` ou `❌` do d6 customizado.

Faixas como **6+** que aparecem em tabelas de Rotina ou reações de d10 são gatilhos específicos daquela rolagem, não dificuldades de testes de atributo.

### Confrontos entre atributos

Quando uma regra usar **A vs B**, cada lado rola uma quantidade de d6 igual ao próprio atributo. Cada resultado 5 ou 6 vale ✅; o lado com mais sucessos vence. Isso funciona tanto para atributos iguais quanto diferentes, como 🧠 vs 🧠 ou 🧠 vs 🙂. Um confronto não tem uma quantidade fixa de sucessos exigida.

**Empate:** nenhum lado vence e nenhum efeito do confronto acontece. A ação ou ativação usada é gasta. O confronto só pode ser repetido se a regra permitir uma nova tentativa.

Quando uma regra indicar um atributo combinado, como **🧠 + 🙂**, some os dados dos dois atributos e conte os resultados 5 ou 6 como sucessos no mesmo teste.

## 5. Personagens e ações

Cada personagem jogável recebe **3 ações por ativação**, antes das penalidades de Cansaço. No setup, os jogadores escolhem a ordem de ativação dos personagens.

Ações básicas:

- **Mover:** até o valor de **👣** tiles por ação.
- **Atender:** junto a qualquer `☎️⚡`, gastar ⏱️1, virar o marcador para Em atendimento e comprar uma carta de Chamado e uma carta de Usuário.
- **Resolver, investigar ou sabotar:** seguir o custo e o teste impressos na carta ou no tile.
- **Gerar Ânimo:** uma vez por ativação, gaste ⏱️1 para ganhar 1🔋, se o personagem tiver menos de 5🔋.
- **Postergar:** enquanto segura uma combinação ☎️ + 👤, gaste ⏱️1 para desligar o telefone, removendo seu tile da mesa, e colocar as duas cartas no fim da fila de iniciativa, com o Chamado por cima. Qualquer personagem pode resolver o Chamado diretamente da fila durante seu turno.
- **Recuperar:** gaste ⏱️1 para remover 1🫩 de si ou de um aliado adjacente.

### Regras avançadas: converter ações em recurso

- **Trocar ação por Cansaço:** durante sua ativação, um personagem pode gastar **⏱️1** para remover **1🫩** de si ou de um aliado adjacente. Alternativamente, pode colocar **1🫩** sobre si para realizar **1 ação extra imediatamente**; esse 🫩 passa a reduzir as ações disponíveis normalmente na próxima ativação. A opção de colocar 🫩 pode ser usada no máximo **2 vezes por ativação**. É permitido ultrapassar 3🫩, mas o personagem ficará incapacitado até receber ajuda.
- **Comprar um dado:** antes de um teste de atributo, gaste **⏱️1** para adicionar **+1 dado** ao atributo usado naquele teste. O dado extra vale para a rolagem e suas rerrolagens, não altera o atributo da ficha e é descartado ao terminar o teste. O custo é adicional ao custo normal da tarefa; compre no máximo 1 dado extra por teste.
- **Ânimo:** cada personagem pode guardar até **5🔋**. Além das fontes indicadas nas cartas, cada personagem pode gerar 1🔋 por ativação conforme a ação **Gerar Ânimo**. Gaste os tokens conforme a carta de referência **🔋 Ânimo**.
- **Reabastecer café:** estando adjacente ao tile **☕ CAFÉ**, gaste **⏱️2** para retornar à Cozinha todas as cartas de **Xícara de café** removidas do jogo. Não mova cafés que ainda estejam no inventário nem crie cópias extras.

### Cansaço

Antes de cada ação, recalcule as ações disponíveis:

**Ações disponíveis = 3 − ações já gastas − 🫩 atuais.**

Se uma ação remover um marcador de Cansaço, recalcule imediatamente. O personagem pode usar as ações que voltarem a ficar disponíveis.

| 🫩 no início da ativação | Ações disponíveis |
|---:|---:|
| 0 | 3 |
| 1 | 2 |
| 2 | 1 |
| 3 ou mais | 0 |

Com 3 ou mais 🫩, o personagem fica incapacitado e não pode se recuperar sozinho. Outro personagem pode gastar uma ação para ajudá-lo, removendo 1🫩 por ação; portanto, podem ser necessárias várias ações para recapacitá-lo.

### Atributos iniciais para playtest

| Personagem | 🧠 Inteligência | 🙂 Carisma | 👣 Movimento |
|---|---:|---:|---:|
| Roy | 3 | 2 | `2 + 1🎲` |
| Moss | 4 | 1 | `2 + 2🎲` |
| Richmond | 2 | 1 | `3 + 1🎲` |
| Jen | 1 | 4 | `3 + 1🎲` |
| Denholm (NPC) | 1 | 2 | `1 + 3🎲` |

**Roy — Pequena Vitória:** ao concluir um Chamado, ganhe 1🔋.

**Moss — Hacker:** 1× por ativação, se estiver adjacente a um equipamento: `-🦠`, sem gastar ⏱️ nem 🎲. Na Defesa individual de demissão, usa 🧠 + 🙂 combinados.

**Jen — Sabe lidar com gente:** ao concluir com sucesso um chamado social, reduz ⚠️ em 1 adicional ao efeito de conclusão da carta.

## 6. Movimento e ocupação dos tiles

**Adjacência:** dois tiles são adjacentes quando compartilham um lado ou um canto. Portanto, tiles na diagonal também são adjacentes. Essa definição vale para interação, transferência de itens e todos os efeitos que mencionem um tile ou personagem adjacente; o movimento segue a regra própria abaixo.

- Personagens jogáveis aplicam sua expressão de **👣** a cada ação de Mover. NPCs e personagens especiais só se movem quando a própria carta ou missão determinar.
- Na notação `👣 = X + Y🎲`, mova primeiro X tiles e role Y dados; cada `✅` acrescenta 1 tile. O resultado `✅🔒` também conta como sucesso. Sem uma indicação especial, não se aplicam rerrolagens, compra de dados ou bônus de personagens a esses dados de movimento.
- Cada tile comporta uma miniatura. Não é permitido terminar o movimento no tile ocupado por outra miniatura. A exceção é a área do elevador: mede 2 × 2 tiles e comporta até quatro miniaturas, uma por espaço, apenas para estabelecer o posicionamento físico.
- O movimento só pode ser ortogonal: cima, baixo, esquerda ou direita. Cada tile atravessado conta como 1 movimento. O caminho deve seguir tiles conectados, e paredes continuam bloqueando o movimento.

## 7. Fila de iniciativa

No setup, escolha a ordem dos personagens jogáveis. Resolva a Rotina inicial e, depois, posicione a estrela sobre o primeiro personagem jogável. A estrela avança da esquerda para a direita. Assim, os personagens têm uma rodada inicial de preparação antes que a estrela alcance as demais cartas da fila.

**Ordem base da fila:**

1. **Rotina** — carta fixa no início da fila, resolvida no início de cada rodada antes de a estrela avançar.
2. **Missão** — resolve a carta de missão ativa.
3. **Eventos Genéricos** — verifica e revela o topo do baralho quando a estrela chegar à posição e não houver evento revelado.
4. **Personagens jogáveis** — na ordem escolhida no setup.
5. **Cartas na iniciativa** — pendências, usuários e eventos persistentes, na ordem em que foram adicionados.

### Cartas que entram na iniciativa

- Toda carta que entrar na iniciativa vai para a **extremidade direita da fila**, depois das cartas que já estão nela.
- **Instâncias iguais:** quando houver duas ou mais instâncias representadas pela mesma carta de Usuário ou de personagem, use apenas uma posição na fila e ative todas juntas quando a estrela chegar a essa carta. Resolva cada peão individualmente dentro da mesma ativação, sem somar seus movimentos ou efeitos. Chamados diferentes continuam associados às suas próprias cartas.
- Uma combinação **☎️ + 👤** entra na fila somente quando um personagem usa **Postergar**, quando a Rotina tira 6 em um `☎️⚡` ou quando uma missão/evento disser explicitamente para colocá-la ali. Enquanto estiver na mão, ela não ocupa uma posição na fila.
- Tudo que estiver na fila pode ser resolvido durante o turno de qualquer personagem, pagando ações e cumprindo os testes impressos.
- Quando a estrela alcança uma carta, resolva seu efeito ⭐. Se a condição de descarte ainda não foi cumprida, a carta permanece na fila para a próxima volta.
- Cartas resolvidas saem da fila e vão para o descarte apropriado.
- Quando Jen se torna jogável, sua ativação é acrescentada à ordem dos personagens jogáveis, depois dos personagens que já estavam na fila.

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

Há um telefone por personagem jogável, e cada telefone representa um ramal próprio. Cada tile tem dois lados: **☎️ Tocando** e **☎️ Em atendimento**. Um telefone livre não tem tile no cenário. Um telefone ocupado por qualquer um desses lados não pode receber outra chamada. Os telefones não precisam ser usados pelo personagem que os escolheu: qualquer personagem pode atender qualquer telefone livre. Quando todos os telefones estiverem ocupados, novos efeitos que tentem aplicar `+ ☎️⚡` não produzem efeito.

Uma carta de Chamado e uma carta de Usuário associadas formam a combinação **☎️ + 👤**. As duas cartas permanecem juntas até o chamado ser concluído ou abandonado.

### Carta fixa: ROTINA — início da rodada

Resolva os itens na ordem indicada, antes de a estrela avançar:

1. **☎️ Telefones:** para cada `☎️⚡`, faça 🎲:

   - 1 = usuário desistiu; remova o marcador.
   - 2–4 = mantém `☎️⚡`.
   - 5 = +⚠️ e mantém `☎️⚡`.
   - 6 = +⚠️; remova `☎️⚡` e compre 1 carta de Chamado e 1 carta de Usuário. Associe as duas cartas e ponha o conjunto no fim da fila, com o Chamado por cima.

2. **🦠 Servidor:** se o tile estiver infectado, faça 🔺 → 6–9: aumente ⚠️; 10: aumente ⚠️ e espalhe para algum PC.

3. **Estações:** vire o marcador de **🧰 SUP** para **Disponível**.

4. **🔥 Fogo:** para cada ficha de fogo ativa, faça 🎲 ✅: aplique a regra de alastramento da seção **10.1. Fogo**.

### Atender um telefone

Estando junto a um `☎️⚡`, gaste ⏱️1, vire o marcador para Em atendimento e compre **uma carta de Chamado e uma carta de Usuário**. Associe imediatamente as duas cartas na mão do personagem: Chamado por cima e Usuário ligeiramente deslocado para identificação. O jogador conhece o problema e o perfil de quem ligou antes de escolher como agir.

Enquanto a combinação ☎️ + 👤 estiver na mão, o personagem que a segura é o responsável pelo atendimento. Durante sua ativação, ele só pode gastar ações para resolver esse Chamado ou usar **Postergar**; não pode mover, comprar itens ou realizar outras interações. A Rotina resolve automaticamente a linha `📞` da carta de Usuário para cada combinação que continuar na mão. Fora das linhas `☎️` impressas na carta, não há modificadores adicionais do Usuário durante o atendimento.

- **Resolver:** use o custo e os testes impressos na carta de Chamado. Aplique a regra geral de sucessos acumulados e rerrolagens da seção 4. Ao concluir, resolva o `🏁` do Usuário, se houver, e depois o `🏁` do Chamado. Descarte Chamado e Usuário juntos e remova qualquer marcador que esteja Em atendimento.
- **Postergar:** gaste ⏱️1, remova o tile de telefone da mesa e coloque a combinação ☎️ + 👤 no fim da fila de iniciativa, com o Chamado por cima. Qualquer personagem pode continuar a resolução diretamente da fila durante o próprio turno. Não faça teste adicional.

Quando a estrela alcançar a combinação ☎️ + 👤 na iniciativa, resolva a linha `⭐` da carta de Usuário. Se o Chamado ainda não tiver sido concluído, qualquer personagem pode resolvê-lo diretamente da fila durante seu turno. A ativação `⭐` é um efeito adicional e não substitui a resolução do Chamado. O usuário permanece representado apenas pelas cartas; uma combinação na fila não retorna para a mão.

Quando o chamado for concluído ou abandonado, descarte as duas cartas juntas.

### Usuários que surgem sem atendimento

Quando a Rotina tirar 6 em um `☎️⚡`, compre uma carta de Chamado e uma carta de Usuário e coloque-as juntas no fim da fila de iniciativa, com o Chamado por cima. Na iniciativa, resolva a linha `⭐` da carta de Usuário.

### Baralho esgotado

Quando o baralho de Chamados ou o de Usuários acabar, embaralhe separadamente as cartas concluídas de cada tipo e forme novos baralhos. Cartas na mão, na iniciativa ou associadas a um usuário ativo não entram nos descartes. Se um dos baralhos estiver vazio e não houver descarte, não é possível gerar uma nova combinação ☎️ + 👤; aumente ⚠️ em 1.

## 9. Usuários em cena

Cada usuário tem um chamado associado pela combinação de duas cartas **☎️ + 👤**: Chamado + Usuário. Em regra geral, as duas cartas são o único componente do usuário: ele não recebe miniatura, não se move e não usa elevador.

A carta de Chamado define exclusivamente o problema, a dificuldade e a conclusão. A carta de Usuário define o efeito `📞` enquanto a combinação está na mão e a paciência `⭐` enquanto a combinação está na fila.

### Ativação do usuário

Quando a estrela alcançar uma combinação ☎️ + 👤 na iniciativa, resolva a linha `⭐` da carta de Usuário. Essas linhas representam a impaciência acumulada por deixar o chamado na fila e devem ser mais severas que as linhas `📞` sempre que possível. Depois, qualquer personagem pode resolver o Chamado durante seu turno. Não existe uma etapa adicional de surgimento, movimento ou desligamento do telefone.

Uma carta de Usuário ou missão pode criar uma exceção e escrever explicitamente um efeito especial para a combinação de cartas. Mesmo nesses casos, o usuário continua sendo representado pelas cartas; não há peão genérico de Usuário.

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

Itens representam recursos improvisados do escritório. Eles não criam uma fase nova no turno: produzir ou usar um item ocupa uma ação apenas quando a regra do item ou da estação indicar.

### Estações de produção

- No setup, separe os baralhos de Consumíveis e Equipamentos. As quatro cartas de Xícara de café e as três cartas de Barrinha de proteína começam disponíveis no estoque da Cozinha. Coloque as cartas de Equipamentos na parte inferior do mapa, também parcialmente para fora do mapa, junto ao Armário.
- Posicione o tile **🧰 SUP** do Armário na parte inferior do mapa, próximo às cartas de Equipamento. Posicione o tile **☕ CAF** dentro da Cozinha, representando a cafeteira ou o micro-ondas. Esses tiles são as estações: o personagem precisa ficar adjacente a eles para comprar.
- **☕ CAF — Cafeteira/micro-ondas:** mantém o estoque de Itens Consumíveis disponíveis.
- **🧰 SUP — Armário de suprimentos:** produz um Item Equipamento.

O tabuleiro deve destacar esses dois espaços com **✦ ☕ CAF** e **✦ 🧰 SUP**. A posição física das cartas no playtest serve para lembrar a origem de cada item; o cenário pode alterar essas posições sem mudar a regra.

Para usar uma estação, o personagem precisa estar **adjacente ao tile da estação**.

- **Consumível:** um personagem adjacente ao tile **☕ CAF** pode gastar ⏱️1 para pegar uma carta de Xícara de café ou Barrinha de proteína disponível no estoque da Cozinha. Não é necessário preparar o café. Cada carta consumida é removida do jogo.
- **Equipamento:** junto ao tile **🧰 SUP**, gaste ⏱️1 para escolher e pegar qualquer carta de Equipamento disponível. O equipamento pode ser colocado diretamente na área **Equipado** nessa mesma ação, respeitando o limite de um por tipo; caso contrário, vai para o Inventário.

O Armário pode ser usado uma vez por rodada; vire seu marcador para o lado **Usada** depois de pegar um Equipamento. A Cafeteira permanece disponível enquanto houver Consumíveis no estoque. A Rotina desvira o marcador do Armário no início da rodada seguinte. Se não houver carta disponível, a ação não produz nada.

Cada personagem tem duas áreas diferentes para Itens. Os encaixes na parte superior da cartela representam o **Inventário**; as cartas colocadas abaixo da cartela ou ficha representam os itens **Equipados**.

- **Inventário:** a área superior da cartela comporta até **3 cartas de Item**, em qualquer combinação. Durante o Ato 4 de *Yesterday's Jam*, cada token de monitor quebrado também ocupa 1 espaço do inventário; cartas e monitores entram na mesma contagem máxima de 3. Os itens do inventário são carregados, mas seus efeitos de Equipamento não estão ativos.
- **Equipado:** fica imediatamente abaixo da carta ou ficha do personagem. A cartela também possui dois encaixes laterais para lembrar esse limite. Apenas cartas de Equipamento ficam nessa área e seus efeitos estão ativos. O personagem pode equipar no máximo **dois Equipamentos**, respeitando o limite de **um Equipamento de cada tipo**. Atualmente, os dois Equipamentos disponíveis são do tipo **Óculos**, então o personagem pode manter apenas um deles equipado.

Para trocar um Equipamento, devolva o que está equipado ao espaço do Armário e pegue o outro na mesma ação de ⏱️1; o novo equipamento também pode ser colocado diretamente na área **Equipado**. Consumíveis permanecem no Inventário até serem usados.

Um técnico adjacente a outro personagem pode transferir qualquer quantidade de Itens entre os dois gastando **⏱️1**. A troca não exige uma ação de movimento nem custa uma ação por item.

- **Consumível (☕):** resolve o efeito uma vez e é removido do jogo.
- **Equipamento (🧰):** permanece com o personagem enquanto o efeito estiver ativo. A própria carta informa quando o equipamento é descartado.

Itens não resolvem um chamado sozinhos. Eles apenas alteram uma rolagem, removem uma penalidade ou reduzem uma consequência.

## 11. The Boss Stress e demissões

O **The Boss Stress** (⚠️) vai de 0 a 15. No setup, coloque marcadores de reunião nos limiares **8, 11, 13 e 14**. Quando o Stress alcançar ou ultrapassar pela primeira vez um desses valores, resolva uma reunião de desempenho e mova o marcador desse limiar para a área **Reuniões resolvidas**. Cada limiar provoca no máximo uma reunião, mesmo que o Stress diminua e volte a alcançá-lo.

### Efeitos contínuos dos limiares

Ao alcançar cada marco, o efeito correspondente é desbloqueado para todos os personagens jogáveis e permanece ativo até o fim da partida, mesmo que o Stress diminua. Os efeitos são cumulativos:

- **8:** `+1👣`
- **11:** `+1🙂`
- **13:** `+1🧠` para os personagens jogáveis
- **14:** `+1⏱️` por ativação de cada personagem jogável

### Defesa coletiva

Quando um limiar é alcançado, os jogadores podem escolher a **Defesa coletiva**. Cada personagem jogável ainda empregado rola seu pool 🙂; cada dado com 5 ou 6 é um sucesso. A equipe precisa obter **um sucesso total por personagem empregado**. Moss contribui normalmente com seu dado de 🙂.

Se a Defesa coletiva falhar, é demitido o personagem que contribuiu com menos sucessos. Em caso de empate, os jogadores escolhem entre os empatados.

### Defesa individual — assumir a culpa

Os jogadores votam. Se a maioria concordar em responsabilizar uma pessoa, ela faz a Defesa individual. Se não houver maioria, o grupo usa a Defesa coletiva.

A pessoa escolhida rola os dados de **🧠 + 🙂 combinados** e precisa obter **✅✅✅** em uma única rolagem. Se passar, ninguém é demitido; se falhar, o personagem escolhido é demitido.

Sempre que um personagem for demitido, remova-o da iniciativa e reduza ⚠️ em 2. Se todos os personagens jogáveis forem demitidos, a partida termina em derrota.

**Marcadores de reunião são de uso único.** Se a reunião do limiar 14 for vencida e o Stress permanecer em 14, qualquer novo aumento de Stress causa derrota imediata. Se o Stress cair e retornar a um limiar cuja reunião já foi resolvida, não há nova reunião.

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

Use as cartas F1 a F5 nesta ordem. Separe-as do baralho de Eventos e deixe-as viradas para baixo, com F1 no topo. Escolha os personagens jogáveis normalmente, sem usar o escritório do gerente à direita como escritório de jogador. Jen começa como NPC e, durante todos os atos, usa apenas as regras especiais da missão e suas ativações **⭐**. Use o tabuleiro com o escritório de Denholm e mantenha disponíveis os tiles do computador, do telefone de Jen, do elevador e as fichas de fogo. O telefone de Jen é apenas um componente narrativo da missão: não faz parte da quantidade de telefones dos personagens jogáveis, não toca na Rotina e não recebe chamadas de Eventos Genéricos.

O objetivo da campanha é sobreviver à chegada de Jen, provar que ela não entende de computadores, esconder o incêndio causado por Moss e apagar os fogos antes que Denholm perceba o estresse de Jen. Se uma regra do ato entrar em conflito com uma regra geral, a regra do ato tem prioridade.

## F1. Nova gerente

*Denholm apresenta Jen como a nova gerente. Ela parece confiante: “Emails, enviar, receber, mouse, click, duplo click...”.*

**Preparação:** revele F1 e coloque Jen no ponto de surgimento, saindo do elevador. Ela é uma NPC durante este ato.

**Ativação ⭐ de Jen:** quando a estrela alcançar F1, mova Jen com `👣 = 3 + 1🎲` em direção ao técnico mais próximo. Ao chegar a um tile adjacente a um técnico, encerre o movimento. Se ela já estiver adjacente no início da ativação, ela não se move.

**Descobrir a incompetência:** um técnico adjacente pode gastar ⏱️1 para iniciar uma conversa e fazer um confronto **🧠 vs 🙂** da Jen. O lado com mais sucessos vence. Se o técnico vencer, fica claro que Jen não entende de computadores.

**Descarte:** quando um técnico vencer o confronto **🧠 vs 🙂** da Jen.

## F2. Sinclair ZX81

*Jen está a caminho da cadeira do escritório. Para evitar que ela descubra como o departamento realmente funciona, a equipe decide preparar duas pequenas surpresas: um computador infectado e o telefone dela desconectado.*

**Preparação:** mantenha Jen no tabuleiro. Preserve o estado atual do computador. Deixe o telefone de Jen conectado. Jen começa a avançar em direção à cadeira do escritório à direita.

**Ativação ⭐:** quando a estrela alcançar F2, mova Jen com `👣 = 3 + 1🎲` em direção à cadeira do escritório. Jen não ganha ações de personagem: essa expressão é todo o movimento da ativação dela.

**Distrair Jen:** um personagem pode gastar ⏱️1 para fazer um confronto **🙂 vs 🙂 de Jen**. Se o personagem vencer, coloque 💬 sobre Jen; em caso de empate ou derrota, nada acontece. Durante o movimento dela, remova 💬 para cancelar 1 👣; cada marcador usado cancela apenas 1 👣.

Se Jen chegar à cadeira antes de as duas sabotagens serem concluídas, aumente 🙂 de Jen em 1.

### Sabotagens:
**Infectar o computador:** um personagem posicionado na cadeira do escritório, em frente ao computador funcional, pode gastar ⏱️1 e fazer 🧠 ✅. Com sucesso, vire o tile para o lado infectado. Em caso de falha, o tile permanece funcional e outra ação pode tentar novamente.

**Desconectar o telefone:** um personagem junto ao telefone de Jen pode gastar ⏱️1. Não há teste; vire o tile para o lado desconectado.

As duas ações podem ser realizadas em qualquer ordem e por personagens diferentes.

**Descarte:** assim que Jen chegar à cadeira.

## F3. Aham, aham, claro...

*A equipe agora precisa provar que Jen é uma fraude. Denholm espera uma demonstração simples; a equipe espera que as sabotagens façam o trabalho por ela.*

**Preparação:** mantenha Jen na cadeira do escritório e coloque um d6 em 3 para marcar a Credibilidade. Jen não se move durante este ato; qualquer técnico pode se aproximar para iniciar um confronto.

**⭐:** sempre que a estrela alcançar esta carta, faça 🎲 ✅: Jen tenta usar o telefone. Se o computador estiver infectado, reduza a Credibilidade em 3. Se estiver normal, aumente 🙂 de Jen em 1. Este é um teste narrativo da missão; o telefone de Jen nunca toca e não é tratado pela Rotina.

**Computador infectado:** enquanto o computador permanecer infectado, Jen rola 1 dado 🙂 a menos nos confrontos diretos. Se o computador estiver funcional, não aplique o modificador.

**Confrontos diretos:** um técnico adjacente a Jen pode gastar ⏱️1 para iniciar um confronto 🧠 vs 🙂 da Jen. Se o técnico vencer, reduza a Credibilidade em 1. Empate ou derrota não alteram a Credibilidade. Quando ela chegar a 0, a incompetência de Jen é comprovada.

**Descarte:** quando a incompetência for comprovada pelo telefone desconectado ou quando a Credibilidade chegar a 0.

## F4. Four, I mean, five, I mean, FIRE!

*Moss colocou fogo no escritório e só percebeu quando as chamas ficaram grandes demais. Agora a equipe precisa esconder o incêndio com monitores quebrados antes que Denholm saia do elevador e entre na sala principal.*

**Preparação:** coloque 1 ficha de fogo baixo na mesa em frente à mesa de Moss. Coloque Denholm no elevador e sua carta no fim da iniciativa. Coloque 4 tokens de monitor quebrado no escritório de Jen. Jen permanece onde terminou o ato anterior.

**Denholm:** durante este ato, Denholm tem 1 ação por ativação. Em cada ativação, mova **`👣 = 1 + 3🎲`** em direção à sala principal. Não se aplicam rerrolagens, compra de dados ou bônus de personagens.

**Esconder os fogos:** um personagem pode gastar ⏱️1 para pegar 1 token de monitor quebrado. Cada token ocupa 1 espaço do inventário, e monitores e cartas de Item entram na mesma contagem máxima de 3. Um personagem pode gastar ⏱️1 para colocar 1 ou 2 tokens no próprio tile; cada token colocado sobre uma ficha de fogo a esconde. Esconder um fogo não o apaga: ele continua ativo e pode se alastrar.

**Derrota:** se Denholm entrar na sala principal antes de todos os fogos estarem escondidos.

**Descarte:** quando Denholm entrar na sala principal e todos os fogos estiverem escondidos.

## F5. Are you stressed?

*Denholm vê os monitores quebrados cobrindo as chamas. “Screen saver legal, hein! Bem realista.” Então percebe que Jen está na sala e começa a interrogá-la.*

**Preparação:** coloque Jen na cadeira do escritório. Coloque Denholm no tile em frente à mesa de Jen. Deixe a carta de Denholm na iniciativa.

**Jen:** Jen não se move e tem apenas 1 ação em sua ativação. Essa ação só pode remover 1 marcador de 🫩 dela.

**Stress:** sempre que ⚠️ aumentar, coloque a mesma quantidade de marcadores de 🫩 sobre Jen, até ela chegar a 3. Esses marcadores permanecem mesmo se o Stress diminuir.

**Limite de Jen:** quando Jen já tiver 3🫩, qualquer novo 🫩 que ela receber vira +⚠️ em vez de um quarto marcador. Essa conversão não gera outro 🫩. Jen pode ser ajudada pela ação **Recuperar**; ao ficar abaixo de 3🫩, ela volta a poder receber marcadores normalmente. O F5 não termina por Jen ter 3🫩: a derrota acontece pela condição normal de derrota do **The Boss Stress**.

### Objetivos

1. **Chamar os bombeiros:** um personagem junto a um computador funcional pode gastar ⏱️1 e fazer 🙂 ✅. Com sucesso, coloque **2 bombeiros** no elevador e **uma carta do Bombeiro** no fim da iniciativa. Quando ela for ativada, os dois bombeiros agem juntos.
2. **Apagar 🔥:** os bombeiros devem alcançar cada fogo e apagá-lo conforme as regras da sua carta.

### Are you sure?

Na ativação de Denholm, ele tem **2 ações**. Em cada ação, escolha uma opção:

- Remova 1 `💬` de Denholm.
- **ARE YOU SURE?** faça 🎲 ✅: coloque 1🫩 em Jen.

### Distrair Denholm

Um personagem jogável adjacente a Denholm pode gastar ⏱️1 para fazer **🙂 vs 🙂 de Denholm**. Vitória: coloque 1 `💬` em Denholm. Falha: o técnico recebe 1🫩. Empate conta como falha.

**Vitória:** quando não houver mais fichas de fogo no cenário. Denholm conclui que Jen não está estressada e vai embora.

### Yesterday's Jam

1. **Nova gerente** — Jen chega ao porão e se aproxima do técnico mais próximo. Um técnico adjacente tenta descobrir que ela não entende de computadores.
2. **Sinclair ZX81** — preparar as duas sabotagens antes que Jen chegue à cadeira; se ela chegar primeiro, seu Carisma aumenta.
3. **Aham, aham, claro...** — comprovar a incompetência usando o telefone sabotado, o computador infectado e confrontos diretos.
4. **Four, I mean, five, I mean, FIRE!** — esconder todos os fogos antes que Denholm entre na sala.
5. **Are you stressed?** — enviar o e-mail, chamar os bombeiros e reduzir todos os fogos antes que o **The Boss Stress** cause a derrota.

O texto completo de cada ato está no arquivo de cartas.

### Missões genéricas

- **Telefone maldito!:** comece com `+ ☎️⚡` nos 3 telefones. Vitória quando todos os chamados iniciais forem concluídos e não houver telefones, usuários ou pendências associados a eles.
- **Firewall:** comece com todos os computadores dos escritórios escolhidos e o servidor infectados. Vitória quando todos esses tiles estiverem funcionais.
- **Esqueci do cliente:** comece com duas combinações ☎️ + 👤 no fim da iniciativa e coloque a carta **Preciso desse relatório para ontem** no topo do baralho de Eventos Genéricos. Vitória quando as duas combinações forem concluídas e o relatório for enviado.
- **Fim do expediente:** complete seis rodadas sem o Stress chegar a 8. Se chegar a 8, a missão termina em derrota.

## 14. Pontos para playtest

- **Atendimento e paciência:** verifique se as linhas `📞` e `⭐` dos usuários criam pressão suficiente sem tornar uma combinação impossível de resolver.
- **Probabilidades de reação:** as faixas `📞` e `⭐` impressas em cada carta são valores iniciais. Ajuste-as se os usuários causarem Stress rápido demais.
- **Elevador:** observe se a capacidade física de quatro miniaturas no ponto de surgimento é suficiente sem bloquear o tabuleiro.
- **Chamados:** compare o valor de resolver, postergar e deixar o chamado acumulando demora. Cada opção deve ter uma vantagem e um custo claros.

---



---

# THE IT CROWD — Cartas e peças v0.6

# PARTE II — CARTAS E PEÇAS

**Protótipo de design · versão consolidada 0.6**

Este arquivo contém os textos resumidos das cartas e os rótulos dos tiles. O significado dos ícones e as regras completas estão no **Manual de regras v0.6**. Cada seção representa uma carta física independente, salvo indicação de componente fixo, carta de referência ou tile.

## Legenda de montagem

- ⚡ = resolução imediata ao revelar.
- ⭐ = efeito de paciência quando a estrela alcança a combinação na fila.
- ⏱️ = ação.
- ☎️ = atendimento telefônico.
- 📵 = nenhum telefone livre; resolva o teste de pressão da Rotina.
- ✋ = efeito especial enquanto ☎️ + 👤 estiver na mão.
- ⏸️ = Postergar: gaste ⏱️1 para colocar ☎️ + 👤 no fim da iniciativa.
- 🧠 = Inteligência; 🙂 = Carisma.
- ✅ = sucesso; 🔒 = resultado bloqueado quando sobreposto ao ✅ ou ❌; 🏁 = conclusão; 👣 = movimento; 🖥️ = computador funcional; 👤 = usuário associado ao chamado; surgimento só quando escrito explicitamente.
- 😐 = paciente; 🫩 = Cansaço; 🔋 = Ânimo; ⚠️ = Stress.
- 🦠 = vírus; 🔄 = virar a carta 90°; 🎲 = d6 customizado; 🔺 = d10 numérico.
- 🎲 ✅ = rolagem simples do d6 customizado: com ✅, resolva o efeito; com ❌, nada acontece, salvo indicação contrária.
- 📞 = efeito do Usuário enquanto Em atendimento, resolvido apenas pela Rotina; ⭐ = paciência do usuário, resolvida na iniciativa.
- ⚡ = resolver agora; ⭐ = efeito na iniciativa; 🛠️ = preparação da missão; 🔥 = fogo; 🎯1, 🎯2 e 🎯3 = etapas numeradas; ⚔️ = confronto; ✪ = efeito contínuo; 🗑️ = descarte; 📌 = objetivo.
- ☕ = Item Consumível; 🧰 = Item Equipamento.

## Formato físico e cores das cartas

As cartas principais usam o formato padrão de cartas de Magic: **63 × 88 mm**, em orientação vertical. A proporção física segue o tamanho de Magic; a composição interna pode usar uma grade baseada na proporção áurea para organizar imagem, título e área de regras.

As cartas de personagem jogável têm o dobro da largura de uma carta principal: **126 × 88 mm**, em orientação horizontal. Elas equivalem a duas cartas principais lado a lado.

As cartas de Item usam o formato mini de aproximadamente metade da área de uma carta principal: **44 × 62 mm**, mantendo uma proporção semelhante à carta principal para preservar a leitura.

Os tiles reversíveis são componentes quadrados do tamanho da malha do cenário. No tabuleiro atual, a arte tem aproximadamente 23 colunas × 13 linhas. Considerando impressão do tabuleiro em A4 paisagem, ocupando 297 mm de largura, cada tile mede aproximadamente **12,9 × 12,9 mm**. O tile deve sempre ser escalado junto com o tabuleiro; essa é uma referência do cenário atual, não uma medida universal para mapas futuros.

Os peões são discos de aproximadamente **10 mm de diâmetro**, para caberem dentro de um tile do cenário atual. Cada personagem tem uma cor própria, e o Bombeiro usa o símbolo `👨‍🚒`. O centro do disco aceita uma imagem PNG opcional, definida no hash do template.

O tabuleiro principal é impresso em **A4 paisagem (297 × 210 mm)**. A imagem ocupa toda a largura da folha e fica centralizada verticalmente, preservando a proporção original; por isso, permanecem margens brancas acima e abaixo.

As bordas identificam a função da carta:

- **Verde:** Chamado.
- **Azul:** Usuário, Rotina, cartas de iniciativa e fichas dos personagens jogáveis.
- **Roxo:** Evento Genérico.
- **Vermelho:** Evento de Missão.
- **Amarelo:** Item Consumível.
- **Laranja:** Item Equipamento.
- **Cinza:** cartas de iniciativa de personagens especiais solicitados por uma missão, como Denholm e o Bombeiro.
- **Branco:** cartas de referência, como `A2 — 🚶 AÇÕES`.

A cor nunca deve ser a única forma de identificação: cada categoria também possui título e ícone próprios.

Cartas de **Evento de Missão** usam o cabeçalho **MISSÃO**. Na frente, o título principal identifica a missão, como **YESTERDAY'S JAM**, e o subtítulo identifica o ato específico, como **ATO 1 — NOVA GERENTE**. Todas as cartas do mesmo arco compartilham o nome da missão para facilitar a separação e a organização do baralho.

## Direção de arte das cartas

### Estilo padrão: Ilustração digital narrativa semi-realista de comédia de escritório

Todas as artes das cartas devem seguir o estilo visual estabelecido pela C1: uma ilustração digital desenhada, semi-realista e muito detalhada, com acabamento de pintura digital e humor visual de sitcom.

Características obrigatórias:

- personagens e objetos com aparência desenhada/pintada, sem parecer uma fotografia literal e sem virar um desenho infantil ou cartunesco;
- ambientes de escritório reconhecíveis, com texturas, objetos de época, cabos, papéis, computadores e pequenos detalhes de uso;
- expressões faciais, poses e composição visual levemente exageradas para comunicar a piada sem depender de texto explicativo;
- iluminação cinematográfica de escritório, paleta levemente envelhecida e contraste suficiente para funcionar sob títulos e painéis HTML;
- um foco visual principal por carta, com composição vertical adequada ao formato 63 × 88 mm;
- áreas menos detalhadas no topo e na parte inferior quando a arte for usada atrás de título, flavor text ou regras.

As artes devem ser ilustrações independentes: não devem conter moldura, título da carta, custos, ícones de regra, código, marca-d'água ou texto decorativo. Textos que façam parte essencial da piada podem aparecer em objetos da cena somente quando forem especificados no manual. Personagens podem ser inspirados por situações da série, mas devem ser representados como figuras originais, sem reproduzir atores ou frames.

Descrição curta para novas gerações: **semi-realistic hand-painted digital illustration, detailed early-2000s office sitcom, grounded comedic realism, expressive characters, cinematic office lighting, original fictional characters, no card frame**.

---

# A. Cartas de referência

## A1. ROTINA — Início da rodada

**Carta fixa no início da fila. Não entra no descarte.** Resolva antes de mover a estrela.

1. **☎️ Telefones:** faça 🔺 por `☎️⚡`: 1 remove; 2–6 mantém; 7–8 gera +⚠️; 9–10 gera +⚠️, desliga o telefone e coloca 1 Chamado + 1 Usuário associados no fim da fila, com o Chamado por cima.

2. **📞 Atendimento:** para cada combinação ☎️ + 👤 que ainda estiver na mão de um personagem, resolva a linha `📞` da carta de Usuário. Se a carta não tiver essa linha, nada acontece.

3. **📵 Telefones ocupados:** se todos os telefones continuarem ocupados, faça 🎲 ✅: +⚠️. Faça este teste no máximo uma vez por Rotina.

4. **🦠 Servidor:** se estiver infectado, 🔺 6–9: +⚠️; 10: +⚠️ e espalha para algum PC.

5. **🧰 Armário:** deixe disponível.

6. **🔥 Fogo:** para cada fogo, faça 🎲 ✅: baixo vira alto; alto cria 1 fogo baixo adjacente, se possível.

## A2. REFERÊNCIA DO JOGADOR — 🚶 AÇÕES

**Uma cópia para cada jogador. Carta neutra; não entra na fila nem no descarte.**

Esta carta resume as ações gerais disponíveis durante a ativação. O manual, o Chamado, o Usuário, o tile ou a missão podem acrescentar custos e efeitos específicos.

- **Mover:** use a expressão `👣` do personagem por ação; em cada `Y🎲`, cada `✅` soma 1 tile.
- **Recuperar:** 🎲 ✅: remove 🫩. Pode recuperar outro personagem adjacente.
- **Gerar Ânimo:** `⏱️1` → `+🔋`, uma vez por ativação, até 5🔋.
- **Atender:** `☎️⚡` → Em atendimento; compre ☎️ + 👤.
- **Postergar:** `⏸️ ⏱️1` → remova o tile de telefone e coloque ☎️ + 👤 no fim da iniciativa.

## A3. REFERÊNCIA DO JOGADOR — 🔋 ÂNIMO

Cada personagem pode guardar no máximo **5🔋**. Gaste os tokens antes de aplicar o efeito indicado:

| Custo | Efeito |
|---|---|
| 🔋 | `+1👣` em uma ação de movimento **ou** `+1` no resultado de uma rolagem `🔺` (máximo 10). |
| 🔋🔋 | `+⏱️` nesta ativação **ou** `+1🎲` em uma rolagem de um personagem. |

O bônus de `🔺` pode ser usado depois de ver o resultado, antes de resolver a tabela. O dado extra de `🎲` deve ser declarado antes da rolagem e é um d6 customizado completo. Uma mesma rolagem ou ação recebe no máximo um bônus de Ânimo.

---

# B. Cartas de personagem

## B1. Roy Trenneman

**🧠 3 · 🙂 2 · 👣 = 2 + 1🎲**

**Pequena Vitória:** ao concluir um Chamado, ganhe 1🔋.

## B2. Maurice Moss

**🧠 4 · 🙂 1 · 👣 = 2 + 2🎲**

**Hacker:** 1× por ativação, se estiver adjacente a um equipamento: `-🦠`, sem gastar ⏱️ nem 🎲. Na Defesa individual, usa 🧠 + 🙂 para tentar obter ✅✅✅.

## B6. Richmond

**🧠 2 · 🙂 1 · 👣 = 3 + 1🎲**

**Clima Pesado:** 1× por turno, como ação livre, transfira 1🔋 de um personagem adjacente para si.

## B3. Jen Barber

**🧠 1 · 🙂 4 · 👣 = 3 + 1🎲**

**Sabe lidar com gente:** ao concluir com sucesso um chamado social, reduz ⚠️ em 1 adicional ao efeito 🏁 da carta.

As cartas de iniciativa de Roy, Moss e Richmond entram na fila no setup, na ordem escolhida pelos jogadores. A carta de Jen permanece reservada para missões enquanto ela for NPC. Cada ativação usa as 3 ações padrão do personagem, antes das penalidades de 🫩. As regras de uma missão podem substituir temporariamente esse comportamento.

## Fichas horizontais PC1, PC2 e PC3 — personagens jogáveis

As fichas `PC1` (Roy), `PC2` (Moss) e `PC3` (Richmond) são referências pessoais dos jogadores e não entram na fila de iniciativa. Cada ficha mostra o retrato, os três atributos, o total padrão de ações, as áreas de Inventário e Equipado e as habilidades do personagem. A carta de iniciativa correspondente continua sendo usada para determinar quando o personagem ativa.

**PC1 — Roy Trenneman:** use a ficha para consultar **🧠 3 · 🙂 2 · 👣 = 2 + 1🎲**, Inventário de até 3 Itens, a área **Equipado** abaixo da ficha, 3 ações por ativação e **Pequena Vitória**: ao concluir um Chamado, ganhe 1🔋.

**PC2 — Maurice Moss:** use a ficha para consultar **🧠 4 · 🙂 1 · 👣 = 2 + 2🎲**, Inventário de até 3 Itens, a área **Equipado** abaixo da ficha, 3 ações por ativação e **Hacker**: 1× por ativação, se estiver adjacente a um equipamento: `-🦠`, sem gastar ⏱️ nem 🎲. Na Defesa individual de demissão, usa 🧠 + 🙂 para tentar obter ✅✅✅.

**PC3 — Richmond:** use a ficha para consultar **🧠 2 · 🙂 1 · 👣 = 3 + 1🎲**, Inventário de até 4 Itens, a área **Equipado** abaixo da ficha, 3 ações por ativação e **Clima Pesado**: 1× por turno, como ação livre, transfira 1🔋 de um personagem adjacente para si.

As fichas horizontais são impressas em **126 × 88 mm**, equivalentes a duas cartas principais lado a lado. A borda é azul, como a das cartas de Usuário e das cartas de iniciativa dos personagens jogáveis.

## B4. Denholm (NPC)

**🧠 1 · 🙂 2 · 👣 = 1 + 3🎲**

**Carta de iniciativa:** no Ato 4, coloque esta carta no fim da iniciativa quando Denholm for colocado no elevador.

**Ato 4:** 1 ação por ativação; mova `👣 = 1 + 3🎲` em direção à sala principal.

**Ato 5:** siga a regra ⭐ da missão.

## B5. Bombeiro (NPC)

**Carta de iniciativa:** no Ato 5, coloque uma carta no fim da iniciativa. Quando a estrela alcançar essa carta, ative os dois bombeiros juntos.

**⭐:** cada bombeiro tem 2 ações por ativação. Resolva as ações de um bombeiro por vez; cada ação pode mover `👣 = 2` ou tentar **apagar 🔥** quando estiver adjacente a ele. Faça 🎲 ✅: apague 🔥.

**🗑️:** quando não houver fichas de fogo no cenário.

---

# C. Baralho de Chamados

Cada carta descreve somente o problema técnico e as ações para resolvê-lo. **Não contém demora, paciência, atributos, reações, movimento ou efeitos presenciais do usuário**: a demora e a paciência ficam exclusivamente no Baralho de Usuários (seção D).

Quando um chamado é comprado, compre também uma carta de Usuário. Mantenha as duas cartas associadas, com o Chamado por cima. Consulte o Manual para o procedimento completo.

## C1. Já tentou desligar e ligar de novo?

**RESOLVER:** 🧠 · ✅ | 🏁 −⚠️.

---

## C2. Não abre!

**RESOLVER:** 🧠 ✅ **e** 🙂 ✅ na mesma tentativa. 🏁 −⚠️.

---

## C3. Senha não funciona

**RESOLVER:** 🖥️ 🧠 ✅. 🏁 sem alteração de ⚠️.

---

## C4. Derrubei a internet

**RESOLVER — 1. Diagnosticar:** 🧠 ✅✅. Sucesso: 🔄 vire esta carta a 90°.
**RESOLVER — 2. Restaurar:** 🖥️ 🧠 ✅✅✅. 🏁 −⚠️.

---

## C5. 404: relatório não encontrado

**RESOLVER — 1. Preparar:** 🖥️ 🧠 ✅. Sucesso: 🔄 vire esta carta a 90°.
**RESOLVER — 2. Enviar:** 🖥️ 🙂 ✅. 🏁 −⚠️.

---

## C6. What the flip!

**RESOLVER:** 🖥️ 🧠 ✅✅. 🏁 −⚠️.

---

## C7. O mouse sumiu

**RESOLVER:** 🙂 · ✅. 🏁 −⚠️.

---

## C8. A impressora não imprime

**RESOLVER:** 🖥️ 🧠 · ✅. 🏁 −⚠️.

---

# D. Baralho de Usuários

Cada carta define uma pessoa específica. A carta de Usuário permanece sempre associada à carta de Chamado correspondente.

**Regra comum:** `📞` é o efeito do Usuário enquanto Em atendimento e só é resolvido pela Rotina enquanto ☎️ + 👤 estiver na mão de um personagem. Uma linha com label `✋` é um efeito especial disponível enquanto a combinação estiver na mão; ela cria uma exceção à restrição normal de ações somente se a própria linha disser isso. Quando a linha tiver custo `⏱️`, o efeito pode ser repetido em ações separadas durante a mesma ativação, salvo se a carta indicar um limite. `⭐` é a paciência do usuário e é resolvido quando a combinação estiver na fila de iniciativa. `🏁` é um efeito adicional resolvido quando o Chamado for concluído. Usuários comuns não recebem peão, não se movem e não têm efeitos presenciais.

## D1. O paciente

*“Só queria saber se alguém está cuidando disso.”*

**⭐:** 🔺 8–10: +⚠️.

**🏁:** −⚠️.

## D2. O impaciente

*“Estou esperando há tempo demais.”*

**📞:** 🎲 ✅: +⚠️.

**⭐:** 🔺 6–10: +⚠️.

## D3. O irritado

*“Eu já expliquei isso três vezes!”*

**📞:** 🎲 ✅: +⚠️.

**⭐:** 🔺 4–10: +⚠️.

## D4. O pilhado

*“Quero falar com o responsável. Agora!”*

**📞:** 🎲 ✅: +⚠️.

**⭐:** 🔺 3–10: +⚠️.

## D5. O confuso

*“BING BONG NOISE.”*

**📞:** 🔺 8–10: +⚠️.

**⭐:** 🔺 8–10: +⚠️.

## D6. Senhora carente

*“Meu sobrinho, quando era pequeno, mexia com essas coisas de computador. Isso é tudo muito...”*

**⭐:** 🔺 9–10: +⚠️.

**🏁:** +🔋.

## D7. The Boss
“Não quero incomodar ninguém... mas já faz três dias.”

**📞:** 🎲 ✅: +⚠️.

**⭐:** 🔺 4–10: +⚠️.

## D8. O amigo do favor
“E aí, cara, quanto tempo?!”

**✋:** ⏱️1 · 🙂 ✅: +🔋.

**🏁:** −⚠️.

---

# E. Baralho de Eventos Genéricos

## E1. Mais um chamado

**⚡** Coloque ☎️ em um telefone livre. Se todos estiverem ocupados, nada acontece. **🗑️**

## E2. Espalhar vírus

**⚡** Se houver pelo menos um computador ou servidor infectado, vire um equipamento funcional para o lado infectado. Se nenhum estiver infectado, nada acontece. **🗑️**

## E3. O servidor está tossindo

**⚡** Vire o tile do servidor para o lado infectado. **🗑️**

## E4. Solicitação urgente da diretoria

**⚡** Coloque esta carta no fim da iniciativa.

**⭐ Enquanto não concluída:** +⚠️ em cada ativação.

**Resolver durante o turno de qualquer personagem:** em um computador funcional, ⏱️1 · 🧠 ✅✅ para preparar o relatório. Sucesso: 🔄 vire a carta a 90°. Depois, ⏱️1 · 🙂 ✅ para enviar o relatório. Sucesso: **🗑️**. Os testes podem ser feitos por personagens diferentes.

## E5. Moss explica a solução

**⚡** Escolha: −⚠️ ou remova 🫩 de um personagem. **🗑️**

*O problema era simples. A explicação, não.*

## E6. A sinergia da diretoria

*Denholm anunciou uma nova iniciativa de sinergia. Ninguém sabe o que significa, mas todos precisam parecer ocupados.*

**⚡** +⚠️ e coloque esta carta no fim da iniciativa.

**⭐** Cada personagem jogável rola 🙂. `❌`: recebe 🫩; `✅`: reduza ⚠️ em 1.

**🗑️** Depois que todos os personagens jogáveis resolverem o teste.

## E7. Preciso desse relatório para ontem

**⚡** Coloque esta carta no fim da iniciativa.

**Resolver durante o turno de qualquer personagem:** em um computador funcional, ⏱️1 · 🧠 ✅ para preparar o relatório. Sucesso: 🔄 vire a carta a 90°. Depois, ⏱️1 · 🙂 ✅ para enviar o relatório. Sucesso: **🗑️**. Os testes podem ser feitos por personagens diferentes.

## E8. Dois ☎️⚡

**⚡** Coloque ☎️ em 2 telefones livres. Se houver menos de 2 telefones livres, coloque ☎️ em todos os telefones livres. Se não houver nenhum telefone livre, nada acontece. **🗑️**

## E9. Reunião do Marketing

**⚡** Mantenha esta carta no topo do baralho de Eventos Genéricos.

**⭐** 🔺 → 1–7: **🗑️**. Com 8–10, nada acontece e a carta permanece no topo.

## E10. Dar satisfações

**⚡** Coloque esta carta no fim da iniciativa.

**⭐** Um personagem pode gastar ⏱️1 e fazer 🙂 ✅ para prestar satisfação sobre uma pendência. Com sucesso, reduza ⚠️ em 1 e descarte esta carta. Se falhar, a carta permanece na iniciativa.

## E11. A aposta do encontro

**⚡** Coloque esta carta no fim da iniciativa.

**⭐** Todos os personagens jogáveis rolam 🙂. Quem obtiver mais ✅ vence. Em caso de empate, apenas os empatados rolam novamente, até haver um vencedor. O vencedor recebe a mensagem da aposta e ganha **+🔋**. **Remova esta carta do jogo.**

## E12. Countdown

**⚡** Coloque esta carta no fim da iniciativa.

**⭐** Todos os personagens jogáveis rolam 🧠. Quem obtiver mais ✅ vence. Em caso de empate, apenas os empatados rolam novamente, até haver um vencedor. O vencedor recebe o convite para participar do *Countdown* e ganha **+🔋**. **Remova esta carta do jogo.**

---

# F. Cartas de missão — resumo impresso

Esta seção reproduz somente o texto curto usado nas cartas. Para contexto, preparação, transições e exceções, consulte a seção **13. Missões** da Parte I.

## F1. Nova gerente

**📌** Descobrir que Jen não entende de computadores.

**⭐** Jen: `👣 = 3 + 1🎲` em direção ao técnico mais próximo.

**⚔️** Técnico adjacente: 🧠 vs 🙂. Vitória: conclua; empate/derrota: tente novamente.

## F2. Sinclair ZX81

**📌** Concluir as duas sabotagens antes que Jen chegue à cadeira.

**⭐** Jen: `👣 = 3 + 1🎲`. Se faltar sabotagem ao chegar: +1 🙂.

**DISTRAIR JEN:** ⏱️1 · 🙂 vs 🙂 de Jen; vitória: +💬. Empate/derrota: nada. Cada 💬 cancela 1 👣.

**🎯1** Computador: 🧠 ✅. Vire o tile.

**🎯2** Telefone de Jen: sem teste. Vire o tile.

**🗑️** Quando Jen chegar à cadeira.

## F3. Aham, aham, claro...

**📌** Provar a incompetência de Jen. Credibilidade: 3; preserve o estado atual dos tiles.

**⭐** 🎲 ✅: Jen tenta usar o telefone. 🦠: −3 Credibilidade; 🖥️: +1🙂 de Jen.

**⚔️** PC infectado: −1 dado 🙂 de Jen. 🧠 vs 🙂; vitória: −1 Credibilidade.

**🗑️** Quando a incompetência for comprovada ou a Credibilidade chegar a 0.

## F4. Four, I mean, five, I mean, FIRE!

**📌** Esconder todos os fogos antes de Denholm entrar na sala.

**🛠️** Fogo baixo na mesa; Denholm no elevador; 4 monitores no escritório de Jen.

**DENHOLM** 1 ação · `👣 = 1 + 3🎲` em direção à sala.

**MONITORES** ⏱️1 pega 1; ⏱️1 solta 1–2. Cada monitor ocupa 1 espaço do inventário; limite combinado: 3.

**🗑️** Quando Denholm entrar e todos os fogos estiverem escondidos.

## F5. Are you stressed?

**📌** Enviar o e-mail; chamar os bombeiros; reduzir todos os fogos.

**🛠️** Jen na cadeira; Denholm diante da mesa.

**E-MAIL** 🖥️: ⏱️1 · 🙂 ✅.

**🎯2** Bombeiros devem apagar todos os 🔥.

**⭐** `2⏱️`: `💬` remova 1; **ARE YOU SURE?** 🎲 ✅: +🫩 Jen.

**DISTRAIR** Adj.: 🙂 vs 🙂 Denholm. Vitória: +💬; falha: +🫩 no técnico.

**🗑️** Quando não houver fogo no cenário.

---

# Tokens e marcadores

Tokens são componentes recortáveis independentes. Eles não usam moldura nem borda decorativa: a arte ocupa toda a área útil e recebe apenas **1 mm de sangria** além da linha de corte. Uma linha de corte tracejada pode aparecer na folha de montagem para ajudar o recorte, mas não faz parte da arte do token. Tokens reversíveis aparecem lado a lado na mesma folha A4 vertical para serem recortados e colados.

As quantidades abaixo são a configuração inicial do protótipo e podem ser ajustadas durante os testes:

| Componente | Quantidade | Faces / uso |
|---|---:|---|
| 🔥 Fogo | 8 | Reversível: **🔥 Fogo baixo / 🔥🔥 Fogo alto**. |
| 🫩 Cansaço | 8 | Não reversível; coloque sobre o personagem ou Jen. |
| 🔋 Ânimo | 6 | Não reversível; recurso pessoal, até 5 por personagem. |
| 💬 Distração | 8 | Não reversível; cada marcador reduz em 1 tile o próximo movimento de Jen. |
| ⚠️ Trilha The Boss Stress | 1 | Faixa horizontal de 0 a 15, com efeitos em 8 (`+1👣`), 11 (`+1🙂`), 13 (`+1🧠`) e 14 (`+1⏱️`). |
| ➤ Seta de Stress | 1 | Posicione ao lado da trilha para apontar o valor atual. |
| 📋 Reunião | 4 | Um marcador para cada limiar: 8, 11, 13 e 14. Cada um é descartado após a reunião correspondente. |
| 🖥️💥 Monitor quebrado | 4 | Tokens de missão usados para esconder os fogos no Ato 4. |
| ☕ Estação CAF | 1 | Tile da Cafeteira ou micro-ondas; permanece disponível enquanto houver Consumíveis no estoque. |
| 🧰 Estação SUP | 1 | Marcador de estado **Disponível / Usada** do Armário de suprimentos. |
| ⭐ Iniciativa | 1 | Estrela que percorre a fila de iniciativa. |

Peões de personagens, peões de Bombeiro e dados não entram nessa contagem de tokens. Os tiles de telefone, computadores, servidor, fio e elevador são componentes quadrados separados.

# G. Tiles reversíveis

Os tiles reversíveis são componentes quadrados, e não cartas. Cada componente tem duas faces que mostram estados diferentes do mesmo espaço. O arquivo `templates/tiles/tile-model.html` gera uma única folha vertical com cada frente e verso lado a lado para recortar e colar. Os códigos G1–G7 servem apenas para organização no manual e não aparecem no componente físico. Os tiles exibem apenas símbolos; as regras completas ficam neste manual.

## G1. Computador

**Lado funcional:** `🧠 Chamados técnicos podem ser resolvidos aqui.`

**Lado infectado:** `🦠 Infectado — ⏱️1 · 🧠 ✅✅ para restaurar.`

## G2. Servidor

**Lado funcional:** `Servidor operacional.`

**Lado infectado:** `🦠 Infectado — ⏱️1 · 🧠 ✅✅✅ para restaurar.`

## G3. Telefones

Use **um tile por personagem jogável**. Os tiles são idênticos.

**Lado tocando:** `☎️🔔`

**Lado em atendimento:** `📞`

## G5. Armário de suprimentos

**Ícone do tile:** `🧰`

O tile é arrastável no playtest e representa a estação de Equipamentos.

## G6. Estação da Cozinha

**Ícone do tile:** `☕` — a arte pode representar uma cafeteira ou um micro-ondas.

O tabuleiro define a posição exata de cada espaço dentro da Cozinha e da Sala de TI. Apenas o Armário usa um marcador reversível **Disponível / Usado**; a Cafeteira permanece disponível enquanto houver cartas no estoque.

## G7. Fio do telefone de Jen

Componente narrativo exclusivo de *Yesterday's Jam*. Não faz parte dos telefones dos personagens jogáveis e nunca participa da Rotina nem recebe chamadas.

**Lado plugado:** `fio esticado até a parede.`

**Lado desplugado:** `fio solto em formato de U.`

---

# H. Estações e cartas de Item

## H1. Estações de produção

**Cozinha — Cafeteira ou micro-ondas**

`☕ RETIRA 1 ITEM CONSUMÍVEL · ⏱️1 · ADJACENTE`

**Sala de TI — Armário de suprimentos**

`🧰 PRODUZ 1 ITEM EQUIPAMENTO · ⏱️1 · 1 vez por rodada`

Use o marcador reversível do Armário para indicar se ele está Disponível ou Usado. A Rotina reinicia o Armário no início da rodada.

## H2. Xícara de café

**Borda:** marrom escura · **Tipo:** ☕ Consumível · **Quantidade:** 4

`Ação livre: +1🧠 −1🙂 +1👣 até o final do turno. Remova do jogo.`

## H3. Barrinha de proteína

**Borda:** marrom escura · **Tipo:** ☕ Consumível · **Quantidade:** 3

`Ação livre: remova 1🫩. Remova do jogo.`

## H4. Slightly larger glasses

**Borda:** marrom clara · **Tipo:** 🧰 Equipamento · **Quantidade:** 1

`EQUIPADO | +1🧠`

## H5. Óculos glamuroso

**Borda:** marrom clara · **Tipo:** 🧰 Equipamento · **Quantidade:** 1

`EQUIPADO | +1🙂`

## H6. Camiseta `www.ladyproblems.com`

**Borda:** marrom clara · **Tipo:** 🧰 Equipamento — Vestuário · **Quantidade:** 1

`EQUIPADO | −1🙂 · 1× por ativação: remova 🫩 sem gastar ⏱️.`

Itens adicionais podem ser criados mantendo uma destas duas funções: Consumíveis removem uma consequência imediata; Equipamentos alteram uma ação ou rolagem específica.

---

# I. Cartas de missão genérica

## I1. Telefone maldito!

**Preparação:** aplique `+ ☎️⚡` nos 3 telefones.

**Vitória:** todos os chamados iniciais foram concluídos; não há ícones de telefone, usuários ou pendências vinculados a eles.

## I2. Firewall

**Preparação:** vire todos os computadores dos escritórios escolhidos e o servidor para o lado infectado.

**Vitória:** todos os computadores dos escritórios escolhidos e o servidor estão funcionais.

## I3. Esqueci do cliente

**Preparação:** coloque duas combinações ☎️ + 👤 no fim da iniciativa, com os Chamados por cima, e separe a carta **E7 — Preciso desse relatório para ontem** no topo do baralho de Eventos Genéricos.

**Vitória:** as duas combinações foram concluídas e a carta **E7 — Preciso desse relatório para ontem** foi concluída.

## I4. Fim do expediente

**Preparação:** nenhuma. Conte seis rodadas completas.

**Vitória:** completar seis rodadas sem o Stress chegar a 8. Se chegar a 8, a missão termina em derrota.
