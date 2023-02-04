function feetToInch(feet) {
    return feet * 12;
}
// const result = feetToInch(12);
// console.log(result);

function centimeterToMeter(centimeter) {
    return centimeter / 100;
}
// const result = centimeterToMeter(1);
// console.log(result);

function paperRequirements(book1, book2, book3) {
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;
    const totalPage = book1 * book1Page + book2 * book2Page + book3 * book3Page;
    return totalPage;
}
// const result = paperRequirements(1, 1, 1);
// console.log(result);

function bestFriend(friends) {
    let bestFriend = friends[0];
    for (const friend of friends) {
        if (friend.length > bestFriend.length) {
            bestFriend = friend;
        }
    }
    return bestFriend;
}
// const result = bestFriend(['mehedi', 'hasan', 'tipu', 'sharmin', 'nahar', 'mina'])
// console.log(result);

function positiveNumbers(numbers) {
    let positiveNumbers = [];
    for (number of numbers) {
        if (number < 0) {
            break;
        } else {
            positiveNumbers.push(number);
        }
    }
    return positiveNumbers;
}
// const result = positiveNumbers([0, 1, 2, 3, 4, 5, 6, -1, -2, 7, 8, 9]);
// console.log(result);