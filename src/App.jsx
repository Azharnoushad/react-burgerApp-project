import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import SideBar from "./components/SideBar";

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);


  const handlerSideBar = () => {
    setShowSideBar((prevState)=>!prevState)
  }

  return (
    <div id="app">
      <Header handlerSideBar={handlerSideBar}/>
      <Hero />
      <ProductGrid />
      <Footer />
      {showSideBar && <SideBar handlerSideBar={handlerSideBar}/>}
    </div>
  );
};

export default App;
