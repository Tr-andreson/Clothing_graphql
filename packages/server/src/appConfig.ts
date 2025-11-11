import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import { graphqlUploadExpress } from "graphql-upload-ts";
import { corsConfig } from "./config/cors.config";
import { databaseConnection } from "./config/database.config";
import { logger } from "./config/winston.config";
import { apollooConfig } from "./config/apolloo.config";
import { promClientConfig } from "./config/prom-client.config";


// ---------------- Load Env Variables -----------------
dotenv.config()

const app = express()

// ---------------- Graphql File Upload -----------------
app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

app.use(express.json())
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

// ---------------- CORS CONFIG -----------------
corsConfig(app)

// ---------------- DATABASE CONNECTION (MONGO DB) -----------------
databaseConnection()


// ---------------- GRAPHQL CONFIGRATION  -----------------
apollooConfig(app)

// ------------------ PROM CLIENT SETUP --------------------
promClientConfig(app)

// ---------------- TEST ROUTE  -----------------
app.get("/check", (_req, res) => {
  logger.log({
    level: 'info',
    message: 'What time is the testing at?'
  });
  res.send("hello world");

})

export default app

