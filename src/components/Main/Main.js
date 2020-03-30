import React,{useState}  from 'react'
import classes from "../Main/Main.module.css";
import PostBox from "../post-box/post-box"
import userLogo from '../../assets/img/user-default.png'

export default (props) => {
  let [edit,setEdit] = useState(false)

  let src =props.state.profile?
  props.state.profile.photos.large
  :
  userLogo;

    return(
        <main className={classes.main}>
        <div className={classes.main_container}>
          <div>
            <div className="user_info">
            <img className="avatar" src={src} width="100" alt="avatar"  />
            <div className="user_data">
        <p>name: <span>{props.state.profile?props.state.profile.fullName:null}</span></p>
            <p>age</p>
            
            {!edit?
            <p onDoubleClick={() => setEdit(edit =true) }>
            {props.state.profile?props.state.profile.aboutMe:null}
            </p>
            :
            <input type="text" autoFocus={true} value={props.state.profile?props.state.profile.aboutMe:null} onChange={(event)=> {
              props.setDescription(event)
            }} onBlur={() => setEdit(edit =false) }/>
            }
            </div>
            </div>
          </div>
          <PostBox/>
        </div>
      </main>

    )

};
