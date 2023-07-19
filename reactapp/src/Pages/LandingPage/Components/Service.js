

import React from "react";
import { MenuList } from "../Helpers/MenuList";
import MenuItem from "../Components/MenuItem";
import "../Styles/Menu.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <Navbar />
      <div className="menu">
        <h1 className="menuTitle">Services</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                title={menuItem.title}
                description={menuItem.description}
              />
            );
          })}
        </div>
      </div>
      {!isHomePage && <Footer />}
    </div>
  );
}

export default Menu;
