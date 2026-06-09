# Prompt Reutilizavel - Fluxo E2E com Playwright MCP

## 1. Objetivo do prompt

Registrar um prompt reutilizavel para orientar o QA Agent a executar uma validacao E2E no Hub de Leitura usando Playwright MCP e navegacao real pela interface.

Fluxo alvo:

- Login comum
- Catalogo
- Busca por `A Arte da Guerra`
- Adicao do livro a cesta
- Checkout/finalizacao
- Confirmacao da reserva

Este documento registra o prompt de uso. Ele nao afirma uma nova execucao do fluxo.

## 2. Pre-condicoes

- O app local deve estar disponivel em `http://localhost:3000`.
- O Playwright MCP deve estar configurado no projeto.
- O usuario comum deve estar configurado no ambiente.
- A aplicacao deve estar em execucao antes do inicio da validacao.
- O agente deve usar navegacao real pela interface.
- O agente nao deve alterar testes, codigo, fixtures, configuracoes ou massa de dados.

## 3. Prompt completo para o agente

```text
Use o Playwright MCP para executar o fluxo E2E no Hub de Leitura usando apenas navegacao real pela interface.

Contexto:
- App local: http://localhost:3000
- Projeto Cypress JS com Playwright MCP configurado
- Use o usuario comum configurado no ambiente
- Nao exiba, registre ou mencione a senha
- Nao altere arquivos do projeto
- Nao crie codigo, scripts ou testes automatizados

Fluxo:
1. Acesse http://localhost:3000
2. Faca login como usuario comum
3. Valide que o login foi concluido por texto visivel, como "Minha Conta" ou equivalente
4. Acesse o catalogo/lista de livros
5. Busque o livro "A Arte da Guerra"
6. Se o livro estiver disponivel, adicione-o a cesta
7. Acesse a cesta
8. Valide que o item "A Arte da Guerra" aparece na cesta
9. Execute o checkout/finalizacao/reserva usando o fluxo padrao disponivel na interface
10. Valide a confirmacao final por texto visivel, como "Reservas Confirmadas!" ou equivalente
11. Gere evidencias visuais quando solicitado

Caso o livro "A Arte da Guerra" nao seja encontrado ou nao esteja disponivel:
- Nao escolha outro livro automaticamente
- Informe o problema encontrado de forma objetiva

Retorne apenas:
- MCP usado: sim/nao
- Fluxo executado: [resumo objetivo]
- Textos validados: [login, cesta, confirmacao]
- Evidencias geradas: [arquivos ou "nenhuma"]
- Problemas encontrados: [lista objetiva ou "nenhum"]
```

## 4. Resultado esperado

- Fluxo concluido com confirmacao de reserva.
- Textos esperados:
  - `Minha Conta`
  - `A Arte da Guerra`
  - `Reservas Confirmadas!`
- Problemas reportados objetivamente se o fluxo bloquear.
- Nenhum resultado deve ser inventado se a execucao nao for realizada ou se alguma etapa falhar.

## 5. Cuidados para nao expor senha

- Nunca exibir senha.
- Nunca registrar senha em resposta, screenshot, log ou documento.
- Usar credenciais apenas a partir do ambiente ou da interface de teste, quando disponivel.
- Nao copiar valores sensiveis do `.env` para respostas ou documentos.
- Se for necessario mencionar o usuario, informar apenas o perfil usado, como `usuario comum`.

## 6. Observacao sobre alteracao de arquivos

Durante a execucao deste prompt, o agente nao deve alterar arquivos do projeto, testes, configuracoes, fixtures, codigo Cypress ou massa de dados.

O objetivo do prompt e validar o fluxo pela interface e registrar evidencias ou resultados observados, sem modificar o projeto.
