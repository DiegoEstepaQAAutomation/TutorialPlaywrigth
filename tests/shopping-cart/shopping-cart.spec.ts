import{test,expect} from '@playwright/test'

test('Buying new products',async({page},testInfo) => 
    {
         await page.goto('http://127.0.0.1:5500/')


         for(let i=0;i<=5;i++)
         {

            await page.locator("//h5[contains(.,'Producto 1' )]/ancestor::div[contains(@class,'card-body' )]//button").click()

        };

         

         await page.locator("//h5[contains(.,'Producto 2' )]/ancestor::div[contains(@class,'card-body' )]//button").click()

         await page.locator("//h5[contains(.,'Producto 3' )]/ancestor::div[contains(@class,'card-body' )]//button").click()

         await page.locator("button#view-cart-btn").click()

         const Producto1Cantidad=await page.locator("//tbody[@id='cart-items']//td[contains(.,'Producto 1' )]/ancestor::tr//td[3]").textContent()
         const Producto2Cantidad=await page.locator("//tbody[@id='cart-items']//td[contains(.,'Producto 2' )]/ancestor::tr//td[3]").textContent()

        expect(Producto1Cantidad).toEqual('6');
        expect(Producto2Cantidad).toEqual('1');    

    });


    //tbody[@id='cart-items']//td[contains(.,'Producto 1' )]/ancestor::tr//td[3]

    
    //button#view-cart-btn
    //h5[contains(.,'Producto 1' )]/ancestor::div[contains(@class,'card-body' )]//button




    
    
    
    
    
    
    
    
    //♥abigail♥