// Importing required modules
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";
import dotenv from "dotenv";

// Loading environment variables from .env file
dotenv.config();

// Creating an Express app instance
const app: Express = express();
const port = 3001;

// Middleware for parsing JSON request bodies
app.use(express.json());
app.use(cors());  

// MongoDB connection string
const mongoURI: string = process.env.MONGO_URI || ""

// Connecting to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Routes/middlewares
app.use("/financial-records", financialRecordRouter);

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
