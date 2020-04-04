import React from 'react'

const OrderView=({orders,updateOrder,deleteOrder,products})=>{
    return(
        <ul className="l-order">
            {orders.map((item,index)=>
            <li className="c-horizon-ul" key={item.name}>
                <h3 className="c-header">{item.name}</h3>
                <button className="c-button-action" onClick={()=> updateOrder(item,"decrement")}>-</button>
                <p className="c-space">{item.quantity}</p>
                <button className="c-button-action" onClick={()=> updateOrder(item,"increment")}>+</button>
                <p className="c-price c-space">{item.totalPrice}</p>
                <button className="c-button-action" onClick={()=> deleteOrder(item.name)}>x</button>
            </li>
            )}
        </ul>
    )
}

export default OrderView;