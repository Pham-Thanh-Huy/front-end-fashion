import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/header-footer/Header";
import CartUtils from "./layout/layout-utils/CartUtils";
import Footer from "./layout/header-footer/Footer";
import Home from "./layout/body/home/Home";
import ShopDetail from "./layout/body/shop/ShopDetail";
import LoadScripts from "./config/LoadScripts";
import Contact from "./layout/body/contact/Contact";
import Blog from "./layout/body/blog/Blog";
import BlogDetail from "./layout/body/blog/BlogDetail";
import About from "./layout/body/about/About";
import Shop from "./layout/body/shop/Shop";
import CartComponents from "./layout/body/cart/CartComponents";
import Checkout from "./layout/body/checkout/Checkout";
import Login from "./layout/body/login/Login.tsx";
import { OrderInformation } from "./layout/body/order-information/OrderInformation.tsx";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <CartUtils />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-detail" element={<ShopDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/cart" element={<CartComponents />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/order-info" element={<OrderInformation />}/>
        </Routes>
        <Footer />
        <LoadScripts />
      </div>
    </BrowserRouter>
  );
}

export default App;
