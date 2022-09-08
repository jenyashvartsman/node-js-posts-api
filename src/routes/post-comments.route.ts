import express from "express";
import controller from "../controllers/post-comments.controller";

const router = express.Router();
router.get("/", controller.getComments);
router.get("/:id", controller.getComment);
router.get("/post/:postId", controller.getPostComments);

export = router;
