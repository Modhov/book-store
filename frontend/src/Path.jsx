import React from 'react'

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