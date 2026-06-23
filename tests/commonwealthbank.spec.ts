import {test, expect, Locator} from '@playwright/test';

test.only("Commonwealth Bank basic Script", async({page})=>{
    await page.goto('https://www.commbank.com.au/?ei=mv_cbalogo');

    const title:string=await page.title();
    console.log('Title of the page is :',title);
    
    await expect(page).toHaveTitle('CommBank - bank accounts, credit cards, home loans and insurance');













})