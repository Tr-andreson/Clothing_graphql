"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsConfig = void 0;
var cors_1 = require("cors");
var corsConfig = function (app) {
    app.use((0, cors_1.default)({
        origin: process.env.NODE_ENV === "production" ? ["http://localhost:5173", "http://localhost:3000", "http://localhost:8081"] : ["http://localhost:5173", "https://studio.apollographql.com", "http://localhost:3000", "http://localhost:8081"],
        credentials: true
    }));
};
exports.corsConfig = corsConfig;
