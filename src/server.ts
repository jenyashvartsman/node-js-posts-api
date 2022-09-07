import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import routes from "./routes/posts.route";

// router
const router: Express = express();
router.use(morgan("dev"));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// routes
router.use("/", routes);

// server
const httpServer = http.createServer(router);
const PORT: number | string = process.env.PORT ?? 8080;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
