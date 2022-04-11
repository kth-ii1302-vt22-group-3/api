import { routes } from "./routes.js";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
