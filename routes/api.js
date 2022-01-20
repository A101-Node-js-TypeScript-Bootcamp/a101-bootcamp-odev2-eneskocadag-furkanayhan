const express = require("express");
const routes = express.Router();
const brandsroutes = require("./brands");
const categoriesRoutes = require("./categories");
const loginRoutes = require("./login");

routes.use("/brands", brandsroutes);
routes.use("/categories", categoriesRoutes);
routes.use("/login", loginRoutes);

module.exports = routes;
