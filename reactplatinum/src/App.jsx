import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Discovery from './pages/Discovery';
import Register from './pages/Register';
import Login from './pages/Login';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/discovery' element={<Discovery />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        


      </Routes>
    </BrowserRouter>
  )
}

export default App