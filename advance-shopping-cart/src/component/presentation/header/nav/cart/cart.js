import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart">
        <input type="checkbox" className="menu-checker"></input>
      <div className=" rectangle-box">
        <p>
          <span className="number">1</span> in BAG
        </p>
      </div>
      <div className="cart-order"></div>
      <div className="payment-details"></div>
    </div>
  );
};

export default Cart;
