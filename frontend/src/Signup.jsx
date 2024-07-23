import React, { useState } from 'react'

function Signup() {
    const [data,setData]=useState({
        name:"",
        email: "",
        password: "" });

    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
    }    
  return (
    <div className='body-sinup'>
        <div className='container'>
        <form onSubmit={onSubmit}>

            <div>
                <input placeholder='userName' type='text'  onChange={(e)=>{setData({...data,name:e.target.value})}}/>
            </div>
            <div>
                <input placeholder='email' type='email' onChange={(e)=>{setData({...data,email:e.target.value})}}/>
            </div>
            <div>
                <input placeholder='password' type='password' onChange={(e)=>{setData({...data,password:e.target.value})}}/>
            </div>
            <div>
                <button type='submit'>Register</button>
            </div>
        </form>
        </div>
    
    </div>
  )
}

export default Signup