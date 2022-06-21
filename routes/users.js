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

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Привет, вы вошли!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Привет, вы вошли и можете удалить свой акк");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Привет админ, вы вошли и можете удалить всех акки");
// });

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
