import dialogReducer from "../reduses/dialods-reducer"
import postReducer from "../reduses/dialods-reducer"


const store = {
  _state: {
    posts: [
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
    dialogsPage:{
      selectDialog: 0,
      selectDialogID: 0,
      addMessage: "",  
      dialogs: [
        {
          id: "23452454",
          name: "Sasha",
          create_date: "2020.01.01",
          messages: [
            { messageType: "question", text: "Lorem ipsum  sit" },
            { messageType: "answer", text: "amet consectetur adipisicing" },
            { messageType: "question", text: "Sint aliquid voluptas dolor" },
            {
              messageType: "question",
              text: "itaque fugit tempore alias assumenda"
            },
            { messageType: "answer", text: "sapiente ea dolores unde velit" }
          ]
        },
        {
          id: "2345245e",
          name: "Pasha",
          create_date: "2020.01.01",
          messages: [
            { messageType: "question", text: "Lorem ipsum  sit" },
            { messageType: "answer", text: "amet consectetur adipisicing" },
            { messageType: "question", text: "Sint aliquid voluptas dolor" },
            {
              messageType: "question",
              text: "itaque fugit tempore alias assumenda"
            },
            { messageType: "question", text: "sapiente ea dolores unde velit" }
          ]
        },
        {
          id: "23432454",
          name: "Glasha",
          create_date: "2020.01.01",
          messages: [
            { messageType: "answer", text: "Lorem ipsum  sit" },
            { messageType: "answer", text: "amet consectetur adipisicing" },
            { messageType: "question", text: "Sint aliquid voluptas dolor" },
            {
              messageType: "question",
              text: "itaque fugit tempore alias assumenda"
            },
            { messageType: "answer", text: "sapiente ea dolores unde velit" }
          ]
        },
        {
          id: "23452r454",
          name: "Petya",
          create_date: "2020.01.01",
          messages: [
            { messageType: "question", text: "Lorem ipsum  sit" },
            { messageType: "answer", text: "amet consectetur adipisicing" },
            { messageType: "question", text: "Sint aliquid voluptas dolor" },
            {
              messageType: "question",
              text: "itaque fugit tempore alias assumenda"
            },
            { messageType: "question", text: "sapiente ea dolores unde velit" }
          ]
        },
        {
          id: "2345r454",
          name: "Kolya",
          create_date: "2020.01.01",
          messages: [
            { messageType: "answer", text: "Lorem ipsum  sit" },
            { messageType: "answer", text: "amet consectetur adipisicing" },
            { messageType: "question", text: "Sint aliquid voluptas dolor" },
            {
              messageType: "question",
              text: "itaque fugit tempore alias assumenda"
            },
            { messageType: "answer", text: "sapiente ea dolores unde velit" }
          ]
        }
      ]
  
    }
  },
  _callSubscriber() {
    console.log("start reRender");
  },

  subscriber(obserwer) {
    this._callSubscriber = obserwer;
  },

  getState() {
    return this._state;
  },
  onOpenDialog(event) {
    this._state.dialogsPage.dialogs.forEach((dialog, i) => {
      if (dialog.id === event.target.getAttribute("data-id")) {
        this._state.dialogsPage.selectDialog = i;
        this._state.dialogsPage.selectDialogID = dialog.id;
      }
    });
    let List = document.querySelectorAll("#dialogs_list li a");
    List.forEach(dialog => dialog.classList.remove("active"));
    event.target.classList.add("active");
    this._callSubscriber(this.getState);
  },
  onAddText(event) {
    this._state.dialogsPage.addMessage = event.target.value;
    this._callSubscriber(this.getState);
  },
  onAddMessage() {
    this._state.dialogsPage.dialogs.map(dialog => {
      if (dialog.id === this._state.selectDialogID) {
        let addMessage = {
          messageType: "question",
          text: this._state.addMessage
        };
        dialog.messages.push(addMessage);
      }
    });
    this._callSubscriber(this.getState);
  },
  despatch(action) {
    dialogReducer(this.getState().dialogsPage, action);
    postReducer(this.getState().posts, action);

    // switch (action.type) {
    //   case "OPEN_DIALOG":
    //     this._state.dialogsPage.dialogs.forEach((dialog, i) => {
    //       if (dialog.id === action.param.event.target.getAttribute("data-id")) {
    //         this._state.dialogsPage.selectDialog = i;
    //         this._state.dialogsPage.selectDialogID = dialog.id;
    //       }
    //     });  
    //     let List = document.querySelectorAll("#dialogs_list li a");
    //       List.forEach(dialog => dialog.classList.remove("active"));
    //       action.param.event.target.classList.add("active");
    //       this._callSubscriber(this.getState);
    //     break;
    //     case "ADD_TEXT":
    //       this._state.dialogsPage.addMessage = action.param.event.target.value;
    //       this._callSubscriber(this.getState);    
    //       break;

    //     case "ADD_MSG":
    //       this._state.dialogsPage.dialogs.map(dialog => {
    //         if (dialog.id === this._state.selectDialogID) {
    //           let addMessage = {
    //             messageType: "question",
    //             text: this._state.addMessage
    //           };
    //                   this._state.addMessage ="";
    
    //           dialog.messages.push(addMessage);
    //         }
    //         this._callSubscriber(this.getState);
    //       });
    
    //     break;
  
    //   default:
    //     console.log(action + " not found");
    //     break;
    // }


    // if (action === "OPEN_DIALOG") {
    //   this._state.dialogs.forEach((dialog, i) => {
    //     if (dialog.id === event.target.getAttribute("data-id")) {
    //       this._state.selectDialog = i;
    //       this._state.selectDialogID = dialog.id;
    //     }
    //   });
    //   let List = document.querySelectorAll("#dialogs_list li a");
    //   List.forEach(dialog => dialog.classList.remove("active"));
    //   event.target.classList.add("active");
    //   this._callSubscriber(this.getState);
    // }
    //  else if (action === "ADD_TEXT") {
    //   this._state.addMessage = event.target.value;
    //   this._callSubscriber(this.getState);
    // } else if (action === "ADD_MSG") {
    //   this._state.dialogs.map(dialog => {
    //     if (dialog.id === this._state.selectDialogID) {
    //       let addMessage = {
    //         messageType: "question",
    //         text: this._state.addMessage
    //       };
    //               this._state.addMessage ="";

    //       dialog.messages.push(addMessage);
    //     }
    //     this._callSubscriber(this.getState);
    //   });
    // }
  
  }
};
export default store;
