import React, { useState } from 'react';
import { PostData } from '../types';

interface PostFormProps {
  onCreatePost: (postData: PostData) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const postData: PostData = {
      title,
      content,
      userId: '123' // Replace '123' with the actual userId from your application
    };
    onCreatePost(postData);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" required />
      <textarea value={content} onChange={handleContentChange} placeholder="Content" required />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;

