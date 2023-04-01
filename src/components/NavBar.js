import React, { useEffect, useState } from "react";

export default function NavBar() {
  const url = "http://localhost:3000/category/";
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((err) => console.log("check your code, error", err));
  }, []);
  const cat = category.map(({title}) => {
    return(
      <ul>{title}</ul>
    )
  }) 

  console.log(category);
  return (
    <div className="navBar">
      {cat}
    </div>
  );
}
