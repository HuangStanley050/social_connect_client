import React, { Component } from "react";
import { connect } from "react-redux";
import { get_post } from "../../store/actions/post";
import Spinner from "../common/spinner";

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }
  render() {
    let postContent;
    if (Object.keys(this.props.auth.user).length === 0) {
      this.props.history.push("/login");
    }
    if (this.props.post.loading) {
      postContent = <Spinner />;
    } else {
      postContent = <h1>Post</h1>;
    }
    return postContent;
  }
}

const mapStateToProps = state => {
  return { auth: state.auth, post: state.post };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPost: postId => dispatch(get_post(postId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
