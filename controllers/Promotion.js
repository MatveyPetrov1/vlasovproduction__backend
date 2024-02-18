const PromotionModel = require("../models/Promotion.js");

const promotion = async (req, res) => {
  try {
    const promotion = await PromotionModel.find();
    res.json(...promotion);
  } catch (err) {
    console.log(err);
    res.json({
      message: "Не удалось получить страницу рекламной съемки",
    });
  }
};

module.exports = promotion;
