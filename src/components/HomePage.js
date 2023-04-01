import React from "react";
import NavBar from "./NavBar";
import Grid from "./Grid";
import NewListing from "./NewListing";
import "./homePage.css";

export default function HomePage(props) {
  const products = props.data.map(
    ({ _id, item, title, description, price, posted_at }) => {
      return (
        <div className="product-container">
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
      {products}
    </div>
  );
  return <div className="result">{databox}</div>;
}
