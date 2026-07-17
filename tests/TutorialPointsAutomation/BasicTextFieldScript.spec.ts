//This script is written with writing automation script of Tutorial points website.

import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../../pages/TutorialPoints/TextBoxPage';

test('Test 1: Inbox Scripting', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);

    //Launch the website
    await textBoxPage.goto();
    const title = await page.title();
    console.log("The title of the website is :", title);
    await expect(page).toHaveTitle('Selenium Practice - Text Box');

    //Enter Full name of the candidate
    await textBoxPage.fillForm(
        'Shah Ruck Khan',
        'shahruckkhan@gmail.com',
        'Mountain Ash Building, Cerner, BLR - 500075',
        'Googleiswinning1234'
    );
    await textBoxPage.submit();

    //Navigate to Check-Box Link
    await textBoxPage.openCheckBoxPage();
    await page.locator('#c_bs_1').check();
    await expect(page.locator('#c_bs_1')).toBeChecked();
});
