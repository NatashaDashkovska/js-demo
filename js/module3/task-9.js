// Напиши функцию getProductPrice(productName)
// которая принимает один параметр productName -
//  название продукта. Функция ищет объект продукта
//   с таким именем (свойство name) в массиве
//    products и возвращает его цену (свойство price).
//     Если продукт с таким названием не найден,
//      функция должна возвращать null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   // Change code above this line
// }

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (let product of products) {
    if (productName === product.name) return product.price;
  }

  return null;

  // Change code above this line
}

console.log(getProductPrice('Grip'));
// 1200
console.log(getProductPrice('Scanner'));
// 2700
console.log(getProductPrice('Engine'));
// null
