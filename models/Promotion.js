import { Schema, model } from "mongoose";

const promotionSchema = new Schema({
  cards: Array,
  videos: Array,
});

export default model("promotionpage", promotionSchema);
