import React from "react";
import "../styles/home.css";
export default function SellerHome() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <nav className="navigation">
        <h2>
          BookBite
          <span className="material-symbols-outlined"
            onDoubleClick={() => {
              window.location.href = "/#/home";
            }}
          >
            sell
          </span>
        </h2>
        <div>
          <button
            className="secondary-button"
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
      </nav>
      <div className="seller-hero">
        <p className="herotext">BookBite</p>
        <p className="herotext2">Sell. Earn. Satisfy. </p>

        <button
          className="get-started"
          onClick={() => {
            window.location.href = "/#/add-book";
          }}
        >
          Get started
          <span className="material-symbols-outlined"
            style={{
              position: "relative",
              top: "6px",
            }}
          >
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
