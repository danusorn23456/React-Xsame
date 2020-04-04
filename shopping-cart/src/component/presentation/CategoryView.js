import React from "react";

const CategoryView = ({ categorys ,filter}) => {
  return (
    <ul className="l-category">
      {categorys.map((item, index) => (
        <li key={index}>
          <button className="c-button" onClick={() => filter(item.category)}>{item.category}</button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryView;
