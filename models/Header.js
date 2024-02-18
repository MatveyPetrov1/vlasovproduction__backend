import { model, Schema } from "mongoose";

const headerModel = new Schema({
  cities: Array,
});

export default model("header", headerModel);
