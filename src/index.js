import { routes } from "./routes.js";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
