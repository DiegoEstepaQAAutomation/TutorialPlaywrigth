import{test,expect} from '@playwright/test'
import { LoginPage } from '../../PageObjects/Login/LoginPage';
import { AddTransaction } from '../../PageObjects/AddTransaction/AddTransaction';
import { NavigateTo } from '../../PageObjects/NavigateTO/NavigateTo';

test('login',async({page}) => {

   // await page.goto('http://127.0.0.1:5500/login.html')

   /* const usuario ='user'
    const password='pass'

    await page.locator('input#username').fill(usuario)

    await page.locator('input#password').fill(password)

    await page.locator('//button[@type=\'submit\']').click()*/
    const navigateTo = new NavigateTo(page); 
    const loginPage = new LoginPage(page);
    const addTransaction = new AddTransaction(page);

    //await loginPage.Fillusername()

    //await loginPage.FillPassword()
    //await loginPage.ClickonLoginButton()

    const { faker } = await import('@faker-js/faker');

    const fecha='2023-12-31'
    const monto=faker.number.int({ min: 100, max: 1000 }).toString()
    const descripcion=faker.science.unit().toString()

     await navigateTo.goToHomePage()
     await loginPage.doLogin('user','pass')
     await addTransaction.AddTransaction(fecha,monto,descripcion)

     


  /*    await page.waitForTimeout(6000)

    await page.locator("//button[contains(text(),'Añadir transacción' )]").click

    await page.waitForTimeout(4000)

    const fecha='2023-12-31'
    const monto='650'
    const descripcion='description testing prueba con variable '

    await page.locator('id=date').fill(fecha)


    await page.locator('id=amount').fill(monto)


    await page.locator('id=description').fill(descripcion)

    await page.waitForTimeout(4000)

    
    await page.locator("//button[contains(text(),'Guardar' )]").click
    */
    await page.pause()
    expect(await addTransaction.GetLatestTransactionDate('1')).toContain(fecha)
}
);




test('Prueba Page Login',async({page}) => {

  await page.goto('http://127.0.0.1:5500/login.html')

   /* const usuario ='user'
    const password='pass'

    await page.locator('input#username').fill(usuario)

    await page.locator('input#password').fill(password)

    await page.locator('//button[@type=\'submit\']').click()*/

    const loginPage = new LoginPage(page);

    await loginPage.doLogin('user','pass')
    

});





test('asertion', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/login.html');
  await expect(page.getByRole('button', { name: 'Editar' })).toBeVisible();
  await expect(page.locator('#transactions-list')).toContainText('prueba');
  await page.goto('http://127.0.0.1:5500/login.html');
  await expect(page.getByRole('textbox', { name: 'Nombre de usuario:' })).toHaveValue('user');
});




//input[@id='username']

//input[@id='password']

//button[contains(text(),'Iniciar sesión' )]

//button[contains(text(),'Guardar' )]

//button[@type='submit']

//button[@class='btn btn-primary mb-3']

//button[contains(text(),'Añadir transacción' )]

//css input#id username
//user pass


//button[@data-id =1]

//h5[contains(.,'Producto 1' )]/ancestor::div[contains(@class,'card-body' )]//button