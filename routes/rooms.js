import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
  cancelBookingRoom,
} from "../controllers/room.js";
import Room from "../models/Room.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("/reservation/:id", updateRoomAvailability);
router.put("/cancel-reservation/:id", verifyUser, cancelBookingRoom);

//DELETE
router.delete("/:id", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);

export default router;
