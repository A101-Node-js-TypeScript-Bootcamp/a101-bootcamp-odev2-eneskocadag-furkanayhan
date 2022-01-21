const express = require("express");
const routes = express.Router();
const categoriesController = require("../controllers/Categories");
//! Get requests
routes.get("/", categoriesController.multigetCategories);
routes.get("/:categoryName", categoriesController.singlegetCategories);
module.exports = routes;
