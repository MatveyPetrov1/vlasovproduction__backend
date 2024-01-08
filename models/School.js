import { Schema, model } from "mongoose";

const schoolSchema = new Schema({
  cards: Array,
  videos: Array,
});

export default model("schoolpage", schoolSchema);
