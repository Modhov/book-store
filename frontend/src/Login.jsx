import React from "react";
import "./login.css";
function Login() {
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
            <div className="signin">
              <button type="submit">signin</button>
            </div>
            <div className="signup">
              <button type="submit">signup</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
