import React, { useEffect, useState } from 'react';
import { fetchPosts, fetchComments } from '../services/api';
import PostCard from '../components/Post';

const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const loadTrendingPosts = async () => {
      const [postsRes, commentsRes] = await Promise.all([
        fetchPosts(),
        fetchComments()
      ]);

      const posts = postsRes.data;
      const comments = commentsRes.data;

      const postCommentCount = {};
      comments.forEach(c => {
        postCommentCount[c.postId] = (postCommentCount[c.postId] || 0) + 1;
      });

      const maxCount = Math.max(...Object.values(postCommentCount));

      const trendingPosts = posts
        .filter(post => (postCommentCount[post.id] || 0) === maxCount)
        .map(post => ({ post, commentCount: postCommentCount[post.id] }));

      setTrending(trendingPosts);
    };

    loadTrendingPosts();
  }, []);

  return (
    <div className="page">
      <h2>Trending Posts</h2>
      {trending.map(({ post, commentCount }) => (
        <PostCard key={post.id} post={post} commentCount={commentCount} />
      ))}
    </div>
  );
};

export default Trending;
