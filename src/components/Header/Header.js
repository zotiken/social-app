import React from "react";
import logo from "../../pngwave.png";
import UserNavigationContainer from '../UserNavigationContainer/UserNavigationContainer'

import classes from "../Header/Header.module.css";

const Header = props => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className="logo_container">
          <img src={logo} height="80" alt="logo" />
        </div>
        <ul>
          <li>home</li>
          <li>support</li>
          <li>massege</li>
          <li>signin</li>
          <li>news</li>
        </ul>
        <UserNavigationContainer/>
      </nav>
    </header>
  );
};

export default Header;
