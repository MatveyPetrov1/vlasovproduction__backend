const { Schema, model } = require("mongoose");

const headerModel = new Schema({
  cities: Array,
});

module.exports = model("header", headerModel);
