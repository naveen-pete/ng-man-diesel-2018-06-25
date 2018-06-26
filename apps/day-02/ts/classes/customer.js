var Customer = /** @class */ (function () {
    // id: number = 2;
    // name: string = 'krish';
    // phone: string = '12345';
    // id = 2;
    // name = 'krish';
    // phone = '12345';
    // constructor(id: number, name: string, phone: string) {
    //   this.id = id;
    //   this.name = name;
    //   this.phone = phone;
    // }
    function Customer(id, name, phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
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
    Customer.prototype.showDetails = function () {
        console.log('Customer details:');
        console.log('  id:', this.id);
        console.log('  name:', this.name);
        console.log('  phone:', this.phone);
    };
    return Customer;
}());
var c = new Customer(1, 'hari', '12345');
c.showDetails();
c.Id = 100;
console.log(c.Id);
