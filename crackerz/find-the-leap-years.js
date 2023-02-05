function findLeapYear(arrOfYears) {
    let leapYears = [];
    for (let leapYear of arrOfYears) {
        if (leapYear % 4 === 0) {
            leapYears.push(leapYear);
        }
    } return leapYears;
}
console.log(findLeapYear([2023, 2024, 2025, 2028, 2030]));
// ............... simplest version .....................

function findLeapYear(arrOfYears) {
    let leapYears = [];
    for (let year of arrOfYears) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            leapYears.push(year);
        }
    }
    return leapYears;

}
console.log(findLeapYear([2023, 2024, 2025, 2028, 2030]));