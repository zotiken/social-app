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

function App() {
  const posts =[
    {id:"23452454",img:"https://m.spletnik.ru/img/2019/03/nadja/20190304-Prodigy-post.jpg",create_date:"2020.01.01",info:"The Prodigy — британский музыкальный коллектив, образовавшийся в 1990 году и ориентированный на электронную музыку. Наряду с Fatboy Slim, The Chemical Brothers и The Crystal Method, The Prodigy являются пионерами жанра бигбит, который обрёл популярность в 1990-е и 2000-е годы.",id_user:"d345r34q2",like:"5"},
    {id:"2345d454",img:"http://www.spletnik.ru/thumb/300x200/img/2019/01/elizaveta/20190203-declanos.jpg",create_date:"2020.01.01",info:"The Prodigy — британский музыкальный коллектив, образовавшийся в 1990 году и ориентированный на электронную музыку. Наряду с Fatboy Slim, The Chemical Brothers и The Crystal Method, The Prodigy являются пионерами жанра бигбит, который обрёл популярность в 1990-е и 2000-е годы.",id_user:"d345r34q2",like:"5"},
    {id:"2345n454",img:"http://www.spletnik.ru/thumb/300x200/img/2019/02/nadja/19022019-karl-anons2.jpg",create_date:"2020.01.01",info:"The Prodigy — британский музыкальный коллектив, образовавшийся в 1990 году и ориентированный на электронную музыку. Наряду с Fatboy Slim, The Chemical Brothers и The Crystal Method, The Prodigy являются пионерами жанра бигбит, который обрёл популярность в 1990-е и 2000-е годы.",id_user:"d345r34q2",like:"5"},
    {id:"234z2454",img:"http://www.spletnik.ru/thumb/300x200/img/2019/02/nadja/20190226Olga-an.jpg",create_date:"2020.01.01",info:"The Prodigy — британский музыкальный коллектив, образовавшийся в 1990 году и ориентированный на электронную музыку. Наряду с Fatboy Slim, The Chemical Brothers и The Crystal Method, The Prodigy являются пионерами жанра бигбит, который обрёл популярность в 1990-е и 2000-е годы.",id_user:"d345r34q2",like:"5"},
    {id:"23452954",img:"http://www.spletnik.ru/thumb/310x205/img/2020/02/olga/20200203-virus-anons.jpg",create_date:"2020.01.01",info:"83 человека на карантине и 24 в больнице: в Москве подтверждены случаи заражения коронавирусом",id_user:"d345r34q2",like:"5"},
  ];
  const dialogs =[
    {id:"23452454",name:"Sasha",create_date:"2020.01.01",messages:["Lorem ipsum  sit","amet consectetur adipisicing","Sint aliquid voluptas dolor","itaque fugit tempore alias assumenda","sapiente ea dolores unde velit"]},
    {id:"2345245e",name:"Pasha",create_date:"2020.01.01",messages:["Lorem ipsum dolor sit","amet consectetur adipisicing","elit. Sint aliquid voluptas dolor","itaque  tempore alias assumenda","sapiente ea dolores unde velit"]},  
    {id:"23432454",name:"Glasha",create_date:"2020.01.01",messages:["Lorem ipsum dolor ","amet  adipisicing","elit. Sint aliquid voluptas dolor","супер","sapiente ea dolores unde velit"]},  
    {id:"23452r454",name:"Petya",create_date:"2020.01.01",messages:["Lorem ipsum  sit","amet consectetur adipisicing","!","itaque fugit tempore alias assumenda","sapiente ea dolores  velit"]},   
    {id:"2345r454",name:"Kolya",create_date:"2020.01.01",messages:["Lorem  dolor sit","amet consectetur adipisicing","elit. Sint  voluptas door","велеколепно","sapiente ea dolores unde velit"]}      
];
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
