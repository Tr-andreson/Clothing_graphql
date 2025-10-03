"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptService = void 0;
var bcryptjs_1 = require("bcryptjs");
var BcryptService = /** @class */ (function () {
    function BcryptService() {
    }
    BcryptService.prototype.hash = function (plain) {
        var salt = 10;
        return bcryptjs_1.default.hash(plain, salt);
    };
    BcryptService.prototype.compare = function (password, hash) {
        return bcryptjs_1.default.compare(password, hash);
    };
    return BcryptService;
}());
exports.BcryptService = BcryptService;
