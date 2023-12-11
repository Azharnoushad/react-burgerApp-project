import React from "react";
import ProductGridItem from "./ProductGridItem";
import { useLoaderData } from "react-router-dom";

const ProductGrid = () => {
  const burgers = useLoaderData();
  return (
    <main>
      <div className="container">
        <div className="productGrid">
          {burgers?.map((burger) => {
            return (
              <ProductGridItem key={burger.id} {...burger} burger={burger} />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ProductGrid;
