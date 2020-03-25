import React from 'react'
import classes from "../Main/Main.module.css";
import PostBox from "../post-box/post-box"
import userLogo from '../../assets/img/user-default.png'

export default (props) => {
  // console.log(props.state.profile);
  let src;
  if (props.state.profile) {
    src =props.state.profile.photos.large
  }else{
    src = userLogo;
  }
    return(
        <main className={classes.main}>
        <div className={classes.main_container}>
          {/* <img className="main_background"
            src="https://assets3.thrillist.com/v1/image/2794471/size/sk-2017_04_article_text_width_desktop.jpg"
            height="200"
            alt="banner"
          /> */}
          <div>
            <div className="user_info">
            <img className="avatar" src={src} width="100" alt="avatar"  />
            <div className="user_data">
        <p>name: <span>{props.state.profile?props.state.profile.fullName:null}</span></p>
            <p>age</p>
            <p>
            {props.state.profile?props.state.profile.aboutMe:null}
            </p>
            </div>
            </div>
          </div>
          <PostBox/>
        </div>
      </main>

    )

};
