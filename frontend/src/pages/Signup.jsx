import React, { useState } from "react";
import "../styles/signin.css";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend align="left">Sign Up</legend>
          <div className="input-grid">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
            <button type="submit">Sign Up</button>
            <a href="#/sign-in">Already have an account? Sign In</a>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
