import React from "react";
import NavBar from "./NavBar";
import Box from "./Box.js";
import Grid from "./Grid";
import NewListing from "./NewListing";
import "./homePage.css";

export default function HomePage(props) {
  const products = props.data.map(
    ({ _id, item, title, description, price, posted_at }) => {
      return (
        <div className="box">
          <p>{item}</p>
          <p>{price}</p>
          <p>{posted_at}</p>
        </div>
      );
    }
  );

  const databox = (
    <div className="container">
      <NavBar />
      <div className="boxes">{products}</div>
    </div>
  );
  return <div className="result">{databox}</div>;
}
