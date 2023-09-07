import { Router } from "express";
import TutorialController from "../conrollers/tutorial.controller";

class TutorialRoutes {
  router = Router();
  controller = new TutorialController();
  constructor() {
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

export default new TutorialRoutes().router;
