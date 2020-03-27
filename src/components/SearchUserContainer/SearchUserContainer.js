import React,{Component} from "react";
import {connect} from "react-redux"

import SearchUser from "../UserSearch/UserSearch"
import {getUsers,selectPageT,onFollow} from "../../reduses/search-reducer"

 class SearchUserWrap extends Component {
  componentDidMount() {
    this.props.getUsers() 
  }
  onselectPage = (number) => {
    this.props.selectPageT(number)
  }

  onFollow =(userId)=> {
    this.props.onFollow(userId)
  }
render(){
return(<SearchUser { ...this.props} onselectPage={this.onselectPage} onFollow={this.onFollow} />)
}
}

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    users: state.findUsersPage.users,
    currentPage: state.findUsersPage.currentPage,
    countPage: state.findUsersPage.countPage,
    totalPage: state.findUsersPage.totalPage,
    loading: state.findUsersPage.loading,
    stateButtons: state.findUsersPage.stateButtons

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


const SearchUserContainer = connect(mapStateToProps,{getUsers,selectPageT,onFollow}
  )(SearchUserWrap);
export default SearchUserContainer;
