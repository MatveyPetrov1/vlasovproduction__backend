const nodemailer = require("nodemailer");
const { validationResult } = require("express-validator");
const ApplicationModel = require("../models/Application.js");

const application = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.json(result.array());
    }
    if (req.body.city !== "Выберите город") {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.APP_GMAIL,
          pass: process.env.APP_PASS,
        },
      });
      const mailOptions = {
        from: process.env.APP_GMAIL,
        to: "vlasov.production.doc@mail.ru",
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

      res.status(200).json({
        message: "success",
      });
    } else {
      res.json({
        message: "error",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = application;
