import React, { Component } from "react";
import { connect } from "react-redux";
import { get_post } from "../../store/actions/post";
import { Link } from "react-router-dom";
import Spinner from "../common/spinner";
import PostItem from "../posts/postitem";
import CommentForm from "./commentform";

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }
  render() {
    const { post } = this.props.post;
    //console.log(post);
    let postContent;
    if (Object.keys(this.props.auth.user).length === 0) {
      this.props.history.push("/login");
    }
    if (
      this.props.post.loading ||
      this.props.post.post === null ||
      Object.keys(this.props.post.post).length === 0
    ) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
        </div>
      );
    }
    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3">
                Back to Feed
              </Link>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
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
