import React from 'react'
import classes from "../Header/Header.module.css";
export default (params) => {
   return(
    <footer className="footer">
              <nav className={classes.nav}>
        <ul>
          <li>home</li>
          <li>support</li>
          <li>massege</li>
          <li>signin</li>
          <li>news</li>
        </ul>
        <ul>
          <li>signin</li>
          <li>name</li>
          <li>level</li>
        </ul>
      </nav>

    </footer>
    ) 
}

