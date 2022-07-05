/**
 Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной
  длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов,
   то есть тех которые есть в обоих массивах.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
 */

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//   return commonElements;
//   // Пиши код выше этой строки
// }

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки

  firstArray.forEach(function (elem) {
    if (secondArray.includes(elem)) {
      commonElements.push(elem);
    }
  });

  return commonElements;
  // Пиши код выше этой строки
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//[12, 27, 3]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//[1, 2]
