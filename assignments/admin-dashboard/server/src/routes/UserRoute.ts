import express, { Router } from "express";
import { UserController } from "../controllers/UserController";
import { authenticateAdmin } from "../middleware/auth";

const router: Router = express.Router();

router.post("/", authenticateAdmin, UserController.createUser);
router.get("/", authenticateAdmin, UserController.getUsers);
router.get("/:userId", authenticateAdmin, UserController.getUser);
router.put("/:userId", authenticateAdmin, UserController.updateUser);
router.delete("/:userId", authenticateAdmin, UserController.deleteUser);

export default router;
