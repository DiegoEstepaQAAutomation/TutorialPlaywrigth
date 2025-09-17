import{test,expect} from '@playwright/test'



test('login',async({page}) => {

    await page.goto('http://127.0.0.1:5500/login.html')

    const usuario ='user'
    const password='pass'

    await page.locator('input#username').fill(usuario)

    await page.locator('input#password').fill(password)

    await page.locator('//button[@type=\'submit\']').click()

    await page.waitForTimeout(6000)

    await page.locator('//button[contains(text(),\'Añadir transacción\' )]').click

    await page.waitForTimeout(4000)

    const fecha='2023-12-31'
    const monto='650'
    const descripcion='description testing prueba con variable '

    await page.locator('id=date').fill(fecha)


    await page.locator('id=amount').fill(monto)


    await page.locator('id=description').fill(descripcion)

    await page.waitForTimeout(4000)

    
    await page.locator("//button[contains(text(),'Guardar' )]").click

    await page.pause()
}
);








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