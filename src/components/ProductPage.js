import React from "react";
import Title from "./Title.js";
import Image from "./Image.js";
import Description from "./Description.js";
import Price from "./Price.js";
import Date from "./Date.js";
import "./ProductPage.css";

function ProductPage() {
  return (
    <div>
      <Title />
      <div className="img">
        <Image />
      </div>
      <Description />
      <Price />
      <Date />
    </div>
  );
}

export default ProductPage;
