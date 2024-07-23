import React from 'react'

function Signup() {
  return (
    <div>
        <div className='container'>
            <div>
                <input placeholder='userName' type='text'/>
            </div>
            <div>
                <input placeholder='email' type='email' />
            </div>
            <div>
                <input placeholder='password' type='password'/>
            </div>
            <div>
                <button>Register</button>
            </div>
        </div>
    
    </div>
  )
}

export default Signup