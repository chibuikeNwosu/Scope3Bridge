const userModel = require("../Models/userModels"); // This imports the user model that I have set up in my userModels.js file, which contains functions to interact with the users table in my MYSQL database for authentication purposes.
const bcrypt = require("bcrypt"); // This imports the external module bcrypt which then gives me all the tools I need to hash passwords securely in my application.
const jwt = require("jsonwebtoken"); // This imports the external module jsonwebtoken which then gives me all the tools I need to create and verify JSON Web Tokens (JWTs) for authentication in my application.
require("dotenv").config(); // This allows me to access sensitive information from my .env file that I do not want to hardcode in my actuall application file.

const register_user = async (req, res) => {
  const { email, password } = req.body; // This extracts the email and password from the request body sent by the client when they attempt to register a new account, which is expected to be in JSON format. This is possible because of the express.json() middleware that I set up in my server.js file, which parses incoming JSON requests and puts the parsed data in req.body. This allows me to easily access the email and password provided by the client for registration purposes.

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  } // Checking if the email and password was provided by the user.

  try {
    const existingUser = await userModel.getUserByEmail(email); // This checks if a user with the provided email already exists in the database by calling the getUserByEmail function from the user model.
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" }); // TODO: I can change this to a more generic message like "Registration failed" to avoid giving away information about existing users, which can be a security risk.
    }

    const salt = await bcrypt.genSalt(); // Generating a salt to help make the user's password more uniquiue before it is stored in the database.
    const hashedPassword = await bcrypt.hash(password, salt); // hashing the user's password using the bcrypt libary and a generated salt.

    const newUser = await userModel.createUser(email, hashedPassword); // This creates a new user in the database with the provided email and hashed password.
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser.insertId }); // Sending a response back to the client indicating that the user was created successfully, along with the ID of the newly created user.
  } catch (error) {
    console.error("Error occurred while registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register_user,
};
