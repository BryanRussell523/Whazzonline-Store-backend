import { Router } from "express";
import { checkout } from "../controllers/order.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

// protected route
router.post("/checkout", authMiddleware, checkout);

export default router;