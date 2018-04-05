import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, addComment, removeComment } from "../actions/actionCreators";
import { Link } from "react-router-dom";
import Photo from './Photo';

class PhotoGrid extends Component {
  render() {

    return (
      <div className="photo-grid">
        {this.props.posts.map((post,i) =><Photo {...this.props} key={i} i={i} post={post}/>)}
      </div>
    );
  }
}
function mapState(state) {
    return {
      posts: state.posts,
      comments: state.comments
    };
  }
  
  function mapDispatch(dispatch) {
    return {
      increment: index => dispatch(increment(index)),
      addComment: (postId, author, comment) => dispatch(addComment(postId, author, comment)),
      removeComment: (postId, i) => dispatch(removeComment((postId, i)))
    };
  }
  
export default connect(mapState, mapDispatch)(PhotoGrid);