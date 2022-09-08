import express from "express";
import controller from "../controllers/users.controller";

const router = express.Router();
router.get("/users", controller.getUsers);
router.get("/users/:id", controller.getUser);

export = router;
