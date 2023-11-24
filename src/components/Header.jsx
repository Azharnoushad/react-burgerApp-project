import React from "react";
import Nav from "./Nav";

const Header = ({handlerSideBar}) => {
  return (
    <header id="headerSection">
      <div className="container">
        <div className="header">
          <div className="logo">
            <h2>BurgerMantri</h2>
          </div>
          <Nav handlerSideBar={handlerSideBar}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
