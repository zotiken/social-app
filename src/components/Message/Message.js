import React from "react";
import classes from "../Message/Message.module.css";
import MessageItem from "../Message_item/Message_item"
import {reduxForm,Field} from "redux-form"

function addMessageForm (props){
  return(
    <form onSubmit={props.handleSubmit} className={classes.dialogs_add_Post}>
    <Field
      name="addMsg"
      id="addMsg"
      component={"textarea"}
    />
    <button >
      View all
    </button>
  </form>

  )
}

const ReduxaddMessageForm = reduxForm({form:"add_msg"})(addMessageForm)

export default props => {
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
<ReduxaddMessageForm onSubmit={(formData) => props.onAddMessage(formData)}/>   
       </div>
        </div>
      </div>
    </main>
  );
};
