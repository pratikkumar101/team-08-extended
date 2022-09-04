import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Pets from './components/Pets'
import Shop from './components/Shop'
import Donate from './components/Donate'
import Pet from './components/Pet'
import Cart from './components/Cart'
import Products from './components/Shop'
import SingleShop from './components/SingleShop'
import Faq from './components/Faq'
import Joinus from './components/Joinus'
import { JoinFullSharp } from '@mui/icons-material'

const App = () => {
  return (
    <>
    
      <Routes>
        <Route path = "/" element = {<Nav/>}>
          <Route index element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          <Route path = "/pets" element = {<Pets/>}/>
          <Route path = "/pets/:id" element = {<Pet/>}/>
          <Route path = "/shop" element = {<Shop/>}/>
          <Route path = "/shop/:idS" element = {<SingleShop/>} />
          <Route path = "/donate" element = {<Donate/>}/>
          <Route path = "/cart" element = {<Cart/>}/>
          <Route path = "/products" element = {<Products/>}/>
          <Route path = "/faqs" element = {<Faq/>}/>
          <Route path = "/joinus" element = {<Joinus/>}/>
        </Route>
      </Routes>
    
    </>
  )
}

export default App