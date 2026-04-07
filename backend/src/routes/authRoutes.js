require("dotenv").config(); // This allows me to access sensitive information from my .env file that I do not want to hardcode in my actuall application file.

const express = require("express"); // This imports the external module express which then gives me all the tools I need to build my server seamlessly.

const authController = require("../controllers/authController"); // This imports the auth controller that I have set up in my authController.js file, which contains functions to handle the logic for user registration and authentication in my application.
const router = express.Router(); // This creates a new router object that I can use to define routes for my application. A router is like a mini-application that can handle its own routes and middleware, which helps to keep my code organized and modular.

// Define the route for user registration
router.post("/register", authController.register_user); // This defines a POST route for user registration at the endpoint "/register". When a client sends a POST request to this endpoint, the register_user function from the auth controller will be called to handle the registration logic.

module.exports = router; // This exports the router object so that it can be used in other parts of the application, such as in the main server file (app.js) where I will import this router and use it to handle authentication-related routes.
