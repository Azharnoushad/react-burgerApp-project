import React from "react";
import { IoIosStar } from "react-icons/io";
import { formatPrice } from "../utilis/formatPrice";

const ProductGridItem = ({
  id,
  image,
  title,
  rating,
  description,
  price,
  reviews,
  burger,
  addToCartHandler,
  cart,
}) => {
  const itemInCart = cart.findIndex((item) => item.id === id);

  return (
    <div className="productGridItem">
      <img src={image} alt="" />
      <div className="itemContent">
        <h2>{title}</h2>
        <p className="rating">
          <IoIosStar color="#f59e0b" />
          <span>{rating}</span>
        </p>

        <p>{description}</p>
        <div className="itemMeta">
          <div className="itemPrice">{formatPrice(price)}</div>
          <div className="btn" onClick={() => addToCartHandler(burger)}>
            {itemInCart > -1 ? "Added To Cart" : "Add To Cart"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
