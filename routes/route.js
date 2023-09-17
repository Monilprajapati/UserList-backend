import express from "express";
import { addUser, getUsers, editUser, getUserById, deleteUser } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/add", addUser);
router.get("/:id", getUserById);
router.put("/:id", editUser);
// router.delete("/:id", deleteUser);

export default router;
