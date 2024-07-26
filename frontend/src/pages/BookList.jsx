import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, searchBooks } from "../redux/actions/bookListAction";
import '../styles/bookList.css';

export default function BookList() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.books);
  const [q, setQ] = useState("");
  function getNext() {
    if (selector.last) return;
    dispatch(getBooks());
  }
  function handleSearch() {
    if (q === "") return;
    dispatch(searchBooks(q))
  }
  function handleCancel() {
    setQ("");
    dispatch({ type: 'CANCEL_SEARCH' })
    getNext();
  }
  useEffect(() => {
    getNext();
  }, [])
  return (
    <div className="book-list-container">
      <div className="search">
        <input type="text" placeholder="Search Books" value={q} onChange={(e) => setQ(e.target.value)} />
        {selector.searched && <button onClick={handleCancel}>Cancel Search</button>}
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="book-list">
        {selector.books.map((book) => {
          return (
            <div key={book.id} className="book-list-item">
              <img src="/src/assets/images.jpeg" />
              <p className="book-item-name" aria-description={book.name}>{book.name}</p>
              <p className="book-item-author">{book.author}</p>
            </div>
          )
        })}
      </div>
      {!selector.searched && (selector.last ?
        <p>Reached End of list</p> :
        <button onClick={getNext} disabled={selector.last}>Get Books</button>)
      }
    </div>
  );
}
