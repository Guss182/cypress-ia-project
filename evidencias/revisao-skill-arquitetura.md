# Revisão com Skill Arquitetura

## Objetivo

Registrar a análise dos testes Cypress de acordo com a skill de arquitetura do projeto.

## Arquivos avaliados

- cypress/e2e/login.cy.js
- cypress/e2e/cadastro.cy.js
- cypress/e2e/adicionar-livro.cy.js
- cypress.config.js
- .env.example
- .github/skills/arquitetura/SKILL.md

## Pontos corretos

- Testes localizados em cypress/e2e.
- Uso de .env.example.
- Uso de Cypress.env() para dados sensíveis.
- Ausência de cy.wait() com tempo fixo.
- Fluxos principais cobertos: login, cadastro e cesta.
- Teste de cesta com limpeza de localStorage.
- Projeto sem alterações pendentes no Git antes da revisão.

## Riscos encontrados

- Alguns seletores ainda são frágeis.
- login.cy.js ainda possui describe genérico.
- login.cy.js ainda usa force true para lidar com modal.
- Cadastro cria usuário real com Date.now().
- Teste de cesta valida bookCart no localStorage, que é detalhe de implementação.
- Teste de cesta usa posição dos botões com first() e eq(1).

## Melhorias recomendadas

- Adicionar data-testid na aplicação, quando possível.
- Renomear describe do login.cy.js.
- Melhorar tratamento do modal sem force true.
- Criar comando customizado de login com cy.session().
- Melhorar asserções visuais da cesta.
- Avaliar uso de cy.intercept() em cenários futuros.

## Priorização

### Alta

- Revisar seletores críticos.
- Corrigir tratamento do modal.
- Garantir falha clara quando variáveis obrigatórias não existirem.

### Média

- Criar comando customizado de login.
- Usar cy.session().
- Melhorar estratégia para dados de cadastro.

### Baixa

- Padronizar nomes dos describes.
- Melhorar organização dos specs.