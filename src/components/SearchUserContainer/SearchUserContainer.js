import {connect} from "react-redux"
import SearchUser from "../UserSearch/UserSearch"
import {followAC,unfollowAC,setUsersAC,selectPageAC} from "../../reduses/search-reducer"
const mapStateToProps = (state) => {
  console.log(state);
  return ({
    // state: state,
    users: state.findUsersPage.users,
    currentPage: state.findUsersPage.currentPage,
    countPage: state.findUsersPage.countPage,
    totalPage: state.findUsersPage.totalPage
  })
}
const mapDispatchToProps = dispatch => {
  return ({
    follow:(body)=>{dispatch(followAC(body))},
    unfollow:(body)=>{dispatch(unfollowAC(body))},
    setUsers:(body)=>{dispatch(setUsersAC(body))},
    selectPage:(body)=>{dispatch(selectPageAC(body))},

  })
}
const SearchUserContainer = connect(mapStateToProps,mapDispatchToProps)(SearchUser);
export default SearchUserContainer;
