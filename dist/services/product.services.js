"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getAllProducts = void 0;
const prisma_1 = require("../lib/prisma");
const getAllProducts = async (query) => {
    return prisma_1.prisma.product.findMany({
        where: {
            ...(query?.search && {
                name: {
                    contains: query.search,
                    mode: "insensitive",
                },
            }),
            ...(query?.category && {
                category: query.category,
            }),
        },
    });
};
exports.getAllProducts = getAllProducts;
const getProductById = async (id) => {
    return prisma_1.prisma.product.findUnique({
        where: { id },
    });
};
exports.getProductById = getProductById;
//# sourceMappingURL=product.services.js.map