import React, { Component } from "react";
import { connect } from "react-redux";
import TextAreaField from "../common/TextAreaField";
import { add_comment } from "../../store/actions/post";

class CommentForm extends Component {
  state = {
    text: ""
  };

  submitHandler = e => {
    e.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props;

    const comment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };
    //console.log(newPost);
    this.props.createComment(postId, comment);
    this.setState({ text: "" });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let error = null;
    if (this.props.error.errors) {
      error = this.props.error.errors;
    }
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-primary text-white">
            Make a comment...
          </div>
          <div className="card-body">
            <form onSubmit={this.submitHandler}>
              <div className="form-group">
                <TextAreaField
                  onChange={this.onChange}
                  placeholder="reply to post"
                  name="text"
                  value={this.state.text}
                  error={error}
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: (postId, comment) => dispatch(add_comment(postId, comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
