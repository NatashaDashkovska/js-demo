// Функция addOverNum() считает сумму всех аргументов.
// Измени параметры и тело функции addOverNum() так,
// чтобы она считала сумму только тех аргументов,
// которые больше чем заданное число. Это число
// должно быть первым параметром функции.

// // Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
//   // Change code above this line
// }

// Change code below this line
function addOverNum(number, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > number) {
      total += arg;
    }
  }

  return total;
  // Change code above this line
}

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// 71
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// 218
