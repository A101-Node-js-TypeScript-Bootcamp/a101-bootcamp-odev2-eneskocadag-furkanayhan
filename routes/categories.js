const express = require("express");
const routes = express.Router();
const categoriesController = require("../controllers/Categories");

routes.get("/",categoriesController.multigetCategories);
module.exports = routes;
