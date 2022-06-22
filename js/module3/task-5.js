// Выполни рефакторинг функции countProps(object)
// используя метод Object.keys() и, возможно, цикл
// for...of.

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }

function countProps(object) {
  // Change code below this line
  const keys = Object.keys(object);

  return keys.length;
  // Change code above this line
}

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
// 3
console.log(countProps({ name: 'Mango', age: 2 }));
// 2
