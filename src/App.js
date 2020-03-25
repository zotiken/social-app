import React  from "react";

import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import MessageContainer from "./components/Message-container/MessageContainer";
import SearhUserContainer from "./components/SearchUserContainer/SearchUserContainer"
import ProfileContainer from "./components/ProfileContainer/ProfileContainer"

import "./App.css";
// import {posts,dialogs} from './state/state'

function App(props) {
  // debugger;
  return (
      <div className="App">
                <Router>
        <Header />
          <Aside { ...props} />
          <Switch>
            <Route path="/profile/:userid?">
              <ProfileContainer/>
              {/* <Profile posts={props.store.getState().profilePage.posts} state={props.store.getState()} store={props.store} /> */}
            </Route>
            <Route path="/message">
              <MessageContainer
                state={props.store.getState()}
              ></MessageContainer>
            </Route>

            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/search_user">
              <SearhUserContainer/>
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
  );
}

export default App;
