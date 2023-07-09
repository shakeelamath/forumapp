import axios from 'axios';
import { User } from '../types';
import { Post } from '../types';
import { Comment } from '../types';
import { Feedback } from '../types';

// Register a new user
export async function registerUser(userData: Partial<User>): Promise<User> {
  try {
    const response = await axios.post('/api/register', userData);
    return response.data as User;
  } catch (error) {
    throw new Error('Failed to register user');
  }
}

// Log in a user
export async function loginUser(credentials: Partial<User>): Promise<User> {
  try {
    const response = await axios.post('/api/login', credentials);
    return response.data as User;
  } catch (error) {
    throw new Error('Failed to log in');
  }
}

// Fetch all approved posts
export async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await axios.get('/api/posts');
    return response.data as Post[];
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
}

// Create a new post
export async function createPost(postData: Partial<Post>): Promise<Post> {
  try {
    const response = await axios.post('/api/posts', postData);
    return response.data as Post;
  } catch (error) {
    throw new Error('Failed to create post');
  }
}

// Add a comment to a post
export async function addComment(postId: string, commentData: Partial<Comment>): Promise<Comment> {
  try {
    const response = await axios.post(`/api/posts/${postId}/comments`, commentData);
    return response.data as Comment;
  } catch (error) {
    throw new Error('Failed to add comment');
  }
}

// Fetch feedback for a post
export async function fetchFeedback(postId: string): Promise<Feedback[]> {
  try {
    const response = await axios.get(`/api/posts/${postId}/feedback`);
    return response.data as Feedback[];
  } catch (error) {
    throw new Error('Failed to fetch feedback');
  }
}

export default {
  registerUser,
  loginUser,
  fetchPosts,
  createPost,
  addComment,
  fetchFeedback,
};


