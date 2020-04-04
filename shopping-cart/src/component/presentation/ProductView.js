import React from "react";

const ProductView = ({ products, addOrder }) => {
  return (
    <ul className="l-product">
      {products.map((item, index) => (
        <li key={item.name}>
          <div className="c-card">
            <div className="eff-grow">
              <img
                className="c-img"
                src={require(`../image/${item.img}`)}
                alt="ipad"
              ></img>
            </div>
            <h2>{item.name}</h2>
            <p className="c-paragraph">{item.price}$</p>
            <button
              className="c-button-add"
              onClick={e => {
                addOrder(item);
              }}
            >
              ADD
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductView;
