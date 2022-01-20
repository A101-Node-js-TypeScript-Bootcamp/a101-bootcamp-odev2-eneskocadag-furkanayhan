const express = require("express");
const routes = express.Router();
const Brandscontroller = require("../controllers/Brands");

routes.get("/", Brandscontroller.singleGetBrands);
routes.get("/:brandsName", Brandscontroller.multigetBrands);
module.exports = routes;
