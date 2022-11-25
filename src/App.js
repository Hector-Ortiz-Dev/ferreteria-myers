import React from 'react';
import Navbar from './elements/Navbar'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import LogIn from './components/LogIn'
import SignIn from './components/SignIn'
import Contact from './components/Contact'
import About from './components/About'
import Profile from './components/Profile'
import Cart from './components/Cart'
import Search from './components/Search'
import Product from './components/Product'
import Background from './elements/Background'
import Footer from './elements/Footer';
import Error404 from './components/Error404';

function App() {
  return (
    <Background tipo = ''>
      <Navbar />
      <Routes>
          <Route path='*' element={<Error404 />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/LogIn' element={<LogIn />}/>
          <Route path='/SignIn' element={<SignIn />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Profile' element={<Profile />}/>
          <Route path='/Search' element={<Search />}/>
          <Route path='/Cart' element={<Cart />}/>
          <Route path='/Product/:id' element={<Product />}/>
      </Routes>
      <Footer />
    </Background>
  );
}

export default App;