const express = require("express");
const routes = express.Router();
const brandsroutes = require("./brands");
const categoriesRoutes = require("./categories");

routes.use("/brands", brandsroutes);
routes.use("/categories", categoriesRoutes);

module.exports = routes;
