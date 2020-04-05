import React from "react";
import "./card.css";

const Card = ({ product, productPreview, preview }) => {
  return (
    <li key={product.id} className={`card`}>
      <div className="card-content">
        <button className="add-to-cart">
          <span className="horizontal-line"></span>
          <span className="vertical-line"></span>
        </button>
        <header>
          <h1>{product.product}</h1>
          <p className="product-model">{product.model}</p>
        </header>
        <figure
          onClick={() => {
            if (preview === "") {
              productPreview(product);
            }
          }}
        >
          {product.img !== "" && (
            <img
              className="product-img"
              src={require(`../../../figure/${product.img}.png`)}
              alt="shoe"
            />
          )}
        </figure>
        <div className="product-details">
          <div className="product-designer">
            <p className="designer">DESIGNER</p>
            <h4>{product.designer}</h4>
          </div>
          <div>
            <h3 className="price">${product.unitPrice}</h3>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
