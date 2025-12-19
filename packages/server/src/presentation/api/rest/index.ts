import { logger } from "@/infrastructure/services/loggingService/winston.service";
import { Request, Response } from "express";
import { Express } from "express"


export const restConfig = (app: Express) => {
  // ---------------- TEST ROUTE  -----------------
  app.get("/check", (_req: Request, res: Response) => {
    logger.info("check route clicked");
    res.send("Check Route");
  })

  app.get("/err", (_req: Request, res: Response) => {
    logger.error("check route clicked");
    res.send("Check Error Route");
  })

}
