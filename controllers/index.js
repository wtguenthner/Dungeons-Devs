import express from "express";
import passport from "passport";
import apiBuilder from "../public/utils/auth.js";

const router = express.Router();

router.use("/api", apiBuilder(passport));

export default router;
