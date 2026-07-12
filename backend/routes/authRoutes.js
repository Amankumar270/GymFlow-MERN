import express from "express";
import { signup, login, subscribePlan, cancelSubscription } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/subscribe", subscribePlan);
authRouter.post("/cancel-subscription", cancelSubscription); // 🌟 Added cancel route

export default authRouter;