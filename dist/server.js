"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const posts_route_1 = __importDefault(require("./routes/posts.route"));
const users_route_1 = __importDefault(require("./routes/users.route"));
const post_comments_route_1 = __importDefault(require("./routes/post-comments.route"));
// router
const router = (0, express_1.default)();
router.use((0, morgan_1.default)("dev"));
router.use(express_1.default.urlencoded({ extended: false }));
router.use(express_1.default.json());
// routes
router.use("/api", [posts_route_1.default, post_comments_route_1.default, users_route_1.default]);
// 404
router.use((req, res, next) => {
    return res.status(404).json({ error: "Not found" });
});
// server
const httpServer = http_1.default.createServer(router);
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
