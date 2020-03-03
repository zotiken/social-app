import React from 'react'
import classes from "../Main/Main.module.css";
import PostsList from "../PostsList/PostsList"


export default (props) => {
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
          <div className="Messages_container">
             <div className="Messages_hrsder_container">
             <h3>Posts</h3>
              <p><span>5</span> of <span>{props.posts.length}</span></p>
             </div>
              <PostsList posts={props.posts}/>
            <button>View all</button>
          </div>
        </div>
      </main>

    )

};
