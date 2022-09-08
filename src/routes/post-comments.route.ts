import express from "express";
import controller from "../controllers/post-comments.controller";

const router = express.Router();
router.get("/comments", controller.getComments);
router.get("/comments/:id", controller.getComment);
router.get("/comments/post/:postId", controller.getPostComments);

export = router;
