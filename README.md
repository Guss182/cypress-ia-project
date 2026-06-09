# cypress-ia-project

Projeto de estudos práticos em **IA aplicada a QA**, com foco em automação de testes E2E utilizando **Cypress**, apoio de IA generativa, GitHub Copilot e documentação de contexto para testes.

Este repositório utiliza arquivos-base disponibilizados em aula pelo professor **Fábio Araújo** como ponto de partida. A proposta é manter o projeto como material de acompanhamento do curso e, ao longo das aulas, evoluir com minhas próprias anotações, testes, ajustes e melhorias.

---

## 📚 Origem e objetivo do repositório

Este projeto foi iniciado a partir de materiais disponibilizados em aula no curso de **IA aplicada a QA**.

O objetivo deste repositório é:

- Acompanhar as aulas práticas do curso;
- Executar e entender testes automatizados com Cypress;
- Praticar o uso de IA generativa como apoio ao trabalho de QA;
- Trabalhar com prompts, documentação de contexto e automação de testes;
- Registrar minha evolução durante os estudos;
- Futuramente adaptar o projeto com melhorias próprias e boas práticas voltadas ao mercado de trabalho.

> Este repositório não tem a intenção de ocultar a origem do material-base. Ele é um ambiente de estudo pessoal, mantido para prática, organização e evolução profissional em QA.

---

## 🖥️ Aplicação sob teste

**Hub de Leitura** — sistema fictício de treinamento para QA, desenvolvido por [Fábio Araújo](https://github.com/fabioaraujoqa).

- Repositório da aplicação: https://github.com/fabioaraujoqa/hub-de-leitura
- URL local: `http://localhost:3000`
- Documentação da API: `http://localhost:3000/api-docs`
- Painel admin: `http://localhost:3000/admin-dashboard.html`

> A aplicação precisa estar rodando localmente antes de executar os testes.

---

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [npm](https://www.npmjs.com/) v9 ou superior
- Hub de Leitura em execução em `http://localhost:3000`

---

## 📦 Instalação

Clone este repositório e instale as dependências:

```bash
git clone https://github.com/Guss182/cypress-ia-project.git
cd cypress-ia-project
npm install
```

### Dependências

| Pacote    | Versão   | Descrição               |
|-----------|----------|-------------------------|
| `cypress` | `^15.15` | Framework de testes E2E |

---

## 🚀 Como executar

### Interface gráfica

Abre o Cypress Test Runner para execução interativa:

```bash
npx cypress open
```

### Modo headless

Executa todos os testes no terminal, sem abrir o navegador:

```bash
npx cypress run
```

### Executar um arquivo específico

```bash
npx cypress run --spec "cypress/e2e/cadastro.cy.js"
```

---

## 🗂️ Estrutura do projeto

```txt
cypress-ia-project/
├── .github/
│   └── skills/
│       └── arquitetura/
│           └── SKILL.md
├── .playwright-mcp/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js       # Testes de autenticação
│   │   └── cadastro.cy.js    # Testes de cadastro de usuário
│   ├── fixtures/
│   │   └── example.json      # Dados de apoio aos testes
│   └── support/
│       ├── commands.js       # Comandos customizados do Cypress
│       └── e2e.js            # Configurações globais de suporte
├── docs/
│   ├── hub-de-leitura.md     # Documentação da aplicação
│   └── rag-hub-de-leitura.md # Base de conhecimento para QA/IA
├── .gitignore
├── cypress.config.js         # Configuração do Cypress
├── package-lock.json
├── package.json
└── README.md
```

---

## 🧪 Casos de teste

### Login (`login.cy.js`)

| ID           | Tipo     | Descrição                                      |
|--------------|----------|------------------------------------------------|
| CT-LOGIN-001 | Positivo | Login com credenciais válidas de administrador |

### Cadastro (`cadastro.cy.js`)

| ID         | Tipo     | Descrição                                                 |
|------------|----------|-----------------------------------------------------------|
| CT-CAD-001 | Positivo | Cadastro com dados válidos — redireciona para o dashboard |
| CT-CAD-002 | Negativo | Cadastro com e-mail já existente — exibe mensagem de erro |
| CT-CAD-003 | Negativo | Campos obrigatórios vazios — impede envio do formulário   |

---

## 🔑 Credenciais de teste

| Perfil        | E-mail               | Senha    |
|---------------|----------------------|----------|
| Administrador | admin@biblioteca.com | admin123 |
| Usuário comum | usuario@teste.com    | user123  |

---

## 🤖 Uso de IA no projeto

Este projeto também é utilizado para praticar o uso de IA no contexto de Quality Assurance.

Durante o curso, a IA pode ser usada para apoiar atividades como:

- Análise de histórias de usuário;
- Criação de critérios de aceitação;
- Mapeamento de riscos;
- Geração de cenários em Gherkin;
- Sugestão de testes automatizados;
- Revisão de código Cypress;
- Organização de documentação de apoio para testes.

A IA deve ser usada como apoio ao QA, não como substituta da análise humana. Todo código ou artefato gerado com auxílio de IA deve ser revisado antes de ser utilizado.

---

## 📌 Evolução do projeto

Este repositório será mantido durante o curso e poderá receber melhorias como:

- Novos testes automatizados;
- Anotações de aula;
- Melhorias na documentação;
- Ajustes nos seletores utilizados nos testes;
- Uso de variáveis de ambiente;
- Refatoração de comandos customizados;
- Organização para portfólio profissional após o término das aulas.

---

## 📄 Licença e créditos

Uso educacional e acadêmico.

Projeto baseado em materiais disponibilizados em aula pelo professor [Fábio Araújo](https://github.com/fabioaraujoqa), com finalidade de estudo, prática e evolução em QA, Cypress e IA aplicada a testes de software.

Repositório mantido por **Gustavo Alves Moreno** como parte dos estudos em Quality Assurance.

---

## Entrega final: QA Agent e Playwright MCP

Esta entrega documenta o uso do QA Agent no projeto final do Hub de Leitura, com apoio do Playwright MCP para validação visual e navegação real pela interface.

- QA Agent documentado em `docs/qa-agent.md`.
- Prompt base do agente registrado em `prompts/qa-agent-system-prompt.md`.
- MCP configurado em `.vscode/mcp.json`.
- No VS Code, o Playwright MCP pode ser iniciado pelo botão **Start** da configuração MCP.
- Prompt reutilizável para o fluxo E2E registrado em `prompts/mcp-fluxo-e2e.md`.
- Fluxo E2E validado com MCP: login comum → catálogo → `A Arte da Guerra` → cesta → checkout → `Reservas Confirmadas!`.
- Evidência da execução registrada em `evidencias/aula-4-mcp.md`.
- Screenshots armazenadas em `evidencias/screenshots/`.
