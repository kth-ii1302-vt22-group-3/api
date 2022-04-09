const temperatureRoutes = require("./controllers/temperature.js");
const defaultRoutes = require("./controllers/default.js");

const routes = (app) => {
    defaultRoutes(app);
    temperatureRoutes(app);
};

module.exports = routes;