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
    console.log(selector)
  }, [selector])
  return (
    <div>
      {selector.books.map((book) => {
        return (
          <div key={book.id}>
            <h1>{book.name}</h1>
            <p>{book.author}</p>
          </div>
        )
      })}
      {selector.last ?
        <p>Reached End of list</p> :
        <button onClick={getNext} disabled={selector.last}>Get Books</button>
      }
    </div>
  );
}
