import express from "express";
import { logOut, loginUser, signUp } from "../controllers/authControllers.js";
const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signUp);
router.post("/logout", logOut);

export default router;