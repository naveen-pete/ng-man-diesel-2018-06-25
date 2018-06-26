// Boolean
// const isDone: boolean = true;

// let isComplete: boolean;
// isComplete = false;

// console.log('isDone:', isDone);
// console.log('isComplete:', isComplete);

// String
// const fullName: string = `Bob Bobbington`;
// const age: number = 25;

// const sentence: string = `Hello, my name is ${fullName}.

// I'll be ${age + 1} years old next month.`;

// console.log('sentence:', sentence);

// Array
// const list1: number[] = [1, 2, 3];
// const list2: Array<number> = [10, 20, 30];

// list1.push(4);

// console.log('list1:', list1);
// console.log('list2:', list2);
// console.log('list2[3]:', list2[3]);

// Declare a tuple type
// let x: [string, number];
// x = ['hello', 10];

// x[2] = 20;

// console.log('x:', x);

// any
// let notSure: any = 4;
// console.log('notSure:', notSure);
// console.log(typeof notSure);

// notSure = 'maybe a string instead';
// console.log('notSure:', notSure);
// console.log(typeof notSure);

// notSure = false; // okay, definitely a boolean

// console.log('notSure:', notSure);
// console.log(typeof notSure);

// Type Assertions
// let someValue: any = '10';

// // let strLength: number = (<string>someValue).length;
// let anotherValue: number = someValue + 10;
// let strLength: number = someValue as number;

// console.log('strLength:', strLength);
// console.log('anotherValue:', anotherValue);

// let and const
// function greet(user, b) {
//   let greeting = 'hi' + user;

//   // if (b) {
//   //   let greeting = 'Hello ' + user;
//   // }

//   console.log('greeting:', greeting);
// }

// greet('hari', true);

// anonymous function
// const greet = function(userName) {
//   return 'hi ' + userName;
// };

// console.log(greet('hari'));

// const greet = (userName: string) => 'hello world';

// console.log(greet('naveen'));

// function buildName(firstName: string, ...restOfName: string[]): string {
//   return firstName + ' ' + restOfName.join(' ');
// }

// let result1 = buildName('Bob'); // error, too few params
// let result2 = buildName('Bob', 'Adams', 'Sr.'); // error, too many params
// let result3 = buildName('Bob', 'Adams'); // just right

// console.log('result1:', result1);
// console.log('result2:', result2);
// console.log('result3:', result3);

const greet: (userName: string) => string = function(userName) {
  return 'Hello ' + userName;
};
