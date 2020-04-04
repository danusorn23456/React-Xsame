import { useState } from "react";

export default order => {
  JSON.parse(JSON.stringify(order));
  const [orders, setOrders] = useState(order);
  return {
    orders,
    addOrder: product => {
      let order = JSON.parse(JSON.stringify(product));
      let originPrice = product.price;
      let oldState = [...JSON.parse(JSON.stringify(orders))];

      if (!order.quantity) {
        Object.assign(order, { quantity: 1, totalPrice: order.price });
      }

      if (oldState.find(item => item.name === order.name)) {
        oldState.map(item => {
          if (item.name === order.name) {
            item.quantity += 1;
            item.totalPrice = item.quantity * originPrice;
          }
          return item;
        });
        setOrders(oldState);
      } else {
        setOrders([...orders, order]);
      }
    },
    updateOrder: (order, action) => {
      let oldOrder = [...JSON.parse(JSON.stringify(orders))];
      oldOrder.map(item => {
        if (item.name === order.name) {
          switch (action) {
            case "increment":
              item.quantity += 1;
              break;
            case "decrement":
              item.quantity -= 1;
              break;
            default:
              break;
          }
          item.totalPrice = order.price * item.quantity;
        }
        return item;
      });

      oldOrder = oldOrder.filter(item => item.quantity >= 1);

      setOrders([...oldOrder]);
    },
    deleteOrder: product => {
      let reStateOrders = [...orders].filter(item => item.name !== product);
      setOrders(reStateOrders);
    }
  };
};
