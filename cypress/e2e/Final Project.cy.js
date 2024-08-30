
import UserData from "../fixtures/FP.json"


describe('რეგისტრაცია', () => {
  it.only('რეგისტრაცია სწორი მონაცემებით', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')

    let random = Math.floor(Math.random() * 1000)
    cy.viewport(1800, 800)
    //1) რეგისტრაცია სწორი მონაცემებით
    cy.get('.iprof').click()
    cy.get('.input-shablon > p > a').click()
    cy.login(UserData.name, UserData.id, UserData.mobile, UserData.password, UserData.password1)
    cy.get(':nth-child(2) > .imail').type("aniani90" + random + "@yahoo.com")
    cy.get("label:nth-child(2) > svg:nth-child(1) > g:nth-child(1) > rect:nth-child(1)").click({ force: true })
    cy.get('.regsub').click()

  })
})


describe('ავტორიზაცია', () => {
  it.only(')ავტორიზაცია რეგისტრირებული მეილით და პაროლით', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')

    let random = Math.floor(Math.random() * 1000)
    cy.viewport(1800, 800)
    //2)ავტორიზაცია რეგისტრირებული მეილით და პაროლით
    cy.get('.iprof').click()
    cy.regg(UserData.email, UserData.password3)
    cy.get('.avtorization > .input-shablon > .form-button').click()
  });

  it.only('პაროლის აღდგენა რეგისტრირებული მეილით', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')

    let random = Math.floor(Math.random() * 1000)
    cy.viewport(1800, 800)
    //4)პაროლის აღდგენა რეგისტრირებული მეილით
    cy.get('.iprof > p').click()
    cy.get('.recovery-btn').click()
    cy.get('.recovery > .input-shablon > .input-div > .imail').type(UserData.email)
    cy.get('.recovery > .input-shablon > .form-button').click()
  })
})

describe('კალათა', () => {
  it.only('კალათიდან ნივთის წაშლა', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')

    let random = Math.floor(Math.random() * 1000)
    cy.viewport(1800, 800)
    // 5)კალათიდან ნივთის წაშლა
    cy.get('.burger > .burger-span').click()
    cy.get('.cat-down.active > .category-holder > :nth-child(1) > :nth-child(2) > a').click()
    cy.get(':nth-child(1) > .price-cart > .product-cart').click()
    cy.get('.icart > p').click()
    cy.get('.clear > a').click()
    cy.get('.empty > p').should("have.text", "კალათა ცარიელია")
  });

  it.only('კალათაში ნივთის დამატება', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')

    let random = Math.floor(Math.random() * 1000)
    cy.viewport(1800, 800)
    //3)კალათაში ნივთის დამატება
    cy.get('.burger > .burger-span').click()
    cy.get('.cat-down.active > .category-holder > :nth-child(1) > :nth-child(2) > a').click()
    cy.get(':nth-child(4) > .price-cart > .product-cart > p').click()
    cy.get('.icart > p').click()

  })
})
