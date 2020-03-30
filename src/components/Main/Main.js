import React from 'react'
import classes from "../Main/Main.module.css";
import PostBox from "../post-box/post-box"
import userLogo from '../../assets/img/user-default.png'
 class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      edit:false,
      // status:this.props.state.profile?this.props.state.profile.aboutMe:null
      status:"1111111111"

    }
  }
  render() {
    console.log(this.props);
  let src =this.props.state.profile?
  this.props.state.profile.photos.large
  :
  userLogo;
  
let description = this.props.state.profile?this.props.state.profile.aboutMe:null
    return(
        <main className={classes.main}>
        <div className={classes.main_container}>
          <div>
            <div className="user_info">
            <img className="avatar" src={src} width="100" alt="avatar"  />
            <div className="user_data">
        <p>name: <span>{this.props.state.profile?this.props.state.profile.fullName:null}</span></p>
            <p>age</p>
            
            {!this.state.edit?
            <p onDoubleClick={() => this.setState(state=> state.edit=true) }>
            {this.state.status}
            </p>
            :
            <input type="text" autoFocus={true} value={this.state.status} onChange={(e)=> {
              let r = e.target.value
              this.setState(state => state.status = r)
              console.log(this)
            }} onBlur={() => {this.props.editStatus(this.state.status);this.setState(state => state.edit=false)} }/>
          // }} onBlur={(event) => {this.setState(state => state.edit=false)} }/>

            }
            </div>
            </div>
          </div>
          <PostBox/>
        </div>
      </main>

    )
          }
};
export default Profile;
