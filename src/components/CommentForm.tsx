import React, { useState } from 'react';
import { CommentData } from '../types';

interface CommentFormProps {
  onCreateComment: (commentData: CommentData) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onCreateComment }) => {
  const [content, setContent] = useState('');

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreateComment({
      content,
      userId: '',
      postId: ''
    });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={handleContentChange}
        placeholder="Write your comment..."
        required
      />
      <button type="submit">Submit Comment</button>
    </form>
  );
};

export default CommentForm;




