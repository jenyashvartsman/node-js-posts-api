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
const apiUrl = `${app_config_1.appConfig.baseApiUrl}/users`;
// get users
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.default.get(apiUrl);
    const users = result.data;
    return res.json(users);
});
// get user
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const result = yield axios_1.default.get(`${apiUrl}/${id}`);
        const user = result.data;
        return res.json(user);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.default = {
    getUsers,
    getUser,
};
