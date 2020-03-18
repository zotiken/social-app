import React, { useState } from "react";
import Header from "./components/Header/Header"
import Aside from "./components/Aside/Aside"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import News from "./components/News/News"
import Message from "./components/Message/Message"
import Settings from "./components/Settings/Settings"
import "./App.css";
// import {posts,dialogs} from './state/state'

function App(props) {
// let[selectDialog,setSelectDialog] = useState(0);

  return (
    <div className="App">
      <Header/>
      <Router>
      <Aside/>
      <Switch>
            <Route path="/home">
            <Main posts={props.state.posts}/>
            </Route>
            <Route path="/message">
            <Message dialogs={props.state.dialogs} onOpenDialog={props.state.onOpenDialog.bind(props.state)} selectDialog={props.state.selectDialog}/>
            </Route>

            <Route path="/settings">
                <Settings/>
            </Route>
            <Route path="/news">
                <News/>
            </Route>

        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
