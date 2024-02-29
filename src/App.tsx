import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Layout/user/homepage/HomePage';
import { Header } from './Layout/header-footer/Header';
import { Footer } from './Layout/header-footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/> 
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
