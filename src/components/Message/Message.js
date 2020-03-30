import React from "react";
import classes from "../Message/Message.module.css";
import {Redirect} from "react-router-dom"
import MessageItem from "../Message_item/Message_item"
export default props => {
  // if (props.state.auth.status === 1) { return <Redirect to="/auth" />}
  return (
    <main className="main">
      <div className="main_container dialogs">
        <div className={classes.dialogs_container}>
          <h3 className={classes.dialogs_title}>Dialogs</h3>
          <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs_block}>
              <ul className={classes.dialogs_list} id="dialogs_list">
                {props.state.dialogsPage.dialogs.map(dialog => (
                  <li key={dialog.id}>
                    <a
                      onClick={event => props.onOpenDialog(event)}
                      data-id={dialog.id}
                    >
                      {dialog.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className={classes.messages_list}>
                {props.state.dialogsPage.dialogs[
                  props.state.dialogsPage.selectDialog
                ].messages.map((message, i) => (
                  <MessageItem
                    message={message}
                    dialogs={props.state.dialogsPage.dialogs}
                    selectDialog={props.state.dialogsPage.selectDialog}
                    key={i}
                  />
                ))}
              </ul>
            </div>
            <div className={classes.dialogs_add_Post}>
              <textarea
                name="add_Posts"
                id="addPosts"
                cols="30"
                rows="10"
                value={props.state.dialogsPage.addMessage}
                onChange={event => props.onAddText(event)}
              ></textarea>
              <button onClick={event => props.onAddMessage(event)}>
                View all
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
