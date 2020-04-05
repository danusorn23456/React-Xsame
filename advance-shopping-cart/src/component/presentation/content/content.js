import React, { Fragment } from "react";
import Card from "./card/card";
import "./content.css";
import Preview from "./preview/preview";


const Content = ({ products, productPreview, preview }) => {
  return (
    <ul className="main-content">
      {products.map((item) => (
        <Card preview={preview} productPreview={productPreview} product={item}></Card>
      ))}
      {preview !== "" && (
        <Preview preview={preview} productPreview={productPreview}></Preview>
      )}
    </ul>
  );
};

export default Content;
