// Напиши функцию countProps(object), которая считает
//  и возвращает количество собственных свойств объекта
//   в параметре object. Используй переменную propCount
//    для хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line

//   // Change code above this line
//   return propCount;
// }

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  // Change code above this line
  return propCount;
}

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
// 3

console.log(countProps({ name: 'Mango', age: 2 }));
// 2
