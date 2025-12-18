import { createLogger, format, transports } from "winston";
import LokiTransport from "winston-loki";

const { combine, timestamp, json } = format;

export const logger = createLogger({
  level: process.env.LOG_LEVEL || "info",

  format: combine(
    timestamp(),
    json()
  ),

  transports: [
    new transports.Console(),

    new LokiTransport({
      host: process.env.LOKI_HOST || "http://localhost:3100",
      labels: {
        app: "backend-api",
        environment: process.env.NODE_ENV || "development",
      },
      onConnectionError: (err) => {
        console.error("❌ Loki connection error", err);
      },
    }),

  ],

});
