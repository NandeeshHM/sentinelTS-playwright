import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/CommonwealthBank/HomePage';

test("Commonwealth Bank basic Script", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    const title = await homePage.getTitle();
    console.log('Title of the page is :', title);

    await expect(page).toHaveTitle('CommBank - bank accounts, credit cards, home loans and insurance');
});
