export interface User {
    id: number;
    email: string;
    password: string;
  }
  
  export class UserModel {
    private connection: any;
    constructor(connection: any) {
      this.connection = connection;
    }
  
    createUser(user: User): Promise<number> {
      const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
      const values = [user.email, user.password];
  
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
  
  
