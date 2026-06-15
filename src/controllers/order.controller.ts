import { Request, Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { createOrder } from "../services/order.services";

export const checkout = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = await createOrder(userId, items);

    return res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message || "Checkout failed",
    });
  }
};