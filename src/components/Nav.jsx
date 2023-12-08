import React, { useContext } from "react";
import { AppContext } from "../context/context";

const Nav = () => {
  const { state, dispatch } = useContext(AppContext);

  const showSideBar = () => {
    dispatch({
      type: "SHOW_AND_HIDE_SIDE_BAR",
    });
  };
  return (
    <nav className="menu">
      <div className="menuItem cartOpen" onClick={showSideBar}>
        Cart {state.cart.length}
      </div>
    </nav>
  );
};

export default Nav;
