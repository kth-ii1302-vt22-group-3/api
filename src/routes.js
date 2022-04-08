import { temperatureRoutes } from "./controllers/temperature.js";
import { defaultRoutes } from "./controllers/default.js";

export const routes = (app) => {
    defaultRoutes(app);
    temperatureRoutes(app);
};