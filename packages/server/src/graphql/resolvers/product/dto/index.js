"use strict";
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
exports.ProductInputT = exports.ProductT = void 0;
var type_graphql_1 = require("type-graphql");
var ProductT = function () {
    var _classDecorators = [(0, type_graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _sku_decorators;
    var _sku_initializers = [];
    var _sku_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _slug_decorators;
    var _slug_initializers = [];
    var _slug_extraInitializers = [];
    var _imageUrl_decorators;
    var _imageUrl_initializers = [];
    var _imageUrl_extraInitializers = [];
    var _imageKey_decorators;
    var _imageKey_initializers = [];
    var _imageKey_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _quantity_decorators;
    var _quantity_initializers = [];
    var _quantity_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
    var _taxable_decorators;
    var _taxable_initializers = [];
    var _taxable_extraInitializers = [];
    var _isActive_decorators;
    var _isActive_initializers = [];
    var _isActive_extraInitializers = [];
    var ProductT = _classThis = /** @class */ (function () {
        function ProductT_1() {
            this.sku = __runInitializers(this, _sku_initializers, void 0);
            this.name = (__runInitializers(this, _sku_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.slug = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _slug_initializers, void 0));
            this.imageUrl = (__runInitializers(this, _slug_extraInitializers), __runInitializers(this, _imageUrl_initializers, void 0));
            this.imageKey = (__runInitializers(this, _imageUrl_extraInitializers), __runInitializers(this, _imageKey_initializers, void 0));
            this.description = (__runInitializers(this, _imageKey_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.quantity = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _quantity_initializers, void 0));
            this.price = (__runInitializers(this, _quantity_extraInitializers), __runInitializers(this, _price_initializers, void 0));
            this.taxable = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _taxable_initializers, void 0));
            this.isActive = (__runInitializers(this, _taxable_extraInitializers), __runInitializers(this, _isActive_initializers, void 0));
            __runInitializers(this, _isActive_extraInitializers);
        }
        return ProductT_1;
    }());
    __setFunctionName(_classThis, "ProductT");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _sku_decorators = [(0, type_graphql_1.Field)()];
        _name_decorators = [(0, type_graphql_1.Field)()];
        _slug_decorators = [(0, type_graphql_1.Field)()];
        _imageUrl_decorators = [(0, type_graphql_1.Field)({ nullable: true })];
        _imageKey_decorators = [(0, type_graphql_1.Field)({ nullable: true })];
        _description_decorators = [(0, type_graphql_1.Field)({ nullable: true })];
        _quantity_decorators = [(0, type_graphql_1.Field)(function () { return type_graphql_1.Float; })];
        _price_decorators = [(0, type_graphql_1.Field)(function () { return type_graphql_1.Float; })];
        _taxable_decorators = [(0, type_graphql_1.Field)()];
        _isActive_decorators = [(0, type_graphql_1.Field)()];
        __esDecorate(null, null, _sku_decorators, { kind: "field", name: "sku", static: false, private: false, access: { has: function (obj) { return "sku" in obj; }, get: function (obj) { return obj.sku; }, set: function (obj, value) { obj.sku = value; } }, metadata: _metadata }, _sku_initializers, _sku_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _slug_decorators, { kind: "field", name: "slug", static: false, private: false, access: { has: function (obj) { return "slug" in obj; }, get: function (obj) { return obj.slug; }, set: function (obj, value) { obj.slug = value; } }, metadata: _metadata }, _slug_initializers, _slug_extraInitializers);
        __esDecorate(null, null, _imageUrl_decorators, { kind: "field", name: "imageUrl", static: false, private: false, access: { has: function (obj) { return "imageUrl" in obj; }, get: function (obj) { return obj.imageUrl; }, set: function (obj, value) { obj.imageUrl = value; } }, metadata: _metadata }, _imageUrl_initializers, _imageUrl_extraInitializers);
        __esDecorate(null, null, _imageKey_decorators, { kind: "field", name: "imageKey", static: false, private: false, access: { has: function (obj) { return "imageKey" in obj; }, get: function (obj) { return obj.imageKey; }, set: function (obj, value) { obj.imageKey = value; } }, metadata: _metadata }, _imageKey_initializers, _imageKey_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: function (obj) { return "quantity" in obj; }, get: function (obj) { return obj.quantity; }, set: function (obj, value) { obj.quantity = value; } }, metadata: _metadata }, _quantity_initializers, _quantity_extraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
        __esDecorate(null, null, _taxable_decorators, { kind: "field", name: "taxable", static: false, private: false, access: { has: function (obj) { return "taxable" in obj; }, get: function (obj) { return obj.taxable; }, set: function (obj, value) { obj.taxable = value; } }, metadata: _metadata }, _taxable_initializers, _taxable_extraInitializers);
        __esDecorate(null, null, _isActive_decorators, { kind: "field", name: "isActive", static: false, private: false, access: { has: function (obj) { return "isActive" in obj; }, get: function (obj) { return obj.isActive; }, set: function (obj, value) { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _isActive_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProductT = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductT = _classThis;
}();
exports.ProductT = ProductT;
var ProductInputT = function () {
    var _classDecorators = [(0, type_graphql_1.InputType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _sku_decorators;
    var _sku_initializers = [];
    var _sku_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _slug_decorators;
    var _slug_initializers = [];
    var _slug_extraInitializers = [];
    var _imageUrl_decorators;
    var _imageUrl_initializers = [];
    var _imageUrl_extraInitializers = [];
    var _imageKey_decorators;
    var _imageKey_initializers = [];
    var _imageKey_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _quantity_decorators;
    var _quantity_initializers = [];
    var _quantity_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
    var _taxable_decorators;
    var _taxable_initializers = [];
    var _taxable_extraInitializers = [];
    var _isActive_decorators;
    var _isActive_initializers = [];
    var _isActive_extraInitializers = [];
    var ProductInputT = _classThis = /** @class */ (function () {
        function ProductInputT_1() {
            this.sku = __runInitializers(this, _sku_initializers, void 0);
            this.name = (__runInitializers(this, _sku_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.slug = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _slug_initializers, void 0));
            this.imageUrl = (__runInitializers(this, _slug_extraInitializers), __runInitializers(this, _imageUrl_initializers, void 0));
            this.imageKey = (__runInitializers(this, _imageUrl_extraInitializers), __runInitializers(this, _imageKey_initializers, void 0));
            this.description = (__runInitializers(this, _imageKey_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.quantity = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _quantity_initializers, void 0));
            this.price = (__runInitializers(this, _quantity_extraInitializers), __runInitializers(this, _price_initializers, void 0));
            this.taxable = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _taxable_initializers, void 0));
            this.isActive = (__runInitializers(this, _taxable_extraInitializers), __runInitializers(this, _isActive_initializers, void 0));
            __runInitializers(this, _isActive_extraInitializers);
        }
        return ProductInputT_1;
    }());
    __setFunctionName(_classThis, "ProductInputT");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _sku_decorators = [(0, type_graphql_1.Field)()];
        _name_decorators = [(0, type_graphql_1.Field)()];
        _slug_decorators = [(0, type_graphql_1.Field)()];
        _imageUrl_decorators = [(0, type_graphql_1.Field)({ nullable: true })];
        _imageKey_decorators = [(0, type_graphql_1.Field)({ nullable: true })];
        _description_decorators = [(0, type_graphql_1.Field)({ nullable: true })];
        _quantity_decorators = [(0, type_graphql_1.Field)(function () { return type_graphql_1.Float; })];
        _price_decorators = [(0, type_graphql_1.Field)(function () { return type_graphql_1.Float; })];
        _taxable_decorators = [(0, type_graphql_1.Field)()];
        _isActive_decorators = [(0, type_graphql_1.Field)()];
        __esDecorate(null, null, _sku_decorators, { kind: "field", name: "sku", static: false, private: false, access: { has: function (obj) { return "sku" in obj; }, get: function (obj) { return obj.sku; }, set: function (obj, value) { obj.sku = value; } }, metadata: _metadata }, _sku_initializers, _sku_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _slug_decorators, { kind: "field", name: "slug", static: false, private: false, access: { has: function (obj) { return "slug" in obj; }, get: function (obj) { return obj.slug; }, set: function (obj, value) { obj.slug = value; } }, metadata: _metadata }, _slug_initializers, _slug_extraInitializers);
        __esDecorate(null, null, _imageUrl_decorators, { kind: "field", name: "imageUrl", static: false, private: false, access: { has: function (obj) { return "imageUrl" in obj; }, get: function (obj) { return obj.imageUrl; }, set: function (obj, value) { obj.imageUrl = value; } }, metadata: _metadata }, _imageUrl_initializers, _imageUrl_extraInitializers);
        __esDecorate(null, null, _imageKey_decorators, { kind: "field", name: "imageKey", static: false, private: false, access: { has: function (obj) { return "imageKey" in obj; }, get: function (obj) { return obj.imageKey; }, set: function (obj, value) { obj.imageKey = value; } }, metadata: _metadata }, _imageKey_initializers, _imageKey_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: function (obj) { return "quantity" in obj; }, get: function (obj) { return obj.quantity; }, set: function (obj, value) { obj.quantity = value; } }, metadata: _metadata }, _quantity_initializers, _quantity_extraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
        __esDecorate(null, null, _taxable_decorators, { kind: "field", name: "taxable", static: false, private: false, access: { has: function (obj) { return "taxable" in obj; }, get: function (obj) { return obj.taxable; }, set: function (obj, value) { obj.taxable = value; } }, metadata: _metadata }, _taxable_initializers, _taxable_extraInitializers);
        __esDecorate(null, null, _isActive_decorators, { kind: "field", name: "isActive", static: false, private: false, access: { has: function (obj) { return "isActive" in obj; }, get: function (obj) { return obj.isActive; }, set: function (obj, value) { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _isActive_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProductInputT = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductInputT = _classThis;
}();
exports.ProductInputT = ProductInputT;
