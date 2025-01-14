import express from "express";
import { register } from "../controllers/auth.controllers.js";
import { validateRequest } from "../middlewares/validateRequest.middleware.js";

const router = express.Router();

router.post("/register", validateRequest("register"), register);
export default router;
