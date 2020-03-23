import React from 'react';
import {connect} from "react-redux"
import SearchUser from "../UserSearch/UserSearch"
const mapStateToProps = (state) => {
  return {
    state: state
  }

}
const SearchUserContainer = connect(mapStateToProps)(SearchUser);
export default SearchUserContainer;
