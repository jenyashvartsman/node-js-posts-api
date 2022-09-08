"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const router = express_1.default.Router();
router.get("/users", users_controller_1.default.getUsers);
router.get("/users/:id", users_controller_1.default.getUser);
module.exports = router;
