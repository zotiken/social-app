import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {profileApi} from '../../Api/Api'
import Profile from '../Main/Main'
import {addPost,addPostImg,addPostText,setProfile} from '../../reduses/post-reducer'

  
  export class ProfileWrap extends Component {
    componentDidMount() {
      let userid = this.props.match.params.userid
      if(!userid) {
        userid = 2
      }
      profileApi.getProfile(userid)
      .then(reponse => this.props.setProfile(reponse.data))
    }
    
    render() {
      console.log(this.props);
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


