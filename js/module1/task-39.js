// Функция normalizeInput(input) принимает строку (параметр input)
//  и возвращает такую же строку, но в нижнем регистре.
//  Присвой переменной normalizedInput выражение создания
//   строки в нижнем регистре из параметра input.

// function normalizeInput(input) {
//   const normalizedInput = ; // Change this line

//   return normalizedInput;
// }

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

console.log(normalizeInput('Big SALE'));

console.log(normalizeInput("This ISN'T SpaM"));
