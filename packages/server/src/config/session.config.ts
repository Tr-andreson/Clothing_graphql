import session from "express-session"
import { type Express } from "express"
import "express-session";

export const SessionConfig = (app: Express) => {
  app.use(
    session({
      secret: "your_secret_key", // Use an env variable in production
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false, // Set to true if using HTTPS
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 24 hours
      },
    })
  );

}

// Module Augmentation
declare module "express-session" {
  interface SessionData {
    userId: string; // Add any other custom properties here
    username?: string;
  }
}
