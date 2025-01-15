import Cart from "../entity/Cart";
import ProductEntity from "../entity/ProductEntity";
import { getProductById } from "./CallApi";


const addCart = async (productId: number, quantity: number,) => {
    const carts: Cart[] = JSON.parse(localStorage.getItem('cart') || '[]');
    //IF EXISTS PRODUCT -->> UPDATE PRODUCT
    const productExist = carts.find(product => product.productId == productId);

    if (productExist) {
        productExist.quantity = quantity;
    } else {
        const product: ProductEntity | null =  await getProductById(productId);
        if (product) {
            const newCartItem: Cart = {
                productId: product.productId,
                listedPrice: product.listedPrice,
                outstanding: product.outstanding,
                productCode: product.productCode,
                productDescription: product.productDescription,
                productDetail: product.productDetail,
                productName: product.productName,
                productPrice: product.productPrice,
                createdAt: product.createdAt,
                quantity: quantity,
                imageUrl: product.imageList[0]?.imageUrl || '',
            }

            carts.push(newCartItem)
        }
    }
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(carts));
}