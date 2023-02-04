let myName = 'Mehedi';
let isSecond = true;
let myNumber = 12;
// console.log(typeof myName, isSecond, myNumber);
// 1..................
let myAge = 28;
myAge = 29;
myAge = 30;
const pi = 3.14159;
// console.log(myAge, pi);
// 2..................
let num1 = 10;
let num2 = 2;
const sum = num1 + num2;
const sub = num1 - num2;
const multiply = num1 * num2;
const division = num1 / num2;
const remainder = num1 % num2;
// console.log(num1, num2, sum, sub, multiply, division, remainder);
// 3..................

// console.log(num1 == num2);
// console.log(num1 === num2);
// console.log(num1 != num2);
// console.log(num1 !== num2);
// console.log(num1 < num2);
// console.log(num1 > num2);
// console.log(num1 <= num2);
// console.log(num1 >= num2);
// 4..................

if (num1 > num2 && num2 !== 0) {
    //  console.log(num1,'is gretter than',num2);
}
if (num1 > num2 || num2 === 2) {
    // console.log(num1,'is gretter than',num2); 
}
// 5..................

if (num1 > num2 && num1 !== 0) {
    // console.log(num1, 'is gretter than', num2);
} else {
    // console.log(num1, 'is less than', num2);
}
// 6..................

let i = 7;
while (i <= 19) {
    if (i % 2 === 1) {
        // console.log(i);
    }
    i++
}
// 7.................

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberOfElements = numbers.length;
// console.log(numberOfElements);
numbers[4] = 0;
// console.log(numbers);
numbers.push(90, 95);
// console.log(numbers);
numbers.pop();
// console.log(numbers);
// 8.................

for (i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(element);
}
for (number of numbers) {
    // console.log(number);
}
// 9.................

for (number of numbers) {
    if (number > 80) {
        console.log(number);
    } else {
        // console.log('sorry there is no number gretter than 80');
    }
}
//10................

function multiplyFunc(num1, num2, num3) {
    return num1 * num2 * num3;
}
const result = multiplyFunc(10, 5, 100);
// console.log(result);
// 11................

const aboutMe = {
    name: 'Mehedi',
    age: 28,
    isMarried: true
}
const updatedAge = aboutMe.age = 25;
// console.log(updatedAge);
// console.log(aboutMe);
// 12................