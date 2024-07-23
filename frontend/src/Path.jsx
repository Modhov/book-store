import React from 'react'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'

function Path() {
  return (
    <>
        <Routes>
      
        
      <Route path='/' element={<Login/>}/>

      
     <Route path='/signup' element={<Signup/>}/>
  
    </Routes>
    </>
  )
}

export default Path