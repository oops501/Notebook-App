import express from "express";
import noteRoutes from "./routes/nodeRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import rateLimitr from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());
app.use(rateLimitr);
app.use("/api/notes", noteRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
});
