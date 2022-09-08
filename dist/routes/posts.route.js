"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const posts_controller_1 = __importDefault(require("./../controllers/posts.controller"));
const router = express_1.default.Router();
router.get("/posts", posts_controller_1.default.getPosts);
router.get("/posts/:id", posts_controller_1.default.getPost);
router.post("/posts", posts_controller_1.default.createPost);
router.put("/posts/:id", posts_controller_1.default.updatePost);
router.delete("/posts/:id", posts_controller_1.default.deletePost);
module.exports = router;
