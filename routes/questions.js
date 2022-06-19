import express from "express";
import {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestion,
  getQuestions,
} from "../controllers/questions.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", createQuestion);

//UPDATE
router.put("/:id", verifyAdmin, updateQuestion);

//DELETE
router.delete("/:id", verifyAdmin, deleteQuestion);

//GET
router.get("/:id", getQuestion);

//GET ALL
router.get("/", getQuestions);

export default router;
