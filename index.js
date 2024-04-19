const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const home = require("./controllers/Home.js");
const portpholio = require("./controllers/Portpholio.js");
const promotion = require("./controllers/Promotion.js");
const school = require("./controllers/School.js");
const application = require("./controllers/Application.js");
const header = require("./controllers/Header.js");
const ApplicationValidator = require("./utils/Validations.js");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB is OK"))
  .catch((err) => console.log("DB is not OK", err));

const PORT = process.env.PORT || 4444;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/home", home);
app.get("/portpholio", portpholio);
app.get("/promotion", promotion);
app.get("/school", school);
app.post("/application", ApplicationValidator, application);
app.get("/header", header);

app.listen(PORT, (err) => {
  if (err) {
    console.log("APP is not OK");
  }
  console.log("APP is OK");
});
