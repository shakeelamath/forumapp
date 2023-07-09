import React, { useState, useEffect } from 'react';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import PostCreationForm from './components/PostForm';
import PostList from './components/PostList';
import CommentCreationForm from './components/CommentForm';
import { UserData, Credentials, PostData, CommentData } from './types';
import { Post } from './types';

import './App.css'; // Import the CSS file for styling

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulating fetching posts from an API
    const fetchPosts = async () => {
      try {
        // Fetch posts data from your backend API
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleRegistration = (userData: UserData) => {
    // Handle user registration logic here
    // You can make an API request to register the user with the provided data
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log('User Registration:', data);
      })
      .catch((error) => {
        // Handle any error that occurs during the API request
        console.error('Error registering user:', error);
      });
  };
  
  const handleLogin = (credentials: Credentials) => {
    // Handle user login logic here
    // You can make an API request to authenticate the user with the provided credentials
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log('User Login:', data);
      })
      .catch((error) => {
        // Handle any error that occurs during the API request
        console.error('Error logging in:', error);
      });
  };
  
  const handlePostCreation = (postData: PostData) => {
    // Handle post creation logic here
    // You can make an API request to create a new post with the provided data
    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log('Create Post:', data);
      })
      .catch((error) => {
        // Handle any error that occurs during the API request
        console.error('Error creating post:', error);
      });
  };
  
  const handleCommentCreation = (commentData: CommentData) => {
    // Handle comment creation logic here
    // You can make an API request to create a new comment with the provided data
    fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log('Create Comment:', data);
      })
      .catch((error) => {
        // Handle any error that occurs during the API request
        console.error('Error creating comment:', error);
      });
  };
  

  return (
    <div className="app-container">
      <h1 className="section-title">Registration</h1>
      <RegistrationForm onRegister={handleRegistration} />

      <h1 className="section-title">Login</h1>
      <LoginForm onLogin={handleLogin} />

      <h1 className="section-title">Create Post</h1>
      <PostCreationForm onCreatePost={handlePostCreation} />

      <h1 className="section-title">Post List</h1>
      <PostList posts={posts} />

      <h1 className="section-title">Create Comment</h1>
      <CommentCreationForm onCreateComment={handleCommentCreation} />
    </div>
  );
};

export default App;

