import { Locator, Page } from "@playwright/test";

export class AddTransaction {
    
    private readonly addtransactionBtn: Locator
    private readonly dateInput: Locator
    private readonly amountInput: Locator
    private readonly descriptionInput: Locator
    private readonly saveBtn: Locator
    private readonly page: Page

    private actualdaterow: Locator

    constructor(page: Page) {
        this.page = page;
        this.addtransactionBtn=page.locator("//button[contains(text(),'Añadir transacción' )]")
        this.dateInput=page.locator('id=date')
        this.amountInput=page.locator('id=amount')
        this.descriptionInput=page.locator('id=description')
        this.saveBtn=page.locator("//button[contains(text(),'Guardar' )]")
        this.actualdaterow=page.locator("")
    }


    async AddTransaction(fecha:string,monto:string,descripcion:string)
    {
       await this.addtransactionBtn.click()
       await this.dateInput.fill(fecha)
       await this.amountInput.fill(monto)
       await this.descriptionInput.fill(descripcion)
       await this.saveBtn.click()
    }

    async GetLatestTransactionDate(row:string){

        this.actualdaterow=this.page.locator(`//tbody[@id='transaction-list']//tr[${row}]//td[1]`)
        return  await this.actualdaterow.textContent()
    }

//tbody[@id='transaction-list']//tr[1]//td[1]

//this.actualdaterow=this.page.locator(`//tbody[@id='transaction-list']//tr[${row}]//td[1]`)
}