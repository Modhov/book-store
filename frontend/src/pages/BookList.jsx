import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, searchBooks } from "../redux/actions/bookListAction";

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
    console.log(selector)
  }, [selector])
  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Search Books" value={q} onChange={(e) => setQ(e.target.value)} />
        {selector.searched && <button onClick={handleCancel}>Cancel Search</button>}
        <button onClick={handleSearch}>Search</button>
      </div>
      {selector.books.map((book) => {
        return (
          <div key={book.id}>
            <img src="/src/assets/images.jpeg" />
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
