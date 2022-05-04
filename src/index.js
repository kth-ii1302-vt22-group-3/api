const express = require("express");
const routes = require("./routes.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT || 3000;


const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3003",
    "https://cloudometer-api.azurewebsites.net",
    "https://cloudometer-web.azurewebsites.net",
];

app.use(cors({
    origin: allowedOrigins/*function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }*/
    }
));


routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
