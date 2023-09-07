import { Express } from "express";
import homeRoutes from "./home.routes";
import tutorialRoutes from "./tutorial.routes";

class Routes {
  constructor(app: Express) {
    app.use("/api", homeRoutes);
    app.use("/api/tutorials", tutorialRoutes);
  }
}

export default Routes;
