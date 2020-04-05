import React from "react";
import "./preview.css";
import Card from "../card/card";

const Preview = ({ preview, productPreview }) => {
  return (
    <div className="preview" onClick={() => productPreview("")}>
      <figure className="preview-product">
        <img src={require("../../../figure/preview.jpeg")} alt="preview"></img>
      </figure>
      <section className="preview-product">
        <Card product={preview}></Card>
      </section>
    </div>
  );
};

export default Preview;
