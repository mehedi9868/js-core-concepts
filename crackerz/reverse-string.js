function reverseMaker(word) {
    // return [...word].reverse().join('');
    return word.split('').reverse().join('');
};
console.log(reverseMaker('GeeksforGeeks'));
console.log(reverseMaker('Hello'));
// .....................
function reverseMaker(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed = reversed + word[i];
    }
    return reversed;
}
console.log(reverseMaker('tipu'));