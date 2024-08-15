import React, { useEffect, useState } from "react";
import "../styles/signin.css";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/actions/userAction";

/**
 * Renders a sign-in form component.
 *
 * @returns {JSX.Element} The sign-in form component.
 */
function SignIn() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const userDet = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  /**
   * Handles the form submission for signing in.
   *
   * @param {Event} e - The form submission event.
   * @returns {void}
   */
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signIn(user, password));
  }
  const error = useSelector((state) => state.user.error);
  if (userDet)
    return null;
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend align="left">Sign In</legend>
        <div className="input-grid">
          <input type="text" placeholder="Username" value={user} onChange={(e) => {
            setUser(e.target.value);
          }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => {
            setPassword(e.target.value);
          }} />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Sign In</button>
          <a onClick={() => {
            const signup = document.getElementById("signup").style
            const signin = document.getElementById("signin").style
            signup.display = "block"
            signin.display = "none"
          }}>
            Don't have an account? Sign Up
          </a>
        </div>
      </fieldset>
    </form>
    // </div>
  );
}

export default SignIn;
