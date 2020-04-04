import React from "react";

const FilterView = ({Option,Filter}) => {
  return (
    <div className="filter-wrapper">
      <ul className="filter-menu">
        <li className="filter-list">
          <button className={`filter-item ${Option === 'all' ? 'active' : ''}`}
            onClick={() => Filter("all")}
            >
            All
          </button>
        </li>
        <li className="filter-list">
          <button className={`filter-item ${Option === 'pending' ? 'active' : ''}`}
            onClick={() => Filter("pending")}
          >
            Pending
          </button>
        </li>
        <li className="filter-list">
          <button className={`filter-item ${Option === 'complete' ? 'active' : ''}`}
          onClick={() => Filter("complete")}
          >
            Complete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FilterView;
