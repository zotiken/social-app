const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SELECT_PAGE = "SELECT_PAGE";

export const followAC = prop => ({ type: FOLLOW, param: prop });
export const unfollowAC = prop => ({ type: UNFOLLOW, param: prop });
export const setUsersAC = prop => ({ type: SET_USERS, param: prop });
export const selectPageAC = prop => ({ type: SELECT_PAGE, param: prop });

// user
// {id:111111,firstName:"Dima",LastName:"Гоги",age:"22",datacreate:"01.04.2018",frends:["2335543","2345522","2345544"]}

const initState = () => ({
  users: [],
  currentPage:1,
  countPage:10,
  totalPage:0
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
  

    default:
      return state;
  }
};
export default SearchUserReducer;
