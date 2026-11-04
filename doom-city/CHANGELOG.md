# Cidade 1.1 — revisão móvel

- Resolução interna limitada a 1024 × 920, proporcional à tela, sem reduzir o tamanho CSS.
- Simulação fixa em 60 Hz, com recuperação limitada a seis passos para evitar espiral de atraso.
- Dois direcionais independentes com zona morta, tratamento de cancelamento, captura perdida e perda de foco.
- Assistência de mira leve no celular, com limite angular, alcance e verificação de obstáculos.
- HUD superior, botões separados, áreas seguras e layouts de retrato/paisagem.
- Chuva e minimapa atualizados com orçamento; qualidade AUTO, LEVE ou ALTO.
- Detalhes de telhados, painéis, vegetação e faixas de pedestres desenhados uma única vez por chunk.
- Lanterna direcional, luz ambiente, confirmação de acerto e anéis de impacto reutilizáveis.
- Atualizações de DOM apenas quando valores mudam; pausa ao ocultar a página.

Testes são feitos no navegador remoto. Não equivalem a teste em aparelho físico nem garantem ausência total de bugs. O alvo de 60 Hz é o passo da simulação, não promessa de 60 FPS.
