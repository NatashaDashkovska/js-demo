/**
 * Функция changeEven(numbers, value) принимает массив чисел numbers и 
 * обновляет каждый элемент, значение которого это чётное число, добавляя
 *  к нему значение параметра value.

Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла 
массив чисел numbers, а создавала, наполняла и возвращала новый массив
 с обновлёнными значениями.
 */

//  function changeEven(numbers, value) {
//    // Пиши код ниже этой строки
//    for (let i = 0; i < numbers.length; i += 1) {
//      if (numbers[i] % 2 === 0) {
//        numbers[i] = numbers[i] + value;
//      }
//    }
//    // Пиши код выше этой строки
//  }

function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  let newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i] + value);
    } else {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
  // Пиши код выше этой строки
}

console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
//[12, 18, 3, 7, 14, 16]

console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
//[144, 13, 81, 192, 136, 154]
