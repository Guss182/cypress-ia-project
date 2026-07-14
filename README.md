<div align="center">

# 📚 Hub de Leitura — QA Automation Lab

**Automação E2E com Cypress, validação com Playwright MCP e IA aplicada ao fluxo de QA.**

![Cypress](https://img.shields.io/badge/Cypress-15.15-69D3A7?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![Playwright MCP](https://img.shields.io/badge/Playwright-MCP-2EAD33?logo=playwright&logoColor=white)
![QA Agent](https://img.shields.io/badge/QA-Agent-6E40C9)
![Projeto acadêmico](https://img.shields.io/badge/Projeto-Acad%C3%AAmico-0969DA)

</div>

---

## 🔎 Visão geral

Este repositório reúne um projeto acadêmico de **Quality Assurance** desenvolvido para praticar automação de testes, documentação e uso responsável de Inteligência Artificial como apoio ao trabalho de QA.

A aplicação testada é o **Hub de Leitura**, um sistema educacional utilizado durante o curso de IA aplicada a QA. O projeto parte de materiais disponibilizados em aula pelo professor [Fábio Araújo](https://github.com/fabioaraujoqa) e foi ampliado com testes, ajustes, prompts, documentação e evidências organizadas durante os estudos.

A automação principal foi desenvolvida com **Cypress**. Como validação complementar, também foi executado e documentado um fluxo E2E real pela interface utilizando **Playwright MCP** e um **QA Agent**.

> A IA foi utilizada como ferramenta de apoio para análise, documentação e validação. Os resultados e artefatos foram revisados antes de serem incorporados ao projeto.

---

## 🚀 Principais entregas

- **7 casos de teste automatizados com Cypress**, cobrindo login, cadastro e cesta de livros.
- **1 fluxo E2E validado com Playwright MCP**, da autenticação até a confirmação da reserva.
- **QA Agent documentado**, com regras para respostas claras, verificáveis e rastreáveis.
- **Prompts reutilizáveis** para execução de fluxos e apoio às atividades de QA.
- **Documentação de contexto e RAG** sobre a aplicação testada.
- **Evidências e relatório final** com o escopo executado.
- **Variáveis de ambiente** para evitar o versionamento de credenciais.

---

## 🧩 Pilares do projeto

| Pilar | Aplicação no projeto |
| --- | --- |
| **Cypress** | Automação principal dos fluxos de login, cadastro e cesta |
| **Playwright MCP** | Navegação e validação complementar de um fluxo E2E real |
| **IA aplicada a QA** | Apoio à análise, criação de prompts, documentação e revisão |
| **QA Agent** | Orientação do agente por regras e documentos de contexto |
| **Evidências** | Registro dos fluxos executados, resultados e screenshots |

---

## 🧪 Escopo dos testes Cypress

| ID | Tipo | Cenário |
| --- | --- | --- |
| `CT-LOGIN-001` | Positivo | Login com credenciais válidas de administrador |
| `CT-CAD-001` | Positivo | Cadastro com dados válidos |
| `CT-CAD-002` | Negativo | Tentativa de cadastro com e-mail já existente |
| `CT-CAD-003` | Negativo | Tentativa de cadastro com campos obrigatórios vazios |
| `CT-CESTA-001` | Positivo | Usuário logado adiciona um livro à cesta |
| `CT-CESTA-002` | Positivo | Usuário logado adiciona dois livros à cesta |
| `CT-CESTA-003` | Funcional | Usuário sem login adiciona um livro à cesta local |

Os testes estão disponíveis em [`cypress/e2e`](./cypress/e2e).

---

## 🎭 Validação com Playwright MCP

O Playwright MCP foi configurado no VS Code e utilizado pelo QA Agent para navegar pela interface e validar um fluxo E2E complementar:

1. Acesso ao Hub de Leitura.
2. Login com usuário comum.
3. Acesso ao catálogo.
4. Busca pelo livro **A Arte da Guerra**.
5. Adição do livro à cesta.
6. Checkout e finalização da reserva.
7. Validação da mensagem **Reservas Confirmadas!**.

A execução está registrada em:

- [Evidência do fluxo com Playwright MCP](./evidencias/aula-4-mcp.md)
- [Prompt reutilizável do fluxo E2E](./prompts/mcp-fluxo-e2e.md)
- [Screenshots da execução](./evidencias/screenshots)

> O Playwright MCP foi utilizado para uma validação complementar orientada por agente. Ele não representa uma segunda suíte automatizada escrita em Playwright e não substitui os testes Cypress do projeto.

---

## 🤖 IA e QA Agent

O projeto utiliza IA generativa como apoio a atividades de qualidade, incluindo:

- análise da aplicação e de seus fluxos;
- organização da documentação de contexto;
- criação e revisão de cenários de teste;
- elaboração de prompts reutilizáveis;
- apoio à revisão dos testes Cypress;
- navegação real pela interface com Playwright MCP;
- registro de resultados e evidências.

O QA Agent recebeu regras para trabalhar apenas com informações observadas ou verificadas, informar bloqueios e evitar a criação de resultados ou evidências inexistentes.

Arquivos relacionados:

- [Documentação do QA Agent](./docs/qa-agent.md)
- [Prompt-base do QA Agent](./prompts/qa-agent-system-prompt.md)
- [Base de conhecimento RAG](./docs/rag-hub-de-leitura.md)
- [Skill de arquitetura](./.github/skills/arquitetura/SKILL.md)

---

## 🛠️ Tecnologias e ferramentas

| Categoria | Tecnologias e práticas |
| --- | --- |
| Automação | Cypress, JavaScript e Node.js |
| Validação por agente | Playwright MCP |
| IA aplicada a QA | QA Agent, prompts e documentação RAG |
| Ambiente | VS Code, npm e variáveis de ambiente |
| Documentação | Markdown, casos de teste, relatório e evidências |
| Versionamento | Git e GitHub |

---

## 📁 Estrutura principal

```text
hub-leitura-qa-automation-lab/
├── .github/skills/          # Skill de arquitetura
├── .playwright-mcp/         # Artefatos relacionados ao MCP
├── .vscode/mcp.json         # Configuração do Playwright MCP
├── cypress/
│   ├── e2e/                 # Testes automatizados
│   ├── fixtures/            # Dados de apoio
│   └── support/             # Comandos e configurações
├── docs/                    # Contexto, QA Agent, RAG e relatório
├── evidencias/              # Registros e screenshots
├── prompts/                 # Prompts reutilizáveis
├── .env.example             # Modelo de variáveis de ambiente
├── cypress.config.js        # Configuração do Cypress
└── package.json             # Dependências do projeto
```

---

## ▶️ Como executar os testes Cypress

### Pré-requisitos

- Node.js 18 ou superior;
- npm 9 ou superior;
- Hub de Leitura executando localmente em `http://localhost:3000`.

### Instalação

```bash
git clone https://github.com/Guss182/hub-leitura-qa-automation-lab.git
cd hub-leitura-qa-automation-lab
npm install
```

### Configuração

Crie um arquivo `.env` na raiz com base no `.env.example`:

```env
CYPRESS_BASE_URL=
CYPRESS_API_URL=
CYPRESS_ADMIN_EMAIL=
CYPRESS_ADMIN_PASSWORD=
CYPRESS_USER_EMAIL=
CYPRESS_USER_PASSWORD=
```

> Não utilize credenciais reais e não envie o arquivo `.env` para o repositório.

### Execução

Abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Executar todos os testes em modo headless:

```bash
npx cypress run
```

Executar apenas uma spec:

```bash
npx cypress run --spec "cypress/e2e/cadastro.cy.js"
```

---

## 📚 Documentação e evidências

| Conteúdo | Arquivo |
| --- | --- |
| Contexto da aplicação | [`docs/hub-de-leitura.md`](./docs/hub-de-leitura.md) |
| Base de conhecimento | [`docs/rag-hub-de-leitura.md`](./docs/rag-hub-de-leitura.md) |
| QA Agent | [`docs/qa-agent.md`](./docs/qa-agent.md) |
| Relatório final | [`docs/relatorio-final.md`](./docs/relatorio-final.md) |
| Evidência Cypress | [`evidencias/aula-2-cypress.md`](./evidencias/aula-2-cypress.md) |
| Evidência Playwright MCP | [`evidencias/aula-4-mcp.md`](./evidencias/aula-4-mcp.md) |
| Prompt do fluxo E2E | [`prompts/mcp-fluxo-e2e.md`](./prompts/mcp-fluxo-e2e.md) |
| Prompt do QA Agent | [`prompts/qa-agent-system-prompt.md`](./prompts/qa-agent-system-prompt.md) |

---

## 🔐 Cuidados adotados

- Credenciais mantidas fora do versionamento.
- Arquivo `.env.example` sem dados sensíveis.
- Evidências separadas do código dos testes.
- Origem acadêmica e autoria da aplicação informadas de forma clara.
- Uso de IA tratado como apoio, com revisão humana dos artefatos.
- Diferença documentada entre a suíte Cypress e a validação via Playwright MCP.

---

## 📈 Próximas melhorias

- Refatorar seletores e nomes genéricos herdados dos exercícios iniciais.
- Organizar os testes Cypress por domínio da aplicação.
- Ampliar a cobertura de cenários negativos.
- Adicionar relatório automatizado de execução.
- Criar uma pipeline de integração contínua.
- Alinhar todas as referências do QA Agent aos documentos atuais do repositório.

---

## 🎓 Origem acadêmica e créditos

Projeto desenvolvido para fins educacionais durante os estudos de **IA aplicada a QA**.

A aplicação Hub de Leitura e os materiais-base utilizados no início do projeto foram disponibilizados pelo professor [Fábio Araújo](https://github.com/fabioaraujoqa). Este repositório registra minhas práticas, testes, prompts, documentação, evidências e melhorias realizadas ao longo do curso.

---

## 👤 Autor

**Gustavo Alves Moreno**

- GitHub: [@Guss182](https://github.com/Guss182)
- LinkedIn: [gustavo-alves-moreno](https://www.linkedin.com/in/gustavo-alves-moreno/)
