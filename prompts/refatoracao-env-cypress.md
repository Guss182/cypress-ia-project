# Refatoração: Remover URLs e Credenciais Hardcoded

## Objetivo

Substituir URLs e credenciais fixas em testes Cypress por variáveis de ambiente usando `Cypress.env()`.

## Contexto

- Cypress config já carrega `.env` com `require('dotenv').config()`.
- `baseUrl` fica em `e2e.baseUrl`.
- Caminhos devem usar `cy.visit('/caminho.html')`.
- Variáveis disponíveis em `env`:
  - `apiUrl`
  - `adminEmail`
  - `adminPassword`
  - `userEmail`
  - `userPassword`
- `.env` fica no `.gitignore`.
- `.env.example` serve como modelo sem valores reais.

## Prompt reutilizável

```text
Refatore apenas este arquivo [NOME].cy.js.

Objetivo:
Remover URL e credenciais hardcoded.

Faça somente:
1. Trocar cy.visit('URL completa') por cy.visit('caminho relativo').
2. Trocar credenciais literais por Cypress.env('VARIÁVEL').

Restrições:
- Não alterar seletores.
- Não alterar asserções.
- Não criar comandos customizados.
- Não editar outro arquivo.
- Não criar teste novo.
```

## Checklist de revisão

- [ ] URLs foram convertidas para caminhos relativos?
- [ ] Credenciais foram substituídas por `Cypress.env('...')`?
- [ ] O teste ainda segue a mesma lógica?
- [ ] Nenhum seletor foi alterado?
- [ ] Nenhuma asserção foi alterada?
- [ ] `.env.example` continua sem valores reais?
- [ ] `.env` está no `.gitignore`?
- [ ] O teste passa localmente antes de comitar?

## Exemplo

**Antes:**

```javascript
cy.visit('http://localhost:3000/login')
cy.get('input[type="email"]').type('admin@example.com')
cy.get('input[type="password"]').type('senha123')
```

**Depois:**

```javascript
cy.visit('/login')
cy.get('input[type="email"]').type(Cypress.env('adminEmail'))
cy.get('input[type="password"]').type(Cypress.env('adminPassword'))
```

## Comando de validação

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```