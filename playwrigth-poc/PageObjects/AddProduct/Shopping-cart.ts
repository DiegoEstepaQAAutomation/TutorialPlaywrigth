import test, { expect, Locator, Page } from "@playwright/test";
import { faker } from '@faker-js/faker';
//clase para manejar el carrito de compras
export class ShoppingCart {
    
    private readonly addProduct1: Locator
    private readonly addProduct2: Locator
    private readonly AddProduct3: Locator
    private readonly ViewBtn: Locator   
    private readonly ProductinList1 : Locator
    private readonly ProductinList2 : Locator
    private readonly ComprarBtn: Locator
    private readonly name: Locator
    private readonly Email: Locator
    private readonly Address: Locator
    private readonly DesplegablePayment: Locator
    private readonly CardNumber: Locator
    private readonly CardCVC: Locator
    private readonly CardExpiry: Locator
    private readonly placeOrderBtn: Locator
    


//constructor de clases 
constructor(page: Page) {
        this.addProduct1=page.locator("//h5[contains(.,'Producto 1' )]/ancestor::div[contains(@class,'card-body' )]//button")
        this.addProduct2=page.locator("//h5[contains(.,'Producto 2' )]/ancestor::div[contains(@class,'card-body' )]//button")
        this.AddProduct3=page.locator("//h5[contains(.,'Producto 3' )]/ancestor::div[contains(@class,'card-body' )]//button")
        this.ViewBtn=page.locator("button#view-cart-btn") 
        this.ProductinList1=page.locator("//tbody[@id='cart-items']//td[contains(.,'Producto 1' )]/ancestor::tr//td[3]")
        this.ProductinList2=page.locator("//tbody[@id='cart-items']//td[contains(.,'Producto 2' )]/ancestor::tr//td[3]")
        this.ComprarBtn=page.locator("//button[contains(.,'Checkout' )]")
        this.name=page.locator("id=name")
        this.Email=page.locator("id=email")
        this.Address=page.locator("id=address")
        this.DesplegablePayment=page.locator("//a[@href='#paymentInfo']")
        this.CardNumber=page.locator("id=card-number")
        this.CardCVC=page.locator("id=card-cvc")
        this.CardExpiry=page.locator("id=card-expiry")
        this.placeOrderBtn=page.locator("id=place-order-btn")



    }


    //metodo para agregar productos al carrito y finalizar la compra
    async AddProducts(page: Page)
    {
        
       for(let i=0;i<=5;i++)
         {

            await this.addProduct1.click()

        };

         

         await this.addProduct2.click()

         await this.AddProduct3.click()

         await this.ViewBtn.click()

         const Producto1Cantidad=await this.ProductinList1.textContent()
         const Producto2Cantidad=await this.ProductinList2.textContent()

         const cuantity1=6
         const cuantity2=1

         expect(Producto1Cantidad).toEqual(cuantity1.toString());

         expect(Producto2Cantidad).toEqual(cuantity2.toString());

        //expect(Producto1Cantidad).toEqual('6');
       // expect(Producto2Cantidad).toEqual('1');   
        
        await this.ComprarBtn.click()

        

        const Nombre = faker.person.firstName();
        const email= faker.internet.email();
        const address= faker.location.streetAddress();


        await this.name.fill(Nombre)
        await this.Email.fill(email)
        await this.Address.fill(address)

        
        await page.waitForTimeout(5000);
         //espera implicita
        await this.DesplegablePayment.click()

        const cardNumber=faker.finance.creditCardNumber()
        const cardExpiry=faker.date.future().toISOString().slice(0,7).replace('-','/')
        const cardCvc=faker.finance.creditCardCVV()

        


        await this.CardNumber.fill(cardNumber)
        await this.CardExpiry.fill(cardExpiry)
        await this.CardCVC.fill(cardCvc)



        await this.placeOrderBtn.click()
    }

}

 