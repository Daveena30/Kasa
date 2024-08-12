import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Error from '../pages/Error/Error'
import Rental from '../pages/Rental/Rental'
import Header from '../utilities/Header'
import Footer from '../utilities/Footer'


const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rental" element={<Rental />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Router