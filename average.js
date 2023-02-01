function makeAvg(arrOfNumbers) {
    let sum = 0;
    for (i = 0; i < arrOfNumbers.length; i++) {
        let element = arrOfNumbers[i];
        sum = sum + element;
    }
    let avg = sum / arrOfNumbers.length;
    return (avg);
}
let myNumbers = [10, 20, 30, 40, 50];
const result = makeAvg(myNumbers);
console.log(result);