import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Feed from "./pages/Feed";
import User from "./pages/User";
import Trending from "./pages/Trending";
import "./index.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Feed</Link>
        <Link to="/top-users">Top Users</Link>
        <Link to="/trending-posts">Trending Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/top-users" element={<User />} />
        <Route path="/trending-posts" element={<Trending />} />
      </Routes>
    </div>
  );
}

export default App;
