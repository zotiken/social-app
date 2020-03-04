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
import {posts,dialogs} from './state/state'

function App() {
let[selectDialog,setSelectDialog] = useState(0);

var onClick = (event) => {
    dialogs.forEach((dialog,i) => {if (dialog.id === event.target.getAttribute("data-id")) {
        setSelectDialog(selectDialog = i)}})
        let List = (document.querySelectorAll("#dialogs_list li a"))
        List.forEach(dialog =>dialog.classList.remove("active") )
        event.target.classList.add("active");
}


  return (
    <div className="App">
      <Header/>
      <Router>
      <Aside/>
      <Switch>
            <Route path="/home">
            <Main posts={posts}/>
            </Route>
            <Route path="/message">
            <Message dialogs={dialogs} onClick={onClick} selectDialog={selectDialog}/>
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
