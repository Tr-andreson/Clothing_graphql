import session from "express-session";
import RedisStore from "connect-redis"
import { createClient } from "redis"
import { Express } from "express"

const redisStoreConfig = () => {
  let redisClient = createClient()

  redisClient.connect().catch(console.error)

  let redisStore = new RedisStore({
    client: redisClient,
    prefix: "myapp:",
  })

  return redisStore

}

const redisStore = redisStoreConfig()

export const redisConfig = (app: Express) => {
  app.use(
    session({
      store: redisStore,
      name: "redisSession",
      resave: false,
      saveUninitialized: false,
      secret: "keyboard cat",
      cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 2 minutes
        httpOnly: true,
        sameSite: "lax",
        secure: false
      }
    }),
  )

}
