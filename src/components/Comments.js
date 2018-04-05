import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, addComment, removeComment } from "../actions/actionCreators";

class Comments extends Component {
  renderComment = (comment, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(
              null,
              this.props.match.params.postId,
              i
            )}
          >
            &times;
          </button>
        </p>
      </div>
    );
  };
  handleSubmit = e => {
    e.preventDefault();
    const { postId } = this.props.match.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    //console.log(postId,author,comment)
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  };

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
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
export default Comments;
