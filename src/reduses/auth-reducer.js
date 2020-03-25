// import store from '../state/state'
const initState = () => {
  return ({
    id:null,
    login:null
  })
};
// export  const addPostActionCreator = (prop) => {return({type:ADD_POST,param:prop})};
// export  const addPostImgActionCreator = (prop) => ({type:ADD_POST_IMG,param:prop})
// export  const addPostTextActionCreator = (prop) => {return ({type:ADD_POST_TEXT,param:prop})}

export const setStatusAuth = prop => ({ type: SET_AUTH_STATUS, param: prop });

const SET_AUTH_STATUS = "SET_AUTH_STATUS";

const authReducer = (state = initState(), action) => {
  switch (action.type) {
    case "SET_AUTH_STATUS":
      return { ...state, login: action.param.login, status:action.param.status };
    default:
      return state;
  }
  // return state;
};
export default authReducer;
