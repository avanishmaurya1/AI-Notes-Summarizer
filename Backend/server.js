const express = require("express");
const cors = require("cors");
require("dotenv").config();

 
const summaryRoutes = require("./routes/summaryRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

 
app.use("/api", summaryRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("🚀 AI Notes Summarizer Backend is Running...");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});