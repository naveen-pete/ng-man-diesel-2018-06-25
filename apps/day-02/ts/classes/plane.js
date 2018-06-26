// Static methods
var Plane = /** @class */ (function () {
    function Plane(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }
    Plane.prototype.startEngines = function () {
        console.log('starting engines…');
        this.enginesActive = true;
    };
    Plane.badWeather = function (planes) {
        for (var _i = 0, planes_1 = planes; _i < planes_1.length; _i++) {
            var plane = planes_1[_i];
            plane.enginesActive = false;
        }
        console.log('All planes are shutdown');
    };
    return Plane;
}());
var p1 = new Plane(2);
var p2 = new Plane(4);
// Calling a static method
Plane.badWeather([p1, p2]);
