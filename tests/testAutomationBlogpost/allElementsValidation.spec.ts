import { test, expect} from '@playwright/test'

test ('Complete validation of all elements', async({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/')
let title:string=await page.title();
console.log('Title of the page is :', title);

const header = page.locator('h1', { hasText: 'Automation Testing Practice' });
await expect(header).toBeVisible();

await page.getByPlaceholder('Enter Name').fill("Abraham Lincoln");
await page.getByPlaceholder('Enter EMail').fill("abraham.lincoln@gmail.com");
await page.getByPlaceholder('Enter Phone').fill("91+8951564785");

await page.getByLabel('Address:').fill('Bombay House, 24 Homi Mody Street, Fort, Mumbai, Maharashtra, 400001, India');
await page.getByRole('radio', { name: 'Male', exact: true }).check();

await page.getByRole('checkbox', { name: 'Monday' }).check();
await page.getByRole('checkbox', { name: 'Friday' }).check();


await page.getByLabel('Country:').selectOption('United States');

await page.getByLabel('Colors:').selectOption('Green');
await page.getByLabel('Sorted List:').selectOption('Deer');

;
});