import React from "react";
import MenuItem from "../../components/menu-item/menu-item.component";
import { menuData } from "./menu.data.js";
import "./homepage.styles.css";

const HomePage = () => (
  <div id="menu">
    {menuData.map(({ id, ...data }) => (
      <MenuItem key={id} {...data} />
    ))}
  </div>
);

export default HomePage;
