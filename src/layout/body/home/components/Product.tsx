import React, { useEffect, useState } from 'react';
import ProductEntity from '../../../../entity/ProductEntity';

import { getAllProducts } from '../../../../utils/CallApi';
import { formatVND } from '../../../../utils/FormatUtil';

const Product = () => {
    const [listProduct, setListProduct] = useState<ProductEntity[]>([]);

    useEffect(() => {
        getAllProducts().then((products) => {
            setListProduct(products);
        }).catch(error => {
            console.error("Error fetching products:", error);
            // Set an empty array or show an error message to the user
            setListProduct([]);
        });
    }, []);


    return (
        <React.Fragment>
            <section className="bg0 p-t-23 p-b-140">
                <div className="container">
                    <div className="p-b-10">
                        <h3 className="text-center mb-3 cl5">
                           Sản phẩm mới nhất
                        </h3>
                    </div>  
                    <div className="row">
                        {listProduct.map((product) => (
                            <div key={product.productId} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                {/* Nội dung render cho từng sản phẩm */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src={product.imageList[0].imageUrl} alt="IMG-PRODUCT" />
                                        <a href={`/shop-detail?id=${product.productId}`} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Xem chi tiết
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href={`/shop-detail?id=${product.productId}`} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                {product.productName}
                                            </a>
                                            <span className="stext-105 cl3">
                                                 {formatVND(product.productPrice)}
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="../../../../../public/assets/images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="../../../../../public/assets/images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Load more */}
                    <div className="flex-c-m flex-w w-full p-t-45">
                        <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                            Xem thêm
                        </a>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
};

export default Product;