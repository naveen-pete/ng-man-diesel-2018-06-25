var Customer = /** @class */ (function () {
    function Customer() {
    }
    Object.defineProperty(Customer.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (val) {
            this.id = val;
        },
        enumerable: true,
        configurable: true
    });
    Customer.prototype.getAll = function () { };
    Customer.prototype.create = function () { };
    return Customer;
}());
var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.getAll = function () { };
    Product.prototype.create = function () { };
    return Product;
}());
var c = new Customer();
c.Id = 200;
console.log(c.Id);
