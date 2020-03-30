import React from 'react';
// import classes from "../Message/Message.module.css";
// import MessageItem from '../Message_item/Message_item';
import {onOpenDialog,onAddText,onAddMessage} from '../../reduses/dialods-reducer'
import {connect} from "react-redux";
import Message from "../Message/Message";
import {withAuthRedirect} from '../../Hoc/withAuthRedirect';
import {compose} from "redux"

const mapStateToProps = (state) => {
  return {
    state: state
  }
};

export default compose(
  connect(mapStateToProps,{onOpenDialog,onAddText,onAddMessage}),
  withAuthRedirect
)(Message);
