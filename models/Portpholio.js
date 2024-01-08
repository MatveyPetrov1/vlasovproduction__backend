import { Schema, model } from "mongoose";

const portpholioSchema = new Schema({
  cards: Array,
  school: Array,
  promotion: Array,
});

export default model("portpholiopage", portpholioSchema);
