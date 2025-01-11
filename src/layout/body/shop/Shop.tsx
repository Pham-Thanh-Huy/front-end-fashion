/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProductEntity from '../../../entity/ProductEntity';
import { getAllProuctPagination } from '../../../utils/CallApi';
import { formatVND } from '../../../utils/FormatUtil';


const Shop = () => {
    const [listProduct, setListProduct] = useState<ProductEntity[]>([]);
    const [page, setPage] = useState<number>(0);
    const [sizePage, setSizePage] = useState<number>(10);

    useEffect(() => {
        getAllProuctPagination(page, sizePage).then((products) => {
            setListProduct(products);
        }).catch(error => {
            console.error("Error fetching products:", error);
            // Set an empty array or show an error message to the user
            setListProduct([]);
        })
    }, []);
    return (
        <React.Fragment>
            {/* Product */}
            <div className="bg0 m-t-23 p-b-140">
                <div className="container">
                    <Navbar />
                    <div className="row ">
                        {listProduct.map((product) => (
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src={product.imageList[0].imageUrl} alt="IMG-PRODUCT" />
                                        <a href={`/shop-detail?id=${product.productId}`} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                           Xem chi tiết
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                {product.productName}
                                            </a>
                                            <span className="stext-105 cl3">
                                                {formatVND(product.productPrice)}
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="../../../../public/assets/images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="../../../../public/assets/images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Pagination */}
                        <div className="flex-c-m flex-w w-full p-t-38">
                            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1">
                                1
                            </a>
                            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
                                2
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Shop;