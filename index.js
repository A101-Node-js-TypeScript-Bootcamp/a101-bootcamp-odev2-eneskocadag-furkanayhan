const express = require("express");
const app = express();

//! Api Endpoint
const api = require("./routes/api");
//! Helpers
const jwt = require("./helpers/jwt");

app.use(express.json());
//! Api Routes & jwt
app.use(jwt());
app.use("/api", api);

//! Server Listening
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
