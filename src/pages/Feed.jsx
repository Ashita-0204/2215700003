import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import PostCard from '../components/Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [latestPostId, setLatestPostId] = useState(null);

  useEffect(() => {
    const loadInitial = async () => {
      const { data } = await fetchPosts();
      const sorted = data.sort((a, b) => b.id - a.id);
      setPosts(sorted);
      setLatestPostId(sorted[0]?.id || null);
    };

    loadInitial();

    const interval = setInterval(async () => {
      const { data } = await fetchPosts();
      const newPosts = data.filter(p => p.id > latestPostId);
      if (newPosts.length) {
        const updated = [...newPosts, ...posts].sort((a, b) => b.id - a.id);
        setPosts(updated);
        setLatestPostId(updated[0].id);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [latestPostId, posts]);

  return (
    <div className="page">
      <h2>Live Feed</h2>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
