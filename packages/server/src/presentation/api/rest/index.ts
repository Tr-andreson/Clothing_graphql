import { Request, Response } from "express";
import { Express } from "express"


export const restConfig = (app: Express) => {
	app.get("/", (_req: Request, res: Response) => {
		res.status(200);
		res.send("Clothing Graphql Project Api");
	})

  app.get("/healthx", (_req: Request, res: Response) => {
		res.status(200);
    res.send("OK");
  })

  app.get("/error", (_req: Request, res: Response) => {
		res.status(404);
    res.send("Checking Error Route");
  })
}
