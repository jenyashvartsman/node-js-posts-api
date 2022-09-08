"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const app_config_1 = require("../config/app.config");
const apiUrl = `${app_config_1.appConfig.baseApiUrl}/posts`;
// get posts
const getPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.default.get(apiUrl);
    const posts = result.data;
    return res.json(posts);
});
// get post
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const result = yield axios_1.default.get(`${apiUrl}/${id}`);
        const post = result.data;
        return res.json(post);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
// create post
const createPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = req.body;
        const result = yield axios_1.default.post(apiUrl, post);
        const createdPost = result.data;
        return res.send(createdPost);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
// update post
const updatePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const post = req.body;
        const result = yield axios_1.default.put(`${apiUrl}/${id}`, post);
        const updatedPost = result.data;
        return res.send(updatedPost);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
// delete post
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield axios_1.default.delete(`${apiUrl}/${id}`);
        const deletedPost = result.data;
        return res.send(deletedPost);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.default = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
};
