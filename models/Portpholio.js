import { Schema, model } from "mongoose";

const portpholioSchema = new Schema({
  school: {
    top: Array,
    bottom: Array,
  },
  promotion: {
    top: Array,
    bottom: Array,
  },
});

export default model("portpholiopage", portpholioSchema);
