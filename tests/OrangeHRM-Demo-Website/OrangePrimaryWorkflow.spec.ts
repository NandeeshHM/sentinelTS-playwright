/*
import {test, expect} from '@playwright/test'

test ("Primary Workflow @primarytag", async ({page}) =>{

const testWebURL: string = ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.goto(testWebURL);

await expect(page.getByRole('button',{name: ' Login '})).toBeVisible(); 

const title:string = await page.title();
console.log("The title of the website page is ",title);

await expect(title).toContain("OrangeHRM");


//Login Details 

await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123')
await page.getByRole('button',{name: ' Login '}).click(); 

//Main Page loaded verification
const userNameLocator = page.locator('.oxd-userdropdown-name');
const userName = await userNameLocator.textContent();
console.log("Currently logged in user is:", userName?.trim());

//Admin Page Validation 
await page.getByRole('link',{name:'Admin'}).click();

await expect(page.locator('span.oxd-topbar-header-breadcrumb')).toHaveText(/Admin\s*User Management/)







});
*/