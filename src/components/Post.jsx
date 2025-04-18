import React from 'react';
import './Post.css';

const Post = ({ post, commentCount }) => {
  return (
    <div className="post-card">
      <img src={`https://picsum.photos/seed/post${post.id}/200`} alt="post" />
      <div className="post-content">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        {commentCount !== undefined && (
          <p className="comment-count">{commentCount} comments</p>
        )}
      </div>
    </div>
  );
};

export default Post;
