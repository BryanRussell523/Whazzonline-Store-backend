"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const prisma_1 = require("../lib/prisma");
const createOrder = async (userId, items) => {
    // 1. Get products from DB
    const productIds = items.map((i) => i.productId);
    const products = await prisma_1.prisma.product.findMany({
        where: {
            id: { in: productIds },
        },
    });
    if (products.length === 0) {
        throw new Error("No valid products found");
    }
    // 2. Calculate total
    let total = 0;
    const orderItemsData = items.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        if (!product) {
            throw new Error(`Product not found: ${item.productId}`);
        }
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        return {
            productId: product.id,
            quantity: item.quantity,
            price: product.price,
        };
    });
    // 3. Create order + items
    const order = await prisma_1.prisma.order.create({
        data: {
            userId,
            total,
            status: "pending",
            items: {
                create: orderItemsData,
            },
        },
        include: {
            items: true,
        },
    });
    return order;
};
exports.createOrder = createOrder;
//# sourceMappingURL=order.services.js.map