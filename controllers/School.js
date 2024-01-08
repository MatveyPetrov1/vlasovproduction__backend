import SchoolModel from "../models/School.js";

export const school = async (req, res) => {
  try {
    const school = await SchoolModel.find();
    res.json(...school);
  } catch (err) {
    console.log(err);
    res.json({
      message: "Не удалось получить страницу портфолио",
    });
  }
};
