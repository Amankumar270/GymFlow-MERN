import express from "express"
import { addProduct, listProducts } from "../controllers/productController.js";
import multer from "multer";
import { adminLogin } from "../controllers/authController.js";

const productRouter = express.Router()


//image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb)=>{
        return cb(null, `${Date.now()} ${file.originalname}`)
    }
})

const upload = multer({storage:storage})

productRouter.post("/add", upload.single("image"), addProduct)
// productRouter.post("/add", addProduct)

productRouter.get("/list", listProducts)

productRouter.post("/admin/login", adminLogin)

export default productRouter
