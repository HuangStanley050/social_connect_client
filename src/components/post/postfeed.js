import React from "react";
import PostItem from "./postitem";

const PostFeed = ({ posts }) => {
  posts.map(post => {
    console.log(post.text);
  });

  let postList;

  postList = posts.map(post => {
    return <PostItem key={post._id} post={post} />;
  });

  return null;
};

export default PostFeed;
