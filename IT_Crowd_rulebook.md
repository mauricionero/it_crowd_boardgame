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
- Tiles reversíveis para computadores, servidor, telefones, fio do telefone de Jen e porta do elevador.
- Um tile de telefone para cada personagem jogável, com os lados **Tocando / Em atendimento**. No setup, cada jogador escolhe um escritório para seu personagem; o telefone e o computador desse personagem ficam nesse tile. Os telefones são funcionalmente equivalentes: qualquer telefone livre pode ser atendido, e qualquer personagem pode usar qualquer telefone ou computador.
- O escritório do gerente, localizado à direita do tabuleiro, é reservado à missão e não pode ser escolhido como escritório de um personagem jogável.
- Peões dos personagens e seis peões genéricos de Usuário. O comportamento do usuário vem exclusivamente da carta de Usuário; não existem peões diferentes por perfil.
- Baralho de Chamados, baralho de Usuários, baralho de Eventos Genéricos e cartas de Missão.
- Uma carta fixa de **Rotina** e uma estrela para indicar a iniciativa.
- Cartas de iniciativa de Denholm e do Bombeiro.
- Tokens recortáveis de 😔 Desânimo, 💬 Distração, espera e monitores quebrados.
- Uma faixa horizontal de ⚠️ Stress da Empresa, de 0 a 14, e uma seta móvel para indicar o valor atual.
- Fichas de 🔥 Fogo, com lados Fogo baixo / Fogo alto, e marcadores de reunião de desempenho.
- Marcadores de estação disponível/usada.
- Baralhos de Itens Consumíveis e Equipamentos.
- Uma carta de referência de atendimento para cada jogador.
- D6.

O elevador ocupa **2 × 2 tiles** e comporta no máximo quatro miniaturas. A arte do tile mostra **MAX. 4 PESSOAS**. A porta do elevador é representada por um tile reversível: fechada / aberta. Quando abre, somente uma miniatura consegue sair por rodada.

### Escritórios dos jogadores

No setup, cada jogador escolhe um tile de escritório para seu personagem, exceto o escritório do gerente à direita do tabuleiro, que é reservado à missão. Coloque nesse escritório o telefone e o computador correspondentes ao personagem. Essa escolha serve apenas para definir a posição inicial desses componentes: qualquer personagem pode usar qualquer telefone ou computador. Se uma missão definir uma posição específica para um componente, a regra da missão tem prioridade.

### Ponto de surgimento

Cada cenário define um ou mais **pontos de surgimento** e a capacidade de cada ponto. Sempre que uma carta ou regra indicar **👤**, coloque o usuário e sua combinação **☎️ + 👤** no ponto indicado pela missão. O cenário atual usa o elevador como ponto de surgimento; outros cenários podem usar uma porta, corredor, recepção ou qualquer outro espaço destacado no mapa.

Se o ponto de surgimento estiver lotado, ignore o pedido completo **👤 📴**. Não coloque a miniatura, não vire o telefone e não aumente o Stress nem aplique outra penalidade; mantenha a combinação ☎️ + 👤 associada e tente o surgimento novamente quando uma regra posterior permitir.

Use o próprio componente para mostrar o estado sempre que possível: tile virado indica computador/servidor infectado ou telefone sabotado; carta girada 90° indica etapa concluída quando a carta assim determinar.

## 3. Iconografia

| Ícone | Significado |
|---|---|
| ⚡ | Resolver imediatamente quando a carta é revelada. |
| ⭐ | Resolver o efeito quando a estrela alcançar a carta na fila de iniciativa. |
| ⭐ ⏸️ | Reação do usuário enquanto a combinação ainda está na fila. |
| ⭐ ⊞ | Efeito do usuário quando ele já está no cenário; resolva quando a estrela alcançar sua carta. |
| 🛠️ | Preparação da missão; resolva uma única vez quando a missão for revelada e prepare o tabuleiro conforme indicado. |
| ⏱️ | Ação. Ex.: ⏱️1 = gastar uma ação. |
| ☎️ | Telefone/chamado. O tile físico tem os lados Tocando / Em atendimento. |
| ✋ | Influência da interação direta: aplique o modificador impresso quando a combinação estiver na mão de um personagem ou quando o usuário estiver adjacente a um técnico. |
| 👥 | Efeito presencial adicional; consulte quando o usuário estiver adjacente a um técnico. |
| 🧠 | Inteligência: quantidade de d6 igual ao atributo. |
| 🙂 | Carisma: quantidade de d6 igual ao atributo. |
| ✅ | Sucesso; repita o ícone para indicar mais de um sucesso, como ✅✅. |
| 🔒 | Cadeado sobreposto: o resultado está bloqueado e não pode ser rerrolado. `❌ + 🔒` é falha bloqueada; `✅ + 🔒` é sucesso bloqueado. |
| 🏁 | Conclusão: aplique o efeito ao finalizar um chamado. |
| 👣 | Movimento em tiles por ação; o valor do personagem indica quantos tiles ele pode percorrer com uma ação de Mover. |
| 🖥️ | Resolver junto a um computador funcional. |
| 👤 | Usuário em cena. |
| 👤 📴 | Usuário surge no ponto definido pelo cenário e encerra a ligação; vire o telefone para Tocando. |
| 😐 | Usuário paciente, aguardando atendimento. |
| 😔 | Desânimo. Cada marcador reduz em uma as ações do personagem por ativação. |
| ⚠️ | Stress da Empresa. |
| 🔥 | Fogo ativo; o lado da ficha indica Fogo baixo ou Fogo alto. |
| 🦠 | Vírus; vire um tile funcional para o lado infectado. |
| 🔄 | Vire a carta 90°. |
| 🎲 | Role um dado. |
| ⌛ | Enrolar: faça o teste de 🙂 para ganhar tempo e mover o chamado para o fim da iniciativa. |
| ⏳ | Marcador de espera dos bombeiros. |
| 📴 | Telefone desligado pelo Usuário; vire de Em atendimento para Tocando. |
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
| ☎ TEL | Telefone | Atender, assumir ou manter um chamado em atendimento. |
| 🖥️ PC | Computador | Resolver chamados que exigem computador funcional. |
| 🖥 SRV | Servidor | Restaurar o servidor e aplicar os efeitos da Rotina. |
| 🛗 ELEV | Elevador | Entrada e saída de miniaturas. |
| ☕ CAF | Cafeteira ou micro-ondas da Cozinha | Produzir Item Consumível. |
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

O atributo 0 não gera dados e não pode produzir sucessos em um teste que exija esse atributo, salvo exceção escrita na carta. Testes resolvidos automaticamente pela Rotina, por uma ativação ⭐ ou por uma tabela 🎲 não usam rerrolagem, salvo se a própria regra permitir.

Faixas como **4+** que aparecem em tabelas de Rotina ou reações de d6 são gatilhos específicos daquela rolagem, não dificuldades de testes de atributo.

### Confrontos entre atributos

Quando uma regra usar **A vs B**, cada lado rola uma quantidade de d6 igual ao próprio atributo. Cada resultado 5 ou 6 vale ✅; o lado com mais sucessos vence. Isso funciona tanto para atributos iguais quanto diferentes, como 🧠 vs 🧠 ou 🧠 vs 🙂. Um confronto não tem uma quantidade fixa de sucessos exigida.

**Empate:** nenhum lado vence e nenhum efeito do confronto acontece. A ação ou ativação usada é gasta. O confronto só pode ser repetido se a regra permitir uma nova tentativa.

Quando uma regra indicar um atributo combinado, como **🧠 + 🙂**, some os dados dos dois atributos e conte os resultados 5 ou 6 como sucessos no mesmo teste.

## 5. Personagens e ações

Cada personagem jogável recebe **3 ações por ativação**, antes das penalidades de Desânimo. No setup, os jogadores escolhem a ordem de ativação dos personagens.

Ações básicas:

- **Mover:** até o valor de **👣** tiles por ação.
- **Atender:** junto a qualquer telefone no lado Tocando, gastar ⏱️1, virar o marcador para Em atendimento e comprar uma carta de Chamado e uma carta de Usuário.
- **Resolver, investigar ou sabotar:** seguir o custo e o teste impressos na carta ou no tile.
- **Animar-se:** ⏱️1 e 🎲 1d6 → 5–6: remover 😔. Moss remove 😔 com 4–6.
- **Ajudar a animar:** ⏱️1 e 🎲 1d6 → 5–6: remover 😔 de um aliado.
- **Assumir chamado:** enquanto a combinação ☎️ + 👤 estiver na mão de outro personagem, um personagem junto a um telefone livre pode gastar ⏱️1 para assumir as duas cartas. Mova o marcador Em atendimento para o telefone dele; o telefone anterior fica livre. Os telefones podem ser diferentes: cada um representa um ramal próprio.

### Regras avançadas: converter ações em recurso

- **Ação extra por Desânimo:** durante sua ativação, um personagem pode colocar **1 😔** sobre si para realizar **1 ação extra imediatamente**. Essa ação extra não é cancelada pelo novo marcador; o 😔 passa a reduzir as ações disponíveis normalmente na próxima ativação. Cada personagem pode usar esta regra no máximo **2 vezes por ativação**. É permitido ultrapassar 3 😔, mas o personagem ficará incapacitado até receber ajuda.
- **Comprar um dado:** antes de um teste de atributo, gaste **⏱️1** para adicionar **+1 dado** ao atributo usado naquele teste. O dado extra vale para a rolagem e suas rerrolagens, não altera o atributo da ficha e é descartado ao terminar o teste. O custo é adicional ao custo normal da tarefa; compre no máximo 1 dado extra por teste. A regra não permite gerar dados quando o atributo está em 0.

### Desânimo

Antes de cada ação, recalcule as ações disponíveis:

**Ações disponíveis = 3 − ações já gastas − 😔 atuais.**

Se uma ação remover um marcador de Desânimo, recalcule imediatamente. O personagem pode usar as ações que voltarem a ficar disponíveis.

| 😔 no início da ativação | Ações disponíveis |
|---:|---:|
| 0 | 3 |
| 1 | 2 |
| 2 | 1 |
| 3 ou mais | 0 |

Com 3 ou mais 😔, o personagem fica incapacitado e não pode se animar sozinho. Outro personagem pode gastar uma ação para ajudá-lo, removendo 1 😔 por ação; portanto, podem ser necessárias várias ações para recapacitá-lo.

### Atributos iniciais para playtest

| Personagem | 🧠 Inteligência | 🙂 Carisma | 👣 Movimento |
|---|---:|---:|---:|
| Roy | 3 | 2 | 2 |
| Moss | 4 | 1 | 3 |
| Jen | 1 | 4 | 2 |
| Denholm (NPC) | 1 | 2 | 3 |

**Roy — Enrolador profissional:** +1 dado 🙂 ao tentar enrolar um usuário por telefone.

**Moss — Gênio antissocial:** 🙂1. Faça 🎲 1d6 → 4–6: remova 😔. Na Defesa individual de demissão, usa 🧠 + 🙂 combinados.

**Jen — Sabe lidar com gente:** ao concluir com sucesso um chamado social, reduz ⚠️ em 1 adicional ao efeito de conclusão da carta.

## 6. Movimento e ocupação dos tiles

**Adjacência:** dois tiles são adjacentes quando compartilham um lado ou um canto. Portanto, tiles na diagonal também são adjacentes. Essa definição vale para movimento, interação, transferência de itens e todos os efeitos que mencionem um tile ou personagem adjacente.

- Personagens movem até o valor de **👣** tiles por ação.
- Cada usuário move o número de tiles indicado por **👣** na própria carta de Usuário. Não há categorias gerais de usuário para movimento.
- Cada tile comporta uma miniatura. Não é permitido terminar o movimento no tile ocupado por outra miniatura. A exceção é a área do elevador: mede 2 × 2 tiles e comporta até quatro miniaturas, uma por espaço.
- O movimento pode ser ortogonal ou diagonal. Cada tile atravessado conta como 1 movimento. O caminho deve seguir tiles conectados, e paredes continuam bloqueando o movimento.
- Se um técnico passar pelo tile ocupado por um usuário, o usuário o segue e termina no tile que o técnico acabou de deixar, mantendo um tile de distância. Se esse tile estiver ocupado, o usuário permanece onde está.
- Quando um usuário alcança um tile adjacente a um técnico, interrompe o movimento. O efeito ⭐ No cenário será resolvido quando a estrela alcançar a carta do usuário. Se o técnico passar pelo tile ocupado pelo usuário, o usuário o segue e fica um tile atrás, no espaço que o técnico acabou de deixar.

## 7. Fila de iniciativa

No setup, escolha a ordem dos personagens jogáveis. A estrela avança da esquerda para a direita.

**Ordem base da fila:**

1. **Rotina** — carta fixa no início da fila, resolvida no início de cada rodada antes de a estrela avançar.
2. **Missão** — resolve a carta de missão ativa.
3. **Eventos Genéricos** — verifica e revela o topo do baralho quando a estrela chegar à posição e não houver evento revelado.
4. **Personagens jogáveis** — na ordem escolhida no setup.
5. **Cartas na iniciativa** — pendências, usuários e eventos persistentes, na ordem em que foram adicionados.

### Cartas que entram na iniciativa

- Toda carta que entrar na iniciativa vai para a **extremidade direita da fila**, depois das cartas que já estão nela.
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

Há um telefone por personagem jogável, e cada telefone representa um ramal próprio. Cada tile tem dois lados: **☎️ Tocando** e **☎️ Em atendimento**. Um telefone ocupado por qualquer um desses lados não pode receber outra chamada. Os telefones não precisam ser usados pelo personagem que os escolheu: qualquer personagem pode atender qualquer telefone livre, e outro personagem pode assumir um chamado em outro telefone livre. Quando todos os telefones estiverem ocupados, novos efeitos que tentem fazer um telefone tocar não produzem efeito.

Uma carta de Chamado e uma carta de Usuário associadas formam a combinação **☎️ + 👤**. As duas cartas permanecem juntas até o chamado ser concluído ou abandonado.

### Carta fixa: ROTINA — início da rodada

Resolva os itens na ordem indicada, antes de a estrela avançar:

1. **☎️ Telefones:** para cada telefone no lado Tocando, faça 🎲 1d6:

   - 1 = usuário desistiu; remova o marcador.
   - 2–4 = continua tocando.
   - 5 = +⚠️ e continua tocando.
   - 6 = +⚠️; remova o marcador e compre 1 carta de Chamado e 1 carta de Usuário. Associe as duas cartas, coloque a miniatura no ponto de surgimento definido pelo cenário e ponha o conjunto no fim da fila, com o Chamado por cima.

   Se o ponto de surgimento estiver lotado conforme a capacidade definida pelo cenário, não coloque a miniatura. Mantenha a combinação associada e não aplique penalidade adicional.

2. **🛗 Elevador:** se houver miniaturas na cabine, faça 🎲 1d6 → 4+: abra a porta e mova **uma miniatura** para o tile livre mais próximo da saída. Depois, feche a porta. Com 1–3, ninguém sai. Se não houver tile livre adjacente à saída, ninguém sai nessa rodada.

3. **🦠 Servidor:** se o tile estiver infectado, faça 🎲 1d6 → 4+: aumente ⚠️.

4. **Estações:** vire os marcadores de **☕ CAF** e **🧰 SUP** para **Disponível**.

5. **🔥 Fogo:** para cada ficha de fogo ativa, faça 🎲 1d6 → 5–6: aplique a regra de alastramento da seção **10.1. Fogo**.

### Atender um telefone

Estando junto a um telefone no lado Tocando, gaste ⏱️1, vire o marcador para Em atendimento e compre **uma carta de Chamado e uma carta de Usuário**. Associe imediatamente as duas cartas na mão do personagem: Chamado por cima e Usuário ligeiramente deslocado para identificação. O jogador conhece o problema e o perfil de quem ligou antes de escolher como agir.

Enquanto a combinação ☎️ + 👤 estiver na mão, o personagem que a segura é o responsável pelo atendimento e pode resolver ou usar ⌛. Se outro personagem precisar assumir o atendimento, use **Assumir chamado**. A combinação deixa de estar na mão quando for enrolada e entrar na iniciativa; a partir desse momento, qualquer personagem pode resolver a pendência durante o próprio turno. O modificador ✋ aplica-se conforme a regra de **Interação direta**: na mão do responsável ou quando o usuário estiver adjacente a um técnico.

- **Resolver:** use o custo e os testes impressos na carta de Chamado. Aplique a regra geral de sucessos acumulados e rerrolagens da seção 4. Ao concluir, descarte Chamado e Usuário juntos e remova qualquer marcador que esteja Em atendimento.
- **⌛:** use o teste indicado no Chamado. Com sucesso, mantenha o telefone em Em atendimento e coloque a combinação ☎️ + 👤 no fim da fila de iniciativa, com o Chamado por cima. Qualquer personagem pode continuar a resolução no seu turno.
- **Assumir chamado:** enquanto a combinação ☎️ + 👤 estiver na mão de outro personagem, um personagem junto a um telefone livre pode gastar ⏱️1 para assumir as duas cartas. Mova o marcador Em atendimento para o telefone dele; o telefone anterior fica livre. O personagem que assumiu passa a ser o responsável pelo atendimento.

Quando a estrela alcançar a combinação ☎️ + 👤 na iniciativa, siga a ativação descrita na seção 9. Se o usuário ainda não estiver em cena, faça 🎲 1d6 e consulte a reação ⭐ Na fila da carta de Usuário. Se já estiver em cena, mova-o e resolva o efeito ⭐ No cenário, quando aplicável. Resolva também qualquer efeito ⭐ impresso no Chamado. Essa ativação do Usuário é um efeito adicional; **não impede nem substitui a resolução do chamado por qualquer personagem durante seu turno**. Se o resultado indicar 👤 📴, associe uma miniatura numerada à combinação, coloque-a no ponto de surgimento definido pelo cenário e vire o telefone de Em atendimento para Tocando. Se o chamado não tiver um telefone associado, ignore apenas o 📴.

Ao surgir em cena, a combinação ☎️ + 👤 continua associada: a carta de Chamado descreve como resolver o problema; a carta de Usuário descreve reação na fila, movimento, influência ✋ e efeitos ⭐ No cenário. Quando o chamado for concluído ou abandonado, descarte as duas cartas juntas.

### Usuários que surgem sem atendimento

Quando a Rotina indicar um surgimento sem atendimento (resultado 6), compre uma carta de Chamado e uma carta de Usuário e coloque-as juntas no fim da fila de iniciativa, com Chamado por cima. Na iniciativa, faça 🎲 1d6 para a reação ⭐ da carta de Usuário. Associe uma miniatura numerada e coloque-a no ponto de surgimento definido pelo cenário. A carta de Usuário determina o perfil e o comportamento desse usuário.

### ✋ — Interação direta

O símbolo **✋** representa a influência do usuário durante uma interação direta, seja por telefone ou presencialmente:

- **Na mão:** o personagem que segura a combinação ☎️ + 👤 aplica o modificador ao resolver, enrolar ou realizar outra interação indicada pelo chamado.
- **Em cena:** um técnico adjacente ao usuário aplica o mesmo modificador enquanto permanecer adjacente.
- **Na fila, sem miniatura em cena:** o modificador não é aplicado.

Os modificadores de usuários adjacentes acumulam e podem reduzir um atributo até **0**, mas nunca abaixo disso. Se o técnico se afastar, o modificador deixa de valer imediatamente e o atributo retorna ao valor normal. Modificadores positivos também podem ser aplicados; todos são recalculados sempre que a adjacência mudar.

### Baralho esgotado

Quando o baralho de Chamados ou o de Usuários acabar, embaralhe separadamente as cartas concluídas de cada tipo e forme novos baralhos. Cartas na mão, na iniciativa ou associadas a um usuário ativo não entram nos descartes. Se um dos baralhos estiver vazio e não houver descarte, não é possível gerar uma nova combinação ☎️ + 👤; aumente ⚠️ em 1.

## 9. Usuários em cena

Cada usuário tem um chamado associado pela combinação de duas cartas **☎️ + 👤**: Chamado + Usuário. Use uma miniatura genérica numerada de 1 a 6 e anote seu número na combinação ou coloque um d6 sobre as cartas. A combinação entra junta na fila de iniciativa, no fim da fila, com o Chamado por cima.

A carta de Chamado define exclusivamente o problema e como resolvê-lo. A carta de Usuário define perfil, reação ⭐ na fila, movimento, influência ✋, efeitos ⭐ No cenário e comportamento em cena.

### Ativação do usuário

Quando a estrela alcançar a carta de Usuário associada ao chamado, resolva a ativação conforme o estado do usuário:

1. **Chamado na fila ou usuário ainda sem miniatura em cena:** faça 🎲 1d6 e aplique a reação ⭐ Na fila. Se o resultado indicar 👤 📴, associe uma miniatura numerada, coloque-a no ponto de surgimento definido pelo cenário e vire o telefone de Em atendimento para Tocando. Se o chamado não tiver um telefone associado, ignore apenas o 📴. Se ainda estiver em um ponto de surgimento com entrada controlada, aguarde a regra do cenário permitir sua saída.
2. **Usuário em cena:** mova-o até o número de tiles indicado por 👣 na carta de Usuário, em direção ao técnico mais próximo. Ao alcançar um tile adjacente, encerre o movimento.
3. **⭐ No cenário:** depois do movimento, resolva o efeito ⭐ No cenário indicado na carta, se houver e se a condição estiver satisfeita. Se o usuário já iniciar a ativação adjacente a um técnico, não se move e o efeito pode ser resolvido normalmente.

### Pressão dos usuários

Usuários não realizam confrontos físicos. A pressão presencial é definida exclusivamente pelos modificadores ✋ e pelos efeitos ⭐ No cenário de cada carta.

Se um efeito ⭐ No cenário indicar **😐 Paciente** ou **nada**, o usuário permanece aguardando que o chamado seja resolvido. Um técnico adjacente pode gastar uma ação para fazer a resolução presencial indicada na carta de Chamado.

Se um efeito ⭐ No cenário indicar **😔** ou **+⚠️**, aplique esse efeito ao resolver a ativação do usuário. A resolução do chamado continua sendo a forma normal de encerrar o encontro; não existe uma ação de confronto físico separada.

## 10. Computadores e servidor infectados

O estado é mostrado no próprio tile: funcional de um lado, infectado do outro.

- Chamados que exigem computador funcional precisam ser resolvidos junto a um computador funcional.
- **Computador infectado:** ⏱️ · 🧠 ✅✅. Ao obter dois sucessos durante a mesma ativação, vire o tile para o lado funcional.
- **Servidor infectado:** ⏱️ · 🧠 ✅✅✅. Ao obter três sucessos durante a mesma ativação, vire o tile para o lado funcional.
- Se o servidor estiver infectado no início da rodada, a Rotina faz a rolagem de Stress descrita na seção 8.
- O ícone 🦠 em um evento pode infectar um equipamento funcional. O efeito só espalha vírus se pelo menos um computador ou o servidor já estiver infectado.
- Ao resolver um chamado técnico, aplique o modificador ✋ conforme a regra de Interação direta. Na mão, ele afeta o personagem responsável; em cena, afeta cada técnico adjacente ao usuário.

## 10.1. Fogo

Uma ficha de fogo representa um incêndio em um tile. O fogo começa pelo lado **Fogo baixo**; o verso da ficha é **Fogo alto**.

- Um tile com fogo não pode ser atravessado nem ocupado por personagens, usuários ou bombeiros.
- Na Rotina, faça 🎲 1d6 para cada fogo ativo. Com **5–6**, o fogo se alastra:
  - se estiver baixo, vire a ficha para o lado Fogo alto;
  - se estiver alto, coloque 1 nova ficha de Fogo baixo em um tile adjacente livre que ainda não tenha fogo.
- Um tile adjacente válido precisa estar livre, ser atravessável e não possuir outra ficha de fogo. Se não houver tile válido, não coloque uma nova ficha.
- Um fogo coberto por um monitor quebrado continua ativo, pode se alastrar e ainda precisa ser apagado. Quando um bombeiro iniciar uma tentativa de apagar esse fogo, remova o monitor para revelar a ficha.

## 10.2. Itens e produção

Itens representam recursos improvisados do escritório. Eles não criam uma fase nova no turno: produzir ou usar um item ocupa uma ação apenas quando a regra do item ou da estação indicar.

### Estações de produção

- No setup, separe os baralhos de Consumíveis e Equipamentos. As três cartas de Xícara de café começam no espaço de Baralhos; não coloque cafés na Cozinha. Coloque as cartas de Equipamentos na parte inferior do mapa, também parcialmente para fora do mapa, junto ao Armário.
- Posicione o tile **🧰 SUP** do Armário na parte inferior do mapa, próximo às cartas de Equipamento. Posicione o tile **☕ CAF** dentro da Cozinha, representando a cafeteira ou o micro-ondas. Esses tiles são as estações: o personagem precisa ficar adjacente a eles para comprar.
- **☕ CAF — Cafeteira/micro-ondas:** produz um Item Consumível.
- **🧰 SUP — Armário de suprimentos:** produz um Item Equipamento.

O tabuleiro deve destacar esses dois espaços com **✦ ☕ CAF** e **✦ 🧰 SUP**. A posição física das cartas no playtest serve para lembrar a origem de cada item; o cenário pode alterar essas posições sem mudar a regra.

Para usar uma estação, o personagem precisa estar **adjacente ao tile da estação**.

- **Preparar café:** junto ao tile **☕ CAF** (uma cafeteira ou um micro-ondas da Cozinha), gaste ⏱️1 e mova para a Cozinha as cartas de Xícara de café que ainda não estejam com personagens, até completar as três cartas físicas disponíveis. Se duas cartas já estiverem nos inventários, prepare somente a terceira; nunca crie cópias extras. Cartas de café descartadas voltam ao espaço de Baralhos.
- **Pegar café:** um personagem adjacente ao tile **☕ CAF** pode gastar ⏱️1 para pegar uma carta de café que esteja na Cozinha.
- **Equipamento:** junto ao tile **🧰 SUP**, gaste ⏱️1 para escolher e pegar qualquer carta de Equipamento disponível.

Cada estação pode ser preparada ou usada uma vez por rodada; vire seu marcador para o lado **Usada** depois dessa ação. Pegar um café já preparado não altera o marcador da estação. A Rotina desvira as estações no início da rodada seguinte. Se não houver carta disponível, a ação não produz nada.

Cada personagem tem duas áreas diferentes para Itens:

- **Inventário:** comporta até **3 cartas de Item**, em qualquer combinação. Os itens do inventário são carregados, mas seus efeitos de Equipamento não estão ativos.
- **Equipado:** fica imediatamente abaixo da carta ou ficha do personagem. Apenas cartas de Equipamento ficam nessa área e seus efeitos estão ativos. O personagem pode equipar no máximo **um Equipamento de cada tipo**. Atualmente, os dois Equipamentos disponíveis são do tipo **Óculos**, então o personagem pode manter apenas um deles equipado.

Para trocar um Equipamento, devolva o que está equipado ao espaço do Armário e pegue o outro na mesma ação de ⏱️1. Consumíveis permanecem no Inventário até serem usados.

Itens podem ser transferidos entre personagens em tiles adjacentes: basta que o personagem que está entregando o Item encerre uma ação de movimento em um tile adjacente ao personagem que vai recebê-lo. A transferência acontece ao final dessa ação, sem custo adicional.

- **Consumível (☕):** resolve o efeito uma vez e é descartado.
- **Equipamento (🧰):** permanece com o personagem enquanto o efeito estiver ativo. A própria carta informa quando o equipamento é descartado.

Itens não resolvem um chamado sozinhos. Eles apenas alteram uma rolagem, removem uma penalidade ou reduzem uma consequência.

## 11. Stress da Empresa e demissões

O Stress vai de 0 a 14. No setup, coloque marcadores de reunião nos limiares **8, 11, 13 e 14**. Quando o Stress alcançar ou ultrapassar pela primeira vez um desses valores, resolva uma reunião de desempenho e mova o marcador desse limiar para a área **Reuniões resolvidas**. Cada limiar provoca no máximo uma reunião, mesmo que o Stress diminua e volte a alcançá-lo.

### Defesa coletiva

Quando um limiar é alcançado, os jogadores podem escolher a **Defesa coletiva**. Cada personagem jogável ainda empregado rola seu pool 🙂; cada dado com 5 ou 6 é um sucesso. A equipe precisa obter **um sucesso total por personagem empregado**. Moss contribui normalmente com seu dado de 🙂.

Se a Defesa coletiva falhar, é demitido o personagem que contribuiu com menos sucessos. Em caso de empate, os jogadores escolhem entre os empatados.

### Defesa individual — assumir a culpa

Os jogadores votam. Se a maioria concordar em responsabilizar uma pessoa, ela faz a Defesa individual. Se não houver maioria, o grupo usa a Defesa coletiva.

A pessoa escolhida rola os dados de **🧠 + 🙂 combinados** e precisa obter **✅✅✅** em uma única rolagem. Se passar, ninguém é demitido; se falhar, o personagem escolhido é demitido.

Sempre que um personagem for demitido, remova-o da iniciativa e reduza ⚠️ em 2. Se todos os personagens jogáveis forem demitidos, a partida termina em derrota.

**Marcadores de reunião são de uso único.** Se a reunião do limiar 14 for vencida e o Stress permanecer em 14, qualquer novo aumento de Stress causa derrota imediata. Se o Stress cair e retornar a um limiar cuja reunião já foi resolvida, não há nova reunião.

## 12. Elevador

A área do elevador ocupa **2 × 2 tiles** e comporta no máximo quatro miniaturas no total. A arte do tile inclui **MAX. 4 PESSOAS**. O tile frontal da porta é reversível: fechada / aberta.

Apenas uma miniatura sai por rodada: 🎲 1d6 → 4+: a porta abre e uma miniatura é movida para o tile livre mais próximo da saída. Com 1–3, ninguém sai. Se os tiles adjacentes estiverem ocupados, ninguém sai naquela rodada. Usuários, personagens, Denholm e o Bombeiro seguem a mesma regra quando estiverem dentro do elevador.

Personagens podem entrar no elevador normalmente, respeitando a capacidade máxima de quatro miniaturas e a ocupação de um personagem por espaço.

## 13. Missões

As cartas de missão seguem uma ordem fixa e não são embaralhadas. O manual contém a história, a preparação e as exceções de cada ato; a carta ativa serve apenas como lembrete visual do objetivo, dos números e dos efeitos principais.

Quando a estrela chega à posição **Missão**, resolva o efeito ⭐ da carta de ato revelada. A carta permanece exposta sobre o topo do baralho e ativa até que sua condição de descarte seja cumprida. Ao concluir um ato, descarte sua carta, aplique a preparação do ato seguinte e revele o próximo ato quando a estrela voltar à posição **Missão**.

O símbolo **🛠️** nas cartas de missão indica uma instrução de preparação. Resolva-a apenas uma vez, no momento em que a missão for iniciada e revelada, antes de continuar a rodada. A preparação pode colocar personagens, usuários, chamados, tiles ou marcadores no tabuleiro conforme descrito na carta e detalhado no manual. Ela não é repetida quando a estrela volta à carta.

Ao passar de um ato para o seguinte, mantenha os estados atuais do cenário, das cartas e dos marcadores, salvo quando a preparação ou outra regra do novo ato disser explicitamente para alterá-los.

### Preparação de Yesterday's Jam

Use as cartas F1 a F5 nesta ordem. Separe-as do baralho de Eventos e deixe-as viradas para baixo, com F1 no topo. Escolha os personagens jogáveis normalmente, sem usar o escritório do gerente à direita como escritório de jogador. Jen começa como NPC e, durante todos os atos, usa apenas as regras especiais da missão e suas ativações **⭐**. Use o tabuleiro com o escritório de Denholm e mantenha disponíveis os tiles do computador, do telefone de Jen, da porta, do elevador e as fichas de fogo. O telefone de Jen é apenas um componente narrativo da missão: não faz parte da quantidade de telefones dos personagens jogáveis, não toca na Rotina e não recebe chamadas de Eventos Genéricos.

O objetivo da campanha é sobreviver à chegada de Jen, provar que ela não entende de computadores, esconder o incêndio causado por Moss e apagar os fogos antes que Denholm perceba o estresse de Jen. Se uma regra do ato entrar em conflito com uma regra geral, a regra do ato tem prioridade.

## F1. Nova gerente

*Denholm apresenta Jen como a nova gerente. Ela parece confiante: “Emails, enviar, receber, mouse, click, duplo click...”.*

**Preparação:** revele F1 e coloque Jen no ponto de surgimento, saindo do elevador. Ela é uma NPC durante este ato.

**Ativação ⭐ de Jen:** quando a estrela alcançar F1, mova Jen até 👣2 em direção ao técnico mais próximo. Ao chegar a um tile adjacente a um técnico, encerre o movimento. Se ela já estiver adjacente no início da ativação, ela não se move.

**Descobrir a incompetência:** um técnico adjacente pode gastar ⏱️1 para iniciar uma conversa e fazer um confronto **🧠 vs 🙂** da Jen. O lado com mais sucessos vence. Se o técnico vencer, fica claro que Jen não entende de computadores.

**Descarte:** quando um técnico vencer o confronto **🧠 vs 🙂** da Jen.

## F2. Sinclair ZX81

*Jen está a caminho da cadeira do escritório. Para evitar que ela descubra como o departamento realmente funciona, a equipe decide preparar duas pequenas surpresas: um computador infectado e o telefone dela desconectado.*

**Preparação:** mantenha Jen no tabuleiro. Preserve o estado atual do computador. Deixe o telefone de Jen conectado. Jen começa a avançar em direção à cadeira do escritório à direita.

**Ativação ⭐:** quando a estrela alcançar F2, mova Jen até 👣2 em direção à cadeira do escritório. Jen não ganha ações de personagem: 👣2 é todo o movimento da ativação dela.

**⌛ Enrolar Jen:** um personagem pode gastar ⏱️1 para fazer um confronto **🙂 vs 🙂 de Jen**. Se o personagem vencer, coloque 💬 sobre Jen; em caso de empate ou derrota, nada acontece. Durante o movimento dela, remova 💬 para cancelar 1 👣; cada marcador usado cancela apenas 1 👣.

Se Jen chegar à cadeira antes de as duas sabotagens serem concluídas, aumente 🙂 de Jen em 1.

### Sabotagens:
**Infectar o computador:** um personagem posicionado na cadeira do escritório, em frente ao computador funcional, pode gastar ⏱️1 e fazer 🧠 ✅. Com sucesso, vire o tile para o lado infectado. Em caso de falha, o tile permanece funcional e outra ação pode tentar novamente.

**Desconectar o telefone:** um personagem junto ao telefone de Jen pode gastar ⏱️1. Não há teste; vire o tile para o lado desconectado.

As duas ações podem ser realizadas em qualquer ordem e por personagens diferentes.

**Descarte:** assim que Jen chegar à cadeira.

## F3. Aham, aham, claro...

*A equipe agora precisa provar que Jen é uma fraude. Denholm espera uma demonstração simples; a equipe espera que as sabotagens façam o trabalho por ela.*

**Preparação:** mantenha Jen na cadeira do escritório e coloque um d6 em 3 para marcar a Credibilidade. Jen não se move durante este ato; qualquer técnico pode se aproximar para iniciar um confronto.

**⭐:** sempre que a estrela alcançar esta carta, faça 🎲 1d6 → 5–6: Jen tenta usar o telefone. Se ele estiver desconectado, a incompetência é comprovada. Se estiver conectado, nada acontece. Este é um teste narrativo da missão; o telefone de Jen nunca toca e não é tratado pela Rotina.

**Computador infectado:** enquanto o computador permanecer infectado, Jen rola 1 dado 🙂 a menos nos confrontos diretos. Se o computador estiver funcional, não aplique o modificador.

**Confrontos diretos:** um técnico adjacente a Jen pode gastar ⏱️1 para iniciar um confronto 🧠 vs 🙂 da Jen. Se o técnico vencer, reduza a Credibilidade em 1. Empate ou derrota não alteram a Credibilidade. Quando ela chegar a 0, a incompetência de Jen é comprovada.

**Descarte:** quando a incompetência for comprovada pelo telefone desconectado ou quando a Credibilidade chegar a 0.

## F4. Four, I mean, five, I mean, FIRE!

*Moss colocou fogo no escritório e só percebeu quando as chamas ficaram grandes demais. Agora a equipe precisa esconder o incêndio com monitores quebrados antes que Denholm saia do elevador e entre na sala principal.*

**Preparação:** coloque 1 ficha de fogo baixo na mesa em frente à mesa de Moss. Coloque Denholm dentro do elevador fechado; ele ainda não entra na iniciativa. Coloque 4 tokens de monitor quebrado no escritório de Jen. Jen permanece onde terminou o ato anterior.

**Denholm:** enquanto Denholm estiver no elevador, ele segue a regra geral da seção 12. Quando sair, coloque a carta de Denholm no fim da iniciativa. Durante este ato, Denholm tem 1 ação por ativação e move 👣3 em direção à sala principal.

**Esconder os fogos:** um personagem pode gastar ⏱️1 para pegar 1 token de monitor quebrado. Cada personagem pode carregar no máximo 2 tokens. Um personagem pode gastar ⏱️1 para colocar 1 ou 2 tokens no próprio tile; cada token colocado sobre uma ficha de fogo a esconde. Esconder um fogo não o apaga: ele continua ativo e pode se alastrar.

**Derrota:** se Denholm entrar na sala principal antes de todos os fogos estarem escondidos.

**Descarte:** quando Denholm entrar na sala principal e todos os fogos estiverem escondidos.

## F5. Are you stressed?

*Denholm vê os monitores quebrados cobrindo as chamas. “Screen saver legal, hein! Bem realista.” Então percebe que Jen está na sala e começa a interrogá-la.*

**Preparação:** coloque Jen na cadeira do escritório. Coloque Denholm no tile em frente à mesa de Jen. Deixe a carta de Denholm na iniciativa. Coloque 0 marcadores de espera ⏳ sobre esta carta.

**Jen:** Jen não se move e tem apenas 1 ação em sua ativação. Essa ação só pode remover 1 marcador de 😔 dela.

**Stress:** sempre que ⚠️ aumentar, coloque a mesma quantidade de marcadores de 😔 sobre Jen. Esses marcadores permanecem mesmo se o Stress diminuir.

### Objetivos

1. **Enviar o e-mail:** um personagem junto a um computador funcional pode gastar ⏱️1 e fazer 🙂 ✅. Com sucesso, o e-mail para os bombeiros foi enviado.
2. **Aguardar os bombeiros:** depois que o e-mail for enviado, sempre que a estrela alcançar esta carta e houver menos de 2 marcadores de espera ⏳ sobre ela, coloque 1 marcador. Ao chegar a 2, coloque 1 bombeiro dentro do elevador fechado. Ele aguarda a abertura da porta conforme a seção 12; quando sair do elevador, coloque a carta do Bombeiro no fim da iniciativa.
3. **Apagar os fogos:** o bombeiro deve alcançar cada fogo e apagá-lo conforme as regras da sua carta.

### Are you sure?

Na ativação de Denholm, ele não se move nem realiza outra ação. Verifique se Jen tem 3 ou mais marcadores de 😔. Se tiver, a equipe perde imediatamente. Caso contrário, Denholm repete: “Are you sure?”.

**Vitória:** quando não houver mais fichas de fogo no cenário. Denholm conclui que Jen não está estressada e vai embora.

### Yesterday's Jam

1. **Nova gerente** — Jen chega ao porão e se aproxima do técnico mais próximo. Um técnico adjacente tenta descobrir que ela não entende de computadores.
2. **Sinclair ZX81** — preparar as duas sabotagens antes que Jen chegue à cadeira; se ela chegar primeiro, seu Carisma aumenta.
3. **Aham, aham, claro...** — comprovar a incompetência usando o telefone sabotado, o computador infectado e confrontos diretos.
4. **Four, I mean, five, I mean, FIRE!** — esconder todos os fogos antes que Denholm entre na sala.
5. **Are you stressed?** — enviar o e-mail, aguardar os bombeiros e apagar todos os fogos antes que Jen acumule 3 😔.

O texto completo de cada ato está no arquivo de cartas.

### Missões genéricas

- **Telefone maldito!:** comece com todos os telefones no lado Tocando. Vitória quando todos os chamados iniciais forem concluídos e não houver telefones, usuários ou pendências associados a eles.
- **Firewall:** comece com todos os computadores dos escritórios escolhidos e o servidor infectados. Vitória quando todos esses tiles estiverem funcionais.
- **Esqueci do cliente:** comece com dois usuários no ponto de surgimento do cenário e coloque a carta **Preciso desse relatório para ontem** no topo do baralho de Eventos Genéricos. Vitória quando os dois usuários forem removidos e o relatório for enviado.
- **Fim do expediente:** complete seis rodadas sem o Stress chegar a 8. Se chegar a 8, a missão termina em derrota.

## 14. Pontos para playtest

- **Pressão presencial:** verifique se os modificadores ✋ acumulados e os efeitos ⭐ No cenário criam pressão suficiente sem bloquear o movimento ou tornar um único usuário impossível de resolver.
- **Probabilidades de reação:** as faixas e efeitos ⭐ No cenário impressos em cada carta são valores iniciais. Ajuste-os se os usuários causarem Desânimo ou Stress rápido demais.
- **Elevador:** observe se capacidade de quatro e saída de uma miniatura por rodada criam pressão sem bloquear o tabuleiro por tempo excessivo.
- **Chamados:** compare o valor de resolver, enrolar e fingir que a ligação caiu. Cada opção deve ter uma vantagem e um custo claros.

---



---

# THE IT CROWD — Cartas e peças v0.6

# PARTE II — CARTAS E PEÇAS

**Protótipo de design · versão consolidada 0.6**

Este arquivo contém os textos resumidos das cartas e os rótulos dos tiles. O significado dos ícones e as regras completas estão no **Manual de regras v0.6**. Cada seção representa uma carta física independente, salvo indicação de componente fixo, carta de referência ou tile.

## Legenda de montagem

- ⚡ = resolução imediata ao revelar.
- ⭐ = resolução quando a estrela alcança a carta na iniciativa.
- ⭐ No cenário = subtipo de ⭐; quando a estrela alcançar a carta de um usuário em cena, resolva o efeito se a condição escrita na carta for satisfeita.
- ⏱️ = ação.
- ☎️ = atendimento telefônico.
- ✋ = influência da interação direta, por telefone ou com o usuário adjacente; o valor fica na carta de Usuário.
- 🧠 = Inteligência; 🙂 = Carisma.
- ✅ = sucesso; 🔒 = resultado bloqueado quando sobreposto ao ✅ ou ❌; 🏁 = conclusão; 👣 = movimento; 🖥️ = computador funcional; 👤 = usuário ou surgimento no ponto definido pelo cenário.
- 😐 = paciente; 😔 = Desânimo; ⚠️ = Stress.
- 🦠 = vírus; 🔄 = virar a carta 90°; 🎲 = rolagem.
- 👤 📴 = usuário surge e encerra a ligação; vire o telefone para Tocando.
- ⚡ = resolver agora; ⭐ = efeito na iniciativa; 🛠️ = preparação da missão; 🔥 = fogo; 🎯1, 🎯2 e 🎯3 = etapas numeradas; ⚔️ = confronto; ✪ = efeito contínuo; 🗑️ = descarte; 📌 = objetivo.
- ☕ = Item Consumível; 🧰 = Item Equipamento.

## Formato físico e cores das cartas

As cartas principais usam o formato padrão de cartas de Magic: **63 × 88 mm**, em orientação vertical. A proporção física segue o tamanho de Magic; a composição interna pode usar uma grade baseada na proporção áurea para organizar imagem, título e área de regras.

As cartas de personagem jogável têm o dobro da largura de uma carta principal: **126 × 88 mm**, em orientação horizontal. Elas equivalem a duas cartas principais lado a lado.

As cartas de Item usam o formato mini de aproximadamente metade da área de uma carta principal: **44 × 62 mm**, mantendo uma proporção semelhante à carta principal para preservar a leitura.

Os tiles reversíveis são componentes quadrados do tamanho da malha do cenário. No tabuleiro atual, a arte tem aproximadamente 23 colunas × 13 linhas. Considerando impressão do tabuleiro em A4 paisagem, ocupando 297 mm de largura, cada tile mede aproximadamente **12,9 × 12,9 mm**. O tile deve sempre ser escalado junto com o tabuleiro; essa é uma referência do cenário atual, não uma medida universal para mapas futuros.

Os peões são discos de aproximadamente **10 mm de diâmetro**, para caberem dentro de um tile do cenário atual. Usuários têm borda azul; cada personagem tem uma cor própria. O centro do disco aceita uma imagem PNG opcional, definida no hash do template.

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

1. **☎️ Telefones:** faça 🎲 1d6 por telefone Tocando: 1 remove; 2–4 mantém; 5 gera +⚠️; 6 gera +⚠️ e faz surgir 1 Chamado + 1 Usuário associados.

2. **🛗 Elevador:** com 4+, 1 miniatura sai; com 1–3, nada acontece.

3. **🦠 Servidor:** se estiver infectado e sair 4+, +⚠️.

4. **☕🧰 Estações:** deixe as duas disponíveis.

5. **🔥 Fogo:** para cada fogo, com 5–6: baixo vira alto; alto cria 1 fogo baixo adjacente, se possível.

## A2. REFERÊNCIA DO JOGADOR — 🚶 AÇÕES

**Uma cópia para cada jogador. Carta neutra; não entra na fila nem no descarte.**

Esta carta resume as ações gerais disponíveis durante a ativação. O manual, o Chamado, o Usuário, o tile ou a missão podem acrescentar custos e efeitos específicos.

- **Mover:** 👣 até o valor do personagem por ação.
- **Animar:** 🎲 1d6 → 5–6: remove 😔. Pode animar outro personagem adjacente.
- **Interagir:** siga o custo e o teste do espaço, tile ou carta.
- **Atender:** ☎️ Tocando → Em atendimento; compre ☎️ + 👤.
- **Resolver:** siga o Chamado.
- **Assumir:** ☎️ + 👤 da mão de outro; junto a um telefone livre.

---

# B. Cartas de personagem

## B1. Roy Trenneman

**🧠 3 · 🙂 2 · 👣 2**

**Enrolador profissional:** +1 dado 🙂 ao enrolar um chamado por telefone.

## B2. Maurice Moss

**🧠 4 · 🙂 1 · 👣 3**

**Gênio antissocial:** 🙂1. Remove 😔 com 🎲 1d6 → 4–6. Na Defesa individual, usa 🧠 + 🙂 para tentar obter ✅✅✅.

## B3. Jen Barber

**🧠 1 · 🙂 4 · 👣 2**

**Sabe lidar com gente:** ao concluir com sucesso um chamado social, reduz ⚠️ em 1 adicional ao efeito 🏁 da carta.

As cartas de iniciativa de Roy, Moss e Jen entram na fila no setup, na ordem escolhida pelos jogadores. Cada ativação usa as 3 ações padrão do personagem, antes das penalidades de 😔. As regras de uma missão podem substituir temporariamente esse comportamento.

## Fichas horizontais PC1 e PC2 — personagens jogáveis

As fichas `PC1` (Roy) e `PC2` (Moss) são referências pessoais dos jogadores e não entram na fila de iniciativa. Cada ficha mostra o retrato, os três atributos, o total padrão de ações, as áreas de Inventário e Equipado e as habilidades do personagem. A carta de iniciativa correspondente continua sendo usada para determinar quando o personagem ativa.

**PC1 — Roy Trenneman:** use a ficha para consultar **🧠 3 · 🙂 2 · 👣 2**, Inventário de até 3 Itens, a área **Equipado** abaixo da ficha, 3 ações por ativação e **Enrolador profissional**: +1 dado 🙂 ao enrolar um chamado por telefone.

**PC2 — Maurice Moss:** use a ficha para consultar **🧠 4 · 🙂 1 · 👣 3**, Inventário de até 3 Itens, a área **Equipado** abaixo da ficha, 3 ações por ativação e **Gênio antissocial**: 🙂1; remova 😔 com 🎲 1d6 → 4–6. Na Defesa individual de demissão, usa 🧠 + 🙂 para tentar obter ✅✅✅.

As fichas horizontais são impressas em **126 × 88 mm**, equivalentes a duas cartas principais lado a lado. A borda é azul, como a das cartas de Usuário e das cartas de iniciativa dos personagens jogáveis.

## B4. Denholm (NPC)

**🧠 1 · 🙂 2 · 👣 3**

**Carta de iniciativa:** quando Denholm sair do elevador no Ato 4, coloque esta carta no fim da iniciativa.

**Ato 4:** 1 ação por ativação; mova 👣3 em direção à sala principal.

**Ato 5:** permaneça diante da mesa de Jen. Não se mova; resolva apenas a verificação **Are you sure?** descrita na carta de missão.

## B5. Bombeiro (NPC)

**Carta de iniciativa:** quando o bombeiro sair do elevador no Ato 5, coloque esta carta no fim da iniciativa.

**⭐:** o bombeiro tem 2 ações por ativação. Cada ação pode mover 👣2 ou tentar apagar um fogo quando estiver adjacente a ele. Faça 🎲 1d6 → 5–6: obtenha ✅. Fogo alto vira Fogo baixo; Fogo baixo é removido.

**🗑️:** quando não houver fichas de fogo no cenário.

---

# C. Baralho de Chamados

Cada carta descreve somente o problema técnico, as ações para resolvê-lo e as opções disponíveis durante o atendimento. **Não contém atributos, reações, movimento ou efeitos presenciais do usuário**: essas informações ficam exclusivamente no Baralho de Usuários (seção D).

Quando um chamado é comprado, compre também uma carta de Usuário. Mantenha as duas cartas associadas, com o Chamado por cima. Consulte o Manual para o procedimento completo.

## C1. Já tentou desligar e ligar de novo?

**RESOLVER:** 🧠 · ✅ | 🏁 −⚠️.

**⌛:** 🙂 · ✅.

---

## C2. Não abre!

**RESOLVER:** 🧠 ✅ **e** 🙂 ✅ na mesma tentativa. 🏁 −⚠️.

**⌛:** 🙂 ✅.

---

## C3. Senha não funciona

**RESOLVER:** 🖥️ 🧠 ✅. 🏁 sem alteração de ⚠️.

**⌛:** 🙂 ✅.

---

## C4. Derrubei a internet

**RESOLVER — 1. Diagnosticar:** 🧠 ✅✅. Sucesso: 🔄 vire esta carta a 90°.
**RESOLVER — 2. Restaurar:** 🖥️ 🧠 ✅✅✅. 🏁 −⚠️.

**⌛:** 🙂 ✅.

---

## C5. 404: relatório não encontrado

**RESOLVER — 1. Preparar:** 🖥️ 🧠 ✅. Sucesso: 🔄 vire esta carta a 90°.
**RESOLVER — 2. Enviar:** 🖥️ 🙂 ✅. 🏁 −⚠️.

**⌛:** 🙂 ✅. Falha: +⚠️.

---

## C6. What the flip!

**RESOLVER:** 🖥️ 🧠 ✅✅. 🏁 −⚠️.

**⌛:** 🙂 ✅.

---

# D. Baralho de Usuários

Cada carta define uma pessoa específica. Não existem categorias fixas de usuário: cada carta pode combinar livremente reação na fila, movimento, influência ✋, efeitos ⭐ No cenário, efeitos presenciais 👥, vantagens e consequências. A carta de Usuário permanece sempre associada à carta de Chamado correspondente.

**Regra comum:** quando a estrela alcançar a combinação ☎️ + 👤, consulte a reação ⭐ Na fila se o usuário ainda não estiver em cena. Se o resultado indicar 👤 📴, coloque a miniatura numerada no ponto de surgimento definido pelo cenário e vire o telefone para Tocando. Quando o usuário já estiver em cena, use o movimento, a influência ✋ e o efeito ⭐ No cenário indicados abaixo. Se houver uma linha 👥, aplique-a somente quando um técnico adjacente realizar a interação indicada pela carta.

## D1. O paciente

*“Só queria saber se alguém está cuidando disso.”*

**✋:** −1 🧠.

**⭐ ⏸️:** 🎲 1–5: nada; 6: 👤 📴.

**⭐ ⊞:** 👣3 · 🎲 1–6: permanece paciente.

Um técnico adjacente pode gastar ⏱️1 para resolver presencialmente o chamado, usando os testes impressos na carta de Chamado.

## D2. O impaciente

*“Estou esperando há tempo demais.”*

**✋:** −1 🙂.

**⭐ ⏸️:** 🎲 1–3: nada; 4–5: +⚠️; 6: +⚠️ e 👤 📴.

**⭐ ⊞:** 👣3 · 🎲 1–4: nada; 5: +⚠️; 6: 😔.

## D3. O irritado

*“Eu já expliquei isso três vezes!”*

**✋:** −1 🧠.

**⭐ ⏸️:** 🎲 1–2: nada; 3–4: +⚠️; 5–6: +⚠️ e 👤 📴.

**⭐ ⊞:** 👣3 · 🎲 1–3: nada; 4: +⚠️; 5–6: 😔.

## D4. O pilhado

*“Quero falar com o responsável. Agora!”*

**✋:** −1 🧠.

**⭐ ⏸️:** 🎲 1: nada; 2: +⚠️; 3–5: 👤 📴; 6: +⚠️ e 👤 📴.

**⭐ ⊞:** 👣4 · 🎲 1–2: nada; 3–6: 😔.

## D5. O confuso

*“BING BONG NOISE.”*

**✋:** −1 🧠.

**⭐ ⏸️:** 🎲 1–4: nada; 5–6: 👤 📴.

**⭐ ⊞:** 👣3 · 🎲 1–5: nada; 6: 😔.

**👥:** ao resolver o chamado presencialmente, faça 🎲 1–2: nada; 3–6: o técnico recebe 😔 antes de aplicar a conclusão do chamado.

## D6. Senhora carente

*“Meu sobrinho, quando era pequeno, mexia com essas coisas de computador. Isso é tudo muito...”*

**⭐ ⏸️:** 🎲 1–3: nada; 4–6: 👤 📴.

**⭐ ⊞:** 👣2 · 🎲 1–4: nada; 5–6: 😔.

## D7. The Boss
“Não quero incomodar ninguém... mas já faz três dias.”

**✋:** −1 🙂.

**⭐ ⏸️:** 🎲 1–2: nada; 3–4: +⚠️; 5–6: +⚠️ e 👤 📴.

**⭐ ⊞:** 👣3 · 🎲 1–3: nada; 4–5: +⚠️; 6: 😔.

**👥:** se um técnico adjacente falhar ao resolver o chamado, ele recebe 😔. O usuário continua aguardando.

## D8. O amigo do favor
“E aí, cara, quanto tempo?!”

**✋:** +1 🙂 e +1 🧠.

**⭐ ⏸️:** 🎲 1–3: nada; 4–6: 👤 📴.

**⭐ ⊞:** 👣3.

**👥:** ⏱️ 🙂 ✅✅ · 1× → 🏁 ☎️ + 👤. O D8 resolve qualquer chamado em cena, inclusive o próprio.

- **Sucesso:** o D8 resolve imediatamente qualquer combinação ☎️ + 👤 em cena, inclusive a própria. Descarte a combinação escolhida e aplique sua conclusão 🏁. Depois, descarte a combinação do D8 sem aplicar a conclusão dela; o usuário vai embora.
- **Falha:** nada acontece. O D8 permanece em cena e pode ser abordado novamente em outra ativação.

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

**Resolver durante o turno de qualquer personagem:** em um computador funcional, ⏱️1 · 🧠 ✅✅ para preparar o relatório. Sucesso: 🔄 vire a carta a 90°. Depois, ⏱️1 · 🙂 ✅ no mesmo computador funcional para enviar o relatório. Sucesso: **🗑️**. Os testes podem ser feitos por personagens diferentes.

## E5. Moss explica a solução

**⚡** Escolha: −⚠️ ou remova 😔 de um personagem. **🗑️**

*O problema era simples. A explicação, não.*

## E6. A sinergia da diretoria

*Denholm anunciou uma nova iniciativa de sinergia. Ninguém sabe o que significa, mas todos precisam parecer ocupados.*

**⚡** +⚠️ e coloque esta carta no fim da iniciativa.

**⭐** Cada personagem jogável faz 🙂 ✅. Quem falhar recebe 😔.

**🗑️** Depois que todos os personagens jogáveis resolverem o teste.

## E7. Preciso desse relatório para ontem

**⚡** Coloque esta carta no fim da iniciativa.

**Resolver durante o turno de qualquer personagem:** em um computador funcional, ⏱️1 · 🧠 ✅ para preparar o relatório. Sucesso: 🔄 vire a carta a 90°. Depois, ⏱️1 · 🙂 ✅ no mesmo computador funcional para enviar o relatório. Sucesso: **🗑️**. Os testes podem ser feitos por personagens diferentes.

## E8. Dois telefones tocando

**⚡** Coloque ☎️ em 2 telefones livres. Se houver menos de 2 telefones livres, coloque ☎️ em todos os telefones livres. Se não houver nenhum telefone livre, nada acontece. **🗑️**

---

# F. Cartas de missão — resumo impresso

Esta seção reproduz somente o texto curto usado nas cartas. Para contexto, preparação, transições e exceções, consulte a seção **13. Missões** da Parte I.

## F1. Nova gerente

**📌** Descobrir que Jen não entende de computadores.

**⭐** Jen: 👣2 em direção ao técnico mais próximo.

**⚔️** Técnico adjacente: 🧠 vs 🙂. Vitória: conclua; empate/derrota: tente novamente.

## F2. Sinclair ZX81

**📌** Concluir as duas sabotagens antes que Jen chegue à cadeira.

**⭐** Jen: 👣2. Se faltar sabotagem ao chegar: +1 🙂.

**⌛ Enrolar Jen:** ⏱️1 · 🙂 vs 🙂 de Jen; vitória: +💬. Empate/derrota: nada. Cada 💬 cancela 1 👣.

**🎯1** Computador: 🧠 ✅. Vire o tile.

**🎯2** Telefone de Jen: sem teste. Vire o tile.

**🗑️** Quando Jen chegar à cadeira.

## F3. Aham, aham, claro...

**📌** Provar a incompetência de Jen. Credibilidade: 3; preserve o estado atual dos tiles.

**⭐** 🎲 1d6 → 5–6: Jen tenta usar o telefone. Se desconectado: conclua.

**⚔️** PC infectado: −1 dado 🙂 de Jen. 🧠 vs 🙂; vitória: −1 Credibilidade.

**🗑️** Quando a incompetência for comprovada ou a Credibilidade chegar a 0.

## F4. Four, I mean, five, I mean, FIRE!

**📌** Esconder todos os fogos antes de Denholm entrar na sala.

**🛠️** Fogo baixo na mesa; Denholm no elevador; 4 monitores no escritório de Jen.

**DENHOLM** Ao sair: 1 ação · 👣3 em direção à sala.

**MONITORES** ⏱️1 pega 1; ⏱️1 solta 1–2. Limite: 2 por personagem.

**🗑️** Quando Denholm entrar e todos os fogos estiverem escondidos.

## F5. Are you stressed?

**📌** Enviar o e-mail; aguardar o bombeiro; apagar todos os fogos.

**🛠️** Jen na cadeira; Denholm diante da mesa.

**E-MAIL** 🖥️: ⏱️1 · 🙂 ✅.

**⭐** Após o e-mail: +1 ⏳; com 2, bombeiro no elevador.

**ARE YOU SURE?** Na ativação de Denholm: Jen com 3+ 😔 = derrota.

**🗑️** Quando não houver fogo no cenário.

---

# Tokens e marcadores

Tokens são componentes recortáveis independentes. Eles não usam moldura nem borda decorativa: a arte ocupa toda a área útil e recebe apenas **1 mm de sangria** além da linha de corte. Uma linha de corte tracejada pode aparecer na folha de montagem para ajudar o recorte, mas não faz parte da arte do token. Tokens reversíveis aparecem lado a lado na mesma folha A4 vertical para serem recortados e colados.

As quantidades abaixo são a configuração inicial do protótipo e podem ser ajustadas durante os testes:

| Componente | Quantidade | Faces / uso |
|---|---:|---|
| 🔥 Fogo | 8 | Reversível: **🔥 Fogo baixo / 🔥🔥 Fogo alto**. |
| 😔 Desânimo | 8 | Não reversível; coloque sobre o personagem ou Jen. |
| 💬 Distração | 8 | Não reversível; cada marcador reduz em 1 tile o próximo movimento de Jen. |
| ⚠️ Trilha de Stress | 1 | Faixa horizontal de 0 a 14, com marcas destacadas em 8, 11, 13 e 14. |
| ➤ Seta de Stress | 1 | Posicione ao lado da trilha para apontar o valor atual. |
| 📋 Reunião | 4 | Um marcador para cada limiar: 8, 11, 13 e 14. Cada um é descartado após a reunião correspondente. |
| ⏳ Espera | 2 | Marcadores usados sobre F5 enquanto os bombeiros são aguardados. Não são fogos no cenário. |
| 🖥️💥 Monitor quebrado | 4 | Tokens de missão usados para esconder os fogos no Ato 4. |
| ☕ Estação CAF | 1 | Marcador de estado **Disponível / Usada** da Cafeteira. |
| 🧰 Estação SUP | 1 | Marcador de estado **Disponível / Usada** do Armário de suprimentos. |
| ⭐ Iniciativa | 1 | Estrela que percorre a fila de iniciativa. |

Peões de personagens, peões de usuários e dados não entram nessa contagem de tokens. Os tiles de telefone, computadores, servidor, fio e elevador são componentes quadrados separados.

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

## G4. Porta do elevador — tile frontal reversível

**Lado fechado:** `ELEVADOR — PORTA FECHADA · MAX. 4 PESSOAS`

**Lado aberto:** `ELEVADOR — PORTA ABERTA · SAI 1 MINIATURA`

A cabine ocupa 2 × 2 tiles.

## G5. Armário de suprimentos

**Ícone do tile:** `🧰`

O tile é arrastável no playtest e representa a estação de Equipamentos.

## G6. Estação da Cozinha

**Ícone do tile:** `☕` — a arte pode representar uma cafeteira ou um micro-ondas.

O tabuleiro define a posição exata de cada espaço dentro da Cozinha e da Sala de TI. Cada estação usa um marcador reversível **Disponível / Usada**; o tile mostra apenas o ícone permanente da estação.

## G7. Fio do telefone de Jen

Componente narrativo exclusivo de *Yesterday's Jam*. Não faz parte dos telefones dos personagens jogáveis e nunca participa da Rotina nem recebe chamadas.

**Lado plugado:** `fio esticado até a parede.`

**Lado desplugado:** `fio solto em formato de U.`

---

# H. Estações e cartas de Item

## H1. Estações de produção

**Cozinha — Cafeteira ou micro-ondas**

`☕ PREPARA ATÉ 3 ITENS CONSUMÍVEIS · ⏱️1 · 1 vez por rodada`

**Sala de TI — Armário de suprimentos**

`🧰 PRODUZ 1 ITEM EQUIPAMENTO · ⏱️1 · 1 vez por rodada`

Use um marcador de estação para indicar se a estação está Disponível ou Usada. A Rotina reinicia as duas estações no início da rodada.

## H2. Xícara de café

**Borda:** marrom escura · **Tipo:** ☕ Consumível · **Quantidade:** 3

`Ação livre: remova 😔 ou receba +1🧠 ou +1🙂. Descarte.`

## H3. Slightly larger glasses

**Borda:** marrom clara · **Tipo:** 🧰 Equipamento · **Quantidade:** 1

`EQUIPADO | +1🧠`

## H4. Óculos glamuroso

**Borda:** marrom clara · **Tipo:** 🧰 Equipamento · **Quantidade:** 1

`EQUIPADO | +1🙂`

Itens adicionais podem ser criados mantendo uma destas duas funções: Consumíveis removem uma consequência imediata; Equipamentos alteram uma ação ou rolagem específica.

---

# I. Cartas de missão genérica

## I1. Telefone maldito!

**Preparação:** coloque ☎️ no lado Tocando em todos os telefones.

**Vitória:** todos os chamados iniciais foram concluídos; não há ícones de telefone, usuários ou pendências vinculados a eles.

## I2. Firewall

**Preparação:** vire todos os computadores dos escritórios escolhidos e o servidor para o lado infectado.

**Vitória:** todos os computadores dos escritórios escolhidos e o servidor estão funcionais.

## I3. Esqueci do cliente

**Preparação:** coloque dois usuários no ponto de surgimento definido pelo cenário e separe a carta **E7 — Preciso desse relatório para ontem** no topo do baralho de Eventos Genéricos.

**Vitória:** os dois usuários foram removidos e a carta **E7 — Preciso desse relatório para ontem** foi concluída.

## I4. Fim do expediente

**Preparação:** nenhuma. Conte seis rodadas completas.

**Vitória:** completar seis rodadas sem o Stress chegar a 8. Se chegar a 8, a missão termina em derrota.
