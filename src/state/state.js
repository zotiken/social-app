   let reRender = () => console.log("start reRender"); 
  export let  subscriber = function (obserwer) {
    reRender = obserwer;
  } 
  
  const state ={
    selectDialog :0,
  posts:[
    {id:"23452454",img:"https://m.spletnik.ru/img/2019/03/nadja/20190304-Prodigy-post.jpg",create_date:"2020.01.01",info:"The Prodigy — британский музыкальный коллектив, образовавшийся в 1990 году и ориентированный на электронную музыку. Наряду с Fatboy Slim, The Chemical Brothers и The Crystal Method, The Prodigy являются пионерами жанра бигбит, который обрёл популярность в 1990-е и 2000-е годы.",id_user:"d345r34q2",like:"5"},
    {id:"2345d454",img:"http://www.spletnik.ru/thumb/300x200/img/2019/01/elizaveta/20190203-declanos.jpg",create_date:"2020.01.01",info:"The Prodigy — британский музыкальный коллектив, образовавшийся в 1990 году и ориентированный на электронную музыку. Наряду с Fatboy Slim, The Chemical Brothers и The Crystal Method, The Prodigy являются пионерами жанра бигбит, который обрёл популярность в 1990-е и 2000-е годы.",id_user:"d345r34q2",like:"5"},
    {id:"2345n454",img:"http://www.spletnik.ru/thumb/300x200/img/2019/02/nadja/19022019-karl-anons2.jpg",create_date:"2020.01.01",info:"The Prodigy — британский музыкальный коллектив, образовавшийся в 1990 году и ориентированный на электронную музыку. Наряду с Fatboy Slim, The Chemical Brothers и The Crystal Method, The Prodigy являются пионерами жанра бигбит, который обрёл популярность в 1990-е и 2000-е годы.",id_user:"d345r34q2",like:"5"},
    {id:"234z2454",img:"http://www.spletnik.ru/thumb/300x200/img/2019/02/nadja/20190226Olga-an.jpg",create_date:"2020.01.01",info:"The Prodigy — британский музыкальный коллектив, образовавшийся в 1990 году и ориентированный на электронную музыку. Наряду с Fatboy Slim, The Chemical Brothers и The Crystal Method, The Prodigy являются пионерами жанра бигбит, который обрёл популярность в 1990-е и 2000-е годы.",id_user:"d345r34q2",like:"5"},
    {id:"23452954",img:"http://www.spletnik.ru/thumb/310x205/img/2020/02/olga/20200203-virus-anons.jpg",create_date:"2020.01.01",info:"83 человека на карантине и 24 в больнице: в Москве подтверждены случаи заражения коронавирусом",id_user:"d345r34q2",like:"5"},
  ],
    dialogs:[
    {id:"23452454",name:"Sasha",create_date:"2020.01.01",messages:[{messageType:"question", text:"Lorem ipsum  sit"},{messageType:"answer", text:"amet consectetur adipisicing"},{messageType:"question", text:"Sint aliquid voluptas dolor"},{messageType:"question", text:"itaque fugit tempore alias assumenda"},{messageType:"answer", text:"sapiente ea dolores unde velit"}]},
    {id:"2345245e",name:"Pasha",create_date:"2020.01.01",messages:[{messageType:"question", text:"Lorem ipsum  sit"},{messageType:"answer", text:"amet consectetur adipisicing"},{messageType:"question", text:"Sint aliquid voluptas dolor"},{messageType:"question", text:"itaque fugit tempore alias assumenda"},{messageType:"question", text:"sapiente ea dolores unde velit"}]},  
    {id:"23432454",name:"Glasha",create_date:"2020.01.01",messages:[{messageType:"answer", text:"Lorem ipsum  sit"},{messageType:"answer", text:"amet consectetur adipisicing"},{messageType:"question", text:"Sint aliquid voluptas dolor"},{messageType:"question", text:"itaque fugit tempore alias assumenda"},{messageType:"answer", text:"sapiente ea dolores unde velit"}]},  
    {id:"23452r454",name:"Petya",create_date:"2020.01.01",messages:[{messageType:"question", text:"Lorem ipsum  sit"},{messageType:"answer", text:"amet consectetur adipisicing"},{messageType:"question", text:"Sint aliquid voluptas dolor"},{messageType:"question", text:"itaque fugit tempore alias assumenda"},{messageType:"question", text:"sapiente ea dolores unde velit"}]},   
    {id:"2345r454",name:"Kolya",create_date:"2020.01.01",messages:[{messageType:"answer", text:"Lorem ipsum  sit"},{messageType:"answer", text:"amet consectetur adipisicing"},{messageType:"question", text:"Sint aliquid voluptas dolor"},{messageType:"question", text:"itaque fugit tempore alias assumenda"},{messageType:"answer", text:"sapiente ea dolores unde velit"}]}      
],

onOpenDialog(event)  {
  this.dialogs.forEach((dialog,i) => {if (dialog.id === event.target.getAttribute("data-id")) {
        this.selectDialog = i}})
        let List = (document.querySelectorAll("#dialogs_list li a"))
        List.forEach(dialog =>dialog.classList.remove("active") )
        event.target.classList.add("active");
        reRender(state);
}
 };
 export default state;
 
