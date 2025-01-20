import React, { useEffect, useState } from 'react';
import BreadCrumb from './components/BreadCrumb';
import ProductEntity from '../../../entity/ProductEntity';
import { getProductById } from '../../../utils/CallApi';
import { useLocation, useNavigate } from 'react-router-dom';
import './css/shop-detail.style.css'
import { formatVND } from '../../../utils/FormatUtil';
import { useForm } from 'react-hook-form';
import { addCart } from "../../../utils/AddCartUtil.ts";
import { toast } from 'react-toastify';

const ShopDetail = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [product, setProduct] = useState<ProductEntity | null>();
    const location = useLocation();
    const navigate = useNavigate();
    const searchParam = new URLSearchParams(location.search);
    const idString = searchParam.get("id");
    const id = idString ? parseInt(idString, 10) : NaN;
    const [quantity, setQuantity] = useState<number | null>(null);

    const [inventoryId, setInventoryId] = useState<number | null>(null);
    const [productSizeId, setProductSizeId] = useState<number>(0);
    const [productColorId, setProductColorId] = useState<number>(0);
    useEffect(() => {
        if (isNaN(id)) {
            navigate(-1); // Quay lại nếu id không hợp lệ
            return; // Dừng lại nếu id không hợp lệ
        }

        // Lấy sản phẩm theo ID
        getProductById(id)
            .then((response) => {
                if (!response || Object.keys(response).length === 0) {
                    navigate(-1); // Nếu response là null, undefined, hoặc đối tượng rỗng thì điều hướng về trang trước
                } else setProduct(response); // Nếu response hợp lệ, thì lưu dữ liệu vào state

            })
            .catch((error) => console.log(error)); // Bắt lỗi nếu có lỗi xảy ra trong quá trình fetch


    }, [id, navigate, inventoryId]); // Chạy khi id thay đổi

    useEffect(() => {
        const inventory = product?.inventoryList.find(value => value.productColor.productColorId === productColorId && value.productSize.productSizeId === productSizeId);

        if (inventory) setQuantity(inventory.quantity);
        else setQuantity(null)

    }, [productSizeId, productColorId])

    useEffect(() => {
        // Chỉ khởi tạo slick khi product đã có và imageList là mảng hợp lệ
        if (product && Array.isArray(product.imageList) && product.imageList.length > 0) {
            $('.wrap-slick3').each(function () {
                // Kiểm tra xem slick đã được khởi tạo chưa
                if (!$(this).find('.slick3').hasClass('slick-initialized')) {
                    $(this).find('.slick3').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true,
                        infinite: true,
                        autoplay: false,
                        autoplaySpeed: 6000,
                        arrows: true,
                        appendArrows: $(this).find('.wrap-slick3-arrows'),
                        prevArrow: '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
                        nextArrow: '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
                        dots: true,
                        appendDots: $(this).find('.wrap-slick3-dots'),
                        dotsClass: 'slick3-dots',
                        customPaging: function (slick, index) {
                            const portrait = $(slick.$slides[index]).data('thumb');
                            return `<img src="${portrait}" /><div class="slick3-dot-overlay"></div>`;
                        },
                    });
                }
            });
        }
    }, [product]);

    async function onSubmit(data: any) {
        console.log(data);
        // Kiểm tra nếu product?.productId có tồn tại
        if (product?.productId) {
            // Gọi addCart với await vì addCart là hàm bất đồng bộ
            const add = await addCart(product.productId, data.quantity, Number(data.size), Number(data.color));

            if (add) {
                // Nếu addCart trả về true, thực hiện hành động cần thiết
                toast.success("Sản phẩm đã được thêm vào giỏ hàng.");
            }

        }

    }

    return (<React.Fragment>
        <div>
            {/* breadcrumb */}
            <BreadCrumb />
            {/* Product Detail */}
            <section className="sec-product-detail bg0 p-t-65 p-b-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-7 p-b-30">
                            <div className="p-l-25 p-r-30 p-lr-0-lg">
                                <div className="wrap-slick3 flex-sb flex-w">
                                    <div className="wrap-slick3-dots" />
                                    <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                                    <div className="slick3 gallery-lb">
                                        {product?.imageList.map((value) => (
                                            <div className="item-slick3" data-thumb={value.imageUrl}>
                                                <div className="wrap-pic-w pos-relative">
                                                    <img src={value.imageUrl} alt="IMG-PRODUCT" />
                                                    <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                                        href={value.imageUrl}>
                                                        <i className="fa fa-expand" />
                                                    </a>
                                                </div>
                                            </div>))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5 p-b-30">
                            <div className="p-r-50 p-t-5 p-lr-0-lg">
                                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                    {product?.productName}
                                </h4>
                                <span className="mtext-106 cl2">
                                    {product ? formatVND(product?.productPrice) : 'loading....'}
                                </span>
                                <p className="cl2">
                                    Số lượng: <b>{quantity === null ? 'Vui chọn màu sắc và size đầy đủ' : quantity < 0 ? 'Hết hàng' : quantity}</b>
                                </p>
                                <p className="stext-102 cl3 p-t-23">
                                    {product?.productDetail}
                                </p>
                                {/*  */}
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="p-t-33">
                                        <div className="flex-w mb-2 flex-r-m p-b-10">
                                            <div className="size-203 flex-c-m respon6">
                                                Màu sắc
                                            </div>
                                            <div className="size-204 respon6-next">
                                                <div className="custom-select-container bor8 bg0">
                                                    <select
                                                        className="custom-select"
                                                        {...register('color', { required: 'Vui lòng chọn màu sản phẩm' })}
                                                        onChange={(e) => {
                                                            const selectedColorId = e.target.value;
                                                            setProductColorId(Number(selectedColorId));
                                                            if (selectedColorId === '') {
                                                                setInventoryId(null);
                                                            } else {

                                                                const selectedInventoryId = e.target.selectedOptions[0].getAttribute('data-inventory-id');
                                                                // @ts-ignore
                                                                setInventoryId(Number(selectedInventoryId));
                                                            }
                                                        }}
                                                    >
                                                        <option className="custom-option" value=''
                                                        >
                                                            Chọn màu
                                                        </option>
                                                        {product?.inventoryList.map((value) => (<option
                                                            key={value.productColor.productColorId}
                                                            className="custom-option"
                                                            value={value.productColor.productColorId}
                                                            data-inventory-id={value.inventoryId}
                                                        >
                                                            {value.productColor.colorName}
                                                        </option>))}
                                                    </select>

                                                    <div className="custom-dropDownSelect" />
                                                </div>
                                                {errors.color?.message && <span
                                                    style={{
                                                        color: 'red',
                                                        margin: '10px'
                                                    }}><>{errors.color.message}</></span>}
                                            </div>
                                        </div>

                                        <div className="flex-w mb-2 flex-r-m p-b-10">
                                            <div className="size-203 flex-c-m respon6">
                                                Kích cỡ (size)
                                            </div>

                                            <div className="size-204 respon6-next">
                                                <div className="custom-select-container bor8 bg0">
                                                    <select className="custom-select"
                                                        {...register('size', { required: 'Vui lòng chọn size của sản phẩm' })}
                                                        onChange={(e) => setProductSizeId(Number(e.target.value))}
                                                    >
                                                        <option className="custom-option" value=''>Chọn size
                                                        </option>
                                                        {inventoryId != null ? (product?.inventoryList
                                                            .filter((product) => product.inventoryId === inventoryId)
                                                            .map((value) => (
                                                                <option data-id={value.productSize.sizeName}
                                                                    key={value.productSize.productSizeId}
                                                                    className="custom-option"
                                                                    value={value.productSize.productSizeId}>
                                                                    {value.productSize.sizeName}
                                                                </option>))) : (
                                                            <option className="custom-option" value=''>Chọn màu trước
                                                                khi chọn size</option>)}
                                                    </select>
                                                    <div className="custom-dropDownSelect" />
                                                </div>
                                                {errors.size?.message && <div
                                                    style={{ color: 'red', margin: '10px' }}><>{errors.size.message}</>
                                                </div>}
                                            </div>
                                        </div>

                                        <div className="flex-w mb-2 flex-r-m p-b-10">
                                            <div className="size-203 flex-c-m respon6">
                                                Số lượng
                                            </div>
                                            <div className="size-204 respon6-next">
                                                <div className="custom-select-container">
                                                    <input type="number" {...register('quantity', {
                                                        min: {
                                                            value: 1, message: 'Số lượng sản phẩm phải lớn hơn 1'
                                                        }, valueAsNumber: true
                                                    })}
                                                        min={0}
                                                        defaultValue={1}
                                                    />
                                                </div>
                                                {errors.quantity?.message && <span style={{
                                                    color: 'red', margin: '10px'
                                                }}><>{errors.quantity.message}</></span>}
                                            </div>
                                        </div>

                                        <div className="flex-w p-b-10">
                                            <div className="size-204 flex-w flex-m respon6-next">
                                                <button style={{ marginLeft: '10px' }}
                                                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                    Thêm vào giỏ hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/*  */}
                                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                    <div className="flex-m bor9 p-r-10 m-r-11">
                                        <a href="#"
                                            className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                                            data-tooltip="Add to Wishlist">
                                            <i className="zmdi zmdi-favorite" />
                                        </a>
                                    </div>
                                    <a href="#"
                                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                        data-tooltip="Facebook">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#"
                                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                        data-tooltip="Twitter">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#"
                                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                        data-tooltip="Google Plus">
                                        <i className="fa fa-google-plus" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bor10 m-t-50 p-t-43 p-b-40">
                        {/* Tab01 */}
                        <div className="tab01">
                            {/* Nav tabs */}
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item p-b-10">
                                    <a className="nav-link active" data-toggle="tab" href="#description" role="tab">Mô
                                        tả</a>
                                </li>
                                <li className="nav-item p-b-10">
                                    <a className="nav-link" data-toggle="tab" href="#information" role="tab">Thông
                                        tin về sản phẩm</a>
                                </li>
                                {/* <li className="nav-item p-b-10">
                                        <a className="nav-link" data-toggle="tab" href="#reviews" role="tab">Đánh giá sản phẩm</a>
                                    </li> */}
                            </ul>
                            {/* Tab panes */}
                            <div className="tab-content p-t-43">
                                {/* - */}
                                <div className="tab-pane fade show active" id="description" role="tabpanel">
                                    <div className="how-pos2 p-lr-15-md">
                                        <p className="stext-102 cl6">
                                            {product?.productDescription}
                                        </p>
                                    </div>
                                </div>
                                {/* - */}
                                <div className="tab-pane fade" id="information" role="tabpanel">
                                    <div className="row">
                                        <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                            <ul className="p-lr-28 p-lr-15-sm">
                                                <li className="flex-w flex-t p-b-7">
                                                    <span className="stext-102 cl3 size-205">
                                                        Weight
                                                    </span>
                                                    <span className="stext-102 cl6 size-206">
                                                        0.79 kg
                                                    </span>
                                                </li>
                                                <li className="flex-w flex-t p-b-7">
                                                    <span className="stext-102 cl3 size-205">
                                                        Dimensions
                                                    </span>
                                                    <span className="stext-102 cl6 size-206">
                                                        110 x 33 x 100 cm
                                                    </span>
                                                </li>
                                                <li className="flex-w flex-t p-b-7">
                                                    <span className="stext-102 cl3 size-205">
                                                        Materials
                                                    </span>
                                                    <span className="stext-102 cl6 size-206">
                                                        60% cotton
                                                    </span>
                                                </li>
                                                <li className="flex-w flex-t p-b-7">
                                                    <span className="stext-102 cl3 size-205">
                                                        Color
                                                    </span>
                                                    <span className="stext-102 cl6 size-206">
                                                        Black, Blue, Grey, Green, Red, White
                                                    </span>
                                                </li>
                                                <li className="flex-w flex-t p-b-7">
                                                    <span className="stext-102 cl3 size-205">
                                                        Size
                                                    </span>
                                                    <span className="stext-102 cl6 size-206">
                                                        XL, L, M, S
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* - */}
                                <div className="tab-pane fade" id="reviews" role="tabpanel">
                                    <div className="row">
                                        <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                            <div className="p-b-30 m-lr-15-sm">
                                                {/* Review */}
                                                {/* <div className="flex-w flex-t p-b-68">
                                                        <div className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                                                            <img src="../../../../public/assets/images/avatar-01.jpg" alt="AVATAR" />
                                                        </div>
                                                        <div className="size-207">
                                                            <div className="flex-w flex-sb-m p-b-17">
                                                                <span className="mtext-107 cl2 p-r-20">
                                                                    Ariana Grande
                                                                </span>
                                                                <span className="fs-18 cl11">
                                                                    <i className="zmdi zmdi-star" />
                                                                    <i className="zmdi zmdi-star" />
                                                                    <i className="zmdi zmdi-star" />
                                                                    <i className="zmdi zmdi-star" />
                                                                    <i className="zmdi zmdi-star-half" />
                                                                </span>
                                                            </div>
                                                            <p className="stext-102 cl6">
                                                                Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos
                                                            </p>
                                                        </div>
                                                    </div> */}
                                                {/* Add review */}
                                                {/* <form className="w-full">
                                                        <h5 className="mtext-108 cl2 p-b-7">
                                                            Add a review
                                                        </h5>
                                                        <p className="stext-102 cl6">
                                                            Your email address will not be published. Required fields are marked *
                                                        </p>
                                                        <div className="flex-w flex-m p-t-50 p-b-23">
                                                            <span className="stext-102 cl3 m-r-16">
                                                                Your Rating
                                                            </span>
                                                            <span className="wrap-rating fs-18 cl11 pointer">
                                                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                                <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                                <input className="dis-none" type="number" name="rating" />
                                                            </span>
                                                        </div>
                                                        <div className="row p-b-25">
                                                            <div className="col-12 p-b-5">
                                                                <label className="stext-102 cl3" htmlFor="review">Your review</label>
                                                                <textarea className="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10" id="review" name="review" defaultValue={""} />
                                                            </div>
                                                            <div className="col-sm-6 p-b-5">
                                                                <label className="stext-102 cl3" htmlFor="name">Name</label>
                                                                <input className="size-111 bor8 stext-102 cl2 p-lr-20" id="name" type="text" name="name" />
                                                            </div>
                                                            <div className="col-sm-6 p-b-5">
                                                                <label className="stext-102 cl3" htmlFor="email">Email</label>
                                                                <input className="size-111 bor8 stext-102 cl2 p-lr-20" id="email" type="text" name="email" />
                                                            </div>
                                                        </div>
                                                        <button className="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                                                            Submit
                                                        </button>
                                                    </form> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
                    <span className="stext-107 cl6 p-lr-25">
                        {product?.productCode}
                    </span>
                    <span className="stext-107 cl6 p-lr-25">
                        Danh mục: {product?.categoryProduct.categoryName}
                    </span>
                </div>
            </section>
        </div>


    </React.Fragment>);
};

export default ShopDetail;