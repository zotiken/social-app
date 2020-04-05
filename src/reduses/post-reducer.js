// import store from '../state/state'
import { profileApi } from "../Api/Api";

// const GET_STATUS = "GET_STATUS";
const ADD_POST_TEXT = "ADD_POST_TEXT";
const ADD_POST_IMG = "ADD_POST_IMG";
const ADD_POST = "ADD_POST";
const SET_PROFILE = "SET_PROFILE";
const SET_DESCRIPTION = "SET_DESCRIPTION";
const DELETE_PROFILE = "DELETE_PROFILE";

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

export const deleteProfile = prop => ({ type: DELETE_PROFILE, param: prop });

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

export const getStatus = userId => () => dispatch => {
  let userid = userId;
  if (!userid) {
    userid = 2;
  }
  profileApi.getStatus(userId).then(dispatch(setDescription(userId)));
};

export const Promise2 = new Promise((resolve, reject) => {
  resolve("hello");
});
//                          thunk

export const getProfile = (param, i) => dispatch => {
  console.log("99999");
  let userid = param;
  if (!userid) {
    userid = i;
  }
   return profileApi.getProfile(userid).then(reponse => {
    dispatch(setProfile(reponse.data));
    // console.log("6666");
    // return Promise2;
  });
};

export const editStatus = status => dispatch => {
  profileApi.editStatus(status).then(response => {
    console.log(response);
    if (response.data.resultCode === 0) {
      dispatch(setDescription(status));
    }
  });
};

const postReducer = (state = initState(), action) => {
  let newState;
  switch (action.type) {
    case "GET_STATUS":
      return { ...state, profile: action.param };

    case "SET_PROFILE":
      return { ...state, profile: action.param };
    case "ADD_POST_TEXT":
      newState = { ...state };
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
      console.log(action.param.add);

      let addPost = [
        {
          id: "1111111",
          img: window.URL.createObjectURL(action.param.picture),
          create_date: new Date(),
          info: action.param.add,
          id_user: "1",
          like: "0"
        }
      ];
      return {
        ...state,
        posts: [...addPost, ...state.posts]
      };
    case "SET_DESCRIPTION":
      console.log(action);
      return {
        ...state,
        profile: { ...state.profile, aboutMe: action.param }
      };
    case "DELETE_PROFILE":
      console.log(action);
      return {
        ...state,
        profile: null
      };
    default:
      //   console.log(action + " not found");
      return state;
  }
  // return state;
};
export default postReducer;
