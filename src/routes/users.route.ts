import express from "express";
import controller from "../controllers/users.controller";

const router = express.Router();
router.get("/", controller.getUsers);
router.get("/:id", controller.getUser);

export = router;
