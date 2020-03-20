// import store from '../state/state'
const initState = { posts: [
    {
      id: "23452454",
      img:
        "https://m.spletnik.ru/img/2019/03/nadja/20190304-Prodigy-post.jpg",
      create_date: "2020.01.01",
      info:
        "The Prodigy — британский музыкальный коллектив, образовавшийся в 1990 году и ориентированный на электронную музыку. Наряду с Fatboy Slim, The Chemical Brothers и The Crystal Method, The Prodigy являются пионерами жанра бигбит, который обрёл популярность в 1990-е и 2000-е годы.",
      id_user: "d345r34q2",
      like: "5"
    },
    {
      id: "2345d454",
      img:
        "http://www.spletnik.ru/thumb/300x200/img/2019/01/elizaveta/20190203-declanos.jpg",
      create_date: "2020.01.01",
      info:
        "The Prodigy — британский музыкальный коллектив, образовавшийся в 1990 году и ориентированный на электронную музыку. Наряду с Fatboy Slim, The Chemical Brothers и The Crystal Method, The Prodigy являются пионерами жанра бигбит, который обрёл популярность в 1990-е и 2000-е годы.",
      id_user: "d345r34q2",
      like: "5"
    },
    {
      id: "2345n454",
      img:
        "http://www.spletnik.ru/thumb/300x200/img/2019/02/nadja/19022019-karl-anons2.jpg",
      create_date: "2020.01.01",
      info:
        "The Prodigy — британский музыкальный коллектив, образовавшийся в 1990 году и ориентированный на электронную музыку. Наряду с Fatboy Slim, The Chemical Brothers и The Crystal Method, The Prodigy являются пионерами жанра бигбит, который обрёл популярность в 1990-е и 2000-е годы.",
      id_user: "d345r34q2",
      like: "5"
    },
    {
      id: "234z2454",
      img:
        "http://www.spletnik.ru/thumb/300x200/img/2019/02/nadja/20190226Olga-an.jpg",
      create_date: "2020.01.01",
      info:
        "The Prodigy — британский музыкальный коллектив, образовавшийся в 1990 году и ориентированный на электронную музыку. Наряду с Fatboy Slim, The Chemical Brothers и The Crystal Method, The Prodigy являются пионерами жанра бигбит, который обрёл популярность в 1990-е и 2000-е годы.",
      id_user: "d345r34q2",
      like: "5"
    },
    {
      id: "23452954",
      img:
        "http://www.spletnik.ru/thumb/310x205/img/2020/02/olga/20200203-virus-anons.jpg",
      create_date: "2020.01.01",
      info:
        "83 человека на карантине и 24 в больнице: в Москве подтверждены случаи заражения коронавирусом",
      id_user: "d345r34q2",
      like: "5"
    }
  ],
}


const postReducer = (state = initState,action) => {
    switch (action.type) {
        case "G":
        //     state.dialogPage.dialogs.forEach((dialog, i) => {
        //     if (dialog.id === action.param.event.target.getAttribute("data-id")) {
        //         state.dialogPage.selectDialog = i;
        //         state.dialogPage.selectDialogID = dialog.id;
        //     }
        //   });  
        //   let List = document.querySelectorAll("#dialogs_list li a");
        //     List.forEach(dialog => dialog.classList.remove("active"));
        //     action.param.event.target.classList.add("active");
        //     store._callSubscriber(this.getState);
        //     return state;
        //     case "AD":
        //     state.dialogPage.addMessage = action.param.event.target.value;
        //     store._callSubscriber(this.getState);    
            return state;
  
          case "A":
            // state.dialogPage.dialogs.map(dialog => {
            //   if (dialog.id === this._state.selectDialogID) {
            //     let addMessage = {
            //       messageType: "question",
            //       text: this._state.addMessage
            //     };
            //             this._state.addMessage ="";
      
            //     dialog.messages.push(addMessage);
            //   }
            //   store._callSubscriber(this.getState);
            // });
      
            return state;
      
        default:
        //   console.log(action + " not found");
          return state;
      }
    // return state;
}
export default postReducer;