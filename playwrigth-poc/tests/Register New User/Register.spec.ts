import{test,expect} from '@playwright/test'
import { faker } from '@faker-js/faker';



test('Register new user',async({page},testInfo) => {


  //const { faker } = await import('@faker-js/faker');


  await page.goto('http://127.0.0.1:5500/register.html');

  const Nombre = faker.person.firstName();
  const edad= faker.number.int({ min: 18, max: 80 });
  
  await page.getByRole('textbox', { name: 'Nombre:' }).fill(Nombre);
  
  await page.getByRole('textbox', { name: 'Apellido:' }).fill('armando');

  
  await page.getByRole('spinbutton', { name: 'Edad:' }).fill(edad.toString());

  const sex='F';
  await page.getByLabel('País:').selectOption('Bolivia');
  await page.getByRole('radio', { name: sex }).check();
  
  await page.screenshot({path: 'screenshots/Register10.png'})
 
  
  await page.getByRole('textbox', { name: 'Correo electrónico:' }).fill('armandobarrera@gmail.com');
  await page.getByRole('checkbox', { name: 'Lunes' }).check();
  await page.getByRole('checkbox', { name: 'Martes' }).check();
  await page.getByRole('checkbox', { name: 'Miercoles' }).check();
  await page.getByRole('checkbox', { name: 'Jueves' }).check();
  await page.getByRole('checkbox', { name: 'Viernes' }).check();
  //await page.getByRole('button', { name: 'Foto de perfil:' }).click();

  //strong[contains(.,'Nombre' )]/ancestor::p

  await page.getByRole('button', { name: 'Foto de perfil:' }).setInputFiles('Images/Screenshot_1.png');
  const page1Promise = page.waitForEvent('popup');

  await page.getByRole('button', { name: 'Guardar' }).click();

  const page1 = await page1Promise;

  await expect(page1).toHaveTitle('Summary')

  const CurrentName = await page1.locator("//strong[contains(.,'Nombre' )]/ancestor::p").textContent();

  
 // await page1.screenshot({path: 'screenshots/Register20.png', fullPage:true})

  await testInfo.attach('Register20', {
    body: await page1.screenshot(),
    contentType: 'image/png',
  })

  expect(CurrentName).toContain(Nombre)

})
