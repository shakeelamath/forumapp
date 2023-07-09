export interface UserData {
    name: string;
    email: string;
    password: string;
    // Add any other properties required for user registration
  }
  
  export interface Credentials {
    email: string;
    password: string;
  }
  
  export interface PostData {
    title: string;
    content: string;
    userId: string;
  }
  
  export interface CommentData {
    content: string;
    userId: string;
    postId: string;
  }

  export interface Post{
    id: string;
    title: string;
    content: string;
  }
  export interface User {
    id: number;
    email: string;
    password: string;
  }
  export interface Comment {
    id: number;
    postId: number;
    userId: number;
    content: string;
    createdAt: string;
  }
  export interface Feedback {
    id: number;
    postId: number;
    adminId: number;
    commentId: number;
    feedback: string;
    createdAt: string;
  }