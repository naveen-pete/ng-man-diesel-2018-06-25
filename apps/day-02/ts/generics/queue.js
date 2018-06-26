var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.data = [];
        this.push = function (item) { return _this.data.push(item); };
        this.pop = function () { return _this.data.shift(); };
    }
    return Queue;
}());
var qn = new Queue();
qn.push(1);
var n = qn.pop();
console.log('n:', n);
var qs = new Queue();
qs.push('hari');
var s = qs.pop();
console.log('s:', s);
