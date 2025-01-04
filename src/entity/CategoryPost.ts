interface CategoryPost {
    categoryId: number;
    categoryName: string;
    parentId: number;
    createdAt: string;
    user: {
        address: string;
        age: number;
        firstName: string;
        lastName: string;
        userImage: string;
        imageUrl: string;
        email : string
    };
}

export default CategoryPost;
