function reverse(items) {
    var reversedItems = [];
    for (var i = items.length - 1; i >= 0; i--) {
        reversedItems.push(items[i]);
    }
    return reversedItems;
}
var numbers = [1, 2, 3];
console.log('input:', numbers);
var r1 = reverse(numbers);
console.log('result:', r1);
var strings = ['hari', 'krish', 'shiv'];
console.log('input:', strings);
var r2 = reverse(strings);
console.log('result:', r2);
