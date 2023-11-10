import { useState } from 'react'
import Signup from './pages/Signup'

import './App.css'
import Login from './pages/Login'
import { Routes,Route } from 'react-router-dom'

import Home from './pages/Home'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>

    </Routes>
    
    
    </>
  )
}

export default App
