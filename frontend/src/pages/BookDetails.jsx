import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/bookDetails.css";
import { API_URL } from "../redux/store";
import { addToWish } from "../redux/actions/userAction";

export default function BookDetails() {
  const { id } = useParams();
  const user = useSelector((state) => state.user.user)
  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === id)
  );
  const [wished, setWished] = useState(user && user.wishlist.filter(
    (book) => book.id === id
  ).length > 0);

  const dispatch = useDispatch();
  const wish = () => {
    dispatch(addToWish(id));
    setWished(!wished);
  };
  if (book)
    return (
      <div className="book-details-container">
        <div className="book-details">
          <div className="book-details__intro">
            <img
              className="book-details__img"
              src={
                book.imageIds
                  ? `${API_URL}/api/file/download/${book.imageIds[0]}`
                  : "/src/assets/images.jpeg"
              }
            />
            <h3 className="book-details__name">{book.name}</h3>
            {book.genre.map((g) => {
              return <button key={g}>{g}</button>;
            })}
          </div>
          <div>
            {user != null &&
              (wished ?
                <span onClick={wish} className="material-symbols-outlined">
                  bookmark_added
                </span>
                : <span onClick={wish} className="material-symbols-outlined">
                  bookmark_add
                </span>
              )

            }
          </div>
        </div>
      </div>
    );
  return (
    <span className="material-symbols-outlined loading">progress_activity</span>
  );
}
