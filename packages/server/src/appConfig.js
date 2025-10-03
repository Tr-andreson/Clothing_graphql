"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = require("body-parser");
var compression_1 = require("compression");
var cookie_parser_1 = require("cookie-parser");
var dotenv_1 = require("dotenv");
var express_1 = require("express");
var graphql_upload_ts_1 = require("graphql-upload-ts");
var path_1 = require("path");
var apollo_config_1 = require("./config/apollo.config");
var cors_config_1 = require("./config/cors.config");
var database_config_1 = require("./config/database.config");
// import { databaseConnection } from "./config/database.config";
dotenv_1.default.config();
var app = (0, express_1.default)();
// graph ql updload
app.use((0, graphql_upload_ts_1.graphqlUploadExpress)({ maxFileSize: 10000000, maxFiles: 10 }));
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../images")));
app.use(express_1.default.json());
app.use((0, compression_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
// cors config
(0, cors_config_1.corsConfig)(app);
// redisConfig(app)
// database connection
(0, database_config_1.databaseConnection)();
// apollo config 
(0, apollo_config_1.apolloConfig)(app);
app.get("/check", function (_req, res) {
    res.send("hello world");
});
exports.default = app;
