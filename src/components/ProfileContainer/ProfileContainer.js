import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import * as  axios  from 'axios'

import Profile from '../Main/Main'
import {addPost,addPostImg,addPostText,setProfile} from '../../reduses/post-reducer'

  
  export class ProfileWrap extends Component {
    componentDidMount() {
      let userid = this.props.match.params.userid
      if(!userid) {
        userid = 2
      }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userid}`)
      .then(reponse => this.props.setProfile(reponse.data))
    }
    
    render() {
      console.log(this.props);

// if (this.props.state.profile) {
//   console.log(this.props.state.profile.userId);
//   console.log(this.props.match.params.userid);

//   if(this.props.state.profile.userid !== this.props.match.params.userid){
//     console.log("1")
//     // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userid}`)
//     // .then(reponse => this.props.setProfile(reponse.data))
//   }  
// }
      return (
        <Profile {...this.props}/>
      )
    }
  }
  let mapStateToProps = (state)=> ({ 
state: state.profilePage
  })
  // withRouter(ProfileWrap)    -   дает информацию в state из строки поиска
  export default connect(mapStateToProps,{addPost,addPostImg,addPostText,setProfile})(withRouter(ProfileWrap))


