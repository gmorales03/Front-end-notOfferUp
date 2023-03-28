import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage.js";
import InsertForm from "./components/InsertForm.js";
import NewListing from "./components/NewListing.js";
import ProductPage from "./components/ProductPage.js";

function App() {
  const url = "http://localhost:3000/product/";
  const [listings, setListings] = useState([]);
  useEffect(() => {
    fetch(url, {
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((data) => console.log(data.data))
      .catch((err) => console.log("oops, something went wrong", err));
  });

  return (
    <div className="App">
      <HomePage />
      <InsertForm />
      <NewListing />
    </div>
  );
}

export default App;
