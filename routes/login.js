const express = require("express");
const loginController = require("../controllers/Login");
const routes = express.Router();
//! Post requests
routes.post("/", loginController.loginPost);
module.exports = routes;
