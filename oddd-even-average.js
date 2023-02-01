function makeAvg(arrOfNumbers) {
    let oddSum = 0;
    let evenSum = 0;
    let evenElements = 0;
    let oddElements = 0;
    for (i = 0; i < arrOfNumbers.length; i++) {
        let element = arrOfNumbers[i];
        if (element % 2 !== 0) {
            oddSum = oddSum + element;
            oddElements++;
        }
        if (element % 2 === 0) {
            evenSum = evenSum + element;
            evenElements++;
        }
    }
    let avg1 = oddSum / oddElements;
    let avg2 = evenSum / evenElements;
    let avg = [avg1, avg2];
    return (avg);
}
let myNumbers = [10,10,10, 11,11,11];
const result = makeAvg(myNumbers);
const [avgOfOddNumbers, avgOfEvenNumbers] = result;
console.log('odd avg:', avgOfOddNumbers, 'even avg:', avgOfEvenNumbers);