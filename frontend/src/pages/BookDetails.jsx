import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/bookDetails.css";
export default function BookDetails() {
  const { id } = useParams();

  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === id)
  );
  if (book)
    return (
      <div className="book-details-container">
        <nav className="navigation navigation--no-z">
          <h2>
            BookBite
            <span
              className="material-symbols-outlined"
              onDoubleClick={() => {
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
        <div className="book-details">
          <div className="book-details__intro">
            <img
              className="book-details__img"
              src={
                book.imageIds
                  ? `${API_URL}/download/${book.imageIds[0]}`
                  : "/src/assets/images.jpeg"
              }
            />
            <h3 className="book-details__name">{book.name}</h3>
            {book.genre.map((g) => {
              return <button key={g}>{g}</button>;
            })}
          </div>
          <div>
            <p className="book-details__price">Price: ₹{book.price}</p>
            <p
              className="book-details__description"
              aria-description={book.description}
            >
              Description:{book.description}
            </p>
          </div>
        </div>
      </div>
    );
  return (
    <span className="material-symbols-outlined loading">progress_activity</span>
  );
}
