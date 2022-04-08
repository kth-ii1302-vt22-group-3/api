// Create a new instance of the express and start it up on env port or default port 3000 if none is provided in the env file 
import { routes } from "./routes.js";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Setup route for ping and hello
routes(app);

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
