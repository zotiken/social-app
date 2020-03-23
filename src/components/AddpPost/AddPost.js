import React from "react";
import { addTextActionCreator } from "../../reduses/dialods-reducer";
import PostsList from "../PostsList/PostsList";
// import classes from "../AddpPost/AddPost.module";

export default props => {
  return (
    <div className="Messages_container">
      <div>
        <input
          type="file"
          name=""
          id=""
          onChange={event => props.addImg(event)}
        />
        <textarea
          name="add-Post"
          id="add-Post"
          value={props.state.profilePage.addPostText}
          onChange={event => props.addText(event)}
        >
          )
        </textarea>
        <button onClick={event => props.addPost(event)}>addPost</button>
      </div>

      <div className="Messages_hrsder_container">
        <h3>Posts</h3>
        <p>
          <span>5</span> of <span></span>
        </p>
      </div>
      <PostsList posts={props.state.profilePage.posts} />
      <button>View all</button>
    </div>
  );
};
