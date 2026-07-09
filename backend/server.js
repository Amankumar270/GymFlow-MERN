import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import productRouter from "./routes/productRoutes.js"

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

connectDB()

app.get("/", (req, res)=>{
    res.send("API working")
}) 

app.use("/api/product", productRouter )
app.use("/images", express.static('uploads'))
app.listen(5000, ()=> console.log("Server is working on http://localhost:5000"))
