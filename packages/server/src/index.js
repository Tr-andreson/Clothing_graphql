"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var node_http_1 = require("node:http");
require("reflect-metadata");
var appConfig_1 = require("./appConfig");
dotenv_1.default.config();
var main = function () {
    var server = node_http_1.default.createServer(appConfig_1.default);
    server.listen(process.env.PORT || 8000, function () {
        console.log("server listing to port ".concat(process.env.PORT || 8000));
    });
};
main();
