import React, { Component } from "react";
import * as axios from  "axios"
import classes from "../UserSearch/UserSearch.module.css";
import userDefault from "../../assets/img/user-default.png" 
export default class Users extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    axios({
      method: 'get',
      url: "https://social-network.samuraijs.com/api/1.0/users",
    }).then(data => {console.log(data); this.props.setUsers({items:data.data.items,total:data.data.totalCount})})
  // }).then(data => {console.log(data); this.props.setUsers(data.data.items)})

  }
  onselectPage = (i) => {
console.log("!");
this.props.selectPage(i)
axios({
  method: 'get',
  url: `https://social-network.samuraijs.com/api/1.0/users?page=${i}`,
}).then(data => {console.log(data); this.props.setUsers({items:data.data.items,total:data.data.totalCount})})
  }
render(){
  console.log(this.props);
  console.log(this.props.currentPage);
  let total = Math.ceil(this.props.totalPage/this.props.countPage)
  console.log(total);
  let pages=[];
  if (total > 5) {
    for (let index = 1; index <= 5; index++) {
      pages.push(index)
    }  
  }
return(
          <main className={classes.main}>
            <ul className={classes.paginatinList}>
              {pages.map((pageLink, i) => <li className={this.props.currentPage === pageLink&&classes.selectPage } key={i} onClick={() => this.onselectPage(pageLink)}
              ><a href="#">{pageLink}</a></li>)}
            </ul>
          <ul className={classes.users_List}>
{ this.props.users.map(user => <li key={user.id}>{user.followed?<button onClick={()=> this.props.unfollow(user.id)}>follow</button>:<button onClick={()=> this.props.follow(user.id)}>unfollow</button>}<img width="100" src={user.photos.small?user.photos.small:userDefault}  alt="AVATAR"/> <p>{user.name}</p></li>)}
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
