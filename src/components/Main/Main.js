import React from 'react'
import classes from "../Main/Main.module.css";
import PostBox from "../post-box/post-box"
export default (props) => {
  // debugger;
    return(
        <main className={classes.main}>
        <div className={classes.main_container}>
          {/* <img className="main_background"
            src="https://assets3.thrillist.com/v1/image/2794471/size/sk-2017_04_article_text_width_desktop.jpg"
            height="200"
            alt="banner"
          /> */}
          <div>
            <div className="user_info">
            <img className="avatar" src="https://s.acdn.ur-img.com/media/players/225/225385/22538574.jpg?1563858353" width="100" alt="avatar"  />
            <div className="user_data">
            <p>name: <span>Nik</span></p>
            <p>age</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              iure, culpa provident aperiam saepe illo, cum officia, quod est
              
            </p>
            </div>
            </div>
          </div>
          <PostBox/>
        </div>
      </main>

    )

};
