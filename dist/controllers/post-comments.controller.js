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
const apiUrl = `${app_config_1.appConfig.baseApiUrl}/comments`;
// get comments
const getComments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.default.get(apiUrl);
    const comments = result.data;
    return res.json(comments);
});
// get comment
const getComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const result = yield axios_1.default.get(`${apiUrl}/${id}`);
        const comment = result.data;
        return res.json(comment);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
// get post comments
const getPostComments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = req.params.postId;
    const result = yield axios_1.default.get(apiUrl, { params: { postId } });
    const comments = result.data;
    return res.json(comments);
});
exports.default = {
    getComments,
    getComment,
    getPostComments,
};
