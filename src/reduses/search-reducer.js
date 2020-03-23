const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export const followAC = prop => ({ type: FOLLOW, param: prop });
export const unfollowAC = prop => ({ type: UNFOLLOW, param: prop });
export const setUsersAC = prop => ({ type: SET_USERS, param: prop });

// user
// {id:111111,firstName:"Dima",LastName:"Гоги",age:"22",datacreate:"01.04.2018",frends:["2335543","2345522","2345544"]}

const initState = () => ({
  users: [],
  currentPage:1,
  countPage:0,
  usersOnPage:0
});
const SearchUserReducer = (state = initState(), action) => {
  switch (action.type) {
    case FOLLOW:
      return ({
        ...state,
        users:{...state.users.map(user => user.id === action.id?user.follow = true:user)}
      });
    case UNFOLLOW:
      return ({
        ...state,
        users:{...state.users.map(user => user.id === action.id?user.follow = false:user)}
      });
    case SET_USERS:
      return ({
...state,
users:action.users
      });

    default:
      return state;
  }
};
export default SearchUserReducer;
