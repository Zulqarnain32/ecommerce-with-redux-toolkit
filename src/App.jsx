import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import("./App.css")
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
           <Route path = "/" element = {<Home/>}/>
           <Route path = "/cart" element = {<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
