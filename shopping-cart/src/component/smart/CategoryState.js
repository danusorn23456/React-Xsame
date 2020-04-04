import { useState } from "react";

export default products => {
  let _category = [];
  products = JSON.parse(JSON.stringify(products));
  products
    .map(item => item.category)
    .filter((item, index, self) => {
      if (self.indexOf(item) === index) {
        _category.push({ category: item, inStock: 1 });
        return true;
      }
      _category.find(_item => _item.category === item).inStock += 1;
      return false;
    });
  const [categorys, setCategorys] = useState(_category);
  return { categorys };
};
