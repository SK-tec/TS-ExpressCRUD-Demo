import express, { Express } from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import Routes from "./routes";

dotenv.config();

class Server {
  constructor(app: Express) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Express): void {
    const corsOptions: CorsOptions = {
      origin: process.env.URL,
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}

export default Server;
