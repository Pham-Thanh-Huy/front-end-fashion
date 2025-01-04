import ProductEntity from "../entity/ProductEntity";
import { ApiDomain } from "./ApiUtils";

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

export async function getAllProuctPagination(page:number, size:number): Promise<ProductEntity[]> {
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

export async function getProductById(id:number) : Promise<ProductEntity|null>
{
    try{
        const response = await fetch(`${ApiDomain}/api/product/get/${id}`)
        if(!response.ok){
            console.log(`[ERROR-FETCH-API-PRODUCT-BY-ID] ${response.status}: ${response.statusText}`);
            return null;
        }
        const data = await response.json();
        return data.data;
    }catch(exception){
        console.log(`[ERROR-TO-FETCH-PRODUCT-BY-ID] ${exception}`)
        return null;
    }
}