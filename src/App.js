import { async } from "q";
import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage.js";
import InsertForm from "./components/InsertForm.js";
import { Appliances, Clothing, Electronics, Random } from "./components/categories/index.js";
import { Routes, Route, Link} from "react-router-dom";
import Listing from "../src/components/Listing"

import NewListing from "./components/NewListing.js";

function App() {
  const url = "http://localhost:3000/product/";
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {res.json()
      console.log(res)
      })
      .then((data) => {
        setListings(data);
      })
      .catch((err) => console.log("oops, something went wrong", err));
  }, []);

  // console.log(listings);

  return (
    <div className="App">
      <HomePage data={listings} />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/appliances" element={<Appliances />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/random" element={<Random />} />
        <Route path="/add listing" element={<InsertForm />} />
      </Routes>
    </div>
  );
}

export default App;
