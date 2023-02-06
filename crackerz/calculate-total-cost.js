const totalCost = (products) => {
    let totalPrice = 0;
    for (let product of products) {
        totalPrice = totalPrice + product.price;
    }
    return totalPrice;

};
console.log(totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200 }, { name: 'Fresh Sugar', price: 300 }]));//1000
console.log(totalCost([{ name: "Samsung M33", price: 10000 },{ name: "Samsung Charger", price: 500},{ name: "Haveit Speakers", price:2500}]));//13000