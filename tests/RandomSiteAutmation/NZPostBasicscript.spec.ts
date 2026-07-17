import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/NZPost/HomePage';

test('NZ Post Basic Script', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    const title = await homePage.getTitle();
    console.log('Title of the page is :', title);

    await expect(page).toHaveTitle('NZ Post');
});
