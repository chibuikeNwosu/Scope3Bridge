require("dotenv").config(); // This allows me to access sensitive information from my .env file that I do not want to hardcode in my actuall application file.

const express = require("express"); // This imports the external module express which then gives me all the tools I need to build my server seamlessly.

const app = express(); // What I did here was to create an application variable and assined express as a function to it, in simple terms I created an application with all the tools express has to offer in order to build my application.

const cors = require("cors"); // This imports the external module cors which then gives me all the tools I need to allow cross-origin resource sharing in my application.

const port = process.env.PORT || 3000; // Acessing the port I defined in the .env file and then saying if that port for some reason does not exist then run on PORT 3000 instead.

// Middleware - code that runs between the request and response cycle. It can modify the request, response, or even end the request-response cycle. In this case, I am using middleware to allow cross-origin resource sharing and to parse incoming JSON requests.
app.use(cors()); // This allows my application to use the cors module and all its tools to allow cross-origin resource sharing in my application.
app.use(express.json()); // This allows my application to use the express module and all its tools to parse incoming JSON requests and put the parsed data in req.body. This is important because it allows my application to understand and work with JSON data sent by clients in their requests.

// Routes - These are the endpoints that clients can access to interact with my application. They define how my application responds to different HTTP requests (GET, POST, etc.) at specific paths. In this case, I have defined a simple GET route for the /health endpoint that returns a JSON response indicating that the API is live.
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "API is Live",
    message: "Scope3Bridge is up and running, ready to handle your requests!",
  });
});

app.listen(port, () => {
  console.log(
    `Scope3Bridge is life, API ready to take requests on Port ${port}`,
  );
}); // Setting my application to listen on the PORT defined in my.env file for any client requests.
