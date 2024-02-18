const PortpholioModel = require("../models/Portpholio.js");

const portpholio = async (req, res) => {
  try {
    const portpholio = await PortpholioModel.find();
    res.json(...portpholio);
  } catch (err) {
    console.log(err);
    res.json({
      message: "Не удалось получить страницу портфолио",
    });
  }
};

module.exports = portpholio;
