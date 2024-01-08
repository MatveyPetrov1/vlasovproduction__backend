import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { home } from "./controllers/Home.js";
import { portpholio } from "./controllers/Portpholio.js";
import { promotion } from "./controllers/Promotion.js";
import { school } from "./controllers/School.js";
import { application } from "./controllers/Application.js";
import { ApplicationValidator } from "./utils/Validations.js";
import dotenv from "dotenv";

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

app.listen(PORT, (err) => {
  if (err) {
    console.log("APP is not OK");
  }
  console.log("APP is OK");
});
