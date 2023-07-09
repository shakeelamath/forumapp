export interface Post {
    id: number;
    title: string;
    content: string;
    user_id: number;
    status: string;
  }
  
  export class PostModel {
    private connection: any;
  
    constructor(connection: any) {
      this.connection = connection;
    }
  
    createPost(post: Post): Promise<number> {
      const query = 'INSERT INTO posts (title, content, user_id, status) VALUES (?, ?, ?, ?)';
      const values = [post.title, post.content, post.user_id, post.status];
  
      return new Promise((resolve, reject) => {
        this.connection.query(query, values, (error: any, results: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(results.insertId);
          }
        });
      });
    }
  }
  
