// Функция checkFruit(fruit) принимает строку с названием
//  фрукта (параметр fruit), и проверяет есть ли такой
//   фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return; // Change this line
// }

function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];

  return fruits.includes(fruit) ? true : false; // Change this line
}

console.log(checkFruit('pear'));
console.log(checkFruit('mandarin'));
