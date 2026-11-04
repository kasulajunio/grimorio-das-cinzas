# Doom City Infinite — protótipo 2D original

Shooter top-down da Fris Black Estúdio. Cidade procedural por chunks, Phaser 3, duas armas, inimigos com máquina de estados e controles para teclado/mouse ou dois direcionais de toque. Não é um produto oficial de Doom nem utiliza seus assets.

Jogar: https://kasulajunio.github.io/grimorio-das-cinzas/doom-city/

## Celular

- Direcional esquerdo move.
- Direcional direito mira e atira, com assistência leve dentro de um cone e sem atravessar paredes.
- Botões separados para esquiva, recarga e troca de arma.
- Qualidade visual AUTO, LEVE ou ALTO no topo. AUTO reduz chuva e frequência do minimapa quando necessário.
- Som precisa ser ativado por interação do usuário. Ocultar a página pausa a partida.

## Organização

`src/core`, `player`, `world`, `weapons`, `enemies`, `vfx`, `ui`, `audio` e `scenes`. A cena principal existente foi preservada; `MobileScene` e `PolishedScene` acrescentam passo fixo, orçamento visual e apresentação. Não há alocação ilimitada de projéteis ou efeitos. Os detalhes urbanos estáticos são desenhados uma vez por textura de chunk.

Phaser 3.90.0 e pixelfx usam versões fixadas. O pixelfx é opcional: efeitos originais permanecem disponíveis quando a CDN falha. A primeira carga exige rede para a engine.

Resultados e limitações: [QA.md](QA.md). Histórico: [CHANGELOG.md](CHANGELOG.md). Licenças: [THIRD_PARTY_NOTICES.txt](THIRD_PARTY_NOTICES.txt).

O protótipo 3D antigo na raiz do repositório não foi substituído. Não há promessa de FPS fixo, testes físicos de celular ou ausência absoluta de defeitos.
