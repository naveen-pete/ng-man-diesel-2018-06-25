var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// parent, base, super
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log(this.name + ' makes a noise.');
    };
    return Animal;
}());
// child, derived, sub
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, color) {
        if (color === void 0) { color = 'white'; }
        var _this = _super.call(this, name) || this;
        _this.color = color;
        _this.color = color;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        console.log('Bow');
    };
    Dog.prototype.speak = function () {
        _super.prototype.speak.call(this);
        console.log(this.name + ' barks.');
    };
    return Dog;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(name, color) {
        if (color === void 0) { color = 'ochre'; }
        var _this = _super.call(this, name) || this;
        _this.color = color;
        _this.color = color;
        return _this;
    }
    Lion.prototype.makeSound = function () {
        console.log('Grr..');
    };
    Lion.prototype.speak = function () {
        console.log(this.name + ' roars.');
    };
    return Lion;
}(Animal));
// const a = new Animal('snowy');
// a.speak();
var d = new Dog('tommy');
d.speak();
d.makeSound();
var l = new Lion('leo');
l.speak();
l.makeSound();
