import React from "react";
import "./header.css";
import Nav from "./nav/nav";
import Route from "./route/route";
import Search from "./search/search";

const Header = () => {
  return (
    <header className="main-header">
      <Nav></Nav>
      <section className="second-header">
        <Route></Route>
        <Search></Search>
      </section>
    </header>
  );
};

export default Header;
