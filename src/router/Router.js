import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Error from '../pages/Error/Error'
import Rental from '../pages/Rental/Rental'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

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
