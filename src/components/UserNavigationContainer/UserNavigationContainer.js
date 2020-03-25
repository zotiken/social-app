import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom'
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'

import * as  axios  from 'axios'

// // import Profile from '../Main/Main'
import {setStatusAuth} from '../../reduses/auth-reducer'

class UserNavigationWrap extends Component {
      componentDidMount() {
  //       // let userid = this.props.match.params.userid
  //       // if(!userid) {
  //       //   userid = 2
  //       // }
        axios({
          url:`https://social-network.samuraijs.com/api/1.0//auth/me`,
          withCredentials:true
        })
        // .then(reponse => this.props.setProfile(reponse.data))
        // if (reponse.data.resultCode === 1) {
          .then(reponse => this.props.setStatusAuth({login:reponse.data.data.login, status:reponse.data.resultCode}))
        // }

      }

  render() {
    console.log(this.props);
    let name = "NIKITA";
    let status =  true;
    return (
      // <Profile {...this.props}/>
        <ul>
          <li>
            {this.props.state.status === 0?this.props.state.login:<Link to="/auth">signin</Link>}
          </li>
          <li>name</li>
          <li>level</li>
        </ul>
    );
  }
}
  let mapStateToProps = (state)=> ({
state: state.auth
  })
//   // withRouter(ProfileWrap)    -   дает информацию в state из строки поиска
export default connect(mapStateToProps,{setStatusAuth})(UserNavigationWrap);
