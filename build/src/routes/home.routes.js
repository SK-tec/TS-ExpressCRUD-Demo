"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controllers_1 = require("../conrollers/home.controllers");
class HomeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get("/", home_controllers_1.welcome);
    }
}
exports.default = new HomeRoutes().router;
