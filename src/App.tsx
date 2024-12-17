import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/header-footer/Header'
import Footer from "./layout/header-footer/Footer.tsx";
import Home from './layout/body/home/Home.tsx';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
