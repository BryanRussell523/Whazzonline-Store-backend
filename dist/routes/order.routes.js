"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
// protected route
router.post("/checkout", auth_middleware_1.authMiddleware, order_controller_1.checkout);
exports.default = router;
//# sourceMappingURL=order.routes.js.map