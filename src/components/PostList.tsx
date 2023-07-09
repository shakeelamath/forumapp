import React from 'react';
import { Post as PostType } from '../types'; // Rename the imported type
import { fetchPosts } from '../services/api';

interface PostListProps {
  posts: PostType[]; // Use the renamed imported type
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {/* Render other post details */}
        </div>
      ))}
    </div>
  );
};

export default PostList;

