import React,{Component} from "react";
import {connect} from "react-redux"
import userApi from '../../Api/Api'

import SearchUser from "../UserSearch/UserSearch"
// import {followAC,unfollowAC,setUsersAC,selectPageAC} from "../../reduses/search-reducer"
import {follow,unfollow,setUsers,selectPage,isLoading} from "../../reduses/search-reducer"

 class SearchUserWrap extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    userApi.getUsers()
    .then(data => {
      this.props.setUsers({items:data.data.items,total:data.data.totalCount});
      this.props.isLoading(true)})
    // axios({
    //   method: 'get',
    //   url: "https://social-network.samuraijs.com/api/1.0/users",
    // }).then(data => {console.log(data); this.props.setUsers({items:data.data.items,total:data.data.totalCount}); this.props.isLoading(true)})
  }

  onselectPage = (i) => {
this.props.selectPage(i);
userApi.getCurrentPAge(i)
.then(data => {
  this.props.setUsers({items:data.data.items,total:data.data.totalCount});
 this.props.isLoading(true)})
// axios({
//   method: 'get',
//   url: `https://social-network.samuraijs.com/api/1.0/users?page=${i}`,
// }).then(data => {console.log(data); this.props.setUsers({items:data.data.items,total:data.data.totalCount}); this.props.isLoading(true)})
  }

  onFollow =(param)=> {
    userApi.followStatus(param)
    // axios({
    //   withCredentials: true,
    //   method: 'get',
    //   url: "https://social-network.samuraijs.com/api/1.0/follow/" + param,
    //   headers:{
    //    "API-KEY":"eb4884d1-22a9-4753-b224-5ea5fc049f6e"
    //   }
    // })
    .then(data => {
      if (!data.data) {
        userApi.followSuccess(param)
        // axios({
        //   withCredentials: true,
        //   method: 'post',
        //   url: "https://social-network.samuraijs.com/api/1.0/follow/" + param,
        //   headers:{
        //     "API-KEY":"eb4884d1-22a9-4753-b224-5ea5fc049f6e"
        //    }
     
        // })
        .then(data => {if (data.data) {
          this.props.follow(param)
        }})
      } else {
        userApi.unFollowSuccess(param)

        // axios({
        //   withCredentials: true,
        //   method: 'delete',
        //   url: "https://social-network.samuraijs.com/api/1.0//follow/" + param,
        //   headers:{
        //     "API-KEY":"eb4884d1-22a9-4753-b224-5ea5fc049f6e"
        //    }
     
        // })
        .then(data => {if (data.data) {
          this.props.unfollow(param)
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
