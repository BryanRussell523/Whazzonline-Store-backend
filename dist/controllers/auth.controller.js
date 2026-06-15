"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const auth_services_1 = require("../services/auth.services");
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const result = await (0, auth_services_1.registerUser)(name, email, password);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await (0, auth_services_1.loginUser)(email, password);
        res.json(result);
    }
    catch (error) {
        res.status(401).json({
            message: error.message,
        });
    }
};
exports.login = login;
//# sourceMappingURL=auth.controller.js.map