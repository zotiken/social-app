import React from 'react';
import classes from "../Preload/Preload.module.css";

// import MessageItem from '../Message_item/Message_item';
export default (props) => {
    return(
      <div className={classes.container_perloading}>
        <div className={classes.perloading}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
}
