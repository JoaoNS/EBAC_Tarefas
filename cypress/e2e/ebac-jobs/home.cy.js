/// <reference types='cypress' />

describe("Teste para a home", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve incluir informações no formulário", () => {
    cy.get('input[type="text"]').type("Carlos Alberto");
    cy.get('input[type="email"]').type("teste@gmail.com");
    cy.get('input[type="tel"]').type("11912345678");
    cy.contains("Adicionar").click();
    cy.screenshot("teste-incluir");
  });

  it("Deve alterar a informação da lista", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get('input[type="text"]').clear().type("Jose Pedro");
    cy.get('input[type="email"]').clear().type("testen2.com.br");
    cy.get('input[type="tel"]').clear().type("11912345678");
    cy.get(".alterar").click();
    cy.screenshot("teste-editar");
  });

  it("Deve remover um contato da lista", () => {
    cy.get(":nth-child(3) > .sc-gueYoa > .delete").click();
    cy.screenshot("teste-remover");
  });
});
