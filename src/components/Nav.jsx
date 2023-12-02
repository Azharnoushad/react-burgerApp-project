import React from "react";

const Nav = ({ handlerSideBar, cart }) => {
  return (
    <nav className="menu">
      <div className="menuItem cartOpen" onClick={handlerSideBar}>
        Cart {cart.length}
      </div>
    </nav>
  );
};

export default Nav;
