import mongoose from "mongoose";

let cachedConnection = null;

async function connectDB() {
    const uri = process.env.MONGODB_URI || process.env.MONGO_URI;

    if (!uri) {
        throw new Error("❌ MongoDB connection string is missing from Vercel!");
    }

    // If a connection already exists, return it immediately
    if (cachedConnection && mongoose.connection.readyState === 1) {
        return cachedConnection;
    }

    // If there is no connection, create a new promise chain and store it
    if (!cachedConnection) {
        const opts = {
            bufferCommands: false, // 👈 CRUCIAL: Stop Mongoose from buffering blindly for 10s!
        };

        cachedConnection = mongoose.connect(uri, opts).then((mongooseInstance) => {
            console.log("✅ Database successfully connected!");
            return mongooseInstance;
        }).catch((err) => {
            cachedConnection = null; // Reset cache on failure
            console.error("❌ Database connection error:", err);
            throw err;
        });
    }

    return cachedConnection;
}

export default connectDB;