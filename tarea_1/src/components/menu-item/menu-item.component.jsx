import React from "react";
import { Link } from "react-router-dom";
import "./menu-item.styles.css";

const MenuItem = ({ name, imageUrl, size, ...other }) => {
  return (
    <Link to="/shop" className={`${size} menu_item`}>
      <img className={`menu_image`} src={imageUrl} alt={name} {...other} />
      <h1 className="menu_name">{name}</h1>
    </Link>
  );
};

export default MenuItem;
