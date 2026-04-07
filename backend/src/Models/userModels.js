const pool = require("../config/database"); // This imports the database connection pool that I have set up in my database.js file, which allows me to interact with my MYSQL database to store and retrieve user information for authentication purposes.

// Creating a new user
const createUser = async (email, password) => {
  try {
    const [result] = await pool.query(
      "INSERT INTO users ( email, password) VALUES (?, ?)",
      [email, password],
    );
    return result.insertId; // Return the ID of the newly created user
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Rethrow the error to be handled by the caller (Controller.js)
  }
};

// Checking if a user already exists.
const getUserByEmail = async (email) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0]; // Return the first user found with the given email
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error; // Rethrow the error to be handled by the caller (Controller.js)
  }
};

module.exports = {
  createUser,
  getUserByEmail,
};
