// Перебери объект apartment используя метод
// Object.keys() и цикл for...of. Запиши в переменную
// keys массив ключей собственных свойств объекта
// apartment, и добавь в массив values все значения
// его свойств.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = apartment;

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (let key of keys) {
  values.push(apartment[key]);
}

console.log(keys);
// ['descr', 'rating', 'price']

console.log(values);
// ['Spacious apartment in the city center', 4, 2153]
