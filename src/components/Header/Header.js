import React from 'react'
import logo from "../../pngwave.png";

const Header = (props) => {
    return(
        <header className="header">
        <nav className="nav">
          <div className="logo_container">
            <img
              src={logo}
              height="80"
              alt="logo"
            />
          </div>
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
      </header>
    )
}

export default Header ;
