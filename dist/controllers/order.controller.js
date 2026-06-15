"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkout = void 0;
const order_services_1 = require("../services/order.services");
const checkout = async (req, res) => {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const { items } = req.body;
        if (!items || items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }
        const order = await (0, order_services_1.createOrder)(userId, items);
        return res.status(201).json({
            message: "Order created successfully",
            order,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message || "Checkout failed",
        });
    }
};
exports.checkout = checkout;
//# sourceMappingURL=order.controller.js.map