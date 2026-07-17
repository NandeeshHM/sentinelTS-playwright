import { test, expect, request } from '@playwright/test';
import { APiUtils, OrderResult } from './utils/APiUtils';

const loginPayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
const orderPayLoad = { orders: [{ country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };
const fakePayLoadOrders = { data: [], message: "No Orders" };

let response: OrderResult;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext, loginPayLoad);
    response = await apiUtils.createOrder(orderPayLoad);
});

//create order is success
test('@SP Place the order', async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client");

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            const body = JSON.stringify(fakePayLoadOrders);
            await route.fulfill({ body });
            //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
        });

    const ordersResponse = page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    await page.locator("button[routerlink*='myorders']").click();
    await ordersResponse;

    console.log(await page.locator(".mt-4").textContent());
});
