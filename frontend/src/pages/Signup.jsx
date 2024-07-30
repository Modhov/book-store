import React, { useState } from "react";
import "../styles/signin.css";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({
    user: "",
    email: "",
    password: "",
  });

  const onSubmit = async(e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/post-user",data).then((result)=>{
      console.log(result.data);
    })

  };
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend align="left">Sign Up</legend>
          <div className="input-grid">
            <input
              placeholder="user name"
              type="text"
              onChange={(e) => {
                setData({ ...data, user: e.target.value });
              }}
            />
            <input
              placeholder="email"
              type="email"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
            <input
              placeholder="password"
              type="password"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
            <button type="submit" className="third-button">Sign Up</button>
            <a href="#/sign-in">already have an account? sign in.</a>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
