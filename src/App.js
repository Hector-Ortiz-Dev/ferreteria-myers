import React from 'react';
import Navbar from './elements/Navbar'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import LogIn from './components/LogIn'
import SignIn from './components/SignIn'
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
      </Routes>
      <Footer />
    </Background>
  );
}

export default App;