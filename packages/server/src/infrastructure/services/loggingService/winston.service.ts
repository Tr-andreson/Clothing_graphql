import { createLogger, format, transports, Logger } from "winston";
import LokiTransport from "winston-loki";

export class WinstonService {
  public logger: Logger;

  constructor() {
    this.logger = createLogger({
      level: "info",
      defaultMeta: { service: "user-service" },
      format: format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.json()
      ),
      transports: [
        new transports.Console({
          format: format.combine(
            format.colorize(),
            format.simple()
          ),
        }),
        new LokiTransport({
          host: "http://127.0.0.1:3100",
          labels: { app: "my-nodejs-app" },
          json: true,
          format: format.json(),
          replaceTimestamp: true,
          onConnectionError: (err) => console.error("Loki Connection Error:", err),
        }),
      ],
    });
  }

  // Example helper methods
  info(message: string, meta?: any) {
    this.logger.info(message, meta);
  }

  error(message: string, stack?: string) {
    this.logger.error(message, { stack });
  }
}

export const logger = new WinstonService()
