import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Error from '../pages/error/Error'
import Rental from '../pages/rental/Rental'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'

const Router = () => {

  return (
    <BrowserRouter >
    <Nav/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rental/:id" element={<Rental />} />
      <Route path="*" element={<Error />} />
      <Route path="/404" element={<Error />} />
    </Routes>
    
    <Footer/>
    </BrowserRouter>
  )
}

export default Router
