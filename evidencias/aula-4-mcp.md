# Evidencias - Aula 4 - Playwright MCP

## 1. Objetivo

Registrar a evidencia objetiva do fluxo E2E real executado no Hub de Leitura usando Playwright MCP.

Fluxo validado:

- Login comum
- Catalogo
- Busca por `A Arte da Guerra`
- Adicao do livro a cesta
- Checkout/finalizacao
- Confirmacao da reserva

## 2. Configuracao MCP

MCP usado: sim.

Ferramenta configurada: Playwright MCP.

Configuracao registrada em `.vscode/mcp.json`:

```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    }
  }
}
```

## 3. Fluxo executado

1. Acesso ao Hub de Leitura.
2. Login com usuario comum.
3. Validacao da tela apos login.
4. Acesso ao catalogo.
5. Busca pelo livro `A Arte da Guerra`.
6. Adicao do livro a cesta.
7. Acesso a cesta.
8. Validacao do livro na cesta.
9. Execucao do checkout/finalizacao da reserva.
10. Validacao da confirmacao final da reserva.

## 4. Validacoes realizadas

- Usuario usado: comum.
- Livro validado: `A Arte da Guerra`.
- Texto validado apos login: `Minha Conta`.
- Texto validado na cesta: `A Arte da Guerra`.
- Texto validado na confirmacao final: `Reservas Confirmadas!`.

## 5. Evidencias visuais

- `evidencias/screenshots/01-apos-login-mcp.png`
- `evidencias/screenshots/02-cesta-com-livro-mcp.png`
- `evidencias/screenshots/03-confirmacao-final-mcp.png`

## 6. Problema observado

Links rapidos para catalogo nao navegaram; o catalogo foi acessado pela URL no navegador para continuar o fluxo.

## 7. Conclusao

O fluxo E2E com Playwright MCP foi concluido com sucesso ate a confirmacao da reserva.

Os textos principais esperados foram validados: `Minha Conta`, `A Arte da Guerra` e `Reservas Confirmadas!`.

Esta evidencia registra o resultado observado e nao altera testes, codigo Cypress, configuracoes ou massa de dados.
