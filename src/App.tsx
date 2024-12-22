import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/header-footer/Header";
import CartUtils from "./layout/layout-utils/CartUtils";
import Footer from "./layout/header-footer/Footer";
import Home from "./layout/body/home/Home";
import Shop from "./layout/body/shop/Shop";
import ShopDetail from "./layout/body/shop/ShopDetail";
import LoadScripts from "./config/LoadScripts";
import Contact from "./layout/body/contact/Contact";
import Blog from "./layout/body/blog/Blog";
import Cart from "./layout/body/cart/Cart";
import BlogDetail from "./layout/body/blog/BlogDetail";
import About from "./layout/body/about/About";

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
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <LoadScripts />
      </div>
    </BrowserRouter>
  );
}

export default App;
