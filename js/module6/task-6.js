/**
 * Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
 */

// // Пиши код ниже этой строки
// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     numbers.forEach(function (number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
};

console.log(filterArray([1, 2, 3, 4, 5], 5));
//[]
console.log(filterArray([12, 24, 8, 41, 76], 20));
//[24, 41, 76]
