import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/context";

const Nav = () => {
  const { state } = useContext(AppContext);
  return (
    <nav className="menu">
      <div className="menuItem cartOpen">
        <NavLink to="/cart">Cart {state.cart.length}</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
