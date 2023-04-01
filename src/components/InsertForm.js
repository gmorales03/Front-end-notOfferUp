import React, { useEffect, useState } from "react";
import "./InsertForm.css";

export default function InsertForm() {
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    const req = { item, description, price };

    fetch("http://localhost:3000/product/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(req),
    }).then(console.log("new product added", req));
  }

  return (
    <form method="POST" onSubmit={handleClick}>
      <div className="insert-form-container">
        <h1>Add Product</h1>
        <input
          id="title"
          name="title"
          placeholder="Product"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <br />
        <input
          id="desc"
          name="desc"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          id="price"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <p id="date">Date Posted:</p>
        <br />
        <button id="submit">Submit</button>
      </div>
    </form>
  );
}
