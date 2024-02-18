const { Schema, model } = require("mongoose");

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

module.exports = model("application", applicationSchema);
