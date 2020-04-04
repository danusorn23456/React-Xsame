import { useState } from "react";

export default ({ products }) => {
  const [filter, setFilter] = useState(products[0].category);
  return {
    filter,
    selectFilter: filter => {
      setFilter(filter);
    },
    filterProduct: products => {
      let filterProducts = [];
      products = JSON.parse(JSON.stringify(products));
      products.filter(item => {
        if (item.category === filter) {
          filterProducts.push(item);
          return true;
        }
        return false;
    });
    return filterProducts;
    }
  };
};
