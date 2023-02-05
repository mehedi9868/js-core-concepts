function findOddSum(arrOfNumbers) {
    let sumOfOddNumbers = 0;
    for (let number of arrOfNumbers) {
        if (number % 2 === 1) {
            sumOfOddNumbers = sumOfOddNumbers + number;
        }
    }
    return sumOfOddNumbers;
}
console.log(findOddSum([5, 7, 8, 10, 45, 30]));