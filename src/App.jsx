import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import SideBar from "./components/SideBar";

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [cart, setCart] = useState([]);

  const handlerSideBar = () => {
    setShowSideBar((prevState) => !prevState);
  };

  const addToCartHandler = (burger) => {
    let burgerIsInCart = cart.find((item) => item.id === burger.id);

    if (burgerIsInCart) {
      setCart((prevState) => {
        return prevState.map((item) => {
          if (item.id === burgerIsInCart.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return { ...item };
          }
        });
      });
    } else {
      setCart((prevState) => {
        return [...prevState, { ...burger, quantity: 1 }];
      });
    }
  };

  const decreaseTheQuantity = (_id) => {
    let quantity = cart.find((item) => item.id === _id).quantity;

    if (quantity > 1) {
      setCart((prevState) => {
        return prevState.map((item) => {
          if (item.id === _id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return { ...item };
          }
        });
      });
    } else {
      return setCart((prevState) =>
        prevState.filter((item) => item.id !== _id)
      );
    }
  };

  const removeItemFromCart = (_id) => {
    setCart((prevState) => prevState.filter((item) => item.id !== _id));
  };

  const totalPrice = cart.reduce((acc,curr) => {
    return acc + curr.price * curr.quantity
  },0)

 

  // console.log("cart", cart);

  return (
    <div id="app">
      <Header handlerSideBar={handlerSideBar} cart={cart} />
      <Hero />
      <ProductGrid addToCartHandler={addToCartHandler} cart={cart} />
      <Footer />
      {showSideBar && (
        <SideBar
          handlerSideBar={handlerSideBar}
          cart={cart}
          addToCartHandler={addToCartHandler}
          decreaseTheQuantity={decreaseTheQuantity}
          removeItemFromCart={removeItemFromCart}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
};

export default App;
