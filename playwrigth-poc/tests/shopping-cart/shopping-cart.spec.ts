import{test,expect} from '@playwright/test'
import { LoginPage } from '../../PageObjects/Login/LoginPage';
import { NavigateTo } from '../../PageObjects/NavigateTO/NavigateTo';
import { faker } from '@faker-js/faker';
import { ShoppingCart } from '../../PageObjects/AddProduct/Shopping-cart';

test('Buying new products',async({page},testInfo) => 
    {

        

         

         await test.step('Login in the application', async () => {
            //instancia de login
            //instancia de navegacion
         const navigateTo = new NavigateTo(page);
         //ir a la pagina principal de carrito de compras
         await navigateTo.goToShopingcart()

         });

        await test.step('Add products to the shopping cart and checkout', async () => {
            //datos  para el formulario de compra y compra

                    //instancia de carrito de compras
         const shoppingCart = new ShoppingCart(page);
         //agregar productos al carrito
         await shoppingCart.AddProducts(page)
            });
         

        
    })



    //a[@href='#paymentInfo']
//*[@class='card-link']

    

    //tbody[@id='cart-items']//td[contains(.,'Producto 1' )]/ancestor::tr//td[3]

    
    //button#view-cart-btn
    //h5[contains(.,'Producto 1' )]/ancestor::div[contains(@class,'card-body' )]//button


    //input[@id='name']
    //input[@id='email']
    //input[@id='address']


    //button[contains(.,'Checkout' )]

    //id=checkout-btn

    //#checkout-btn
    
    //html/body/div/form/div[2]/div[1]/a//♥abigail♥
    
    
    
    
   //), 