interface Cart {
  productId: number;
  listedPrice: number;
  outstanding: boolean;
  productCode: string;
  productDescription: string;
  productDetail: string;
  productName: string;
  productPrice: number;
  createdAt: string;
  quantity: number,
  imageUrl: string ;
  productColorId: number;
  productColorName: string;
  productSizeId: number;
  productSizeName: string;

}

export default Cart;
