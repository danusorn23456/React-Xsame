import React from "react";
import './aside.css';
import Sort from "./sort/sort";
import Filter from "./filter/filter";
const Aside = () => {
  return(
      <div className="main-aside">
          <Sort></Sort>
          <Filter></Filter>
      </div>
  )
};

export default Aside;
