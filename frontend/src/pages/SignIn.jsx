import React from "react";
import "../styles/signin.css";

function SignIn() {
  return (
    <div className="auth-container">
      <form>
        <fieldset>
          <legend align="left">Sign In</legend>
          <div className="input-grid">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
            <a href="#/sign-up">Don't have an account? Sign Up</a>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default SignIn;
