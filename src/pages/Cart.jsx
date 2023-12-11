import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { AppContext } from "../context/context";

const Cart = () => {
  const { state } = useContext(AppContext);
  return (
    <div id="cartSection">
      <div className="container">
        {state.cart.length > 0 ? (
          <div className="cartPage">
            {state.cart.map((item) => {
              return <CartItem key={item.id} burger={item} />;
            })}
          </div>
        ) : (
          <div>
            <p>Your Cart is Empty. Add some!!!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
