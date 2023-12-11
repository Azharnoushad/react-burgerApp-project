import React, { useContext } from "react";
import { IoIosStar } from "react-icons/io";
import { formatPrice } from "../utilis/formatPrice";
import { AppContext } from "../context/context";
import { Link } from "react-router-dom";

const ProductGridItem = ({
  id,
  image,
  title,
  rating,
  description,
  price,
  reviews,
  burger,
}) => {
  const { state, dispatch } = useContext(AppContext);
  const itemInCart = state.cart.find((item) => item.id === id);

  const addToCartHandler = (burger) => {
    if (itemInCart) {
      dispatch({
        type: "INCREASE_QUANTITY",
        payLoad: id,
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payLoad: { ...burger, quantity: 1 },
      });
    }
  };

  return (
    <div className="productGridItem">
      <img src={image} alt="" />
      <div className="itemContent">
        <Link to={`/burger/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="rating">
          <IoIosStar color="#f59e0b" />
          <span>{rating}</span>
        </p>

        <p>{description}</p>
        <div className="itemMeta">
          <div className="itemPrice">{formatPrice(price)}</div>
          <div className="btn" onClick={() => addToCartHandler(burger)}>
            {itemInCart ? "Added To Cart" : "Add To Cart"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
