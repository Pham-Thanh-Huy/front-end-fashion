import ProductEntity from "../entity/ProductEntity";
import {ApiDomain} from "./ApiUtils";
import User from "../entity/User.ts";
import {DeliveryMethod} from "../entity/DeliveryMethod.ts";
import {PaymentMethod} from "../entity/PaymentMethod.ts";
import Orders from "../entity/Order.ts";

export async function getAllProducts(): Promise<ProductEntity[]> {
    try {
        const response = await fetch(`${ApiDomain}/api/product/get/all?page=0&size=20&sort=productId,desc`);
        if (!response.ok) {
            console.log(`[ERROR-FETCH-API-LIST-PRODUCT] ${response.status}: ${response.statusText}`);
            return [];
        }
        const data = await response.json();
        return data.data.content;
    } catch (exception) {
        console.log(`[ERROR-FETCH-API-LIST-PRODUCT] ${exception}`);
        return [];
    }
}

export async function getAllProuctPagination(page: number, size: number): Promise<ProductEntity[]> {
    try {
        const response = await fetch(`${ApiDomain}/api/product/get/all?page=${page}&size=${size}&sort=productId,desc`);
        if (!response.ok) {
            console.log(`[ERROR-FETCH-API-PRODUCT] ${response.status}: ${response.statusText}`);
            return [];
        }
        const data = await response.json();
        return data.data.content;
    } catch (exception) {
        console.log(`[ERROR-FETCH-API-LIST-PRODUCT] ${exception}`);
        return [];
    }
}

export async function getProductById(id: number): Promise<ProductEntity | null> {
    try {
        const response = await fetch(`${ApiDomain}/api/product/get/${id}`)
        if (!response.ok) {
            console.log(`[ERROR-FETCH-API-PRODUCT-BY-ID] ${response.status}: ${response.statusText}`);
            return null;
        }
        const data = await response.json();
        return data.data;
    } catch (exception) {
        console.log(`[ERROR-TO-FETCH-PRODUCT-BY-ID] ${exception}`)
        return null;
    }
}


// @ts-ignore
export const getUserById = async (id: number, token: string): User | null => {
    let user: User | null = null;
    await fetch(`${ApiDomain}/api/user/get/${id}`, {
        method: "GET", headers: {
            "Authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json())
        .then((data) => {
            if (data.code === 200) {
                user = data.data;
            }
        })
        .catch((exception) => {
            console.log(`[ERROR-TO-FETCH-USER-BY-ID] ${exception}`);
            user = null;
        });

    return user;
};


// @ts-ignore
export const getAllDeliveryMethod = async (): DeliveryMethod[] => {
    let deliveryMethod: DeliveryMethod[] = [];
    await fetch(`${ApiDomain}/api/delivery-method/get/all`, {

    }).then((res) => res.json())
        .then((data) => {
            if (data.code === 200) {
                deliveryMethod = data.data;
            }
        })
        .catch((exception) => {
            console.log(`[ERROR-TO-FETCH-DELIVERY-METHOD-BY-ID] ${exception}`);
        });

    return deliveryMethod;
};

// @ts-ignore
export const getAllPaymentMethod = async (): PaymentMethod[] => {
    let paymentMethod: PaymentMethod[] = [];
    await fetch(`${ApiDomain}/api/payment-method/get/all`, {

    }).then((res) => res.json())
        .then((data) => {
            if (data.code === 200) {
                paymentMethod = data.data;
            }
        })
        .catch((exception) => {
            console.log(`[ERROR-TO-FETCH-DELIVERY-METHOD-BY-ID] ${exception}`);
        });

    return paymentMethod;
};


export const addOrderApiUtils = async (json: string, userId: number): Promise<Orders | null> => {
    let order: Orders | null = null;
    try {
        const response = await fetch(`${ApiDomain}/api/order/add?userId=${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        });

        const data = await response.json();
        if (data.code === 200) {
            order = data.data;
            localStorage.removeItem('cart') 
        } else {
            console.log(`[ERROR-TO-FETCH-ADD-ORDER] ${data.message}`);
            order = null;
        }
    } catch (exception) {
        console.log(`[ERROR-TO-FETCH-ADD-ORDER] ${exception}`);
        order = null;
    }

    return order;
};
