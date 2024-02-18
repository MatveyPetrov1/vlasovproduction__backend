const { body } = require("express-validator");

const ApplicationValidator = [
  body("name", "Неверный формат имени").isString().isLength({ min: 2 }),
  body("phone", "Неверный формат телефона").isString().isLength({ min: 10 }),
  body("text", "Неверный формат записи").isString().isLength({ min: 10 }),
];

module.exports = ApplicationValidator;
