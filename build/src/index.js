"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing required modules
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const financial_records_1 = __importDefault(require("./routes/financial-records"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Loading environment variables from .env file
dotenv_1.default.config();
// Creating an Express app instance
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
// Middleware for parsing JSON request bodies
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// MongoDB connection string
const mongoURI = process.env.MONGO_URI || "";
// Connecting to MongoDB
mongoose_1.default
    .connect(mongoURI)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((error) => {
    console.error("MongoDB connection error:", error);
});
// Routes/middlewares
app.use("/financial-records", financial_records_1.default);
// Starting the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
