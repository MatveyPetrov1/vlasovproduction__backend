const { Schema, model } = require("mongoose");

const promotionSchema = new Schema({
  cards: Array,
  videos: Array,
});

module.exports = model("promotionpage", promotionSchema);
