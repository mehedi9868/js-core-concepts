function temperatureConverter(valNum) {
    const celsius = (valNum - 32) / 1.8;
    return parseFloat(celsius.toFixed(2));
}
console.log(temperatureConverter(50));
console.log(temperatureConverter(103));