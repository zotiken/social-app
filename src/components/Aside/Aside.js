import React from "react";
import { Link } from "react-router-dom";
import classes from "../Aside/Aside.module.css";


export default (props) => {
  return (
    <aside className={classes.aside}>
      <ul>
        <li>
          <Link to="/profile">profile</Link>
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
      <ul><li>
      <Link to="/search_user">Search User</Link></li></ul>
    </aside>
  );
};
