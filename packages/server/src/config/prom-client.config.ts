
import client from "prom-client"

/*
 * Prom client setup
*/
export const promClientConfig = (app: any) => {
  const collectDefaultMetrics = client.collectDefaultMetrics
  collectDefaultMetrics({ register: client.register })

  // ------ EXPOSE METRICS WITH /metrics ROUTE ---------
  app.get("/metrics", async (_req: any, res: any) => {
    res.setHeader("Content-Type", client.register.contentType)
    const metrics = await client.register.metrics()
    res.send(metrics)
  })

}
