import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchPosts, fetchComments } from '../services/api';
import UserCard from '../components/UserCard';

const Users = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const loadTopUsers = async () => {
      const [usersRes, postsRes, commentsRes] = await Promise.all([
        fetchUsers(),
        fetchPosts(),
        fetchComments()
      ]);

      const users = usersRes.data;
      const posts = postsRes.data;
      const comments = commentsRes.data;

      const commentCountPerPost = {};
      comments.forEach(c => {
        commentCountPerPost[c.postId] = (commentCountPerPost[c.postId] || 0) + 1;
      });

      const userCommentCounts = {};
      posts.forEach(post => {
        const count = commentCountPerPost[post.id] || 0;
        userCommentCounts[post.userId] = (userCommentCounts[post.userId] || 0) + count;
      });

      const top = Object.entries(userCommentCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([userId, commentCount]) => {
          const user = users.find(u => u.id === parseInt(userId));
          return { user, commentCount };
        });

      setTopUsers(top);
    };

    loadTopUsers();
  }, []);

  return (
    <div className="page">
      <h2>Top 5 Users</h2>
      {topUsers.map(({ user, commentCount }) => (
        <UserCard key={user.id} user={user} commentCount={commentCount} />
      ))}
    </div>
  );
};

export default Users;
