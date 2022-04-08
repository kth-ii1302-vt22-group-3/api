const getTemperatures = () => [
  {
    id: 1,
    timestamp: "2022-04-06 09:35:00",
    value: 21.1,
    unit: "Celsius",
  },
  {
    id: 2,
    timestamp: "2022-04-06 09:36:00",
    value: 22.1,
    unit: "Celsius",
  },
  {
    id: 3,
    timestamp: "2022-04-06 09:38:00",
    value: 23.1,
    unit: "Celsius",
  },
];

export const temperatureRoutes = (app) => {
  app.get("/temperatures", (req, res) => res.json(getTemperatures()));
  app.get("/temperatures/current", (req, res) => {
    res.json({
      id: 3,
      timestamp: "2022-04-06 09:38:00",
      value: 23.1,
      unit: "Celsius",
    });
  });
};
