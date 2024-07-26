import React from "react";
import "../styles/home.css";

export default function Home() {
  return (
    <div style={{
      position: 'relative'
    }}>
      <nav className="navigation">
        <h2>
          BookBite
          <span class="material-symbols-outlined"
            onClick={() => {
              window.location.href = "/#/seller-home";
            }}
          >
            shopping_bag
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
        <p className="herotext2">Read. Review. Repeat.</p>

        <button onClick={() => { window.location.href = "/#/store"; }}>Get started</button>
      </div>
      {/* <div className="books">
        <div className="book">
          <p>
            Fiction
          </p>
        </div>
        <div className="book">
          <p>
            Non - Fiction
          </p>
        </div>
        <div className="book">
          <p>
            Romance
          </p>
        </div> 
      </div>
        */}
    </div>
  );
}
