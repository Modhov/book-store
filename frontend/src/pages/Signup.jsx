import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux/actions/userAction";
import "../styles/signin.css";

/**
 * Renders the Signup component.
 *
 * @returns {JSX.Element} The Signup component.
 */
function Signup() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    user: "",
    email: "",
    password: "",
  });
  const error = useSelector((state) => state.user.error);
  const user = useSelector((state) => state.user.user);

  if (user)
    return null;

  /**
   * Handles the form submission for signing up a user.
   * 
   * @param {Event} e - The form submission event.
   * @returns {void}
   */
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(data));
    setData({
      user: "",
      email: "",
      password: ""
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend align="left">Sign Up</legend>
        <div className="input-grid">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setData({ ...data, user: e.target.value });
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
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Sign Up</button>
          <a
            onClick={() => {
              const signup = document.getElementById("signup").style
              const signin = document.getElementById("signin").style
              signup.display = "none"
              signin.display = "block"
            }}>
            Already have an account? Sign In
          </a>
        </div>
      </fieldset>
    </form>
  );
}

export default Signup;
