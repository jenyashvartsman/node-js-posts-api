"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const post_comments_controller_1 = __importDefault(require("../controllers/post-comments.controller"));
const router = express_1.default.Router();
router.get("/comments", post_comments_controller_1.default.getComments);
router.get("/comments/:id", post_comments_controller_1.default.getComment);
router.get("/comments/post/:postId", post_comments_controller_1.default.getPostComments);
module.exports = router;
