import HomeModel from "../models/Home.js";

export const home = async (req, res) => {
  try {
    const home = await HomeModel.find();

    res.json(...home);
  } catch (err) {
    console.log(err);
    res.json({
      message: "Не удалось получить домашнюю страницу",
    });
  }
};
