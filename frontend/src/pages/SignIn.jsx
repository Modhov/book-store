import React from "react";
import "../styles/signin.css";

function SignIn() {
  return (
    <div class="auth-container">
      <form>
        <fieldset>
          <legend align="left">Sign In</legend>
          <div className="input-grid">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
            <a href="#/sign-up">don't have an account? sign up.</a>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default SignIn;
