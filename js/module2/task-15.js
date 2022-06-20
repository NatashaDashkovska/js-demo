// Дополни код функции createArrayOfNumbers(min, max)
//  так, чтобы она возвращала массив всех целых чисел
//   от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   // Change code above this line
//   return numbers;
// }

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) numbers.push(i);
  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(29, 34));
// [29, 30, 31, 32, 33, 34]
console.log(createArrayOfNumbers(14, 17));
// [14, 15, 16, 17]
