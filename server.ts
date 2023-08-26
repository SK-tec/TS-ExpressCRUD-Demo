import express, { Express, Request, Response } from "express";
import Server from "./src/index";
import dotenv from "dotenv";
dotenv.config(); //Load environment variables from .env file
const app: Express = express();
const server: Server = new Server(app);
//const PORT = process.env.PORT;
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express-Typescript-Tutorial page");
});
app.listen(PORT, () => {
  console.log(`Server is running on the Port ${PORT}`);
});
