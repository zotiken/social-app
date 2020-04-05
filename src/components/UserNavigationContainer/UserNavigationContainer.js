import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { statusAuth, logOut } from "../../reduses/auth-reducer";
import { deleteProfile } from "../../reduses/post-reducer";

class UserNavigationWrap extends Component {
  componentDidMount() {
    this.props.statusAuth();
  }
  logOut = () => {
    this.props.logOut();
    this.props.deleteProfile();
  };

  render() {
    console.log(this.props);
    return (
      <ul>
        <li>
          {this.props.state.status === 0 ? (
            <p>{this.props.state.login}</p>
          ) : null}
          {this.props.state.status === 0 ? (
            <a onClick={this.logOut}>sign out</a>
          ) : (
            <Link to="/auth">signin</Link>
          )}
        </li>
        <li>name</li>
        <li>level</li>
      </ul>
    );
  }
}

let mapStateToProps = state => ({
  state: state.auth
});
//   // withRouter(ProfileWrap)    -   дает информацию в state из строки поиска
export default connect(mapStateToProps, { statusAuth, logOut, deleteProfile })(
  UserNavigationWrap
);
