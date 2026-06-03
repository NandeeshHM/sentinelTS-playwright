const {test} = require('@playwright/test');


test('Launch the SauceDemo Website', async({browser}) => {

browser = await browser.newContext();
const page = await browser.newPage();
await page.goto('https://www.saucedemo.com/');  



});



