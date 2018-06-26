// This function draws a 2D rectangle
function drawRectangle(options) {
    var l = options.length;
    var w = options.width;
    console.log('rectangle length:', l);
    console.log('rectangle width:', w);
}
var options = {
    length: 10,
    width: 20
};
drawRectangle(options);
var customer = {
    name: 'hari',
    phone: '9886098860',
    length: '20',
    width: 30
};
drawRectangle(customer);
