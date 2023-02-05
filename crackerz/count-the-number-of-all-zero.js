function countZeros(binary_num) {
    return binary_num.split('0').length - 1;
}
console.log(countZeros('10101'));
// -----------------------------------------

function countZeros(binary_num) {
    let count = 0;
    for (let i = 0; i < binary_num.length; i++) {
        if (binary_num[i] === "0") {
            count++;
        }
    }
    return count;
}
console.log(countZeros('1010101'));
// ............................................

function countZeros(binary_num) {
    let count = 0;
    for (let binary of binary_num) {
        if (binary === '0') {
            count++;
        }
    } return count;

}
console.log(countZeros('1010101001'));
// ....................................