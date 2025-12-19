
import client from "prom-client"
import { Express } from "express"



/*
 * Prom client setup
*/
export const promClientConfig = (app: Express) => {
  const collectDefaultMetrics = client.collectDefaultMetrics
  collectDefaultMetrics({ register: client.register })

  app.get("/metrics", async (_req: any, res: any) => {
    res.setHeader("Content-Type", client.register.contentType)
    const metrics = await client.register.metrics()
    res.send(metrics)
  })

}
