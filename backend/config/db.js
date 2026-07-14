import mongoose from "mongoose"

// Cache the connection state across serverless function boots
let isConnected = false;

async function connectDB(){
    // Standardize variable name check
    const uri = process.env.MONGODB_URI || process.env.MONGO_URI;

    if (!uri) {
        console.error("❌ MongoDB connection string is missing from Vercel variables!");
        return;
    }

    if (isConnected) {
        console.log("🔄 Using existing database connection instance");
        return;
    }

    try {
        const db = await mongoose.connect(uri);
        isConnected = db.connections[0].readyState;
        console.log("Database connected successfully");
    }
    catch(err) {
        console.log("❌ Database connection error:", err);
    }
}

export default connectDB;