import React from "react";
import { useSelector } from "react-redux";
import './Cart.css'

const Cart = () => {
  const items = useSelector((state) => state.cart);
  console.log(items);
  return (
    <div className="p-4">
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.map((elem, key) => {
          return (
            <div className="cartCard">
              <div>
                <img src={elem.image} alt="" />
              </div>
              <div className="cart-data">
                <h4>{elem.title}</h4>
                <p>{elem.description}</p>
                <h5>${elem.price}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
