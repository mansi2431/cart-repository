import React from "react";
import { NavLink } from "react-router-dom";

import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

import "./index.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <NavLink className="navbar-brand" to="/">
          <img src="images/nav-logo.webp" alt="nav-logo" />
          <h1>Furniro</h1>
        </NavLink>
      </div>

      <ul>
        <li>
          <NavLink className="nav-btn" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/shop">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <NavLink className="nav-btn" to="/user">
            <FiUser size="1.6rem" />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/search">
            <FiSearch size="1.6rem" />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/favorites">
            <MdFavoriteBorder size="1.6rem" />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/cart">
            <IoCartOutline size="1.6rem" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
