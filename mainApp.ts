import { Application, Request, Response } from "express";
import { statusCode } from "./utils/statusCode";
import student from "./router/studentRouter";

export const mainApp = (app: Application) => {
  app.use("/api/v1", student);

  app.get("/", (req: Request, res: Response) => {
    try {
      res.status(statusCode.OK).json({
        message: "Welcome to the student API",
      });
    } catch (err) {
      res.status(statusCode.BAD_REQUEST).json({
        message: "Error",
        error: err,
      });
    }
  });
};