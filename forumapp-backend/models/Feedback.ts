export interface Feedback {
    id: number;
    post_id: number;
    admin_id: number;
    comment: string;
  }
  
  export class FeedbackModel {
    private connection: any; 
    constructor(connection: any) {
      this.connection = connection;
    }
  
    createFeedback(feedback: Feedback): Promise<number> {
      const query = 'INSERT INTO feedbacks (post_id, admin_id, comment) VALUES (?, ?, ?)';
      const values = [feedback.post_id, feedback.admin_id, feedback.comment];
  
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
  
