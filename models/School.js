const { Schema, model } = require("mongoose");

const schoolSchema = new Schema({
  cards: Array,
  videos: Array,
});

module.exports = model("schoolpage", schoolSchema);
