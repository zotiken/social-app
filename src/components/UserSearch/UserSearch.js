import React from 'react'
import classes from "../Main/Main.module.css";
import PostBox from "../post-box/post-box"
export default (props) => {
  debugger;
    return(
        <main className={classes.main}>
          <ul>
           { props.state.usersPage.users.map(user => <li>{user.firstName}</li>)}
          </ul>
      </main>

    )

};
