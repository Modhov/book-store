import React from "react";
import "../styles/home.css";
export default function Home() {
  return (
    <div>
      <nav className="navigation">
        <h2>BookBite</h2>
        <div>
          <button>sign-in</button>
          <button>sign-up</button>
        </div>
      </nav>
      <h1>BookBite</h1>
      <div>
        <button
          onClick={() => {
            window.location.href = "/#/sign-in";
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => {
            window.location.href = "/#/sign-up";
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
