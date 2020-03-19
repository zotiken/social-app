import React from 'react'
import classes from "../Message/Message.module.css"
import MessageItem from '../Message_item/Message_item'

export default (props) => {
  console.log(props.state);

    return(
        <main className="main">
        <div className="main_container dialogs">
        <div className={classes.dialogs_container}>
          <h3 className={classes.dialogs_title}>Dialogs</h3>
          <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs_block}>
            <ul className={classes.dialogs_list} id="dialogs_list" >
              { props.state.dialogs.map(dialog => <li key={dialog.id} ><a onClick={(event)=> props.onOpenDialog(event,"OPEN_DIALOG")} data-id={dialog.id}>{dialog.name}</a></li> )}
                  </ul>
                  <ul className={classes.messages_list}>
                     
                  {props.state.dialogs[props.state.selectDialog].messages.map((message,i) =>  <MessageItem message={message} dialogs={props.state.dialogs} selectDialog={props.state.selectDialog} key={i}/> )}
                  </ul>      
            </div>
            <div className={classes.dialogs_add_Post}>
              <textarea name="add_Posts" id="addPosts" cols="30" rows="10" value={props.state.addMessage} onChange={(event)=> props.onAddText(event,"ADD_TEXT")}></textarea>
              <button onClick={
                (event)=> props.onAddMessage(event,"ADD_MSG")
              }>View all</button>

            </div>
          </div>

        </div>
      </div>
      </main>

    )
}