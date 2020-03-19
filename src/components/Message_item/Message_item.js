import React from "react";
import classes from "../Message_item/Message_item.module.css";
export default props => {
  return (
    <li
      className={`${classes.messages_item} ${
        props.message.messageType === "answer" ? classes.answer : null
      }`}
      data-name={props.name}
      data-id={props.id}
    >
      <span className={classes.messages_item__name}>{props.dialogs[props.selectDialog].name}</span>
      <p>{props.message.text}</p>
      <span className={classes.messages_item__create_date}>{props.dialogs[props.selectDialog].create_date}</span>
    </li>
  );
};
