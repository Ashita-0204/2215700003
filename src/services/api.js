import axios from "axios";

const api = axios.create({
  baseURL: "http://20.244.56.144/evaluation-service",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU3NDUxLCJpYXQiOjE3NDQ5NTcxNTEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ3NDI0MWU3LTMzMzEtNDJiZC05OTYyLTIxZWI2NGZiNzY5NyIsInN1YiI6ImFzaGl0YS52YXJzaG5leV9jcy5paW90MjJAZ2xhLmFjLmluIn0sImVtYWlsIjoiYXNoaXRhLnZhcnNobmV5X2NzLmlpb3QyMkBnbGEuYWMuaW4iLCJuYW1lIjoiYXNoaXRhIHZhcnNobmV5Iiwicm9sbE5vIjoiMjIxNTcwMDAwMyIsImFjY2Vzc0NvZGUiOiJDTm5lR1QiLCJjbGllbnRJRCI6ImQ3NDI0MWU3LTMzMzEtNDJiZC05OTYyLTIxZWI2NGZiNzY5NyIsImNsaWVudFNlY3JldCI6InFtYnlEd1NHc3RNRHBGUXMifQ.TcH9OONfa1-mE9UaH3gEnUs7URpbJUmky49d5kxuihc",
  },
});

// Fetch all users
export const fetchUsers = () => api.get("/users");

export const fetchPosts = (userId) =>
  userId ? api.get(`/users/${userId}/posts`) : api.get("/posts");

export const fetchComments = (postId) =>
  postId ? api.get(`/posts/${postId}/comments`) : api.get("/comments");
