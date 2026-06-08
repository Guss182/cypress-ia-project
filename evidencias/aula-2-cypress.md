# Evidências — Aula 2 — Cypress

## Objetivo

Configurar e melhorar o projeto Cypress do Hub de Leitura, removendo dados hardcoded e criando um novo fluxo automatizado para adicionar livros à cesta.

## Arquivos alterados

- .env.example
- .gitignore
- cypress.config.js
- cypress/e2e/login.cy.js
- cypress/e2e/cadastro.cy.js
- cypress/e2e/adicionar-livro.cy.js
- prompts/refatoracao-env-cypress.md

## Testes executados

- npx cypress run --spec "cypress/e2e/login.cy.js"
- npx cypress run --spec "cypress/e2e/cadastro.cy.js"
- npx cypress run --spec "cypress/e2e/adicionar-livro.cy.js"

## Resultado

- login.cy.js: passou.
- cadastro.cy.js: passou.
- adicionar-livro.cy.js: passou com 3 cenários.

## Cenários do teste de cesta

- CT-CESTA-001: usuário logado adiciona 1 livro à cesta.
- CT-CESTA-002: usuário logado adiciona 2 livros à cesta.
- CT-CESTA-003: usuário sem login adiciona 1 livro à cesta local.

## Observações

Durante a execução, foi identificado que a aplicação permite adicionar livros à cesta mesmo sem login.

O login parece ser necessário para etapas posteriores da reserva.

## Boas práticas aplicadas

- Remoção de URLs hardcoded.
- Remoção de credenciais hardcoded.
- Uso de Cypress.env().
- Uso de .env.example sem valores reais.
- Validação do bookCart no localStorage.
- Simplificação do teste de cesta.
- Sem uso de cy.wait() com tempo fixo.
- Sem uso de force true.

## Próximos ajustes

- Melhorar seletores da aplicação com data-testid.
- Criar screenshots automáticos como evidência.
- Atualizar o README com instruções de execução.
- Organizar documentação final para portfólio.