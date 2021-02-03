import React from "react";
import HamburgerMenu from "./util/HamburgerMenu";
import { NavLink, withRouter } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/" exact>
              COMPANY
            </NavLink>
          </div>
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
