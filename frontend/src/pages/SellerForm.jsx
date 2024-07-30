import React, { useState } from "react";
import { postBook } from "../redux/actions/bookListAction";
import { useDispatch, useSelector } from "react-redux";
import "../styles/sellerform.css";

export default function SellerForm() {
  const cur = ""
  const [data, setData] = useState({
    author: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    used: false,
    genre: [],
    discount: 0,
    binding: "",
    publisher: "",
    edition: "",
    isbn: "",
    language: "",
  });
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.books).genres;
  function handleSubmit(e) {
    e.preventDefault();
    if (data.genre.length === 0) {
      alert("Please add at least one genre");
      return;
    }
    dispatch(postBook(data));
    setData({
      author: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      used: false,
      genre: [],
      discount: 0,
      binding: "",
      publisher: "",
      edition: "",
      isbn: "",
      language: "",
    })
  }
  return (
    <div className="add-book-body">

    <form className="add-book" onSubmit={handleSubmit}>
      <label>Author</label>
      <input
        type="text"
        value={data.author}
        onChange={(e) => setData({ ...data, author: e.target.value })}
        required
      />
      <label className="form__label">Name</label>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        required
      />
      <label className="form__label">Description</label>
      <textarea
        type="text"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
        required
      />
      <label className="form__label">Price</label>
      <input
        type="number"
        value={data.price}
        onChange={(e) => setData({ ...data, price: e.target.value })}
        min={1}
        required
      />
      <label className="form__label">Stock</label>
      <input
        type="number"
        value={data.stock}
        onChange={(e) => setData({ ...data, stock: e.target.value })}
        min={1}
        required
      />
      <label className="form__label">Used</label>
      <input
        type="checkbox"
        value={data.used}
        onChange={(e) => setData({ ...data, used: e.target.checked })}
      />
      <label className="form__label">Genres</label>
      <div>
        {data.genre.map((genre) => (
          <span className="genre" key={genre}>{genre}<span className="delete-genre" onClick={
            () => setData({
              ...data, genre: data.genre.filter((g) => g !== genre)
            })
          }>X</span></span>
        ))}
        <select
          value={cur}
          onChange={(e) => {
            setData({
              ...data, genre: [...data.genre, e.target.value]
            })
          }}
        >
          <option value="" disabled>Add Genre</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <label className="form__label">Discount</label>
      <input
        type="number"
        value={data.discount}
        min={0}
        max={100}
        onChange={(e) => setData({ ...data, discount: e.target.value })}
      />
      <label>Binding</label>
      <select
        value={data.binding}
        onChange={(e) => setData({ ...data, binding: e.target.value })}
        required
      >
        <option value="Hardcover">Hardcover</option>
        <option value="Paperback">Paperback</option>
      </select>
      <label className="form__label">Publisher</label>
      <input
        type="text"
        value={data.publisher}
        onChange={(e) => setData({ ...data, publisher: e.target.value })}
        required
      />
      <label className="form__label">Edition</label>
      <input
        type="text"
        value={data.edition}
        onChange={(e) => setData({ ...data, edition: e.target.value })}
      />
      <label className="form__label">ISBN</label>
      <input
        type="text"
        value={data.isbn}
        onChange={(e) => setData({ ...data, isbn: e.target.value })}
        required
      />
      <label className="form__label">Language</label>
      <input
        type="text"
        value={data.language}
        onChange={(e) => setData({ ...data, language: e.target.value })}
        required
      />
      <button type="submit" className="secondary-button">Add</button>
    </form>
    </div>
  );
}
