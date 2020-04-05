import React from "react";
import PostsList from "../PostsList/PostsList";
import {reduxForm,Field} from "redux-form"

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);  

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined

function Textarea ({input,meta,...props}) {
  console.log(props);
  const{error,touched,warning} = meta
  return(
    <div>
    <textarea {...input} {...meta} {...props}></textarea>
{touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}    </div>
  )
  
}

const FileInput = ({ 
  input: { value: omitValue, onChange, onBlur, ...inputProps }, 
  meta: omitMeta, 
  ...props 
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  );
};
 function Form  (props)  {
  return(
    <form onSubmit={props.handleSubmit}>
    <Field
      type="file"
      name="picture"
      component={FileInput}
    />
    <Field
      name="add"
      // id="add-Post"
      component={Textarea}
      validate={[required,number]}
    />
    <button
    //  onClick={event => props.addPost(event)}
     >addPost</button>
  </form>
  )
}
 const ReduxForm = reduxForm({form:"addPost"})(Form)

export default props => {
  return (
    <div className="Messages_container">
          {/* <ReduxForm onSubmit={formData => console.log()}/> */}

    <ReduxForm onSubmit={formData => props.addPost(formData)}/>
      <div className="Messages_hrsder_container">
        <h3>Posts</h3>
        <p>
          <span>5</span> of <span></span>
        </p>
      </div>
      <PostsList posts={props.state.profilePage.posts} />
      <button>View all</button>
    </div>
  );
};
