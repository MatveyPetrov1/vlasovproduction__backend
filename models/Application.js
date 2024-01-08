import { Schema, model } from "mongoose";

const applicationSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  text: {
    required: true,
    type: String,
  },
  city: {
    required: true,
    type: String,
  },
});

export default model("application", applicationSchema);
