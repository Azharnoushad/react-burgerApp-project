import React, { useContext } from "react";
import { formatPrice } from "../utilis/formatPrice";
import { IoMdCloseCircle } from "react-icons/io";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";
import { AppContext } from "../context/context";

const CartItem = ({ burger }) => {
  const { id, image, title, price, quantity } = burger;
  const { state, dispatch } = useContext(AppContext);

  const increaseQuantity = (_id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payLoad: _id,
    });
  };

  const decreaseQuantity = (_id) => {
    if (quantity > 1) {
      dispatch({
        type: "DECREASE_QUANTITY",
        payLoad: _id,
      });
    } else {
      dispatch({
        type: "REMOVE_ITEM",
        payLoad: _id,
      });
    }
  };

  const removeItemHandler = (_id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payLoad: _id,
    });
  };
  return (
    <div className="cartItem">
      <div>
        <IoMdCloseCircle
          color="#f59e0b"
          size={30}
          onClick={() => removeItemHandler(id)}
        />
      </div>
      <img src={image} alt="" width="48" height="48" />
      <div className="cartContent">
        <h2>{title}</h2>
        <p>{formatPrice(price)}</p>

        <div className="quantityControl">
          <span onClick={() => decreaseQuantity(id)}>
            <FaSquareMinus size={18} />
          </span>
          <span> {quantity} </span>
          <span onClick={() => increaseQuantity(id)}>
            <FaSquarePlus size={18} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
