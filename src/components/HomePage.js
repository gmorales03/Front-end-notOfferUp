import React from "react";
import NavBar from "./NavBar";
import Grid from "./Grid";
import NewListing from "./NewListing";
import "./homePage.css";

export default function HomePage() {
  const databox = (
    <div className="container">
      <NavBar />
      <NewListing />
      <Grid />
    </div>
  );
  return <div className="result">{databox}</div>;
}
