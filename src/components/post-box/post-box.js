
import {connect} from "react-redux";
import AddPost from '../AddpPost/AddPost';
import {addPostText,addPostImg,addPost} from "../../reduses/post-reducer"

const mapStateToProps = (state) => {
  return {
    state: state
  }
};

const postContainer = connect(mapStateToProps,{addPostText,addPostImg,addPost})(AddPost)
export default postContainer;
