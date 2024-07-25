import React, { useState } from "react";
import { postBook } from "../redux/actions/bookListAction";
import { useDispatch } from "react-redux";
import "../styles/sellerform.css";

export default function SellerForm() {
  const [data, setData] = useState({
    author: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    used: false,
    genre: "",
    discount: 0,
    binding: "",
    publisher: "",
    edition: "",
    isbn: "",
    language: "",
  });
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const genres = typeof data.genre === "string" ? data.genre.split(",") : [];
    setData({ ...data, genre: genres });
    dispatch(postBook(data));
    setData({
      author: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      used: false,
      genre: "",
      discount: 0,
      binding: "",
      publisher: "",
      edition: "",
      isbn: "",
      language: "",
    })
  }
  return (
    <form className="add-book" onSubmit={handleSubmit}>
      <label>Author</label>
      <input
        type="text"
        value={data.author}
        onChange={(e) => setData({ ...data, author: e.target.value })}
        required
      />
      <label>Name</label>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        required
      />
      <label>Description</label>
      <input
        type="text"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
        required
      />
      <label>Price</label>
      <input
        type="number"
        value={data.price}
        onChange={(e) => setData({ ...data, price: e.target.value })}
        required
      />
      <label>Stock</label>
      <input
        type="number"
        value={data.stock}
        onChange={(e) => setData({ ...data, stock: e.target.value })}
        min={1}
        required
      />
      <label>Used</label>
      <input
        type="checkbox"
        value={data.used}
        onChange={(e) => setData({ ...data, used: e.target.checked })}
      />
      <label>Genre<span>seperate genre by comma</span></label>
      <input
        type="text"
        value={data.genre}
        onChange={(e) => setData({ ...data, genre: e.target.value })}
        required
      />
      <label>Discount</label>
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
      <label>Publisher</label>
      <input
        type="text"
        value={data.publisher}
        onChange={(e) => setData({ ...data, publisher: e.target.value })}
        required
      />
      <label>Edition</label>
      <input
        type="text"
        value={data.edition}
        onChange={(e) => setData({ ...data, edition: e.target.value })}
      />
      <label>ISBN</label>
      <input
        type="text"
        value={data.isbn}
        onChange={(e) => setData({ ...data, isbn: e.target.value })}
        required
      />
      <label>Language</label>
      <input
        type="text"
        value={data.language}
        onChange={(e) => setData({ ...data, language: e.target.value })}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}
