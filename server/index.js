const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json()); // Allows JSON parsing
app.use(cors()); // Enables cross-origin requests

const todoRoutes = require("./routes/todoRoutes");
app.use("/api", todoRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Define a simple route
app.get("/", (req, res) => {
    res.send("Welcome to the To-Do API");
});

app.get("/about", (req, res) => {
  res.send("This is about Page.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));