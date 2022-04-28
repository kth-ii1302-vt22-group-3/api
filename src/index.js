const express = require("express");
const routes = require("./routes.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT || 3000;

app.use(cors());

routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
