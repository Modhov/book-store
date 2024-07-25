import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../redux/actions/bookListAction";

export default function BookList() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.books);
  function getNext() {
    if (selector.last) return;
    dispatch(getBooks());
  }
  useEffect(() => {
    getNext();
  }, [])
  return (
    <div>
      {selector.books.map((book) => (
        <div key={book.id}>
          <h1>{book.name}</h1>
          <p>{book.author}</p>
        </div>
      ))}
      <button onClick={getNext} disabled={selector.last}>Get Books</button>
    </div>
  );
}
