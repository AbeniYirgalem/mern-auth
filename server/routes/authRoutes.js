import express from "express";
import { register, login, logout, sendVerifyOtp, verifyEmail } from "../controllers/userController.js"; // ← Added `.js`
import userAuth from "../middleware/userAuth.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouter.post("/verify-account", userAuth, verifyEmail);

export default authRouter;
