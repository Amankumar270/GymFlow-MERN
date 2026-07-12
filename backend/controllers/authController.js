import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// 🔐 SIGNUP logic
export async function signup(req, res) {
    try {
        const { name, email, password } = req.body;

        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists with this email" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.json({ success: true, message: "Account created successfully! Please log in." });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// 🔑 LOGIN logic
export async function login(req, res) {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid password details" });
        }

        // Generate session token
        const token = jwt.sign({ id: user._id }, "SECRET_KEY_JWT", { expiresIn: '1d' });

        res.json({ 
            success: true, 
            token, 
            user: { 
                name: user.name, 
                email: user.email, 
                role: user.role,
                membershipPlan: user.membershipPlan // 🌟 Added so login payload contains their active plan
            } 
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// 💳 FAKE PAYMENT / PLAN ACTIVATION logic
export async function subscribePlan(req, res) {
    try {
        const { email, planName } = req.body;

        // Find the user and assign their newly chosen membership plan tier
        const updatedUser = await userModel.findOneAndUpdate(
            { email },
            { membershipPlan: planName },
            { new: true }
        );

        if (!updatedUser) {
            return res.json({ success: false, message: "User profile not found" });
        }

        res.json({ 
            success: true, 
            message: `${planName} activated successfully!`,
            user: { 
                name: updatedUser.name, 
                email: updatedUser.email, 
                role: updatedUser.role, 
                membershipPlan: updatedUser.membershipPlan 
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// ❌ OPT OUT / CANCEL MEMBERSHIP logic
export async function cancelSubscription(req, res) {
    try {
        const { email } = req.body;

        const updatedUser = await userModel.findOneAndUpdate(
            { email },
            { membershipPlan: "" }, // Reset the plan to empty
            { new: true }
        );

        if (!updatedUser) {
            return res.json({ success: false, message: "User profile not found" });
        }

        res.json({ 
            success: true, 
            message: "Membership cancelled successfully.",
            user: { 
                name: updatedUser.name, 
                email: updatedUser.email, 
                role: updatedUser.role, 
                membershipPlan: updatedUser.membershipPlan 
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}