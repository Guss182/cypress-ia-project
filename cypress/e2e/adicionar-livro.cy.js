describe('CT-CESTA - Adicionar Livros à Cesta', () => {
  const userEmail = Cypress.env('userEmail')
  const userPassword = Cypress.env('userPassword')

  // Helper: fazer login pela UI
  const fazerLogin = () => {
    cy.visit('/login')
    cy.get('input[name="email"], input[type="email"]').type(userEmail)
    cy.get('input[name="password"], input[type="password"]').type(userPassword)
    cy.contains('button', 'Entrar').click()
    cy.url().should('not.include', '/login')
  }

  // Helper: obter contagem de itens no localStorage bookCart
  const getCartCount = () => {
    return cy.window().then((win) => {
      const cart = win.localStorage.getItem('bookCart')
      if (!cart) return 0
      return JSON.parse(cart).length
    })
  }

  beforeEach(() => {
    // Visitar / primeiro para garantir que a aplicação está pronta
    cy.visit('/')

    // Limpar localStorage antes de cada teste
    cy.window().then((win) => {
      win.localStorage.removeItem('bookCart')
      win.localStorage.removeItem('authToken')
      win.localStorage.removeItem('token')
      win.localStorage.removeItem('userEmail')
      win.localStorage.removeItem('userId')
      win.localStorage.removeItem('username')
    })
  })

  it('CT-CESTA-001 - Usuário logado adiciona 1 livro à cesta', () => {
    // 1. Fazer login
    fazerLogin()

    // 2. Acessar catálogo
    cy.visit('/catalog.html')

    // 3. Clicar no primeiro botão "Adicionar à Cesta"
    cy.get('button.add-to-cart').first().click()

    // 4. Validar que aparece mensagem de sucesso
    cy.contains('foi adicionado à cesta').should('be.visible')

    // 5. Validar que bookCart tem 1 item
    getCartCount().then((count) => {
      expect(count).to.equal(1)
    })
  })

  it('CT-CESTA-002 - Usuário logado adiciona 2 livros à cesta', () => {
    // 1. Fazer login
    fazerLogin()

    // 2. Acessar catálogo
    cy.visit('/catalog.html')

    // 3. Clicar no primeiro botão "Adicionar à Cesta"
    cy.get('button.add-to-cart').first().click()

    // 4. Validar mensagem
    cy.contains('foi adicionado à cesta').should('be.visible')

    // 5. Clicar no segundo botão "Adicionar à Cesta"
    cy.get('button.add-to-cart').eq(1).click()

    // 6. Validar mensagem novamente
    cy.contains('foi adicionado à cesta').should('be.visible')

    // 7. Validar que bookCart tem 2 itens
    getCartCount().then((count) => {
      expect(count).to.equal(2)
    })
  })

  it('CT-CESTA-003 - Usuário sem login adiciona 1 livro à cesta local', () => {
    // 1. Acessar catálogo sem fazer login
    cy.visit('/catalog.html')

    // 2. Clicar no primeiro botão "Adicionar à Cesta"
    cy.get('button.add-to-cart').first().click()

    // 3. Validar que bookCart tem 1 item no localStorage
    getCartCount().then((count) => {
      expect(count).to.equal(1)
    })
  })
})
