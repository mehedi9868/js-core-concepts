function tallestFriend(height) {
    return Math.max(...height);
}
console.log(tallestFriend([157, 134, 188]));
// .........................

function tallestFriend(height) {
    let tallest = height[0];
    for (let i = 0; i < height.length; i++) {
        if (height[i] > tallest) {
            tallest = height[i];
        }
    }
    return tallest;
}
console.log(tallestFriend([157, 134, 188]));