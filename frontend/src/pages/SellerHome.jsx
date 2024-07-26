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
          <span class="material-symbols-outlined"
            onClick={() => {
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
            sign-in
          </button>
          <button
            onClick={() => {
              window.location.href = "/#/sign-up";
            }}
          >
            sign-up
          </button>
        </div>
      </nav>
      <div className="hero">
        <p className="herotext">BookBite</p>
        <p className="herotext2">Sell. Earn. Satisfy. Repeat</p>

        <button
          onClick={() => {
            window.location.href = "/#/add-book";
          }}
        >
          Get started
        </button>
      </div>
    </div>
  );
}
