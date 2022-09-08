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
router.use("/posts", postsRoutes);
router.use("/users", userRoutes);
router.use("/comments", postCommentsRoutes);

// server
const httpServer = http.createServer(router);
const PORT: number | string = process.env.PORT ?? 8080;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
