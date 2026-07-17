//This script is written with writing automation script of Tutorial points website. 


import {test, expect, Locator} from '@playwright/test'

test.only('Test 1: Inbox Scripting',async({page}) =>{
    //Launch the website 
    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');
    const title:string=await page.title();
    console.log("The title of the website is :",title);

    await expect(page).toHaveTitle('Selenium Practice - Text Box');

    //Enter Full name of the candidate 
    await page.getByLabel('Full Name').fill('Shah Ruck Khan');
    await page.getByLabel('Email :').fill('shahruckkhan@gmail.com');
    await page.getByLabel('Current Address :').fill('Mountain Ash Building, Cerner, BLR - 500075');
    await page.getByLabel('Password').fill('Googleiswinning1234');
    await page.getByRole('button', { name: 'Submit' }).click();
    
    await page.waitForTimeout(1000); 


    //Naviagate to Check-Box Link 
    await page.getByRole('link', { name: 'Check Box' }).click();
    await page.locator('#c_bs_1').check();
    await page.waitForTimeout(1000); 







});

