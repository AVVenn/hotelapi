import express from "express";
import {
  createNews,
  updateNews,
  deleteNews,
  getNews,
  getNewses,
} from "../controllers/news.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createNews);

//UPDATE
router.put("/:id", verifyAdmin, updateNews);

//DELETE
router.delete("/:id", verifyAdmin, deleteNews);

//GET
router.get("/:id", getNews);

//GET ALL
router.get("/", getNewses);

export default router;
