import React from 'react'
import classes from "../Message/Message.module.css"
export default (props) => {
    return(
        <main className="main">
        <div className="main_container dialogs">
        <div className={classes.dialogs_container}>
          <h3 className={classes.dialogs_title}>Dialogs</h3>
          <div className={classes.dialogs_wrapper}>
            <ul className={classes.dialogs_list} id="dialogs_list">
        {props.dialogs.map(dialog => <li key={dialog.id} ><a  onClick={props.onClick} data-id={dialog.id}>{dialog.name}</a></li> )}
            </ul>
            <ul className={classes.messages_list}>
            {props.dialogs[props.selectDialog].messages.map((message,i) => <li key={i}><p>{message}</p><span>{props.dialogs[props.selectDialog].create_date}</span></li>)}
            </ul>
          </div>
          <button>View all</button>

        </div>
      </div>
      </main>

    )
}