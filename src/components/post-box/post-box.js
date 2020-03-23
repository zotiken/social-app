import React from 'react';
// import classes from "../Message/Message.module.css";
// import MessageItem from '../Message_item/Message_item';
import {connect} from "react-redux";
import AddPost from '../AddpPost/AddPost';
import {addPostTextActionCreator,addPostImgActionCreator,addPostActionCreator} from "../../reduses/post-reducer"

const mapStateToProps = (state) => {
  return {
    state: state
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addText:(body) => {
      dispatch(addPostTextActionCreator(body))
    },
    addImg:(body) => {
      dispatch(addPostImgActionCreator(body))
    },
    addPost:(body) => {
      dispatch(addPostActionCreator(body))
    }
  }
};

const postContainer = connect(mapStateToProps,mapDispatchToProps)(AddPost)
export default postContainer;
// export default (props) => {
//   debugger;
//     return(
//         <main className="main">
//         <div className="main_container dialogs">
//         <div className={classes.dialogs_container}>
//           <h3 className={classes.dialogs_title}>Dialogs</h3>
//           <div className={classes.dialogs_wrapper}>
//             <div className={classes.dialogs_block}>
//             <ul className={classes.dialogs_list} id="dialogs_list" >
//               { props.state.dialogsPage.dialogs.map(dialog => <li key={dialog.id} ><a onClick={(event)=> props.onOpenDialog(openDiaologActionCreator({event}))} data-id={dialog.id}>{dialog.name}</a></li> )}
//                   </ul>
//                   <ul className={classes.messages_list}>
                     
//                   {props.state.dialogsPage.dialogs[props.state.dialogsPage.selectDialog].messages.map((message,i) =>  <MessageItem message={message} dialogs={props.state.dialogsPage.dialogs} selectDialog={props.state.dialogsPage.selectDialog} key={i}/> )}
//                   </ul>      
//             </div>
//             <div className={classes.dialogs_add_Post}>
//               <textarea name="add_Posts" id="addPosts" cols="30" rows="10" value={props.state.dialogsPage.addMessage} onChange={(event)=> props.onAddText(addTextActionCreator({event}))}></textarea>
//               <button onClick={
//                 (event)=> {props.onAddMessage(addMessageActionCreator({event}))} 
//               }>View all</button>

//             </div>
//           </div>

//         </div>
//       </div>
//       </main>

//     )
// }
