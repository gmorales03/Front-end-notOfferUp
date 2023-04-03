import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Box from "./Box.js";
import Grid from "./Grid";
import NewListing from "./NewListing";
import "./homePage.css";
import shoeOne from "./images/shoes1.png";
export default function HomePage(props) {
  console.log(props);
  const products = props.data.map(
    ({ _id, image, item, title, description, price, posted_at }) => {
      return (
        <div className="box">
          <Link
            to={`${_id}`}
            state={{
              image: image,
              item: item,
              price: price,
              description: description,
              posted_at: posted_at,
              title: title,
            }}
          >

              <div className="homepageImages">
                <div className="imageOne">
                  <img src={shoeOne} alt="product" />
                </div>
              </div>
              {item}
              <div className="price">{`$${price}`}</div>
            
          </Link>
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
