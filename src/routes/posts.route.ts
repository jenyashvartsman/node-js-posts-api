import express from "express";
import controller from "./../controllers/posts.controller";

const router = express.Router();
router.get("/posts", controller.getPosts);

export = router;
