const { response } = require("express");
const { findAll, findLatest, insertOne } = require("../repository/dbHandler");

const temperatureRoutes = (app) => {
  app.get("/temperatures", (req, res) => {
    findAll()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  app.get("/temperatures/current", (req, res) => {
    findLatest()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  app.get("/temperatures/new", (req, res) => {
    const value = req.query.value;
    insertOne(value, "celsius")
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
};

module.exports = temperatureRoutes;
