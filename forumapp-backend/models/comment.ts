export interface Comment {
    id: number;
    post_id: number;
    user_id: number;
    content: string;
  }
  
  export class CommentModel {
    private connection: any; // Adjust the type based on the MySQL library you are using
  
    constructor(connection: any) {
      this.connection = connection;
    }
  
    createComment(comment: Comment): Promise<number> {
      const query = 'INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)';
      const values = [comment.post_id, comment.user_id, comment.content];
  
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
  export default Comment;
