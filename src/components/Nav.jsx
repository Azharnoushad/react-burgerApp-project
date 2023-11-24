import React from "react";

const Nav = ({ handlerSideBar }) => {
  return (
    <nav className="menu">
      <div className="menuItem cartOpen" onClick={handlerSideBar}>
        Cart
      </div>
    </nav>
  );
};

export default Nav;
