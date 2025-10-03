"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(sku, name, slug, imageUrl, imageKey, description, quantity, price, taxable, isActive) {
        this.sku = sku;
        this.name = name;
        this.slug = slug;
        this.imageUrl = imageUrl;
        this.imageKey = imageKey;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.taxable = taxable;
        this.isActive = isActive;
    }
    return Product;
}());
exports.Product = Product;
