import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import { graphqlUploadExpress } from "graphql-upload-ts";
import { apolloConfig } from "./config/apollo.config";
import { corsConfig } from "./config/cors.config";
import { databaseConnection } from "./config/database.config";
import { promClientConfig } from "./config/prom-client.config";
import { restConfig } from "./presentation/api/rest";


// ---------------- Load Env Variables -----------------
dotenv.config()

export const app = express()

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
apolloConfig(app)

// ------------------ PROM CLIENT SETUP --------------------
promClientConfig(app)

// -------------- REST API CONFIG -----------------------
restConfig(app)

export default app

