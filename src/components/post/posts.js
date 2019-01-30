import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../common/spinner";
import PostForm from "./postform";
import { get_posts } from "../../store/actions/post";

class Posts extends Component {
  componentDidMount() {
    this.props.fetch_posts();
  }
  render() {
    if (Object.keys(this.props.auth.user).length === 0) {
      this.props.history.push("/login");
    }
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {this.props.post.loading ? <Spinner /> : null}
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
