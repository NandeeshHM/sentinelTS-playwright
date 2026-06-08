import {test, expect} from '@playwright/test'

test.use({
    viewport: null,
    launchOptions: {
        args: ['--start-maximized']
    }
});

test.only("Walmart Career Page Automation", async({page})=> {

    // Step 1: Launch
    await page.goto("https://tech.walmart.com/");
    console.log("Title:", await page.title());

    // Step 2: Search
    await page.locator('input#job-keyword').fill('SDET');
    await page.locator('button[title="Submit and search open careers"]').click();

    // Step 3: Wait for results page to fully hydrate
    await page.waitForURL('**/results**');
    await page.waitForLoadState('domcontentloaded');
    
    await page.waitForSelector('[aria-label="Add your location"]', { timeout: 15000 });
    await page.locator('[aria-label="Add your location"]').click();

    // Step 4: Wait for radio to appear, then select
    await page.waitForSelector('input[name="location-radius"]', { timeout: 10000 });
    await page.getByLabel('Within 60 miles').click();

    // Step 5: Save location
    await page.waitForSelector('button:has-text("Save location")', { timeout: 5000 });
    await page.locator('button:has-text("Save location")').click();

    await page.waitForTimeout(5000);
})