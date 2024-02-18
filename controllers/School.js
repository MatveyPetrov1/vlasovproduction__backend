const SchoolModel = require("../models/School.js");

const school = async (req, res) => {
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

module.exports = school;
