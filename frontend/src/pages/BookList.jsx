import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks, getBooks, searchBooks } from "../redux/actions/bookListAction";
import Card from "../components/Card";
import '../styles/bookList.css';

/**
 * Renders a list of books and provides search functionality.
 * @returns {JSX.Element} The BookList component.
 */

export default function BookList() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.books);
  const [q, setQ] = React.useState("");
  const [genre, setSelectedGenre] = React.useState("All");
  const [sort, setSort] = React.useState("id");
  const [order, setOrder] = React.useState(true);

  React.useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  function handleInput(e) {
    setQ(e.target.value);
  }

  /**
   * Handles the search form submission.
   * @param {Event} e - The form submission event.
   */
  function handleSearch(e) {
    e.preventDefault();
    if (q === "") return;
    dispatch(searchBooks(q));
  }

  /**
   * Handles the cancel button click.
   */
  function handleCancel() {
    setQ("");
    dispatch({ type: 'CANCEL_SEARCH' });
    dispatch(getAllBooks());
  }

  function handleGenreFilter(e) {
    setSelectedGenre(e.target.innerText);
    dispatch(getAllBooks(sort, e.target.innerText, order));
  }

  function handleSort(e) {
    const sortOptions = {
      "Default": "id",
      "Price (Low to High)": "price",
      "Price (High to Low)": "price",
      "Rating": "rating",
      "Title (Ascending)": "name",
      "Title (Descending)": "name"
    };

    const sortOrders = {
      "Default": true,
      "Price (Low to High)": true,
      "Price (High to Low)": false,
      "Rating": false,
      "Title (Ascending)": true,
      "Title (Descending)": false
    };

    setSort(sortOptions[e.target.value]);
    setOrder(sortOrders[e.target.value]);

    dispatch(getAllBooks(
      sortOptions[e.target.value],
      genre,
      sortOrders[e.target.value]
    ));
  }

  return (
    <div className="book-list-container">
      <div className="search-box">
        <input className={`search-input`} type="text" placeholder="Search Books" value={q} onChange={handleInput} />
        <button className="search-submit" onClick={handleCancel}>
          <span className="material-symbols-outlined">Close</span>
        </button>
        <button className="search-submit" onClick={handleSearch}>
          <span className="material-symbols-outlined">Search</span>
        </button>
      </div>
      <div className="filters">
        <div className="filters-genres">
          <button className={`${genre == "All" ? "selected-genre " : ""}filters-genre secondary-button`} onClick={handleGenreFilter}>All</button>
          {selector.genres.map((genre_option) => {
            return (
              <button key={genre_option} className={`${genre_option == genre ? "selected-genre " : ""}filters-genre secondary-button`} onClick={handleGenreFilter}>{genre_option}</button>
            );
          })}
        </div>
        <select defaultValue="Default" className="sort" onChange={handleSort}>
          <option value="Default">Default</option>
          <option>Price (Low to High)</option>
          <option>Price (High to Low)</option>
          <option>Rating</option>
          <option>Title (Ascending)</option>
          <option>Title (Descending)</option>
        </select>
      </div>
      <div className="book-list">
        {selector.searched ?
          <span className="material-symbols-outlined loading">
            progress_activity
          </span>
          :
          selector.books.map((book) => {
            return (
              <Card book={book} key={book.id} />
            );
          })
        }
      </div>
      <p>End of list.</p>
    </div>
  );
}
