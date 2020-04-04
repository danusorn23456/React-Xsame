import React from "react";
import "./card.css";
const Card = ({product}) => {
  return (
    <li key={String(product.id)} className="card">
      <div className="card-content">
        <header>
          <h1>{product.product}</h1>
          <p className="product-model">{product.model}</p>
        </header>
        <figure className="product-img">
          {product.img !== '' && 
          <img src={require(`../../../figure/${product.img}.png`)} alt="shoe"/>}
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
