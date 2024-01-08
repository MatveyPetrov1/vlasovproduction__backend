import { Schema, model } from "mongoose";

const homeSchema = new Schema({
  photographyCards: Array,
  backstageImages: Array,
  backstageVideos: Array,
  feedbackVideos: Array,
  feedbackCards: Array,
  backstage: String,
});

export default model("homepage", homeSchema);
