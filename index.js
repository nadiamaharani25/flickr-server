// Modules
import express from "express"
import cors from "cors"
import dotenv from "dotenv"

// Routes
import feedRoutes from "./routes/publicFeed.js"

// Config
const app = express();
dotenv.config()

// PORT : localhost:5000
app.use(cors())
const PORT = process.env.PORT || 5000;

// Routing setup
app.use("/feed", feedRoutes)

// Check server that it's running
app.get("/", (req, res) => {
  res.send("Flickr By Nadia");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
