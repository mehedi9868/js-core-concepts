function secondLargest(numbers) {
    let firstLargestNumber = Math.max(...numbers);
    let newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== firstLargestNumber) {
            newArr.push(numbers[i]);
        }
    }
    console.log(newArr);
    return Math.max(...newArr);
}
console.log(secondLargest([1, 2, 3, 4, 5, 15, 6, 7, 8, 9, 10]))
// ......................................
function secondLargest(numbers) {
    (numbers.sort((a, b) => b - a));
    return numbers[1] || null;
}
console.log(secondLargest([1, 2, 3, 7, 4, 5, 6]))
//......................................
function secondLargest(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[numbers.length - 2] || null;
}
console.log(secondLargest([1, 2, 3, 7, 4, 5, 6]))