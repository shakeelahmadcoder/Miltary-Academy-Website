import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Blog from './components/Blog'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/gallery' element={<Gallery/>}></Route>
    <Route path='/blog' element={<Blog/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App