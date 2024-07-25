import React from "react";

export default function Objects() {
  return (
    <div>
      <nav className="navigation">
        <h2>BookBite</h2>
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
    </div>
  );
}
