// import store from '../state/state'
import {profileApi} from "../Api/Api"
const initState = () => {
  return {
    profile: null,
    addPostText: 0,
    addPostImg: 0,
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
    ]
  };
};
// export  const addPostActionCreator = (prop) => {return({type:ADD_POST,param:prop})};
// export  const addPostImgActionCreator = (prop) => ({type:ADD_POST_IMG,param:prop})
// export  const addPostTextActionCreator = (prop) => {return ({type:ADD_POST_TEXT,param:prop})}

export const addPost = prop => {
  return { type: ADD_POST, param: prop };
};
export const addPostImg = prop => ({ type: ADD_POST_IMG, param: prop });
export const addPostText = prop => {
  return { type: ADD_POST_TEXT, param: prop };
};
export const setProfile = prop => {
  return { type: SET_PROFILE, param: prop };
};
export const setDescription = prop => ({ type: SET_DESCRIPTION, param: prop });

//                          thunk

export const getProfile = (param) => dispatch => {
  let userid = param
  if(!userid) {
    userid = 2
  }
  profileApi.getProfile(userid)
  .then(reponse => dispatch(setProfile(reponse.data)))

};


const ADD_POST_TEXT = "ADD_POST_TEXT";
const ADD_POST_IMG = "ADD_POST_IMG";
const ADD_POST = "ADD_POST";
const SET_PROFILE = "SET_PROFILE";
const SET_DESCRIPTION = "SET_DESCRIPTION";

const postReducer = (state = initState(), action) => {
  let newState;
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, profile: action.param };
    case "ADD_POST_TEXT":
      // return ({
      //   ...state,
      //   addPostText:action.param.target.value
      // })
      newState = { ...state };
      // newState.addMessage = action.param.event.target.value;
      // // store._callSubscriber(store.getState);
      newState.addPostText = action.param.target.value;

      return newState;

    case "ADD_POST_IMG":
      console.log(action.param.target.files[0]);
      let file = action.param.target.files[0];
      console.log(window.URL.createObjectURL(file));
      return {
        ...state,
        addPostImg: window.URL.createObjectURL(file)
      };
    case "ADD_POST":
      let addPost = [
        {
          id: "1111111",
          img: state.addPostImg,
          create_date: new Date(),
          info: state.addPostText,
          id_user: "1",
          like: "0"
        }
      ];
      newState = { ...state };
      newState.posts = [...state.posts, ...addPost];
      // return({
      //   ...state,
      //   posts:[...state.posts,...addPost]})
      return newState;
      case "SET_DESCRIPTION":
        return {
          ...state,
          profile:{...state.profile,aboutMe:action.param.target.value},
        };
  
    default:
      //   console.log(action + " not found");
      return state;
  }
  // return state;
};
export default postReducer;
