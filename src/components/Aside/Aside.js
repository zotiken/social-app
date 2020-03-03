import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import classes from "../Aside/Aside.module.css";


export default () => {
  return (
    <aside className={classes.aside}>
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/settings">settings</Link>
        </li>
        <li>
          <Link to="/message">message</Link>
        </li>
        <li>
          <Link to="/music">music</Link>
        </li>
        <li>
          <Link to="/news">news</Link>
        </li>
      </ul>
    </aside>
  );
};
