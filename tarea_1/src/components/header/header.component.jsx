import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";

const Header = ({ currentUser, signOut }) => (
  <div id="header">
    <Link to="/" id="logo">
      <img src="/" alt="Logo" />
    </Link>

    <div id="header-links">
      <Link to="/">Home</Link>
      <Link to="/">Contact Us</Link>
      {currentUser ? (
        <div onClick={signOut}>Sign Out</div>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </div>
  </div>
);

export default Header;
