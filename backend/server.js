import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// 1. Production CORS Rules
app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// 🛠️ Fix: Handle preflight OPTIONS globally without causing path-to-regexp errors
app.options(cors());

app.use(express.json());

// 2. Serverless Middleware: Guarantee database connection before routing traffic
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        res.status(500).json({ error: "Database connection failed", details: err.message });
    }
});

// 3. Base verification route
app.get("/", (req, res) => {
    res.send("API working");
}); 

// 4. API Routes
app.use("/api/product", productRouter);
app.use("/api/auth", authRouter);
app.use("/images", express.static('uploads'));

// 5. Port Allocation Environment Isolation
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
    app.listen(PORT, () => console.log(`Local server working on port ${PORT}`));
}

export default app;