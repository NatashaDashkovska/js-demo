// Запиши в переменную keys массив ключей собственных
// свойств объекта apartment, а в переменную values
// массив всех значений его свойств. Используй
// методы Object.keys() и Object.values().

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = apartment;
// const values = apartment;

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log(keys);
// ["descr", "rating", "price"]

console.log(values);
// ["Spacious apartment in the city center", 4, 2153]
