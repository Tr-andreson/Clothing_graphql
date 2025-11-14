import { logger } from "@/config/winston.config";
import { Request, Response } from "express";
import { Express } from "express"


export const restConfig = (app: Express) => {
  // ---------------- TEST ROUTE  -----------------
  app.get("/check", (_req: Request, res: Response) => {
    logger.log({
      level: 'info',
      message: 'What time is the testing at?'
    });
    res.send("Check Route");
  })

}
