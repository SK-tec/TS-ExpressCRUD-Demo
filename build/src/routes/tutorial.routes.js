"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tutorial_controller_1 = __importDefault(require("../conrollers/tutorial.controller"));
class TutorialRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new tutorial_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // Create New Tutorial
        this.router.post("/", this.controller.create);
        //Retrive all Tutorials available
        this.router.get("/", this.controller.findAll);
        //Retrieve Tutorial by ID
        this.router.get("/:id", this.controller.findOne);
        //Update Tutorial by ID
        this.router.put("/:id", this.controller.update);
        //Delete a Tutoral by ID
        this.router.delete("/:id", this.controller.delete);
    }
}
exports.default = new TutorialRoutes().router;
