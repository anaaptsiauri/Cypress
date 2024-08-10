/*describe('Register user', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/test_cases ')

    let random = (Math.random)
    cy.log(random)

    const signupemail = "aniani90" + random + "@gmail.com"

    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    //3. Verify that home page is visible successfullynp
    //4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    //5. Verify 'New User Signup!' is visible
    cy.get('.signup-form > h2').should("have.text", "New User Signup!")
    //6. Enter name and email address
    cy.get('[data-qa="signup-name"]').type("Ana")
    cy.get('[data-qa="signup-email"]').type("Aniani90" + random() + "@yahoo.com")
    //7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click()
    //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get(':nth-child(1) > b').should("be.visible", "Enter Account Information")
    //9. Fill details: Title, Name, Email, Password, Date of birth
    cy.get(':nth-child(4) > .top').click()
    cy.get('[data-qa="password"]').type("Davaleba12")
    cy.get('[data-qa="days"]').select("16")
    cy.get('[data-qa="months"]').select("April")
    cy.get('[data-qa="years"]').select("1994")
    //10. Select checkbox 'Sign up for our newsletter!'
    cy.get('#newsletter').click()
    //11. Select checkbox 'Receive special offers from our partners!'
    cy.get('#optin').click()
    //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').type("Ana")
    cy.get('[data-qa="last_name"]').type("Aptsiauri")
    cy.get('[data-qa="address"]').type("tbilisi")
    cy.get('[data-qa="address2"]').type("dadiani str.")
    cy.get('[data-qa="country"]').select("Canada")
    cy.get('[data-qa="state"]').type("Tbilisi")
    cy.get('[data-qa="city"]').type("Tbilisi")
    cy.get('[data-qa="zipcode"]').type("46006")
    cy.get('[data-qa="mobile_number"]').type("591549591")
    //13. Click 'Create Account button'
    cy.get('[data-qa="create-account"]').click()
    //14. Verify that 'ACCOUNT CREATED!' is visible
    cy.get('b').should("have.text", "Account Created!")
    //15. Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click()
    //16. Verify that 'Logged in as username' is visible
    cy.get(':nth-child(10) > a').should("be.visible")
  })
}) */

/*describe('Register user', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/test_cases ')

    let random = (Math.random)
    cy.log(random)

    const signupemail = "aniani90" + random + "@gmail.com"
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    //3. Verify that home page is visible successfully
    //4. Click on 'Signup / Login' button
    cy.get('.nav > :nth-child(4) > a').click()
    //5. Verify 'Login to your account' is visible
    cy.get('.login-form > h2').should("have.text", "Login to your account")
    //6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type("Aniani90@yahoo.com")
    cy.get('[data-qa="login-password"]').type("Davaleba12")
    //7. Click 'login' button
    cy.get('[data-qa="login-button"]').click()
    //8. Verify that 'Logged in as username' is visible
    cy.get(':nth-child(10) > a').should("be.visible")
    //9. Click 'Delete Account' button
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    //10. Verify that 'ACCOUNT DELETED!' is visible
    cy.get('b').should("be.visible")


  })
}) */

describe('Register user', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/test_cases ')

    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    //3. Verify that home page is visible successfully
    //4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    //5. Verify 'Login to your account' is visible
    cy.get('.login-form > h2').should("be.visible")
    //6. Enter incorrect email address and password
    cy.get('[data-qa="login-email"]').type("anatest@gmail.com")
    cy.get('[data-qa="login-password"]').type("test123")
    //7. Click 'login' button
    cy.get('[data-qa="login-button"]').click()
    //8. Verify error 'Your email or password is incorrect!' is visible
    cy.get('.login-form > form > p').should("be.visible")

  })
})