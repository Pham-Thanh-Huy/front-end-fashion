interface Post {
    postId: number;
    postTitle: string;
    postImage: string;
    imageUrl: string;
    postDetail: string;
    createdAt: string;
    user: {
        address: string,
        age: number,
        firstName: string;
        lastName: string;
        email: string;
        userImage: string;
        imageUrl: string;
    },
    categoryPost: {
        categoryId: number,
        categoryName: string,
        parentId: number
    }

}

export default Post;