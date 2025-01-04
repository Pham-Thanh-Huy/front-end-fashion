interface ProductEntity {
  productId: number;
  listedPrice: number;
  outstanding: boolean;
  productCode: string;
  productDescription: string;
  productDetail: string;
  productName: string;
  productPrice: number;
  createdAt: string;
  imageList: {
    imageUrl: string;
    imageProduct: string;
  }[];
  categoryProduct: {
    categoryId: number;
    categoryName: string;
    parentId: number;
  };
  inventoryList: {
    inventoryId: number,
    quantity: number,
    productSize: {
      productSizeId: number,
      sizeName: string;
    },
    productColor: {
      productColorId: number,
      colorName: string;
    }
  }[];
  user: {
    address: string;
    age: number;
    firstName: string;
    lastName: string;
    email: string;
    userImage: string;
    imageUrl: string;
  };
}

export default ProductEntity;
