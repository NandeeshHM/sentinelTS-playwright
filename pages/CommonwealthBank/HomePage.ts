import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.commbank.com.au/?ei=mv_cbalogo');
    }

    async getTitle(): Promise<string> {
        return this.page.title();
    }
}
