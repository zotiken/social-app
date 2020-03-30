import React from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'


 export const withAuthRedirect =(Component)=> {
 class authRedirect extends React.Component{
  render() {
    if (this.props.state.auth.status === 1) { return <Redirect to="/auth" />}
    return (
      <Component {...this.props}/>
    );
  } 
}

const mapStateToProps = (state)=>({
  state:state
})

return connect(mapStateToProps)(authRedirect); ;
 }
