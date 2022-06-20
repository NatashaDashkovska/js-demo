// Напиши функцию includes(array, value),
//  которая делает тоже самое, что и метод массива
//   массив.includes(значение) - проверяет,
//    есть ли в массиве array значение value,
//     возвращая true если есть и false
//      в противном случае.

// При выполнении этой задачи в теле функции
//  includes() нельзя использовать метод
//   массив.includes(значение).

// function includes(array, value) {
//   // Change code below this line
//   // Change code above this line
// }

function includes(array, value) {
  // Change code below this line
  let result;
  for (let arr of array) {
    if (arr === value) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result;
  // Change code above this line
}

console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'),
);

//   true

console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'),
);

// false
