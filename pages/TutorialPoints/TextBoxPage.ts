import { Page, Locator } from '@playwright/test';

export class TextBoxPage {
    readonly page: Page;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly currentAddressInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly elementsMenuButton: Locator;
    readonly checkBoxLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = page.getByLabel('Full Name');
        this.emailInput = page.getByLabel('Email :');
        this.currentAddressInput = page.getByLabel('Current Address :');
        this.passwordInput = page.getByLabel('Password');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.elementsMenuButton = page.getByRole('button', { name: 'Elements' });
        this.checkBoxLink = page.getByRole('link', { name: 'Check Box' });
    }

    async goto() {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');
    }

    async fillForm(fullName: string, email: string, address: string, password: string) {
        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.currentAddressInput.fill(address);
        await this.passwordInput.fill(password);
    }

    async submit() {
        await this.submitButton.click();
    }

    async openCheckBoxPage() {
        // The "Check Box" link is nested under the collapsed "Elements"
        // sidebar accordion and isn't rendered until it's expanded.
        await this.elementsMenuButton.click();
        await this.checkBoxLink.click();
    }
}
