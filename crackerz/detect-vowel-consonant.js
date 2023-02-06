const solution = (letter) => {
    if (letter === 'a' || letter === 'e' || letter === "i" || letter === 'o' || letter === 'u') {
        return 'VOWEL';
    } else {
        return 'CONSONANT';
    }
};
console.log(solution('a')); // VOWEL
console.log(solution('u')); // VOWEL
console.log(solution('k')); // CONSONANT