import { APIRequestContext } from '@playwright/test';

export type LoginPayload = { userEmail: string; userPassword: string };
export type OrderPayload = { orders: { country: string; productOrderedId: string }[] };
export type OrderResult = { token: string; orderId: string };

export class APiUtils {
    constructor(private apiContext: APIRequestContext, private loginPayLoad: LoginPayload) {}

    async getToken(): Promise<string> {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
            data: this.loginPayLoad
        }); // 200, 201
        const loginResponseJson = await loginResponse.json();
        const token = loginResponseJson.token;
        console.log(token);
        return token;
    }

    async createOrder(orderPayLoad: OrderPayload): Promise<OrderResult> {
        const token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
            data: orderPayLoad,
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        });

        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        const orderId = orderResponseJson.orders[0];

        return { token, orderId };
    }
}
