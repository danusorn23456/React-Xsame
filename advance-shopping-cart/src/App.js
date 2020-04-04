import React from 'react';
import './App.css';
import Header from './component/presentation/header/header';
import Aside from './component/presentation/aside/aside';
import Content from './component/presentation/content/content';
import ProductState from './component/smart/product';

function App() {

  const {products} = ProductState();

  return (
    <div className="app">
      <Header></Header>
      <Aside></Aside>
      <Content products={products}></Content>
    </div>
  );
}

export default App;
