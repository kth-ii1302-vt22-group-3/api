const { response } = require("express");
const { findAll, findLatest, insertOne } = require("../repository/dbHandler");

const temperatureRoutes = (app) => {
  app.get("/temperatures", (req, res) => {
    findAll().then((result) => {
      res.json(result);
    });
  });

 app.get("/temperatures/current", (req, res) => {
    findLatest().then((result) => {
      res.json(result);
      });
  });

  app.post("/temperatures", (req, res) => {
    const { value } = req.body;
    insertOne(value, "celsius").then((result) => {
      res.status(200).json(result);
    });
  });
};


module.exports = temperatureRoutes;