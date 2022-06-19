import Question from "../models/Question.js";

export const createQuestion = async (req, res, next) => {
  const newQuestion = new Question(req.body);

  try {
    const savedQuestion = await newQuestion.save();
    res.status(200).json(savedQuestion);
  } catch (err) {
    next(err);
  }
};

export const updateQuestion = async (req, res, next) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      new: true,
    });
    res.status(200).json(updatedQuestion);
  } catch (err) {
    next(err);
  }
};

export const deleteQuestion = async (req, res, next) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.status(200).json("Вопрос был удалён");
  } catch (err) {
    next(err);
  }
};

export const getQuestion = async (req, res, next) => {
  try {
    const question = await Question.findById(req.params.id);
    res.status(200).json(question);
  } catch (err) {
    next(err);
  }
};

export const getQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (err) {
    next(err);
  }
};
