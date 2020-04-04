import React from "react";
import Card from "./card/card";
import "./content.css";

const Content = ({products}) => {
  return (
    <ul className="main-content">
      {products.map(item => <Card product={item}></Card>)}
    </ul>
  );
};

export default Content;
