import React from "react";
import { MenuLists } from "../Helpers/MenuLists";
import List from "./List";
import "../Styles/Feedback.css";
import Navbar from "../Components/Navbar";


function Menu() {
  return (
    <>
    <Navbar/>
    <div className="menu">
      <h1 className="menuTitle">What people are saying...</h1>
      
      <div className="menuList">
        {MenuLists.map((menuItem1, key) => {
          return (
            <List
              key={key}
              title={menuItem1.title}
             description={menuItem1.description}
            />
          );
        })}
      </div>
    </div>
    </>

  );
}

export default Menu;