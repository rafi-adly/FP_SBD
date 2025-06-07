import express from "express";
const router = express.Router();

import foodRouter from "./food_router";

router.use("/food", foodRouter);

export default router;