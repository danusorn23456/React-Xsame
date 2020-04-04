import React from "react";
import './filter.css'
const Filter = () => {
  return (
    <form className="filter-container">
      <label for="filter" className="label-header">FILTER</label>
      <select  name="filter" className="filter-selection">
        <option>Shoe type</option>
      </select>
      <select name="filter" className="filter-selection">
        <option>Style</option>
      </select>
      <select  name="filter" className="filter-selection">
        <option>Size</option>
      </select>
      <select  name="filter" className="filter-selection">
        <option>Brand</option>
      </select>
      <select  name="filter" className="filter-selection">
        <option>Price range</option>
      </select>
    </form>
  );
};

export default Filter;
