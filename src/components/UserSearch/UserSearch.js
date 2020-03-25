import React from "react";
import classes from "../UserSearch/UserSearch.module.css";
import userDefault from "../../assets/img/user-default.png"
import Preload  from "../Preload/Preload"
export default function Users (props) {
  let total = Math.ceil(props.totalPage/props.countPage)
  let pages=[];
  if (total > 5) {
    for (let index = 1; index <= 5; index++) {
      pages.push(index)
    }  
  }
return(
<main className={classes.main}>
            <ul className={classes.paginatinList}>
              {pages.map((pageLink, i) => <li className={props.currentPage === pageLink&&classes.selectPage } key={i} onClick={() => props.onselectPage(pageLink)}
              ><a href="#">{pageLink}</a></li>)}
            </ul>
          {props.loading? 
          <ul className={classes.users_List}>
{ props.users.map(user => <li key={user.id}>{user.followed?<button onClick={()=> props.unfollow(user.id)}>follow</button>:<button onClick={()=> props.follow(user.id)}>unfollow</button>}<img width="100" src={user.photos.small?user.photos.small:userDefault}  alt="AVATAR"/> <p>{user.name}</p></li>)}
          </ul>: <Preload/>}
      </main>
)
}
