import React from "react";
import "../styles/signin.css";

function SignIn() {
  return (
    <div class="login-main">
      <form>
        <div class="login">
          <div className="username">
            <input type="text" placeholder="Username" />
          </div>
          <div className="password">
            <input type="password" placeholder="Password" />
          </div>
          <div className="button">
            <div className="signup">
              <a href="#/sign-up">don't have an account? sign up.</a>
            </div>
            <div className="signin">
              <button type="submit">Sign In</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
