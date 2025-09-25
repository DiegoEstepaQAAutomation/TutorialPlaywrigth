import { Page } from "@playwright/test";

export class NavigateTo {

private readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    //navegar a la pagina de login
    async goToHomePage() {
       await this.page.goto('http://127.0.0.1:5500/login.html')
        }


    //navegar al carrito de compras
    async goToShopingcart() {
       await this.page.goto('http://127.0.0.1:5500/')
        }

         


}