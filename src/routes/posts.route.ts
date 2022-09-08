import express from "express";
import controller from "./../controllers/posts.controller";

const router = express.Router();
router.get("/posts", controller.getPosts);
router.get("/posts/:id", controller.getPost);
router.post("/posts", controller.createPost);
router.put("/posts/:id", controller.updatePost);
router.delete("/posts/:id", controller.deletePost);
router.get("/posts/:id/comments", controller.getPostCommnets);

export = router;
