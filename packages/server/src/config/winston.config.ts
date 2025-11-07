import { configDotenv } from "dotenv";
import { createLogger } from "winston"
import LokiTransport from "winston-loki"


// and make this remove this 
configDotenv()

const options = {
  transports: [
    new LokiTransport({
      host: "http://127.0.0.1:3100"
    })
  ]
};

export const logger = createLogger(options);
