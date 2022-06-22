// Перебери объект apartment используя цикл for...in
// и запиши в массив keys все его ключи, а в массив
//  values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (let key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys);
// ['descr', 'rating', 'price']

console.log(values);
// ['Spacious apartment in the city center', 4, 2153]
