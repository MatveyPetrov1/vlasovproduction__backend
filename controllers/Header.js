const HeaderModel = require("../models/Header.js");

const header = async (req, res) => {
  try {
    const header = await HeaderModel.find();
    res.json(...header);
  } catch (err) {
    console.log(err);
    res.json({
      message: "Не удалось получить шапку",
    });
  }
};

module.exports = header;
