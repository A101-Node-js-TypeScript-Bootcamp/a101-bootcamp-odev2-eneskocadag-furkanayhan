const express = require("express");
const registerController = require("../controllers/Register");
const routes = express.Router();
//! Post requests
routes.post("/", registerController.registerPost);
module.exports = routes;
