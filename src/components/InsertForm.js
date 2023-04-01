import React, { useState } from "react";
import "./InsertForm.css";

export default function InsertForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const handleChange = (event) => {
    setTitle(event.target.value);
    setDescription(event.target.value);
    setPrice(event.target.value);
  };
  function handleClick() {
    fetch("http://localhost:3000/product/", {
      method: "POST",
    });
    console.log(title, description, price);
  }

  return (
    <div className="insert-form-container">
      <h1>Add Product</h1>
      <input
        id="title"
        placeholder="Product"
        value={title}
        onChange={handleChange}
      />
      <br />
      <input
        id="desc"
        placeholder="Description"
        value={description}
        onChange={handleChange}
      />
      <br />
      <input
        id="price"
        placeholder="Price"
        value={price}
        onChange={handleChange}
      />
      <br />
      <p id="date">Date Posted:</p>
      <br />
      <button onClick={handleClick} id="submit">
        Submit
      </button>
    </div>
  );
}
