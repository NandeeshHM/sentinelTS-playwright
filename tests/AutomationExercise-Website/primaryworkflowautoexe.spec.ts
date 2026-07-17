import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/AutomationExercise/LoginPage';

test('Primary workflow automation', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    const title = await page.title();
    console.log('Title of the web page is :', title);
    await expect(page).toHaveTitle(/Automation Exercise/);

    await loginPage.openLoginForm();
    await loginPage.login('cvcardiologist@gmail.com', '123456');

    await expect(loginPage.errorMessage).toContainText('Your email or password is incorrect!');
});
