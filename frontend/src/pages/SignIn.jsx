import React, { useState } from "react";
import "../styles/signin.css";
import axios from "axios";

function SignIn() {
  const [data,setData]=useState({
    user:"",
    pass:""
  })
const handleClick=async(e)=>{
  e.preventDefault();
    axios.post("http://localhost:8080/auth",{
      params: {
         user: data.user,
         pass: data.pass
       } 
    }).then((result)=>{
      console.log(result.data);
  
})
}
  return (
    <div class="auth-container">
      <form>
        <fieldset>
          <legend align="left">Sign In</legend>
          <div className="input-grid">
            <input type="text" placeholder="Username" onChange={(e) => {
                setData({ ...data, user: e.target.value });
              }}/>
            <input type="password" placeholder="Password"onChange={(e)=>setData({...data,pass:e.target.value})} />
            <button type="submit" className="secondary-button" onClick={handleClick}>Sign In</button>
            <a href="#/sign-up">don't have an account? sign up.</a>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default SignIn;
