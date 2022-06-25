import News from "../models/News.js";

export const createNews = async (req, res, next) => {
  const newNews = new News(req.body);

  try {
    const savedNews = await newNews.save();
    res.status(200).json(savedNews);
  } catch (err) {
    next(err);
  }
};

export const updateNews = async (req, res, next) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      new: true,
    });
    res.status(200).json("Новость была изменена");
  } catch (err) {
    next(err);
  }
};

export const deleteNews = async (req, res, next) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.status(200).json("Новость была удалёна");
  } catch (err) {
    next(err);
  }
};

export const getNews = async (req, res, next) => {
  try {
    const news = await News.findById(req.params.id);
    res.status(200).json(news);
  } catch (err) {
    next(err);
  }
};

export const getNewses = async (req, res, next) => {
  try {
    const newses = await News.find();
    res.status(200).json(newses);
  } catch (err) {
    next(err);
  }
};
