function average(arrOfMarks) {
    const totalSub = arrOfMarks.length;
    let totalMarks = 0;
    let avgMarks = 0;
    for (let mark of arrOfMarks) {
        totalMarks = totalMarks + mark;
        avgMarks = totalMarks / totalSub;
    }
    return parseFloat(avgMarks.toFixed(2));
}
console.log(average([75.25, 65, 80, 35.45, 99.50]));//71.04
console.log(average([100, 100, 100, 100, 100]));//100