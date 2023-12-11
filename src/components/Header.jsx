import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="headerSection">
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link>
              <h2>BurgerMantri</h2>
            </Link>
          </div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
