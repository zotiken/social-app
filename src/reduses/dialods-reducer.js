// import store from "../state/state";
const OPEN_DIALOG = "OPEN_DIALOG";
const ADD_TEXT = "ADD_TEXT";
const ADD_MSG = "ADD_MSG";

export const onOpenDialog = prop => ({
  type: OPEN_DIALOG,
  param: prop
});
export const onAddText = prop => ({
  type: ADD_TEXT,
  param: prop
});
export const onAddMessage = prop => ({
  type: ADD_MSG,
  param: prop
});

const initState = () => {
  return ({
    selectDialog: 0,
    selectDialogID: 0,
    ativeLink: 0,
    addMessage: "",
    dialogs: [{
        id: "23452454",
        name: "Sasha",
        create_date: "2020.01.01",
        messages: [{
            messageType: "question",
            text: "Lorem ipsum  sit"
          },
          {
            messageType: "answer",
            text: "amet consectetur adipisicing"
          },
          {
            messageType: "question",
            text: "Sint aliquid voluptas dolor"
          },
          {
            messageType: "question",
            text: "itaque fugit tempore alias assumenda"
          },
          {
            messageType: "answer",
            text: "sapiente ea dolores unde velit"
          }
        ]
      },
      {
        id: "2345245e",
        name: "Pasha",
        create_date: "2020.01.01",
        messages: [{
            messageType: "question",
            text: "Lorem ipsum  sit"
          },
          {
            messageType: "answer",
            text: "amet consectetur adipisicing"
          },
          {
            messageType: "question",
            text: "Sint aliquid voluptas dolor"
          },
          {
            messageType: "question",
            text: "itaque fugit tempore alias assumenda"
          },
          {
            messageType: "question",
            text: "sapiente ea dolores unde velit"
          }
        ]
      },
      {
        id: "23432454",
        name: "Glasha",
        create_date: "2020.01.01",
        messages: [{
            messageType: "answer",
            text: "Lorem ipsum  sit"
          },
          {
            messageType: "answer",
            text: "amet consectetur adipisicing"
          },
          {
            messageType: "question",
            text: "Sint aliquid voluptas dolor"
          },
          {
            messageType: "question",
            text: "itaque fugit tempore alias assumenda"
          },
          {
            messageType: "answer",
            text: "sapiente ea dolores unde velit"
          }
        ]
      },
      {
        id: "23452r454",
        name: "Petya",
        create_date: "2020.01.01",
        messages: [{
            messageType: "question",
            text: "Lorem ipsum  sit"
          },
          {
            messageType: "answer",
            text: "amet consectetur adipisicing"
          },
          {
            messageType: "question",
            text: "Sint aliquid voluptas dolor"
          },
          {
            messageType: "question",
            text: "itaque fugit tempore alias assumenda"
          },
          {
            messageType: "question",
            text: "sapiente ea dolores unde velit"
          }
        ]
      },
      {
        id: "2345r454",
        name: "Kolya",
        create_date: "2020.01.01",
        messages: [{
            messageType: "answer",
            text: "Lorem ipsum  sit"
          },
          {
            messageType: "answer",
            text: "amet consectetur adipisicing"
          },
          {
            messageType: "question",
            text: "Sint aliquid voluptas dolor"
          },
          {
            messageType: "question",
            text: "itaque fugit tempore alias assumenda"
          },
          {
            messageType: "answer",
            text: "sapiente ea dolores unde velit"
          }
        ]
      }
    ]
  });
};
const dialogReducer = (state = initState(), action) => {
  let newState;
  switch (action.type) {
    case OPEN_DIALOG:
      newState = {
        ...state
      }
      newState.dialogs.forEach((dialog, i) => {
        if (dialog.id === action.param.target.getAttribute("data-id")) {
          newState.selectDialog = i;
          newState.selectDialogID = dialog.id;
        }
      });

      let List = document.querySelectorAll("#dialogs_list li a");
      List.forEach(dialog => dialog.classList.remove("active"));
      action.param.target.classList.add("active");
      return newState;
    case ADD_TEXT:
      newState = {
        ...state
      }
      newState.addMessage = action.param.target.value;
      return newState;

    case ADD_MSG:
      console.log(action.param) 
      newState = {
        ...state
      }
      newState.dialogs = [...state.dialogs]
      newState.dialogs.forEach((dialog, i) => {
        dialog = {
          ...state.dialogs[i]
        }
        dialog.messages = {
          ...state.dialogs[i].messages
        }
      });
      newState.dialogs.map((dialog, i) => {
        if (dialog.id === state.selectDialogID) {
          let addMessage = [{
            messageType: "question",
            text: action.param.addMsg
          }];
          newState.addMessage = "";
          dialog.messages = [...state.dialogs[i].messages, ...addMessage]
        }
      });
      return newState;
    default:
      return state;
  }
};
export default dialogReducer;
