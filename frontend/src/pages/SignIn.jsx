import React from "react";
import "../styles/signin.css";

function SignIn() {
  return (
    <div class="signin-main">
      <div>
        <h1>Sign-in</h1>
      </div>
      <form>
        <div className="signin">
          <div className="username">
            <input type="text" placeholder="Username" />
          </div>
          <div className="password">
            <input type="password" placeholder="Password" />
          </div>
          <div className="button">
            <div className="signup">
              <a href="#/sign-up">sign up</a>
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
