function checkTriangle(side1, side2, side3) {
    if ((side1 === side2 && side1 !== side3) || (side1 === side3 && side1 !== side2)) {
        return 'Yes';
    } else {
        return 'No';
    }
}
console.log(checkTriangle(8, 9, 8), checkTriangle(8, 8, 8));

