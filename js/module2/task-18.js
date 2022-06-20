// Напиши функцию getCommonElements(array1, array2)
//  которая получает два массива произвольной длины
//   в параметры array1 и array2, и возвращает новый
//    массив, состоящий из тех элементов, которые
//     присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   // Change code above this line
// }

function getCommonElements(array1, array2) {
  // Change code below this line
  let array3 = [];
  for (let arr of array1) {
    if (array2.includes(arr)) {
      array3.push(arr);
    }
  }
  return array3;
  // Change code above this line
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// [12, 27, 3]

console.log(getCommonElements([1, 2, 3], [2, 4]));
// [2]
