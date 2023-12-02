import React from "react";
import Nav from "./Nav";

const Header = ({ handlerSideBar, cart }) => {
  return (
    <header id="headerSection">
      <div className="container">
        <div className="header">
          <div className="logo">
            <h2>BurgerMantri</h2>
          </div>
          <Nav handlerSideBar={handlerSideBar} cart={cart} />
        </div>
      </div>
    </header>
  );
};

export default Header;
