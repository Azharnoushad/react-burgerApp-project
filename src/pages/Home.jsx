import React from "react";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductGrid />
    </>
  );
};

export default Home;

export const fetchProducts = async () => {
  let res = await fetch("https://burgermantri.onrender.com/data");
  return res;
};
