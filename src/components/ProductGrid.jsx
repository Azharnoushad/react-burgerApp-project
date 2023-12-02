import React from "react";
import ProductGridItem from "./ProductGridItem";
import { burgers } from "../../data";

const ProductGrid = ({ addToCartHandler, cart }) => {
  return (
    <main>
      <div className="container">
        <div className="productGrid">
          {burgers?.map((burger) => {
            return (
              <ProductGridItem
                key={burger.id}
                {...burger}
                cart={cart}
                addToCartHandler={addToCartHandler}
                burger={burger}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ProductGrid;
