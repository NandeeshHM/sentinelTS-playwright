import {test, expect} from '@playwright/test'

test.only ('google workflow', async ({page}) => {

let testwebpage = await page.goto('www.google.com');

await page.locator('.InXdpd').isVisible('Google')

await testwebpage.toTakeScreenshot()

});