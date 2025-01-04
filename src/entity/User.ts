interface User {
    userId: number;
    address: string;
    age: number;
    phoneNumber: string;
    firstName: string;
    isActive: boolean;
    lastName: string;
    sex: string;
    email: string;
    userImage: string;
    imageUrl: string;
    username: string;
    authorizeList: { 
        authorizeId :  number,
        authorizeName: string; }[]; // Danh sách các quyền của user
}

export default User;