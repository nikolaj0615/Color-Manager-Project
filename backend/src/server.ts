import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import colorRoutes from "./routes/colorRoutes";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI as string;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log('MongoDB connection error:', err));

app.use("/api/colors", colorRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));