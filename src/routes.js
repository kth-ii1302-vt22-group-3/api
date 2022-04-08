export const routes = (app) => {
    app.get("/", (req, res) => res.send("Hello World!"));
    app.get("/hello", (req, res) => res.send("World"));
    app.get("/ping", (req, res) => res.send("pong"));
};