// import store from '../state/state'
import { authApi } from "../Api/Api";
import { stopSubmit, SubmissionError } from "redux-form";

const initState = () => {
  return {
    id: null,
    login: null,
    status: 1
  };
};

export const setStatusAuth = prop => ({ type: SET_AUTH_STATUS, param: prop });
export const Auth = prop => ({ type: AUTH, param: prop });
export const Promise1 = new Promise((resolve, reject) => {
  resolve("dfvdvfd");
});
export const statusAuth = prop => dispatch => {
  return authApi.getAuthStatus().then(reponse => {
    dispatch(
      setStatusAuth({
        login: reponse.data.data.login,
        status: reponse.data.resultCode,
        id: reponse.data.data.id
      })
    );
    return Promise1;
  });
};

export const logOut = () => dispatch => {
  authApi
    .logOut()
    .then(response => dispatch(setStatusAuth({ login: null, status: 1 })));
};

export const auth = (email, pass) => dispatch => {
  return authApi.auth(email, pass).then(
    // response => console.log(response))
    response => {
      console.log(response);
      if (response.data.resultCode === 0) {
        dispatch(
          Auth({
            status: response.data.resultCode,
            id: response.data.data.userId
          })
        );
      } else {
        throw new SubmissionError({
          email: "User does not exist",
          _error: "Login failed!"
        });
      }
    }
  );
};
const AUTH = "AUTH";

const SET_AUTH_STATUS = "SET_AUTH_STATUS";

const authReducer = (state = initState(), action) => {
  switch (action.type) {
    case "SET_AUTH_STATUS":
      return {
        ...state,
        login: action.param.login,
        status: action.param.status,
        id: action.param.id
      };
    case "AUTH":
      return { ...state, status: action.param.status, id: action.param.id };

    default:
      return state;
  }
  // return state;
};
export default authReducer;
