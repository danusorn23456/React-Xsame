import React from "react";
import "./App.css";
import Header from "./component/presentation/header/header";
import Aside from "./component/presentation/aside/aside";
import Content from "./component/presentation/content/content";
import ProductState from "./component/smart/product";
import previewState from "./component/smart/preview/previewState";

function App() {
  const { products } = ProductState();
  const { productPreview,preview} = previewState();

  return (
    <div className="app">
      <Header></Header>
      <Aside></Aside>
      <Content preview={preview} productPreview={productPreview} products={products}></Content>
    </div>
  );
}

export default App;
