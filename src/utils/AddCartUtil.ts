import Cart from "../entity/Cart";
import {getProductById} from "./CallApi";

export const addCart = async (productId: number, quantity: number, productSizeId: number, productColorId: number): Promise<boolean> => {
    // Get cart from localStorage
    const carts: Cart[] = JSON.parse(localStorage.getItem('cart') || '[]');

    // Get product details from API
    const product = await getProductById(productId);
    if (!product) {
        alert('Không tìm thấy sản phẩm');
        return false;
    }


    const existingCartItem = carts.find(product =>
        product.productId === productId &&
        product.productColorId === productColorId &&
        product.productSizeId === productSizeId
    );

    const inventory = product.inventoryList.find(inventory =>
        inventory.productColor.productColorId === productColorId &&
        inventory.productSize.productSizeId === productSizeId
    );

    if(!inventory){
        alert('Sản phẩm không tồn tại màu sắc và size này');
        return false;
    }

    if (inventory.quantity < quantity) {
        alert('Sản phẩm trong kho ít hơn sản phẩm bạn định mua');
        return false;
    }

    if (existingCartItem) {
        existingCartItem.quantity = quantity;
    } else {
        // If product doesn't exist in the cart, add new item
        const newCartItem: Cart = {
            productId: product.productId,
            listedPrice: product.listedPrice,
            outstanding: product.outstanding,
            productCode: product.productCode,
            productDescription: product.productDescription,
            productDetail: product.productDetail,
            productName: product.productName,
            productPrice: product.productPrice,
            productColorId: inventory.productColor.productColorId,
            productColorName: inventory.productColor.colorName,
            productSizeId: inventory.productSize.productSizeId,
            productSizeName:inventory.productSize.sizeName,
            createdAt: product.createdAt,
            quantity: quantity,
            imageUrl: product.imageList[0]?.imageUrl || '',
        };
        carts.push(newCartItem);
    }

    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(carts));

    return true;
};

export const getCart = (): Cart[] => {
    const carts: Cart[] = JSON.parse(localStorage.getItem('cart') || '[]');
    return carts;
}
