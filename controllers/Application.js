const nodemailer = require("nodemailer");
const { validationResult } = require("express-validator");
const ApplicationModel = require("../models/Application.js");
const dotenv = require("dotenv");

dotenv.config();

const application = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.json(result.array());
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.APP_GMAIL,
      pass: process.env.APP_PASS,
    },
  });
  const mailOptions = {
    from: process.env.APP_GMAIL,
    to: process.env.APP_GMAIL,
    subject: "VLASOV PRODUCTION",
    text: `Имя: ${req.body.name}
Телефон: ${req.body.phone}
Сообщение: ${req.body.text}
Город: ${req.body.city}`,
  };

  const doc = new ApplicationModel({
    name: req.body.name,
    phone: req.body.phone,
    text: req.body.text,
    city: req.body.city,
  });

  await doc.save();

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("nodemailer is OK");
    }
  });

  res.json({
    message: "success",
  });
};

module.exports = application;
