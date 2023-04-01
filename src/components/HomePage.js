import React from "react";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom'
import Box from "./Box.js";
import Grid from "./Grid";
import NewListing from "./NewListing";
import "./homePage.css";

export default function HomePage(props) {
  const products = props.data.map(
    ({ _id, image, item, title, description, price, posted_at }) => {
      return (
        <div className="box">
          <img src={image}></img>
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
