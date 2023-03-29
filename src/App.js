import { async } from "q";
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
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
      })
      .catch((err) => console.log("oops, something went wrong", err));
  }, []);

  console.log(listings);

  return (
    <div className="App">
      <HomePage data={listings} />
      <InsertForm />
    </div>
  );
}

export default App;
