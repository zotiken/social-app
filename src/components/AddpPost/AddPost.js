import React from "react";
import PostsList from "../PostsList/PostsList";
import {reduxForm,Field} from "redux-form"

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);  

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
      // value={null}
      // id="file"
      component={FileInput}
      // onChange={event => props.addPostImg(event)}
    />
    <Field
      name="add"
      // id="add-Post"
      component={"textarea"}

      // value={props.state.profilePage.addPostText}
      // onChange={event => props.addPostText(event)}
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
