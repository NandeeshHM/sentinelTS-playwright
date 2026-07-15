import {test, expect} from '@playwright/test';

test('Primary workflow automation', async({page}) => {


await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');

let title:string=await page.title();
console.log('Title of the web page is :',title);

await expect(page).toHaveTitle(/Automation Exercise/);







});