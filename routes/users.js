import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  updateUserAfterBooking,
  cancelBooking,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, updateUser);
router.put("/booking/:id", updateUserAfterBooking);
router.put("/booking-cancel/:id", verifyUser, cancelBooking);
//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
