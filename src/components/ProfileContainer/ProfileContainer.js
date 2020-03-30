import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Profile from '../Main/Main'
import {getProfile} from '../../reduses/post-reducer'

  
  export class ProfileWrap extends Component {
    componentDidMount() {
      this.props.getProfile(this.props.match.params.userid)
    }
    
    render() {
      return (
        <Profile {...this.props}/>
      )
    }
  }
  let mapStateToProps = (state)=> ({ 
state: state.profilePage
  })
  // withRouter(ProfileWrap)    -   дает информацию в state из строки поиска
  export default connect(mapStateToProps,{getProfile})(withRouter(ProfileWrap))


