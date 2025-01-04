interface CategoryProduct {
    categoryId: number;
    categoryName: string;
    parentId: number;
    createdAt: string;
    user: {
      address: string;
      age: number;
      firstName: string;
      lastName: string;
      email:string;
      userImage: string;
      imageUrl: string;
    };
  }
  
  export default CategoryProduct;
  