import React, { useState } from "react";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./components/News/News";
import Message from "./components/Message/Message";
import Settings from "./components/Settings/Settings";
import "./App.css";
// import {posts,dialogs} from './state/state'

function App(props) {
  debugger;
  return (
    <div className="App">
      <Header />
      <Router>
        <Aside />
        <Switch>
          <Route path="/home">
            <Main posts={props.store.getState().posts} />
          </Route>
          <Route path="/message">
            <Message
              state={props.store.getState()}
              onOpenDialog={props.store.despatch.bind(props.store)}
              onAddText={props.store.despatch.bind(props.store)}
              onAddMessage={props.store.despatch.bind(props.store)}
              // onOpenDialog={props.store.dispatch}
              // onAddText={props.store.dispatch}
              // onAddMessage={props.store.dispatch}

            />
          </Route>

          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/news">
            <News />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
