// Функция getNameLength(name) принимает имя
//  (параметр name) и возвращает строку,
//  в которой указана его длина.
//   Дополни шаблонную строку в переменной
//    message длиной строки из параметра name.

// function getNameLength(name) {
//   const message = `Name ${} is ${} characters long`; // Change this line

//   return message;
// }

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

console.log(getNameLength('Poly'));
console.log(getNameLength('Billy'));
