import { Router } from "express";
import {
  fetchProducts,
  fetchProductById,
} from "../controllers/productController";

const router = Router();

router.get("/", fetchProducts);
router.get("/:id", fetchProductById);

export default router;