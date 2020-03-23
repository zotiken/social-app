import React from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import classes from "../PostsList/PostsList.module.css";


export default (props) => {
// let[selectpost,setSelectposts] = useState(0);
console.log(props);
  return (
    <ul className={classes.posts_list}>
      {
        props.posts.reverse().map((post,i) =>  <li key={i}><img src={post.img} width="200"  alt=""/><p>{post.info}</p><p>like:<span>{post.like}</span></p><button>Узнать больше</button></li>
        )
      }
    {/* <li><img src="https://m.spletnik.ru/img/2019/03/nadja/20190304-Prodigy-post.jpg" width="200"  alt=""/><p></p><p>like:<span>5</span></p><button>Узнать больше</button></li>
    <li>lorem</li>
    <li>lorem</li>
    <li>lorem</li>
    <li>lorem</li> */}
  </ul>

  );
};
