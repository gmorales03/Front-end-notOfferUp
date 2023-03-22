import React from "react";

export default function InsertForm() {
  return (
    <div className="insert-form-container">
      <h1>Add Product</h1>
      <input id="title" placeholder="Product" />
      <br />
      <input id="desc" placeholder="Description" />
      <br />
      <input id="price" placeholder="Price" />
      <br />
      <p id="date">Date Posted</p>
    </div>
  );
}
