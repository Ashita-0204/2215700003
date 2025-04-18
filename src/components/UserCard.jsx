import React from 'react';
import './User.css';

const UserCard = ({ user, commentCount }) => {
  return (
    <div className="user-card">
      <img src={`https://picsum.photos/seed/${user.id}/60`} alt="avatar" />
      <div>
        <h3>{user.name}</h3>
        <p>{commentCount} comments on posts</p>
      </div>
    </div>
  );
};

export default UserCard;
