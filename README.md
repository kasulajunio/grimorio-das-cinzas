# Grimório das Cinzas — Mundo Vivo

Protótipo original de FPS de magia com terreno voxel procedural contínuo. Inspiração em exploração por blocos, sem assets, mapas ou personagens de Minecraft ou Doom.

Jogar: https://kasulajunio.github.io/grimorio-das-cinzas/

## Recursos implementados
- Mundo determinado por semente, sem borda fixa de mapa; regiões próximas são carregadas e regiões distantes são descarregadas.
- Colinas, floresta, dunas, árvores decorativas e ruínas.
- Brasa, geada com lentidão, raio com dano encadeado. Criaturas perseguem e atacam.
- Quebrar e colocar blocos. Mana regenerável, salto, colisão com terreno e retorno ao início ao morrer.
- Salvamento local automático a cada 20 segundos, ao pausar e manualmente. A semente anterior aparece ao recarregar.
- Controles de teclado/mouse e toque. Sem login, chaves de IA, analytics ou servidor próprio.

## Controles
Desktop: WASD, mouse, espaço, Shift para correr, 1–4 para equipar. Clique esquerdo conjura ou quebra com BLOCOS selecionado; direito coloca. Escape pausa.
Celular: direcional esquerdo, arraste à direita para olhar, botões de magia, pulo e colocar. Selecione BLOCOS para quebrar.

## Limites honestos
Mundo contínuo procedural, não literalmente infinito: números, armazenamento e memória do aparelho são finitos. Máximo de 2.000 blocos editados neste protótipo; construção entre alturas 0 e 46. Árvores e ruínas são decorativas, sem colisão ou edição. Não há crafting, inventário de recursos, cavernas, multiplayer ou campanha concluída. O desempenho depende do aparelho. A validação de toque no navegador não substitui teste físico em Android.

Internet é necessária para buscar os módulos externos. Salvamentos ficam somente no navegador e podem ser apagados pelo próprio usuário/navegador. Abrir a mesma semente retoma o save; mudar a semente inicia outro mundo e o salvamento substitui o anterior. Não usar este save como backup permanente.

## Tecnologia e créditos
Three.js 0.160.0 (MIT) via jsDelivr. Arte voxel e partículas de combate são procedurais originais. Integração opcional com Mana burst de patch-gg/pixelfx, commit a84159688af3ca37a4be05a0d422b94451b2e24e (MIT); há fallback original se o módulo não carregar. A explosão arcana atribui adaptação do energy charge de Sprite Fusion, Copyright 2026 Hugo Duprez. Nenhum pacote pago foi incluído. Licenças completas em THIRD_PARTY_NOTICES.txt.

## Verificação
Em um navegador com WebGL, abrir o jogo, clicar EXPLORAR e executar Grimorio.selfTest() no console permite verificar geração determinística, coordenadas distantes/negativas, chão, céu, geometria e renderer. Grimorio.snapshot() expõe diagnóstico local, sem transmissão de dados. Testes funcionais e limitações serão documentados em TESTES.md.
