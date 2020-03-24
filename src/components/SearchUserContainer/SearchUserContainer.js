import {connect} from "react-redux"
import SearchUser from "../UserSearch/UserSearch"
// import {followAC,unfollowAC,setUsersAC,selectPageAC} from "../../reduses/search-reducer"
import {follow,unfollow,setUsers,selectPage} from "../../reduses/search-reducer"

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
// const mapDispatchToProps = dispatch => {
//   return ({
//     follow:(body)=>{dispatch(followAC(body))},
//     unfollow:(body)=>{dispatch(unfollowAC(body))},
//     setUsers:(body)=>{dispatch(setUsersAC(body))},
//     selectPage:(body)=>{dispatch(selectPageAC(body))},

//   })
// }

//                     =>

// const mapDispatchToProps = dispatch => {
//   return ({
//     follow:(body)=>{dispatch(follow(body))},
//     unfollow:(body)=>{dispatch(unfollow(body))},
//     setUsers:(body)=>{dispatch(setUsers(body))},
//     selectPage:(body)=>{dispatch(selectPage(body))},

//   }) 

//                     =>

// }
// {follow:follow,unfollow:unfollow,setUsers:setUsers,selectPage:selectPage}
// {follow,unfollow,setUsers,selectPage}

const SearchUserContainer = connect(mapStateToProps,{follow,unfollow,setUsers,selectPage}
  )(SearchUser);
export default SearchUserContainer;
