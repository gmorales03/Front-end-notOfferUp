import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Listing from "./Listing";

export default function NavBar() {
  const url = "http://localhost:3000/category/";
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((err) => console.log("check your code, error", err));
  }, []);
  const cat = category.map(({ title }) => {
    return (
      <Link to={`/${title}`}>
        <ul>{title}</ul>
      </Link>
    );
  });
  console.log(cat.title);
  console.log(category);
  return <div className="navBar">{cat}</div>;
}
