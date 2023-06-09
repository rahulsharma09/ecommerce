import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../store/cartSlice";
import "./Cart.css";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(items);
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div className="cart-section p-4">
      <h3>Your Cart</h3>
      <hr />
      {items.length > 0 ? (
        <div className="cartWrapper">
          {items.map((elem, key) => {
            return (
              <div className="cartCard">
                <div>
                  <img src={elem.image} alt="" />
                </div>
                <div className="cart-data">
                  <h4>{elem.title}</h4>
                  <p className="text-justify">{elem.description.substring(0,200)}...</p>
                  <h5>${elem.price}</h5>
                </div>
                <div>
                  <button
                    className="ml-4 btn btn-danger remove-btn"
                    onClick={() => handleRemove(elem.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : <h4 className="text-center mt-5">No items found in the cart</h4>}
    </div>
  );
};

export default Cart;
