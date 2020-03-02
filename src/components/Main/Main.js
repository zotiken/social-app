import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default () => {
    return(
        <main className="main">
        <div className="main_container">
          {/* <img className="main_background"
            src="https://assets3.thrillist.com/v1/image/2794471/size/sk-2017_04_article_text_width_desktop.jpg"
            height="200"
            alt="banner"
          /> */}
          <div>
            <div className="user_info">
            <img className="avatar" src="https://s.acdn.ur-img.com/media/players/225/225385/22538574.jpg?1563858353" width="100" alt="avatar"  />
            <div>
            <p>name: <span>Nik</span></p>
            <p>age</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              iure, culpa provident aperiam saepe illo, cum officia, quod est
              
            </p>
            </div>
            </div>
          </div>
          <div className="Messages_container">
              <h3>Posts</h3>
              <p><span>5</span> of <strong>10</strong></p>
            <ul className="Messages_list">
              <li><p>lorem</p><span>5</span><button>!</button></li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
            <button>View all</button>
          </div>
        </div>
      </main>

    )

};
