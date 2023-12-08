import React, { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import CartItem from "./CartItem";
import { formatPrice } from "../utilis/formatPrice";
import { AppContext } from "../context/context";

const SideBar = () => {
  const { state, dispatch } = useContext(AppContext);
  const closeSidebar = () => {
    dispatch({
      type: "SHOW_AND_HIDE_SIDE_BAR",
    });
  };

  const totalPrice = state.cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  return (
    <div id="sidebar">
      <div className="cart">
        <div className="cartHead">
          <div>
            <h2>Shopping Cart</h2>
            <p>{state.cart.length} items in your cart</p>
          </div>
          <div className="cartClose">
            <IoMdCloseCircle color="#f59e0b" size={35} onClick={closeSidebar} />
          </div>
        </div>
        <div className="cartBody">
          {state.cart?.map((burger) => {
            return <CartItem key={burger.id} burger={burger} />;
          })}
        </div>
        <div className="cartFooter">
          <h3>Total - {formatPrice(Math.floor(totalPrice))}</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
