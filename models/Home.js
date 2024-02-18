const { Schema, model } = require("mongoose");

const homeSchema = new Schema({
  photographyCards: Array,
  backstageImages: Array,
  backstageVideos: Array,
  feedbackVideos: Array,
  feedbackCards: Array,
  backstage: String,
});

module.exports = model("homepage", homeSchema);
