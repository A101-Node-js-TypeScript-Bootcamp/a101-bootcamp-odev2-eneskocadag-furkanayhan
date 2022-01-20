const express = require("express");
const routes = express.Router();
const brandsroutes = require("./brands");

routes.use("/brands", brandsroutes);
// routes.use("/categories");

module.exports = routes;
