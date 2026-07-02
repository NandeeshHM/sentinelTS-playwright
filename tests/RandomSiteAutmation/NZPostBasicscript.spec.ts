import {test,expect} from '@playwright/test'

test('NZ Post Basic Script',async({page}) =>{
    await page.goto('https://www.nzpost.co.nz/');
    const title:string = await page.title();
    console.log('Title of the page is :',title);

    await expect(page).toHaveTitle('NZ Post Office');


    






}






)