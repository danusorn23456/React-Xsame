import React, { useState } from "react";
import product from "../product";

export default () => {
  const [preview, setPreview] = useState('');

  return {
    preview,
    productPreview:(product)=>{
      setPreview(product)
    }
  };
};
