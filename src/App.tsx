import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Layout/user/homepage/HomePage';
import { Header } from './Layout/user/header-footer/Header';
import { Footer } from './Layout/user/header-footer/Footer';
import Shop from './Layout/user/shop/Shop';
import ShopDetail from './Layout/user/shop-detail/ShopDetail';
import Blog from './Layout/user/blog/Blog';
import BlogDetail from './Layout/user/blog-detail/BlogDetail'
import ContactUs from './Layout/user/contact-us/ContactUs';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/> 
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop-detail" element={<ShopDetail />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog-detail" element={<BlogDetail/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
