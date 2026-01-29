import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar fixed-top border-bottom">
      <div className="container-fluid px-4">

        {/* LOGO */}
        <NavLink className="navbar-brand" to="/">
          <img src="images/logo.svg" alt="Logo" />
        </NavLink>

        {/* NAV LINKS */}
        <ul className="navbar-nav navbar-nav-horizontal ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/product">
              Products
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/pricing">
              Pricing
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/support">
              Support
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
