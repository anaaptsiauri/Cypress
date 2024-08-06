describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationteststore.com/')
    //დალოგინება 
    cy.get('#customer_menu_top > li > a').click()
    //რეგისტრაცია
    let random = (Math.random)
    cy.log(random)
    const loginname = "Ana.Aptsiauri16" + random
    const AccountFrm_email = "ana.aptsiauri16" + random + "@gmail.com"
    cy.get('#accountFrm > fieldset > .btn').click()
    cy.get('#AccountFrm_firstname').type("Anna")
    cy.get('#AccountFrm_lastname').type("Aptsiauri")
    cy.get('#AccountFrm_email').type("ana.aptsiauri16" + random() + "@gmail.com")
    cy.get('#AccountFrm_address_1').type("Tbilisi")
    cy.get('#AccountFrm_city').type("Valencia")
    cy.get('#AccountFrm_country_id').select("Spain")
    cy.get('#AccountFrm_zone_id').select("Valencia")
    cy.get('#AccountFrm_postcode').type("0167")
    cy.get('#AccountFrm_loginname').type("Ana.Aptsiauri" + random())
    cy.get('#AccountFrm_password').type("Aptsiauri16")
    cy.get('#AccountFrm_confirm').type("Aptsiauri16")
    cy.get('#AccountFrm_agree').click()
    cy.get('.col-md-2 > .btn').click()
    //მომხმარებლის დეტალებს შეცვლა -   Edit account details - + შეამოწმეთ რომ შენახვის შემდეგ ცვლილებები აისახა.

    cy.get('.side_account_list > :nth-child(3) > a').click()
    cy.get('#AccountFrm_firstname').type("anastasia")
    cy.get('.col-md-12 > .btn-orange').click()
    cy.get('.alert').should("exist", "Sucess: Your account has been successfully updated. ")
    //არსებული მისამართის შეცვლა ან ახალი მისამართის დამატება

    cy.get('.side_account_list > :nth-child(5) > a').click()
    cy.get('tr > .pull-right > .btn').click()
    cy.get('#AddressFrm_country_id').select("United Kingdom")
    cy.get('#AddressFrm_zone_id').select("Bristol")
    cy.get('#AddressFrm_address_1').type("kutaisi")
    cy.get('#AddressFrm_city').type("Valencia")
    cy.get('.col-md-12 > .btn-orange').click()
    //პაროლის შეცვლა
    cy.get('.side_account_list > :nth-child(4) > a').click()
    cy.get('#PasswordFrm_current_password').type("Aptsiauri16")
    cy.get('#PasswordFrm_password').type("Davaleba11")
    cy.get('#PasswordFrm_confirm').type("Davaleba11")
    cy.get('.col-md-12 > .btn-orange').click()

 
  })
})
