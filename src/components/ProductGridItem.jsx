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
}) => {
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
          <div className="btn">Add to Cart</div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
