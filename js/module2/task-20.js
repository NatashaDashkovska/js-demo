// Напиши функцию getEvenNumbers(start, end)
//  которая возвращает массив всех чётных чисел
//   от start до end. Чётным считается число
//    которое делится на 2 без остатка
//  (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   // Change code above this line
// }

function getEvenNumbers(start, end) {
  // Change code below this line
  let numbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      numbers.push(i);
    }
  }
  return numbers;
  // Change code above this line
}

console.log(getEvenNumbers(6, 12));
// [6, 8, 10, 12]
console.log(getEvenNumbers(8, 8));
// [8]
console.log(getEvenNumbers(7, 7));
// []
