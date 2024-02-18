const { Schema, model } = require("mongoose");

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

module.exports = model("portpholiopage", portpholioSchema);
