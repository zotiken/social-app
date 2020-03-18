import React from 'react'
import classes from "../Message/Message.module.css"
import MessageItem from '../Message_item/Message_item'

export default (props) => {
    return(
        <main className="main">
        <div className="main_container dialogs">
        <div className={classes.dialogs_container}>
          <h3 className={classes.dialogs_title}>Dialogs</h3>
          <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs_block}>
            <ul className={classes.dialogs_list} id="dialogs_list">
              
              { props.dialogs.map(dialog => <li key={dialog.id} ><a onClick={props.onOpenDialog} data-id={dialog.id}>{dialog.name}</a></li> )}
                  </ul>
                  <ul className={classes.messages_list}>
                     
                  {props.dialogs[props.selectDialog].messages.map((message,i) =>  <MessageItem message={message} dialogs={props.dialogs} selectDialog={props.selectDialog} key={i}/> )}
                  </ul>      
            </div>
            <div className={classes.dialogs_add_Post}>
              <textarea name="add_Posts" id="addPosts" cols="30" rows="10"></textarea>
              <button>View all</button>

            </div>
          </div>

        </div>
      </div>
      </main>

    )
}