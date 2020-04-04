import { useState } from "react";

export default () => {
  const [products, setProducts] = useState([
    { name: "Watch A", img: 'watch1.jpeg', price: 120, category: "Watch" },
    { name: "Watch B", img: 'watch2.jpeg', price: 130, category: "Watch" },
    { name: "Watch C", img:'watch3.jpeg', price: 125, category: "Watch" },
    { name: "Watch D", img:'watch4.jpeg', price: 150, category: "Watch" },
    { name: "Watch E", img:'watch5.jpeg', price: 270, category: "Watch" },
    { name: "Furniture A", img:'furniture1.jpg', price: 100, category: "Furniture" },
    { name: "Furniture B", img:'furniture2.jpg', price: 100, category: "Furniture" },
    { name: "Furniture C", img:'furniture3.jpg', price: 100, category: "Furniture" },
    { name: "Furniture D", img:'furniture4.jpg', price: 100, category: "Furniture" },
    { name: "Furniture E", img:'furniture5.png', price: 100, category: "Furniture" },
    { name: "g", img:'ipad.jpeg', price: 50, category: "Computer" },
    { name: "h", img:'ipad.jpeg', price: 100, category: "Computer" }
  ]);
  return { products };
};
