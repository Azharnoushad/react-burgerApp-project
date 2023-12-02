import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import CartItem from "./CartItem";
import { formatPrice } from "../utilis/formatPrice";

const SideBar = ({
  handlerSideBar,
  cart,
  addToCartHandler,
  decreaseTheQuantity,
  removeItemFromCart,
  totalPrice
}) => {
  return (
    <div id="sidebar">
      <div className="cart">
        <div className="cartHead">
          <div>
            <h2>Shopping Cart</h2>
            <p>{cart.length} items in your cart</p>
          </div>
          <div className="cartClose" onClick={handlerSideBar}>
            <IoMdCloseCircle color="#f59e0b" size={35} />
          </div>
        </div>
        <div className="cartBody">
          {cart?.map((burger) => {
            return (
              <CartItem
                key={burger.id}
                burger={burger}
                addToCartHandler={addToCartHandler}
                decreaseTheQuantity={decreaseTheQuantity}
                removeItemFromCart={removeItemFromCart}
              />
            );
          })}
        </div>
        <div className="cartFooter">
          <h3>Total - {formatPrice( Math.floor(totalPrice))}</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
