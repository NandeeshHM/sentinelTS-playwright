# Playwright + TypeScript Cheatsheet

Quick reference for common Playwright commands used in this project.

## Locators

```ts
page.getByRole('button', { name: 'Submit' });
page.getByLabel('Email');
page.getByPlaceholder('Search...');
page.getByText('Welcome back');
page.getByTestId('login-form');
page.locator('css=.some-class');
page.locator('xpath=//div[@id="x"]'); // last resort only
```

Chaining and filtering:

```ts
page.locator('.product-card').filter({ hasText: 'In Stock' });
page.locator('table tr').nth(2);
page.locator('ul li').first();
page.locator('ul li').last();
```

## Actions

```ts
await page.goto('https://example.com');
await page.click('button#submit');
await page.fill('#email', 'test@example.com');
await page.type('#search', 'shoes', { delay: 50 });
await page.check('#agree');
await page.uncheck('#agree');
await page.selectOption('#country', 'AU');
await page.hover('.menu-item');
await page.press('#input', 'Enter');
await page.keyboard.press('Tab');
await page.setInputFiles('#upload', 'path/to/file.pdf');
```

## Waiting / Auto-wait

```ts
await page.waitForURL('**/dashboard');
await page.waitForLoadState('networkidle');
await page.waitForSelector('.spinner', { state: 'hidden' });
await page.waitForResponse(resp => resp.url().includes('/api/users') && resp.status() === 200);
await page.waitForRequest('**/api/login');
```

Avoid `page.waitForTimeout()` except for quick debugging — never leave it in committed tests.

## Assertions (web-first, auto-retrying)

```ts
await expect(page).toHaveTitle(/Dashboard/);
await expect(page).toHaveURL(/.*dashboard/);
await expect(locator).toBeVisible();
await expect(locator).toBeHidden();
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toHaveText('Welcome');
await expect(locator).toContainText('Welcome');
await expect(locator).toHaveValue('test@example.com');
await expect(locator).toHaveCount(5);
await expect(locator).toHaveAttribute('href', '/home');
await expect(locator).toHaveClass(/active/);
```

## API testing (request context)

```ts
import { request } from '@playwright/test';

const apiContext = await request.newContext({ baseURL: 'https://api.example.com' });
const res = await apiContext.get('/users/1');
expect(res.ok()).toBeTruthy();
const body = await res.json();

const post = await apiContext.post('/users', { data: { name: 'Test' } });
```

## Test structure

```ts
import { test, expect } from '@playwright/test';

test.describe('Login flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('should log in with valid credentials', async ({ page }) => {
    await test.step('enter credentials', async () => {
      await page.getByLabel('Email').fill('user@example.com');
      await page.getByLabel('Password').fill('password123');
    });

    await test.step('submit and verify', async () => {
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page).toHaveURL(/dashboard/);
    });
  });
});
```

## Fixtures (custom)

```ts
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type Fixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
```

## Running tests (this project)

```bash
npx playwright test                       # run all tests
npx playwright test tests/SauceDemo-Website
npx playwright test --project=chromium
npx playwright test --headed
npx playwright test --debug
npx playwright test -g "login"             # run tests matching title
npx playwright show-report                 # open HTML report
npx playwright codegen <url>               # record actions into code
```

## Debugging

```bash
PWDEBUG=1 npx playwright test              # Playwright Inspector
npx playwright test --trace on             # force trace capture
npx playwright show-trace trace.zip
```

## Config notes (playwright.config.ts in this repo)

- `testDir: './tests'`
- `fullyParallel: true`
- `trace: 'on-first-retry'`
- Projects configured: chromium, firefox, webkit
- `retries` and `workers` are CI-aware (`process.env.CI`)
