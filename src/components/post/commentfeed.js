import React from "react";
import CommentItem from "./commentitem";

const CommentFeed = ({ comments, postId }) => {
  let commentList;
  commentList = comments.map(comment => {
    return <CommentItem key={comment._id} comment={comment} postId={postId} />;
  });
  return <div className="comments">{commentList}</div>;
};

export default CommentFeed;
