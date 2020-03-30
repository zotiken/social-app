import React from "react";
import {connect} from "react-redux"
import classes from "../AuthorizationPage/AuthorizationPage.module.css";
import {reduxForm, Field} from "redux-form"
import {auth} from "../../reduses/auth-reducer"
// import {} from "../../reduses/auth-reducer"

function AuthForm (props) {
  console.log(classes)
  return(
    <form className={classes.form} onSubmit={props.handleSubmit} >
<Field className={classes.input} component={"input"} type="text" name="login" placeholder="login"/>
<Field className={classes.input} component={"input"} type="password" name="password" placeholder="password"/>
<button className={classes.button}>send</button>
    </form>
  )
}

const ReduxAuthForm = reduxForm({form:"auth"})(AuthForm)


const AuthorizationPage = props => {
  return (
    <main className={classes.main}>
      <h2>Login</h2>
      <ReduxAuthForm onSubmit={(formData) => props.auth(formData.login,formData.password)}/>
    </main>
  );
};
let mapStateToProps = (state) =>({
  state:state
}
)
// export default AuthorizationPage;

export default connect(mapStateToProps,{auth})(AuthorizationPage);
