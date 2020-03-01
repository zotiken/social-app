import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <div>
            <img
              src="https://i.pinimg.com/originals/8d/ee/42/8dee429a8deb4d3b9b2b33d8ecb5098e.jpg"
              width="200"
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
      <aside className="aside">
        <ul>
          <li>home</li>
          <li>support</li>
          <li>massege</li>
          <li>signin</li>
          <li>news</li>
        </ul>
      </aside>
      <main className="main">
        <div>
          <img
            src="https://assets3.thrillist.com/v1/image/2794471/size/sk-2017_04_article_text_width_desktop.jpg"
            height="200"
            alt="banner"
          />
          <div>
            <div className="user_info">
            <img className="avatar" src="https://s.acdn.ur-img.com/media/players/225/225385/22538574.jpg?1563858353" width="100" alt="avatar"  />
            <div>
            <p>name: <span>Nik</span></p>
            <p>age</p>
            </div>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              iure, culpa provident aperiam saepe illo, cum officia, quod est
              libero maiores fugiat amet ea consequuntur animi nam blanditiis.
              Totam, molestiae.
            </p>
          </div>
          <div>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
