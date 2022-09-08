import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import postsRoutes from "./routes/posts.route";
import userRoutes from "./routes/users.route";
import postCommentsRoutes from "./routes/post-comments.route";

// router
const router: Express = express();
router.use(morgan("dev"));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// routes
router.use("/api", [postsRoutes, postCommentsRoutes, userRoutes]);

// 404
router.use((req, res, next) => {
  return res.status(404).json({ error: "Not found" });
});

// server
const httpServer = http.createServer(router);
const PORT: number | string = process.env.PORT ?? 8080;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
