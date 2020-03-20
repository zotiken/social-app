import store from "../state/state";
const OPEN_DIALOG = "OPEN_DIALOG";
const ADD_TEXT = "ADD_TEXT";
const ADD_MSG = "ADD_MSG";

export const openDiaologActionCreator = prop => ({
  type: OPEN_DIALOG,
  param: prop
});
export const addTextActionCreator = prop => ({ type: ADD_TEXT, param: prop });
export const addMessageActionCreator = prop => ({ type: ADD_MSG, param: prop });

const initState = () => {
  return ( {
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
  });
};
const dialogReducer = (state = initState(), action) => {
  debugger;
  console.log(state);
  switch (action.type) {
    case OPEN_DIALOG:
      state.dialogs.forEach((dialog, i) => {
        if (dialog.id === action.param.event.target.getAttribute("data-id")) {
          state.selectDialog = i;
          state.selectDialogID = dialog.id;
        }
      });
      let List = document.querySelectorAll("#dialogs_list li a");
      List.forEach(dialog => dialog.classList.remove("active"));
      action.param.event.target.classList.add("active");
      store._callSubscriber(store.getState);
      return state;
    case ADD_TEXT:
      state.addMessage = action.param.event.target.value;
      store._callSubscriber(store.getState);
      return state;

    case ADD_MSG:
      state.dialogs.map(dialog => {
        if (dialog.id === state.selectDialogID) {
          let addMessage = {
            messageType: "question",
            text: state.addMessage
          };
          state.addMessage = "";

          dialog.messages.push(addMessage);
        }
        store._callSubscriber(store.getState);
        return state;
      });
    default:
      // console.log(action + " not found");
      //   return state;
      break;
  }
  return state;
};
export default dialogReducer;
