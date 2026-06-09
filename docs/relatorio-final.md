# Relatório Final: Portfólio de QA com IA

## 1. Título

Relatório final do projeto de automação de testes E2E com Cypress JS para a aplicação Hub de Leitura, executada localmente em `http://localhost:3000`.

## 2. Resumo Executivo

Este projeto foi desenvolvido como parte de um portfólio de Quality Assurance com apoio de Inteligência Artificial. O objetivo foi estruturar, revisar e documentar testes automatizados E2E para fluxos principais da aplicação Hub de Leitura.

O projeto utiliza Cypress JS e contempla testes de login, cadastro de usuário e adição de livros à cesta. Além dos testes, o repositório possui documentação de contexto, evidências de execução e registros de prompts utilizados durante o processo de melhoria.

Os riscos identificados neste relatório estão mapeados como pontos de atenção e oportunidades de evolução. Eles não devem ser considerados corrigidos enquanto não houver alteração, validação e nova evidência correspondente.

## 3. Contexto do Projeto

A aplicação testada é o Hub de Leitura, um sistema educacional usado para prática de QA, automação de testes e validação de fluxos funcionais.

O ambiente considerado para os testes é local, com a aplicação disponível em `http://localhost:3000`. O projeto Cypress foi estruturado para apoiar estudos práticos de automação E2E, organização de evidências, uso de variáveis de ambiente e aplicação de IA como suporte ao trabalho de QA.

## 4. Escopo da Automação

O escopo atual da automação cobre os seguintes fluxos:

- Login de administrador com credenciais válidas.
- Cadastro de usuário com dados válidos.
- Cadastro com e-mail já existente.
- Cadastro com campos obrigatórios vazios.
- Adição de um livro à cesta por usuário logado.
- Adição de dois livros à cesta por usuário logado.
- Adição de livro à cesta local por usuário sem login.

Os testes estão concentrados em fluxos funcionais da interface e validações básicas de comportamento esperado.

## 5. Arquivos Considerados

Foram considerados os seguintes artefatos do projeto:

- `README.md`
- `.env.example`
- `docs/hub-de-leitura.md`
- `docs/rag-hub-de-leitura.md`
- `prompts/refatoracao-env-cypress.md`
- `evidencias/aula-2-cypress.md`
- `evidencias/revisao-skill-arquitetura.md`
- `cypress/e2e/login.cy.js`
- `cypress/e2e/cadastro.cy.js`
- `cypress/e2e/adicionar-livro.cy.js`

## 6. Casos de Teste Automatizados

| ID | Arquivo | Objetivo |
| --- | --- | --- |
| CT-LOGIN-001 | `cypress/e2e/login.cy.js` | Validar login com credenciais válidas de administrador. |
| CT-CAD-001 | `cypress/e2e/cadastro.cy.js` | Validar cadastro de usuário com dados válidos. |
| CT-CAD-002 | `cypress/e2e/cadastro.cy.js` | Validar comportamento ao tentar cadastrar e-mail já existente. |
| CT-CAD-003 | `cypress/e2e/cadastro.cy.js` | Validar bloqueio de envio com campos obrigatórios vazios. |
| CT-CESTA-001 | `cypress/e2e/adicionar-livro.cy.js` | Validar adição de 1 livro à cesta por usuário logado. |
| CT-CESTA-002 | `cypress/e2e/adicionar-livro.cy.js` | Validar adição de 2 livros à cesta por usuário logado. |
| CT-CESTA-003 | `cypress/e2e/adicionar-livro.cy.js` | Validar adição de 1 livro à cesta local por usuário sem login. |

## 7. Boas Práticas Aplicadas

O projeto apresenta boas práticas importantes para um portfólio de QA:

- Organização dos testes na pasta `cypress/e2e`.
- Uso de `Cypress.env()` para acessar dados configuráveis.
- Existência de `.env.example` sem valores sensíveis.
- Uso de caminhos relativos em `cy.visit()`, apoiado pelo `baseUrl`.
- Registro de evidências em arquivos Markdown.
- Documentação de contexto da aplicação e de apoio para IA.
- Ausência de esperas fixas com `cy.wait()` nos testes analisados.
- Separação dos fluxos automatizados por arquivos de teste.

## 8. Evidências Disponíveis

O projeto possui evidências documentais em Markdown:

- `evidencias/aula-2-cypress.md`: registra objetivo, arquivos alterados, testes executados, resultado informado e observações sobre o fluxo de cesta.
- `evidencias/revisao-skill-arquitetura.md`: registra análise dos testes com base na skill de arquitetura, incluindo pontos corretos, riscos, melhorias e priorização.

Essas evidências apoiam a narrativa do portfólio, pois mostram o processo de evolução do projeto, a análise crítica dos testes e a preocupação com boas práticas de automação.

## 9. Uso de IA no Processo

A IA foi utilizada como apoio ao trabalho de QA, principalmente para:

- Analisar a estrutura do projeto Cypress.
- Apoiar a refatoração planejada de URLs e credenciais hardcoded.
- Revisar testes com base em uma skill de arquitetura Cypress.
- Organizar riscos, melhorias e prioridades.
- Apoiar a criação de documentação técnica para portfólio.

O uso de IA neste projeto teve caráter assistivo. As decisões, validações e conclusões devem permanecer sob responsabilidade humana, especialmente em relação à qualidade dos testes, cobertura e confiabilidade das evidências.

## 10. Riscos e Limitações Identificados

Os principais riscos e limitações mapeados são:

- Alguns seletores ainda são frágeis, por dependerem de texto, placeholder, classes CSS ou estrutura visual.
- O teste de login ainda possui `describe` genérico.
- O tratamento de modal no login usa `force: true`, o que pode mascarar problemas de interação real.
- O cadastro válido cria usuário real com e-mail dinâmico, podendo gerar massa residual no ambiente.
- Os testes dependem de dados e estado da aplicação local.
- O teste de cesta valida o `localStorage`, que é um detalhe de implementação.
- A seleção de livros na cesta usa posição dos botões, como `.first()` e `.eq(1)`, o que pode ser instável se a lista mudar.
- O `README.md` pode precisar de atualização para refletir todos os testes e evidências atuais.

Esses itens estão identificados como riscos. Não há indicação neste relatório de que tenham sido corrigidos.

## 11. Melhorias Futuras

As próximas melhorias recomendadas são:

- Adicionar atributos `data-testid` na aplicação para estabilizar seletores.
- Melhorar o tratamento do modal no fluxo de login sem depender de clique forçado.
- Criar comando customizado de login.
- Avaliar uso de `cy.session()` para otimizar autenticação entre testes.
- Melhorar asserções visuais da cesta, validando também elementos percebidos pelo usuário.
- Avaliar uso de `cy.intercept()` para controlar cenários de API e reduzir dependência do ambiente.
- Definir estratégia para criação e limpeza de massa de teste.
- Atualizar o `README.md` com a lista completa dos testes atuais e instruções alinhadas ao estado do projeto.
- Ampliar evidências com screenshots, vídeos ou registros padronizados de execução quando aplicável.

## 12. Conclusão

O projeto demonstra uma base consistente para portfólio de QA com IA, reunindo automação E2E com Cypress JS, documentação de contexto, evidências e reflexão técnica sobre riscos e melhorias.

Os testes atuais cobrem fluxos relevantes da aplicação Hub de Leitura e mostram evolução no uso de boas práticas, como variáveis de ambiente e organização de evidências. Ao mesmo tempo, ainda existem oportunidades de melhoria relacionadas à estabilidade dos seletores, isolamento dos testes, controle de massa de dados e fortalecimento das validações.

Como material de portfólio, o projeto evidencia não apenas a criação de testes automatizados, mas também a capacidade de analisar riscos, documentar decisões, usar IA de forma responsável e planejar evoluções técnicas com critério de QA.
