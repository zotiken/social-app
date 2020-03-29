import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {statusAuth} from "../../reduses/auth-reducer"

class UserNavigationWrap extends Component {
      componentDidMount() {
        this.props.statusAuth()
      }

  render() {
    debugger
    console.log(this.props);
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
export default connect(mapStateToProps,{statusAuth})(UserNavigationWrap);
