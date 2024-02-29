import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Layout/user/homepage/HomePage';
import { Header } from './Layout/header-footer/Header';
import { Footer } from './Layout/header-footer/Footer';
import Shop from './Layout/user/shop/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/> 
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
