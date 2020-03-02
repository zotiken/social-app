import React from "react";
import Header from "./components/Header/Header"
import Aside from "./components/Aside/Aside"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import News from "./components/News/News"
import Message from "./components/Message/Message"
import Settings from "./components/Settings/Settings"


import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Aside/>
      <Switch>
            <Route path="/home">
            <Main/>
            </Route>
            <Route path="/message">
            <Message/>
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
