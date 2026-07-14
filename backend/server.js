import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import productRouter from "./routes/productRoutes.js" // Imported product Router
import authRouter from "./routes/authRoutes.js" //  Imported Auth Router

dotenv.config()
const app = express()

// 🛠️ Robust CORS Configuration for Production
app.use(cors({
    origin: "*", // Allows requests from your Vercel frontend link
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

// Explicitly handle preflight OPTIONS requests for serverless functions
app.options("*", cors())

app.use(express.json())

// Connect to MongoDB Atlas
connectDB()

// Base route to confirm deployment status
app.get("/", (req, res) => {
    res.send("API working")
}) 

// API Routes
app.use("/api/product", productRouter)
app.use("/api/auth", authRouter) // 🌟 Connected Auth Endpoints
app.use("/images", express.static('uploads'))

const PORT = process.env.PORT || 5000;

// Only start the local server if we are NOT on Vercel
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => console.log(`Local server is working on port ${PORT}`));
}

// Export the app instance so Vercel can run it completely serverless
export default app;