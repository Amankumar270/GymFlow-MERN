import express from "express";
import { addProduct, listProducts } from "../controllers/productController.js";
import multer from "multer";
import { adminLogin } from "../controllers/authController.js";
import fs from "fs"; // Native Node module to check/create directories

const productRouter = express.Router();

// 🛠️ Dynamic Upload Directory (Vercel compatible)
// Vercel only allows writing files inside the '/tmp' folder.
const isVercel = process.env.VERCEL === '1' || process.env.NODE_ENV === 'production';
const uploadDir = isVercel ? '/tmp' : 'uploads';

// Ensure the folder exists safely without crashing the server
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Image storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Uses /tmp on Vercel, normal 'uploads' folder locally
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()} ${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

productRouter.post("/add", upload.single("image"), addProduct);
productRouter.get("/list", listProducts);
productRouter.post("/admin/login", adminLogin);

export default productRouter;
