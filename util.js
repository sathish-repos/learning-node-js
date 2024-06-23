// common js syntax
// note: to execute remove type:module from package json

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 35;
}

module.exports = { generateRandomNumber, celsiusToFahrenheit };
