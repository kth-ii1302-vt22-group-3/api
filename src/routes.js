const defaultRoutes = (app) => {
  app.get("/", (req, res) => res.send("Hello World!"));
  app.get("/hello", (req, res) => res.send("World"));
  app.get("/ping", (req, res) => res.send("pong"));
  app.get("/message", (req, res) => res.json({ message: "Hello World!" }));
};

const temperatureRoutes = (app) => {
  app.get("/temperature", (req, res) =>
    res.json({
        id: 1,
        timestamp: new Date().toISOString(),
        value: 20.1,
        unit: "Celsius",
    })
  );
};

export const routes = (app) => {
  defaultRoutes(app);
  temperatureRoutes(app);
};