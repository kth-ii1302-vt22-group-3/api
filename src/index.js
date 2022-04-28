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
    "https://ii1302-group3-web.herokuapp.com",
    "https://ii1302-group3-api.herokuapp.com",
];

app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}));


routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
