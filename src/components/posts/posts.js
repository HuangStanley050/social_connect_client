import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../common/spinner";
import PostForm from "./postform";
import { get_posts } from "../../store/actions/post";
import PostFeed from "./postfeed";

class Posts extends Component {
  componentDidMount() {
    this.props.fetch_posts();
  }
  render() {
    const { posts } = this.props.post;
    let postContent;

    if (Object.keys(this.props.auth.user).length === 0) {
      this.props.history.push("/login");
    }

    if (posts && this.props.post.loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    post: state.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_posts: () => dispatch(get_posts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
