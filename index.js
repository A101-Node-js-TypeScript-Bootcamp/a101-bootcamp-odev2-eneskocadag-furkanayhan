const express = require("express");
const app = express();

//! Api Endpoint
const api = require("./routes/api");
//! Helpers
const jwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

app.use(express.json());
//! Api Routes & jwt
app.use(jwt());
app.use("/api", api);
app.use(errorHandler)

//! Server Listening
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
