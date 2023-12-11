import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { formatPrice } from "../utilis/formatPrice";
import { FaStar } from "react-icons/fa";
import { AppContext } from "../context/context";

const ProductDetails = () => {
  const burgerDetails = useLoaderData();
  const { id, image, title, rating, description, price, reviews } =
    burgerDetails;

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
    <div id="productSection">
      <div className="container">
        <div className="productPage">
          <div className="productContent">
            <div className="productImg">
              <img src={image} alt="" />
            </div>
            <div className="productInfo">
              <h1>{title}</h1>
              <div className="rating">
                <FaStar color="#F59E0B" />
                <span>{rating}</span>
              </div>
              <p>{description}</p>
              <div className="itemPrice">{formatPrice(price)}</div>
              <div
                className="btn"
                onClick={() => addToCartHandler(burgerDetails)}
              >
                {itemInCart ? "Added To Cart" : "Add To Cart"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const fetchProductDetails = async ({ params }) => {
  let res = await fetch(`https://burgermantri.onrender.com/data/${params.id}`);
  return res;
};
