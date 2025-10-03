"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestParent = exports.Testing = exports.LoginResponseT = exports.LoginInputT = exports.RegisterResponseT = exports.RegisterInputT = void 0;
var type_graphql_1 = require("type-graphql");
var baseDto_1 = require("../../baseDto");
var RegisterInputT = function () {
    var _classDecorators = [(0, type_graphql_1.InputType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _firstName_decorators;
    var _firstName_initializers = [];
    var _firstName_extraInitializers = [];
    var _lastName_decorators;
    var _lastName_initializers = [];
    var _lastName_extraInitializers = [];
    var _phoneNumber_decorators;
    var _phoneNumber_initializers = [];
    var _phoneNumber_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    var _provider_decorators;
    var _provider_initializers = [];
    var _provider_extraInitializers = [];
    var RegisterInputT = _classThis = /** @class */ (function () {
        function RegisterInputT_1() {
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.firstName = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _firstName_initializers, void 0));
            this.lastName = (__runInitializers(this, _firstName_extraInitializers), __runInitializers(this, _lastName_initializers, void 0));
            this.phoneNumber = (__runInitializers(this, _lastName_extraInitializers), __runInitializers(this, _phoneNumber_initializers, void 0));
            this.password = (__runInitializers(this, _phoneNumber_extraInitializers), __runInitializers(this, _password_initializers, void 0));
            // @Field()
            // merchant: string;
            this.provider = (__runInitializers(this, _password_extraInitializers), __runInitializers(this, _provider_initializers, void 0));
            __runInitializers(this, _provider_extraInitializers);
        }
        return RegisterInputT_1;
    }());
    __setFunctionName(_classThis, "RegisterInputT");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _email_decorators = [(0, type_graphql_1.Field)()];
        _firstName_decorators = [(0, type_graphql_1.Field)()];
        _lastName_decorators = [(0, type_graphql_1.Field)()];
        _phoneNumber_decorators = [(0, type_graphql_1.Field)()];
        _password_decorators = [(0, type_graphql_1.Field)()];
        _provider_decorators = [(0, type_graphql_1.Field)()];
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _firstName_decorators, { kind: "field", name: "firstName", static: false, private: false, access: { has: function (obj) { return "firstName" in obj; }, get: function (obj) { return obj.firstName; }, set: function (obj, value) { obj.firstName = value; } }, metadata: _metadata }, _firstName_initializers, _firstName_extraInitializers);
        __esDecorate(null, null, _lastName_decorators, { kind: "field", name: "lastName", static: false, private: false, access: { has: function (obj) { return "lastName" in obj; }, get: function (obj) { return obj.lastName; }, set: function (obj, value) { obj.lastName = value; } }, metadata: _metadata }, _lastName_initializers, _lastName_extraInitializers);
        __esDecorate(null, null, _phoneNumber_decorators, { kind: "field", name: "phoneNumber", static: false, private: false, access: { has: function (obj) { return "phoneNumber" in obj; }, get: function (obj) { return obj.phoneNumber; }, set: function (obj, value) { obj.phoneNumber = value; } }, metadata: _metadata }, _phoneNumber_initializers, _phoneNumber_extraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
        __esDecorate(null, null, _provider_decorators, { kind: "field", name: "provider", static: false, private: false, access: { has: function (obj) { return "provider" in obj; }, get: function (obj) { return obj.provider; }, set: function (obj, value) { obj.provider = value; } }, metadata: _metadata }, _provider_initializers, _provider_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RegisterInputT = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RegisterInputT = _classThis;
}();
exports.RegisterInputT = RegisterInputT;
var RegisterResponseT = function () {
    var _classDecorators = [(0, type_graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _firstName_decorators;
    var _firstName_initializers = [];
    var _firstName_extraInitializers = [];
    var _lastName_decorators;
    var _lastName_initializers = [];
    var _lastName_extraInitializers = [];
    var _phoneNumber_decorators;
    var _phoneNumber_initializers = [];
    var _phoneNumber_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    var _merchant_decorators;
    var _merchant_initializers = [];
    var _merchant_extraInitializers = [];
    var _provider_decorators;
    var _provider_initializers = [];
    var _provider_extraInitializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _role_extraInitializers = [];
    var _created_decorators;
    var _created_initializers = [];
    var _created_extraInitializers = [];
    var RegisterResponseT = _classThis = /** @class */ (function () {
        function RegisterResponseT_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.email = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.firstName = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _firstName_initializers, void 0));
            this.lastName = (__runInitializers(this, _firstName_extraInitializers), __runInitializers(this, _lastName_initializers, void 0));
            this.phoneNumber = (__runInitializers(this, _lastName_extraInitializers), __runInitializers(this, _phoneNumber_initializers, void 0));
            this.password = (__runInitializers(this, _phoneNumber_extraInitializers), __runInitializers(this, _password_initializers, void 0));
            this.merchant = (__runInitializers(this, _password_extraInitializers), __runInitializers(this, _merchant_initializers, void 0));
            this.provider = (__runInitializers(this, _merchant_extraInitializers), __runInitializers(this, _provider_initializers, void 0));
            this.role = (__runInitializers(this, _provider_extraInitializers), __runInitializers(this, _role_initializers, void 0));
            this.created = (__runInitializers(this, _role_extraInitializers), __runInitializers(this, _created_initializers, void 0));
            __runInitializers(this, _created_extraInitializers);
        }
        return RegisterResponseT_1;
    }());
    __setFunctionName(_classThis, "RegisterResponseT");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, type_graphql_1.Field)()];
        _email_decorators = [(0, type_graphql_1.Field)()];
        _firstName_decorators = [(0, type_graphql_1.Field)()];
        _lastName_decorators = [(0, type_graphql_1.Field)()];
        _phoneNumber_decorators = [(0, type_graphql_1.Field)()];
        _password_decorators = [(0, type_graphql_1.Field)()];
        _merchant_decorators = [(0, type_graphql_1.Field)({ nullable: true })];
        _provider_decorators = [(0, type_graphql_1.Field)()];
        _role_decorators = [(0, type_graphql_1.Field)()];
        _created_decorators = [(0, type_graphql_1.Field)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _firstName_decorators, { kind: "field", name: "firstName", static: false, private: false, access: { has: function (obj) { return "firstName" in obj; }, get: function (obj) { return obj.firstName; }, set: function (obj, value) { obj.firstName = value; } }, metadata: _metadata }, _firstName_initializers, _firstName_extraInitializers);
        __esDecorate(null, null, _lastName_decorators, { kind: "field", name: "lastName", static: false, private: false, access: { has: function (obj) { return "lastName" in obj; }, get: function (obj) { return obj.lastName; }, set: function (obj, value) { obj.lastName = value; } }, metadata: _metadata }, _lastName_initializers, _lastName_extraInitializers);
        __esDecorate(null, null, _phoneNumber_decorators, { kind: "field", name: "phoneNumber", static: false, private: false, access: { has: function (obj) { return "phoneNumber" in obj; }, get: function (obj) { return obj.phoneNumber; }, set: function (obj, value) { obj.phoneNumber = value; } }, metadata: _metadata }, _phoneNumber_initializers, _phoneNumber_extraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
        __esDecorate(null, null, _merchant_decorators, { kind: "field", name: "merchant", static: false, private: false, access: { has: function (obj) { return "merchant" in obj; }, get: function (obj) { return obj.merchant; }, set: function (obj, value) { obj.merchant = value; } }, metadata: _metadata }, _merchant_initializers, _merchant_extraInitializers);
        __esDecorate(null, null, _provider_decorators, { kind: "field", name: "provider", static: false, private: false, access: { has: function (obj) { return "provider" in obj; }, get: function (obj) { return obj.provider; }, set: function (obj, value) { obj.provider = value; } }, metadata: _metadata }, _provider_initializers, _provider_extraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _role_extraInitializers);
        __esDecorate(null, null, _created_decorators, { kind: "field", name: "created", static: false, private: false, access: { has: function (obj) { return "created" in obj; }, get: function (obj) { return obj.created; }, set: function (obj, value) { obj.created = value; } }, metadata: _metadata }, _created_initializers, _created_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RegisterResponseT = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RegisterResponseT = _classThis;
}();
exports.RegisterResponseT = RegisterResponseT;
var LoginInputT = function () {
    var _classDecorators = [(0, type_graphql_1.InputType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    var LoginInputT = _classThis = /** @class */ (function () {
        function LoginInputT_1() {
            this.email = __runInitializers(this, _email_initializers, void 0);
            // @Field()
            // firstName: string;
            //
            // @Field()
            // lastName: string;
            //
            // @Field()
            // phoneNumber: string;
            this.password = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _password_initializers, void 0));
            __runInitializers(this, _password_extraInitializers);
        }
        return LoginInputT_1;
    }());
    __setFunctionName(_classThis, "LoginInputT");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _email_decorators = [(0, type_graphql_1.Field)()];
        _password_decorators = [(0, type_graphql_1.Field)()];
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LoginInputT = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoginInputT = _classThis;
}();
exports.LoginInputT = LoginInputT;
var LoginResponseT = function () {
    var _classDecorators = [(0, type_graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = baseDto_1.BaseResponseDto;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _firstName_decorators;
    var _firstName_initializers = [];
    var _firstName_extraInitializers = [];
    var _lastName_decorators;
    var _lastName_initializers = [];
    var _lastName_extraInitializers = [];
    var _phoneNumber_decorators;
    var _phoneNumber_initializers = [];
    var _phoneNumber_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    var _merchant_decorators;
    var _merchant_initializers = [];
    var _merchant_extraInitializers = [];
    var _provider_decorators;
    var _provider_initializers = [];
    var _provider_extraInitializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _role_extraInitializers = [];
    var _created_decorators;
    var _created_initializers = [];
    var _created_extraInitializers = [];
    var LoginResponseT = _classThis = /** @class */ (function (_super) {
        __extends(LoginResponseT_1, _super);
        function LoginResponseT_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.email = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _email_initializers, void 0));
            _this.firstName = (__runInitializers(_this, _email_extraInitializers), __runInitializers(_this, _firstName_initializers, void 0));
            _this.lastName = (__runInitializers(_this, _firstName_extraInitializers), __runInitializers(_this, _lastName_initializers, void 0));
            _this.phoneNumber = (__runInitializers(_this, _lastName_extraInitializers), __runInitializers(_this, _phoneNumber_initializers, void 0));
            _this.password = (__runInitializers(_this, _phoneNumber_extraInitializers), __runInitializers(_this, _password_initializers, void 0));
            _this.merchant = (__runInitializers(_this, _password_extraInitializers), __runInitializers(_this, _merchant_initializers, void 0));
            _this.provider = (__runInitializers(_this, _merchant_extraInitializers), __runInitializers(_this, _provider_initializers, void 0));
            _this.role = (__runInitializers(_this, _provider_extraInitializers), __runInitializers(_this, _role_initializers, void 0));
            _this.created = (__runInitializers(_this, _role_extraInitializers), __runInitializers(_this, _created_initializers, void 0));
            __runInitializers(_this, _created_extraInitializers);
            return _this;
        }
        return LoginResponseT_1;
    }(_classSuper));
    __setFunctionName(_classThis, "LoginResponseT");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [(0, type_graphql_1.Field)()];
        _email_decorators = [(0, type_graphql_1.Field)()];
        _firstName_decorators = [(0, type_graphql_1.Field)()];
        _lastName_decorators = [(0, type_graphql_1.Field)()];
        _phoneNumber_decorators = [(0, type_graphql_1.Field)()];
        _password_decorators = [(0, type_graphql_1.Field)()];
        _merchant_decorators = [(0, type_graphql_1.Field)()];
        _provider_decorators = [(0, type_graphql_1.Field)()];
        _role_decorators = [(0, type_graphql_1.Field)()];
        _created_decorators = [(0, type_graphql_1.Field)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _firstName_decorators, { kind: "field", name: "firstName", static: false, private: false, access: { has: function (obj) { return "firstName" in obj; }, get: function (obj) { return obj.firstName; }, set: function (obj, value) { obj.firstName = value; } }, metadata: _metadata }, _firstName_initializers, _firstName_extraInitializers);
        __esDecorate(null, null, _lastName_decorators, { kind: "field", name: "lastName", static: false, private: false, access: { has: function (obj) { return "lastName" in obj; }, get: function (obj) { return obj.lastName; }, set: function (obj, value) { obj.lastName = value; } }, metadata: _metadata }, _lastName_initializers, _lastName_extraInitializers);
        __esDecorate(null, null, _phoneNumber_decorators, { kind: "field", name: "phoneNumber", static: false, private: false, access: { has: function (obj) { return "phoneNumber" in obj; }, get: function (obj) { return obj.phoneNumber; }, set: function (obj, value) { obj.phoneNumber = value; } }, metadata: _metadata }, _phoneNumber_initializers, _phoneNumber_extraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
        __esDecorate(null, null, _merchant_decorators, { kind: "field", name: "merchant", static: false, private: false, access: { has: function (obj) { return "merchant" in obj; }, get: function (obj) { return obj.merchant; }, set: function (obj, value) { obj.merchant = value; } }, metadata: _metadata }, _merchant_initializers, _merchant_extraInitializers);
        __esDecorate(null, null, _provider_decorators, { kind: "field", name: "provider", static: false, private: false, access: { has: function (obj) { return "provider" in obj; }, get: function (obj) { return obj.provider; }, set: function (obj, value) { obj.provider = value; } }, metadata: _metadata }, _provider_initializers, _provider_extraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _role_extraInitializers);
        __esDecorate(null, null, _created_decorators, { kind: "field", name: "created", static: false, private: false, access: { has: function (obj) { return "created" in obj; }, get: function (obj) { return obj.created; }, set: function (obj, value) { obj.created = value; } }, metadata: _metadata }, _created_initializers, _created_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LoginResponseT = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoginResponseT = _classThis;
}();
exports.LoginResponseT = LoginResponseT;
var Testing = function () {
    var _classDecorators = [(0, type_graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var Testing = _classThis = /** @class */ (function () {
        function Testing_1() {
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.email = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            __runInitializers(this, _email_extraInitializers);
        }
        return Testing_1;
    }());
    __setFunctionName(_classThis, "Testing");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _name_decorators = [(0, type_graphql_1.Field)()];
        _email_decorators = [(0, type_graphql_1.Field)()];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Testing = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Testing = _classThis;
}();
exports.Testing = Testing;
var TestParent = function () {
    var _classDecorators = [(0, type_graphql_1.ObjectType)({ description: "Testing parent" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _message_decorators;
    var _message_initializers = [];
    var _message_extraInitializers = [];
    var _data_decorators;
    var _data_initializers = [];
    var _data_extraInitializers = [];
    var TestParent = _classThis = /** @class */ (function () {
        function TestParent_1() {
            this.status = __runInitializers(this, _status_initializers, void 0);
            this.message = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _message_initializers, void 0));
            this.data = (__runInitializers(this, _message_extraInitializers), __runInitializers(this, _data_initializers, void 0));
            __runInitializers(this, _data_extraInitializers);
        }
        return TestParent_1;
    }());
    __setFunctionName(_classThis, "TestParent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _status_decorators = [(0, type_graphql_1.Field)()];
        _message_decorators = [(0, type_graphql_1.Field)()];
        _data_decorators = [(0, type_graphql_1.Field)(function () { return [Testing]; })];
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _message_decorators, { kind: "field", name: "message", static: false, private: false, access: { has: function (obj) { return "message" in obj; }, get: function (obj) { return obj.message; }, set: function (obj, value) { obj.message = value; } }, metadata: _metadata }, _message_initializers, _message_extraInitializers);
        __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TestParent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TestParent = _classThis;
}();
exports.TestParent = TestParent;
