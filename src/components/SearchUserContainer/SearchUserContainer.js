import {connect} from "react-redux"
import SearchUser from "../UserSearch/UserSearch"
import {followAC,unfollowAC,setUsersAC} from "../../reduses/search-reducer"
const mapStateToProps = (state) => {
  return ({
    // state: state,
    users: state.findUsersPage.users,
    currentPage: state.findUsersPage.users.currentPage,
    countPage: state.findUsersPage.users.currentPage,
    usersOnPage: state.findUsersPage.users.currentPage
  })
}
const mapDispatchToProps = dispatch => {
  return ({
    follow:(body)=>{dispatch.followAC(body)},
    unfollow:(body)=>{dispatch.unfollowAC(body)},
    setUsers:(body)=>{dispatch.setUsersAC(body)},
  })
}
const SearchUserContainer = connect(mapStateToProps)(SearchUser);
export default SearchUserContainer;
