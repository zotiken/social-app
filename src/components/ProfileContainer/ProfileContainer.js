import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Profile from '../Main/Main'
import {getProfile,setDescription,editStatus,getStatus} from '../../reduses/post-reducer'

  
  export class ProfileWrap extends Component {
    componentDidMount() {
      console.log(this.props);
      this.props.getStatus(this.props.match.params.userid)
      this.props.getProfile(this.props.match.params.userid,this.props.auth.id)
    }
    
    render() {
      console.log(this);

      return (
        <Profile {...this.props}/>
      )
    }
  }
  let mapStateToProps = (state)=> ({ 
state: state.profilePage,
auth:state.auth
  })
  // withRouter(ProfileWrap)    -   дает информацию в state из строки поиска
  export default connect(mapStateToProps,{getProfile,setDescription,editStatus,getStatus})(withRouter(ProfileWrap))


