"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// domain/entities/User.ts
var User = /** @class */ (function () {
    function User(email, firstName, lastName, password, phoneNumber, provider) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.provider = provider;
    }
    return User;
}());
exports.User = User;
