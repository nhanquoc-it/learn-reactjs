const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// An API endpoint to test
app.get("/api", (req, res) => {
	res.send({ message: "Hello from server!" });
});

// Catch-all handler for all requests to the React app
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Set the port for Heroku
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
