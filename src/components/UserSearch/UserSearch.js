import React, { Component } from "react";
import * as axios from  "axios"
import classes from "../Main/Main.module.css";

export default class Users extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    axios({
      withCredentials:true,
      method: 'get',
      url: "https://social-network.samuraijs.com/api/1.0/users",
      responseType: 'stream',
      headers:{"API-KEY":"d7f15d69-07ad-4ae2-8532-d40ce08c9af2"}
    }).then(data => console.log(data))
  }
render(){
return(
          <main className={classes.main}>
          <ul>
           {/* { this.props.state.usersPage.users.map(user => <li>{user.firstName}</li>)} */}
          </ul>
      </main>

)
}
}

// export default (props) => {
//   debugger;
//     return(
//         <main className={classes.main}>
//           <ul>
//            { props.state.usersPage.users.map(user => <li>{user.firstName}</li>)}
//           </ul>
//       </main>

//     )

// };
