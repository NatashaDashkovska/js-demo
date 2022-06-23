// Используя операцию rest дополни код функции add()
// так, чтобы она принимала любое количество аргументов,
// считала и возвращала их сумму.

// // Change code below this line
// function add() {
//   // Change code above this line
// }

// Change code below this line
function add(...args) {
  // Change code above this line

  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}

console.log(add(12, 4, 11, 48));
// 75
console.log(add(32, 6, 13, 19, 8));
// 78
