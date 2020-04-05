import React from "react";
import { connect } from "react-redux";
import classes from "../AuthorizationPage/AuthorizationPage.module.css";
import { reduxForm, Field } from "redux-form";
import { auth } from "../../reduses/auth-reducer";
import { Redirect } from "react-router-dom";
import { submit } from "../../AddOn/AuthSubmit";
// import {} from "../../reduses/auth-reducer"

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(20);

function Input({ input, meta, ...props }) {
  console.log(meta);
  return (
    <div
      className={classes.input_wrapper}
      style={meta.error && { border: "3px solid red" }}
    >
      <input {...input} {...meta} {...props} />
    </div>
  );
}

function AuthForm(props) {
  console.log(props);
  return (
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <Field
        className={classes.input}
        component={Input}
        validate={email}
        type="email"
        name="login"
        placeholder="login"
      />
      <Field
        className={classes.input}
        component={Input}
        validate={maxLength15}
        type="password"
        name="password"
        placeholder="password"
      />
      {props.error && <strong>{props.error}</strong>}
      <button className={classes.button}>send</button>
    </form>
  );
}

const ReduxAuthForm = reduxForm({ form: "auth" })(AuthForm);

class AuthorizationPage extends React.Component {
  render() {
    if (this.props.state.auth.status === 0)
      return <Redirect to={"/profile/" + this.props.state.auth.id} />;

    return (
      <main className={classes.main}>
        <h2>Login</h2>
        <ReduxAuthForm
          onSubmit={formData =>
            this.props.auth(formData.login, formData.password)
          }
        />
      </main>
    );
  }
}
let mapStateToProps = state => ({
  state: state
});
// export default AuthorizationPage;

export default connect(mapStateToProps, { auth })(AuthorizationPage);
