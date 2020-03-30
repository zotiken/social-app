// import store from '../state/state'
import {authApi} from "../Api/Api"
const initState = () => {
  return ({
    id:null,
    login:null,
    status:1
  })
};

export const setStatusAuth = prop => ({ type: SET_AUTH_STATUS, param: prop });


export const statusAuth = (prop) => dispatch => {
  authApi.getAuthStatus().then(
    reponse => dispatch(setStatusAuth({login:reponse.data.data.login, status:reponse.data.resultCode}))
  )
};

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
