import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.locator('a[href="/login"]');
        this.emailInput = page.locator('[data-qa="login-email"]');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator('p').first();
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/');
    }

    async openLoginForm() {
        await this.loginLink.click();
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage(): Promise<string | null> {
        return this.errorMessage.textContent();
    }
}
