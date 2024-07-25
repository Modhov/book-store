import React, { useState } from "react";

export default function () {
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
  return (
    <form>
      <label> Author</label>
      <input
        type="text"
        onChange={() => {
          setData({
            ...data,
            author: event.target.value,
          });
        }}
        required
      />
      <label>Book Title</label>
      <input
        type="text"
        onChange={() => {
          setData({
            ...data,
            name: event.target.value,
          });
        }}
        required
      />
      <label>Description</label>
      <input type="text" required />
      <label>Price</label>
      <input type="number" required></input>
      <label>Stock</label>
      <input type="number" required />
      <input type="checkbox" />
      <label>Refurbished</label>
      <label>Genre</label>
      <input type="text" required />
      <label>Discount</label>
      <input type="number" />
      <label>Binding type</label>
      <select required>
        <option>Hardcover</option>
        <option>paperback</option>
      </select>
      <label>Publisher</label>
      <input type="text" required />
      <label>Edition</label>
      <input type="text" />
      <label>isbn</label>
      <input type="text" required />
      <label>Languages</label>
      <input type="text" required />
      <button type="submit">Add</button>
    </form>
  );
}
