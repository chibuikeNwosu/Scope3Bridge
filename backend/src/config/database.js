require("dotenv").config(); // Loaded the .env file in my database connection file to make use of the environment variables.
const mysql = require("mysql2"); // I imported the mysql2 libary to connect to my database server.

const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  .promise();
// I created a connection pool to establish a connection between my database server and my application and converted the connection pool into a promise instead of callbacks, that way I can use async/await in my routes (much cleaner code)

module.exports = pool; // exported the connection pool so I can use it in my routes to execute queries on my database.
