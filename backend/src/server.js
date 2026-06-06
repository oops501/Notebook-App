import express from "express";
import noteRoutes from "./routes/nodeRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import rateLimitr from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:5173" }));
}

app.use(express.json());
app.use(rateLimitr);

app.use("/api/notes", noteRoutes);

if (process.env.NODE_ENV === "production") {
  // Serve React build files
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Handle all React routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Think Board API is running...");
  });
}

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
