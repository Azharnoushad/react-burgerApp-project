import React, { useContext, useReducer, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import SideBar from "./components/SideBar";
import { AppContext } from "./context/context";

const App = () => {
  // const [cart, setCart] = useState([]);

  // const addToCartHandler = (burger) => {
  //   let burgerIsInCart = cart.find((item) => item.id === burger.id);

  //   if (burgerIsInCart) {
  //     setCart((prevState) => {
  //       return prevState.map((item) => {
  //         if (item.id === burgerIsInCart.id) {
  //           return { ...item, quantity: item.quantity + 1 };
  //         } else {
  //           return { ...item };
  //         }
  //       });
  //     });
  //   } else {
  //     setCart((prevState) => {
  //       return [...prevState, { ...burger, quantity: 1 }];
  //     });
  //   }
  // };

  // const decreaseTheQuantity = (_id) => {
  //   let quantity = cart.find((item) => item.id === _id).quantity;

  //   if (quantity > 1) {
  //     setCart((prevState) => {
  //       return prevState.map((item) => {
  //         if (item.id === _id) {
  //           return { ...item, quantity: item.quantity - 1 };
  //         } else {
  //           return { ...item };
  //         }
  //       });
  //     });
  //   } else {
  //     return setCart((prevState) =>
  //       prevState.filter((item) => item.id !== _id)
  //     );
  //   }
  // };

  // const removeItemFromCart = (_id) => {
  //   setCart((prevState) => prevState.filter((item) => item.id !== _id));
  // };

  // const totalPrice = cart.reduce((acc, curr) => {
  //   return acc + curr.price * curr.quantity;
  // }, 0);

  // console.log("cart", cart);

  const { state, dispatch } = useContext(AppContext);

  console.log("Cart", state.cart);

  return (
    <div id="app">
      <Header  />
      <Hero />
      <ProductGrid />
      <Footer />
      {state.showSidebar && (
        <SideBar/>
      )}
    </div>
  );
};

export default App;
