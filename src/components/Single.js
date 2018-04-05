import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { increment, addComment, removeComment } from "../actions/actionCreators";
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
  render() {
    const i = this.props.posts.findIndex((post) => post.code === this.props.match.params.postId)
    const post = this.props.posts[i]
    const postComments = this.props.comments[this.props.match.params.postId]|| [];
    return(
          <div className="single-photo">
             <Photo {...this.props}  i={i} post={post}/>
             <Comments postComments={postComments} {...this.props}/>
          </div>
      )
  }
}
function mapState(state, props) {
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

export default connect(mapState, mapDispatch)(Single);