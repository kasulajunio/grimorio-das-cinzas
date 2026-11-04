# Validação da cidade 1.1

Revisão de código testada: `001087e7f0c76b341e96ce633a26b37ab3983c39`.
Ambiente: navegador remoto Chromium, não aparelho Android/iOS físico.

## Regressões

10/10 verificações aprovadas em `tests/mobile-regression.js`:

1. Movimento e atrito.
2. Pistola, acerto, eliminação e pontuação.
3. Troca para shotgun e conclusão da recarga.
4. Pausa sem avanço da simulação.
5. Dois direcionais simultâneos e cancelamento independente.
6. Colisão com prédio.
7. Esquiva e recuperação.
8. Morte e reinício: vida, estado, posição e opacidade.
9. Limite e retorno dos efeitos ao pool após 200 tentativas.
10. Dados de chunks limitados a até 81 durante 200 transições.

Foi encontrado e corrigido estado residual após a morte: o reinício agora restaura explicitamente estado idle, posição dos sprites, rotação, escala e opacidade.

## Layout responsivo

Testes em iframe com dimensões de viewport CSS reais, sem simular hardware de celular:

- 390 × 844.
- 360 × 740.
- 320 × 568.
- 844 × 390, paisagem.

Nos quatro tamanhos, os retângulos dos direcionais, armas, esquiva, recarga e HUD ficaram dentro da tela e sem sobreposição entre si. O artigo do menu coube na altura.

## Partida com eventos de toque

Em viewport 390 × 844, foram disparados eventos PointerEvent touch em dois direcionais durante a execução normal do jogo. O jogador percorreu aproximadamente 347 unidades enquanto mirava e atirava. Soltar o direcional esquerdo manteve os disparos do direito. Soltar o direito parou os disparos. Houve 24 tiros, 2 acertos, 1 eliminação e 100 pontos, sem erros JavaScript capturados. Os eventos são sintéticos, não dedos em uma tela física.

## Desempenho e limites

A renderização foi limitada a 1024 × 920 proporcionalmente; o desktop de teste usou 1024 × 576. A amostra de partida no viewport móvel registrou 18 FPS, e outras amostras remotas variaram. Isso não é benchmark de telefone e não garante 60 FPS. O alvo de 60 Hz diz respeito ao passo da simulação.

Sem erros capturados nos cenários exercitados não significa ausência de todos os bugs. Faltam teste em Android e iOS físicos, consumo de bateria, comportamento térmico, interrupções do sistema e sessões longas em hardware real.

## Reexecutar

Com a cidade aberta, importar `tests/mobile-regression.js` como módulo e chamar `runMobileRegression()`. O teste reinicia e pausa a partida. A suíte usa o estado de jogo real e deve ser executada em uma sessão de teste.
