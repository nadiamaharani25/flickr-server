// Modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Import routes
import photoRoutes from "./routes/publicPhoto.js";

const app = express();
dotenv.config();

app.use(cors());
const PORT = process.env.PORT || 5000;

app.use("/photo", photoRoutes);

app.get("/", (req, res) => {
  res.send("Flickr By Nadia");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
