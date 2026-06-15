"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductById = exports.fetchProducts = void 0;
const product_services_1 = require("../services/product.services");
const fetchProducts = async (req, res) => {
    try {
        const products = await (0, product_services_1.getAllProducts)(req.query);
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ message: "Failed to fetch products" });
    }
};
exports.fetchProducts = fetchProducts;
const fetchProductById = async (req, res) => {
    try {
        const product = await (0, product_services_1.getProductById)(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Not found" });
        }
        res.json(product);
    }
    catch (err) {
        res.status(500).json({ message: "Error fetching product" });
    }
};
exports.fetchProductById = fetchProductById;
//# sourceMappingURL=productController.js.map