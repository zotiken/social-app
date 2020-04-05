import React from "react";

import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import MessageContainer from "./components/Message-container/MessageContainer";
import SearhUserContainer from "./components/SearchUserContainer/SearchUserContainer";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import AuthorizationPage from "./components/AuthorizationPage/AuthorizationPage";
import { isLoading } from "./reduses/app-reducer";

import "./App.css";
import { connect } from "react-redux";
// import {posts,dialogs} from './state/state'

class App extends React.Component {
  // debugger;
  componentDidMount() {
    console.log(this.props);
    this.props.isLoading(
      true,
      this.props.state.auth.id,
      this.props.state.auth.id
    );
  }

  render() {
    console.log(this.props.state.app.loading);
    if (this.props.state.app.loading) {
      return (
        <div className="App">
          <Router>
            <Header />
            <Aside {...this.props} />
            <Switch>
              <Route path="/profile/:userid?">
                <ProfileContainer />
                {/* <Profile posts={this.props.store.getState().profilePage.posts} state={this.props.store.getState()} store={this.props.store} /> */}
              </Route>
              <Route path="/message">
                <MessageContainer
                  state={this.props.store.getState()}
                ></MessageContainer>
              </Route>

              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/search_user">
                <SearhUserContainer />
              </Route>
              <Route path="/auth">
                <AuthorizationPage />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </div>
      );
    } else {
      return <div style={{color:'white',display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}}>loading....</div>;
    }
  }
}
const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps, { isLoading })(App);
