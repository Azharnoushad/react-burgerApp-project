import React from "react";
import { formatPrice } from "../utilis/formatPrice";
import { IoMdCloseCircle } from "react-icons/io";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";

const CartItem = ({
  burger,
  addToCartHandler,
  decreaseTheQuantity,
  removeItemFromCart,
}) => {
  const { id, image, title, price, quantity } = burger;
  return (
    <div className="cartItem">
      <div>
        <IoMdCloseCircle
          color="#f59e0b"
          size={30}
          onClick={() => removeItemFromCart(id)}
        />
      </div>
      <img src={image} alt="" width="48" height="48" />
      <div className="cartContent">
        <h2>{title}</h2>
        <p>{formatPrice(price)}</p>

        <div className="quantityControl">
          <span>
            <FaSquareMinus size={18} onClick={() => decreaseTheQuantity(id)} />
          </span>
          <span> {quantity} </span>
          <span>
            <FaSquarePlus size={18} onClick={() => addToCartHandler(burger)} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
