import React from "react";
import './sort.css'
const Sort = () => {
  return (
    <form className="sort">
      <label for="sort" className="label-header">SORT</label>
      <select id="sort" name="sort"  className="selection">
        <option>What new</option>
      </select>
    </form>
  );
};

export default Sort;
