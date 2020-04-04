import React from "react";
import Menu from "./menu/menu";
import Cart from "./cart/cart";
import './nav.css';
import Logo from "./logo/logo";
const Nav = () => {
  return (
    <nav>
      <div className="flex">
        <Menu></Menu>
        <Logo></Logo>
        <Cart></Cart>
      </div>
    </nav>
  );
};

export default Nav;
