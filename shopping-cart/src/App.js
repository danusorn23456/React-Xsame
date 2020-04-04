import React from "react";
import "./component/style/ShoppingCart.css";
import ProductView from "./component/presentation/ProductView";
import CategoryView from "./component/presentation/CategoryView";
import OrderView from "./component/presentation/OrderView";
import ProductState from "./component/smart/ProductState";
import CategoryState from "./component/smart/CategoryState";
import OrderState from "./component/smart/OrderState";
import FilterState from "./component/smart/Filter";
import Aside from "./component/presentation/Aside";
function App() {
  const { products } = ProductState();
  const { categorys } = CategoryState(products);
  const { orders, addOrder, updateOrder,deleteOrder} = OrderState([]);
  const { selectFilter, filterProduct } = FilterState({products});

  return (
    <div className="shopping-cart">
      <Aside/>
      <ProductView
        products={filterProduct(products)}
        addOrder={order => addOrder(order)}
      />
      <CategoryView
        filter={filter => selectFilter(filter)}
        categorys={categorys}
      />
      <OrderView
        orders={orders}
        products={products}
        updateOrder={(product,action)=>updateOrder(product,action)}
        deleteOrder={order => deleteOrder(order)}
      />
    </div>
  );
}

export default App;
