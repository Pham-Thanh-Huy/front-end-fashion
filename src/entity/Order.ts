interface Orders {
    orderId: number;
    address: string;
    createdAt: string;
    status: string;
    totalPrice: number;
    deliveryMethod: {
        deliveryId: number;
        name: string;
        description: string;
        deliveryCost: number;
    };
    paymentMethod: {
        paymentId: number;
        paymentName: string;
        description: string;
        paymentCost: number;
    };
    user: {
        address: string,
        age: number,
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        userImage: string,
        imageUrl: string,
    };
    orderDetailList: {
        orderDetailId: number;
        quantity: number;
        totalPrice: number;
        product: {
            listedPrice: number;
            outstanding: boolean;
            productCode: string;
            productDescription: string;
            productDetail: string;
            productName: string;
            productPrice: number;
            createdAt: string;
            imageList:
            {
                imageUrl: string;
                imageProduct: string;
            }[];

        };
    }[];


}

export default Orders;