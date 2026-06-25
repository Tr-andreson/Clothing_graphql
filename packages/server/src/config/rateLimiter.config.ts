import { type Express } from "express"
import RateLimit from "express-rate-limit"
// import * as RateLimit from "express-rate-limit"


/*
 * Api Rate Limit 15 Minutes Max 5 Times Per Ip
*/

export const RateLimiterConfig = (app: Express) => {
  const limiter = RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3000,
  });
  app.use(limiter
  );

}

