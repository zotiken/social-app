import userApi from '../Api/Api'
// import { selectPageThunk } from './search-reducer';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const UNACTIVATE= "UNACTIVATE";
const ACTIVATE= "ACTIVATE";
const SET_USERS = "SET_USERS";
const SELECT_PAGE = "SELECT_PAGE";
const CHANGE_LOADING_STATUS = "CHANGE_LOADING_STATUS";


// было

// export const followAC = prop => ({ type: FOLLOW, param: prop });
// export const unfollowAC = prop => ({ type: UNFOLLOW, param: prop });
// export const setUsersAC = prop => ({ type: SET_USERS, param: prop });
// export const selectPageAC = prop => ({ type: SELECT_PAGE, param: prop });

// стало

export const follow = prop => ({ type: FOLLOW, param: prop });
export const unfollow = prop => ({ type: UNFOLLOW, param: prop });
export const unactive = prop => ({ type: UNACTIVATE, param: prop });
export const active = prop => ({ type: ACTIVATE, param: prop });

export const setUsers = prop => ({ type: SET_USERS, param: prop });
export const selectPage = prop => ({ type: SELECT_PAGE, param: prop });
export const isLoading = prop => ({ type: CHANGE_LOADING_STATUS, param: prop });


// Thunk  идет через Middleware тк функция в action

export const getUsers = () => dispatch => {
  userApi.getUsers()
  .then(data => {
    dispatch(setUsers({items:data.data.items,total:data.data.totalCount}));
    dispatch(isLoading(true))})
}

export const selectPageT= (number) => dispatch => {
  dispatch(selectPage(number));
userApi.getCurrentPAge(number)
.then(data => {
  dispatch(setUsers({items:data.data.items,total:data.data.totalCount}));
  dispatch(isLoading(true))})
}
export const onFollow =(userId) => dispatch => {
  dispatch(unactive(userId))
  userApi.followStatus(userId)
  .then(data => {
    if (!data.data) {
      userApi.followSuccess(userId)
      .then(data => {if (data.data) {
        dispatch(follow(userId))
        dispatch(active(userId))

      }})
    } else {
      userApi.unFollowSuccess(userId)
      .then(data => {if (data.data) {
        dispatch(unfollow(userId))
        dispatch(active(userId))
      }})

    }
  })


}

// user
// {id:111111,firstName:"Dima",LastName:"Гоги",age:"22",datacreate:"01.04.2018",frends:["2335543","2345522","2345544"]}

const initState = () => ({
  users: [],
  currentPage:1,
  countPage:10,
  totalPage:0,
  loading:false,
  stateButtons: []
});
const SearchUserReducer = (state = initState(), action) => {
  switch (action.type) {
    case FOLLOW:
      return ({
        ...state,
        users:[...state.users.map(user => user.id === action.param?{...user,followed:true}:user)]
      });
    case UNFOLLOW:
      return ({
        ...state,
        users:[...state.users.map(user => user.id === action.param?{...user,followed:false}:user)]
      });
      case UNACTIVATE:
        return ({
          ...state,
          stateButtons:[ ...state.stateButtons, action.param]
        });
        case ACTIVATE:
        return ({
          ...state,
          stateButtons:[ state.stateButtons.filter(stateButton => stateButton !== action.param)]
        });

    case SET_USERS:
      console.log(action.param);
      return ({
...state,
users:action.param.items,
totalPage:action.param.total
      });
      case SELECT_PAGE:
        console.log(action.param);
        return ({
  ...state,
  currentPage:action.param
        });
        case CHANGE_LOADING_STATUS:
        return ({
  ...state,
  loading:action.param
        });


    default:
      return state;
  }
};

export default SearchUserReducer;
