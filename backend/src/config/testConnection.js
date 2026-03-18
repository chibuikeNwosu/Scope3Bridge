const pool = require("./database"); // I imported the connection pool from my database connection file to test the connection to my database server.

async function testConnection() {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS result");
    console.log("✅ Database connected successfully!");
    console.log("Test query result:", rows[0].result);
    process.exit(0);
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
} // Created an asynchronous function to test the connection to my database server by executing a simple query that adds 1 + 1 and logs the result. If the connection is successful, it will log a success message and the result of the query. If it fails, it will log an error message and exit with a failure code.

testConnection(); // Called the testConnection function to execute the test when this script is run.
