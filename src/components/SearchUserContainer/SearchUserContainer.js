import React,{Component} from "react";
import {connect} from "react-redux"
import {userApi} from '../../Api/Api'

import SearchUser from "../UserSearch/UserSearch"
import {follow,unfollow,setUsers,selectPage,isLoading} from "../../reduses/search-reducer"

 class SearchUserWrap extends Component {
  componentDidMount() {
    userApi.getUsers()
    .then(data => {
      this.props.setUsers({items:data.data.items,total:data.data.totalCount});
      this.props.isLoading(true)})
  }

  onselectPage = (number) => {
this.props.selectPage(number);
userApi.getCurrentPAge(number)
.then(data => {
  this.props.setUsers({items:data.data.items,total:data.data.totalCount});
 this.props.isLoading(true)})
  }

  onFollow =(userId)=> {
    userApi.followStatus(userId)
    .then(data => {
      if (!data.data) {
        userApi.followSuccess(userId)
        .then(data => {if (data.data) {
          this.props.follow(userId)
        }})
      } else {
        userApi.unFollowSuccess(userId)
        .then(data => {if (data.data) {
          this.props.unfollow(userId)
        }})

      }
    })

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
    loading: state.findUsersPage.loading
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


const SearchUserContainer = connect(mapStateToProps,{follow,unfollow,setUsers,selectPage,isLoading}
  )(SearchUserWrap);
export default SearchUserContainer;
