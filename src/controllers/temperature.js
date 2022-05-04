const { response } = require("express");
const { findAll, findLatest, insertOne } = require("../repository/dbHandler");

const temperatureRoutes = (app) => {
  app.get("/temperatures", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    findAll()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  app.get("/temperatures/current", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    findLatest()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  app.post("/temperatures", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const { value } = req.body;
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
