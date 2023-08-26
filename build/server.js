"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./src/index"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); //Load environment variables from .env file
const app = (0, express_1.default)();
const server = new index_1.default(app);
//const PORT = process.env.PORT;
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;
app.get("/", (req, res) => {
    res.send("Welcome to Express-Typescript-Tutorial page");
});
app.listen(PORT, () => {
    console.log(`Server is running on the Port ${PORT}`);
});
