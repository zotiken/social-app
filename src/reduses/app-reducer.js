// import store from '../state/state'
import { statusAuth } from "../reduses/auth-reducer";
import { getProfile } from "../reduses/post-reducer";

const LOADING_SUCCESS = "LOADING_SUCCESS";

const initialState = {
  loading: false
};

export const actionName = payload => ({
  type: LOADING_SUCCESS,
  payload
});

export const isLoading = (payload, param, i) => dispatch => {
  let promise2 = dispatch(statusAuth());
  let promise = dispatch(getProfile(param, 2));
  Promise.all([promise2, promise]).then(()=>dispatch(actionName(payload)));
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_SUCCESS:
      return { ...state, loading: payload };

    default:
      return state;
  }
};
