import React from 'react';
import Navbar from './elements/Navbar'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import LogIn from './components/LogIn'
import SignIn from './components/SignIn'
import Categories from './components/Categories'
import Contact from './components/Contact'
import About from './components/About'
import Profile from './components/Profile'
import Cart from './components/Cart'
import Search from './components/Search'
import Product from './components/Product'
import Background from './elements/Background'
import Footer from './elements/Footer';

function App() {
  return (
    <Background tipo = ''>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/LogIn' element={<LogIn />}/>
          <Route path='/SignIn' element={<SignIn />}/>
          <Route path='/Categories' element={<Categories />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Profile' element={<Profile />}/>
          <Route path='/Search' element={<Search />}/>
          <Route path='/Cart' element={<Cart />}/>
          <Route path='/Product' element={<Product />}/>
      </Routes>
      <Footer />
    </Background>
  );
}

export default App;