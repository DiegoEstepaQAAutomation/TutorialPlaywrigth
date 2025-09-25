import { Locator, Page } from "@playwright/test";

export class LoginPage {
    
    
    private readonly usernameInput: Locator
    private readonly passwordInput: Locator
    private readonly loginBtn: Locator

    constructor(page: Page) {
        this.usernameInput=page.locator('input#username')
        this.passwordInput=page.locator('input#password')
        this.loginBtn=page.locator('//button[@type=\'submit\']')
    }


    async Fillusername(username:string)
    {
       await this.usernameInput.fill(username)
    }

    async FillPassword(password:string)
    {
        await this.passwordInput.fill(password)
    }
    
    async ClickonLoginButton()
    {
       await  this.loginBtn.click()
    }



    async doLogin(username:string,password:string)
    {

        await this.Fillusername(username)
        await this.FillPassword(password)
        await this.ClickonLoginButton()

    }

    // Define selectors using getter methods
   // const usuario ='user'
   // const password='pass'

    
    /*
    await page.locator('input#username').fill(usuario)

    await page.locator('input#password').fill(password)

    await page.locator('//button[@type=\'submit\']').click()*/


}   