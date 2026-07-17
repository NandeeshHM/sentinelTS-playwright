import {test, expect} from '@playwright/test';

test('Primary workflow automation', async({page}) => {


await page.goto('https://automationexercise.com/');

let title:string=await page.title();
console.log('Title of the web page is :',title);

await expect(page).toHaveTitle(/Automation Exercise/);


await page.locator('a[href="/login"]').click();

await page.locator('[data-qa="login-email"]').fill('cvcardiologist@gmail.com');
await page.getByPlaceholder('Password').fill('123456');

await page.getByRole('button', { name: 'Login' }).click();

let errorMessage = await page.locator('p').first().textContent();
await expect(errorMessage).toContain('Your email or password is not valid');

});