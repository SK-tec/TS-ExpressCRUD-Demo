import { Request, Response } from "express";

export default class TutorialController {
  async create(req: Request, res: Response) {
    try {
      res.status(201).json({ message: "Create OK", reqBody: req.body });
    } catch (err) {
      res.status(500).json({
        message: "Internel Server Error",
      });
    }
  }
  async findAll(req: Request, res: Response) {
    try {
      res.status(200).json({ message: "Success" });
    } catch (err) {
      res.status(500).json({ message: "Internel Server Error" });
    }
  }
  async findOne(req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "findOne OK",
        reqParamId: req.params.id,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  }
  async update(req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "update OK",
        reqParamId: req.params.id,
        reqBody: req.body,
      });
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error!" });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "delete Ok",
        reqParamId: req.params.id,
      });
    } catch (err) {
      res.status(500).json({ message: "Server Error" });
    }
  }
}
