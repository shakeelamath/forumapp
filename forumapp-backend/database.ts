import mysql from 'mysql';

const pool = mysql.createPool({
  connectionLimit: 10, // Adjust the limit according to your needs
  host: 'localhost',
  port: 3306,
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
  connection.release(); // Release the connection

  const createUserTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `;

  const createPostsTableQuery = `
    CREATE TABLE IF NOT EXISTS posts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      user_id INT NOT NULL,
      status VARCHAR(50) NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;

  const createCommentsTableQuery = `
    CREATE TABLE IF NOT EXISTS comments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      post_id INT NOT NULL,
      user_id INT NOT NULL,
      content TEXT NOT NULL,
      FOREIGN KEY (post_id) REFERENCES posts(id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;

  const createFeedbacksTableQuery = `
    CREATE TABLE IF NOT EXISTS feedbacks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      post_id INT NOT NULL,
      admin_id INT NOT NULL,
      comment TEXT NOT NULL,
      FOREIGN KEY (post_id) REFERENCES posts(id),
      FOREIGN KEY (admin_id) REFERENCES users(id)
    )
  `;

  connection.query(createUserTableQuery, (error) => {
    if (error) {
      console.error('Error creating user table:', error);
    } else {
      console.log('User table created successfully');
    }
  });

  connection.query(createPostsTableQuery, (error) => {
    if (error) {
      console.error('Error creating posts table:', error);
    } else {
      console.log('Posts table created successfully');
    }
  });

  connection.query(createCommentsTableQuery, (error) => {
    if (error) {
      console.error('Error creating comments table:', error);
    } else {
      console.log('Comments table created successfully');
    }
  });

  connection.query(createFeedbacksTableQuery, (error) => {
    if (error) {
      console.error('Error creating feedbacks table:', error);
    } else {
      console.log('Feedbacks table created successfully');
    }
  });
});

export default pool;


