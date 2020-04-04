import { useState } from "react";

export default () => {
  const [products, setProducts] = useState([
    {
      id: "nk1",
      product: "Nike",
      model: "Sport Shoe",
      img: "nk1",
      designer: "Guitar",
      unitPrice: 110,
    },
    {
      id: "add1",
      product: "Adidas",
      model: "NMD City Sock 2",
      img: "add1",
      designer: "Kith Unveil",
      unitPrice: 130,
    },
    {
      id: "vn1",
      product: "Vans",
      model: "Classic Nylon Magic",
      img: "vn1",
      designer: "Kreater",
      unitPrice: 90,
    },
    {
      id: "nk2",
      product: "Nike",
      model: "Rose One Essential ID",
      img: "nk2",
      designer: "Xeus",
      unitPrice: 110,
    },
    {
      id: "nk3",
      product: "Nike",
      model: "Rining Shoe Type b",
      img: "nk3",
      designer: "Xeus",
      unitPrice: 110,
    },
    {
      id: "add3",
      product: "Adidas",
      model: "NMD City Sock 2",
      img: "add3",
      designer: "Kith Unveil",
      unitPrice: 130,
    },
    {
      id: "vn2",
      product: "Vans",
      model: "Runing Shoe Type a",
      img: "vn2",
      designer: "Xeus",
      unitPrice: 110,
    },
    {
      id: "nk4",
      product: "Nike",
      model: "Runing Shoe Type a",
      img: "nk4",
      designer: "Xeus",
      unitPrice: 110,
    },
    {
      id: "add2",
      product: "Adidas",
      model: "NMD City Sock 2",
      img: "add2",
      designer: "Kith Unveil",
      unitPrice: 130,
    },
    {
      id: "vn3",
      product: "Vans",
      model: "Runing Shoe Type a",
      img: "vn3",
      designer: "Xeus",
      unitPrice: 110,
    },
    {
      id: "add4",
      product: "Adidas",
      model: "NMD City Sock 2",
      img: "add4",
      designer: "Kith Unveil",
      unitPrice: 130,
    },
    {
        id: "vn4",
        product: "Vans",
        model: "Runing Shoe Type a",
        img: "vn4",
        designer: "Xeus",
        unitPrice: 110,
      },
  ]);

  return {
    products,
  };
};
