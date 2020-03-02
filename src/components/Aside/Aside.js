import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default () => {
  return (
    <aside className="aside">
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
