import React from "react";
import classes from "../PostsList/PostsList.module.css";


export default (props) => {
  return (
    <ul className={classes.posts_list}>
      {
        props.posts.map((post,i) =>  <li key={i}><img src={post.img} width="200"  alt=""/><p>{post.info}</p><p>like:<span>{post.like}</span></p><button>Узнать больше</button></li>
        )
      }
  </ul>
  );
};
