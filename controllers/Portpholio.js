import PortpholioModel from "../models/Portpholio.js";

export const portpholio = async (req, res) => {
  try {
    const portpholio = await PortpholioModel.find();
    res.json(...portpholio);
  } catch (err) {
    console.log(err);
    res.json({
      message: "Не удалось получить страницу портфолио",
    });
  }
};
